import {
  API_BASE_URL,
  CLIENT_BASE_URL,
} from "@/config/env";
import { queryString } from "@/lib/utils";
import { ApiResponse } from "@/types/common";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

type ResponseType =
  | "json"
  | "arraybuffer"
  | "blob"
  | "stream"
  | "document"
  | "text";

type ContentType =
  | "application/json"
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "text/plain";

type RequestMethod =
  | "GET"
  | "POST"
  | "DELETE"
  | "PUT"
  | "PATCH"
  | "OPTIONS"
  | "HEAD"
  | "CONNECT"
  | "TRACE";

type RequestOptions = {
  [k: string]: any;
  contentType?: ContentType;
  responseType?: ResponseType;
  query?: Record<string, any>;
};

type BaseServiceRequestOptions<Payload extends Record<string, any> | null> = {
  method: RequestMethod;
  endpoint: string;
  data: Payload | null;
  opts?: RequestOptions;
};

interface IBaseService {
  handleResponse: <T>(response: AxiosResponse<T>) => Promise<ApiResponse<T>>;
  request: <Payload extends Record<string, any> | null, ResponseData = any>(
    options: BaseServiceRequestOptions<Payload>
  ) => Promise<ApiResponse<ResponseData>>;
}

export const abortController = new AbortController();
export const signal = abortController.signal;

export const axiosInstance = axios.create({
  signal,
});

const cancelTokens = new Map();

function getRequestKey(url: string, config: AxiosRequestConfig<any>) {
  return `${url}_${JSON.stringify(config.params ?? config.data)}`;
}

axiosInstance.interceptors.request.use(
  async (config) => {
    const requestKey = getRequestKey(config.url as string, config);

    if (cancelTokens.has(requestKey)) {
      cancelTokens.get(requestKey).cancel("Canceled duplicate request");
    }

    const cancelToken = axios.CancelToken.source();
    cancelTokens.set(requestKey, cancelToken);

    config.cancelToken = cancelToken.token;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    const requestKey = getRequestKey(
      response.config.url as string,
      response.config
    );
    cancelTokens.delete(requestKey);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    }

    if (originalRequest) {
      const requestKey = getRequestKey(originalRequest.url, originalRequest);
      cancelTokens.delete(requestKey);
    }

    // Return any error back to the service
    return Promise.reject(error);
  }
);

class BaseService implements IBaseService {
  private BASE_URL: string;

  constructor(baseUrl: string) {
    this.BASE_URL = baseUrl;
  }

  public async handleResponse<T = any>(
    response: AxiosResponse<T>
  ): Promise<ApiResponse<T>> {
    const data = response.data as ApiResponse<T>;
    if (data && !data.success!) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(data);
  }

  public async request<
    Payload extends Record<string, any> | null,
    ResponseData = any
  >({
    method = "GET",
    endpoint,
    data = null,
    opts = {
      responseType: "json",
      contentType: "application/json",
    },
  }: BaseServiceRequestOptions<Payload>): Promise<ApiResponse<ResponseData>> {
    const { contentType, query, ...rest } = Object.assign({}, opts);

    if (query) {
      endpoint = `${endpoint}?${queryString(query)}`;
    }

    const url = `${this.BASE_URL}/${endpoint}`;

    const options: AxiosRequestConfig = {
      method,
      url,
      headers: {
        "Content-Type": contentType ?? "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      ...rest,
    };

    if (method !== "GET" && method !== "HEAD") {
      options.data = data;
    }

    let response: AxiosResponse<ApiResponse<ResponseData>>;

    try {
      response = await axiosInstance(options);
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.code === "ERR_NETWORK") {
          return Promise.reject({
            success: false,
            message: "Server is not responding. Try again later",
          });
        } else if (error.response && error.response.data) {
          return Promise.reject(error.response.data);
        }
      }

      return Promise.reject({
        success: false,
        message: error.message,
      });
    }

    if (!response.data.success) {
      return Promise.reject(response.data);
    }

    return Promise.resolve(response.data);
  }
}

export const apiService = new BaseService(CLIENT_BASE_URL);
export const backendApiService = new BaseService(API_BASE_URL);
