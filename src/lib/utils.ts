import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DOMPurify from "isomorphic-dompurify";
import { ParsedUrlQuery } from "querystring";
import { siteDetails } from "@/config/constants";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizer(content: string) {
  return DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  });
}

export const queryString = (obj: Record<string, any>): string => {
  const queryParams = new URLSearchParams();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((v) => queryParams.append(key, v));
        } else {
          queryParams.append(key, value);
        }
      }
    }
  }
  return queryParams.toString();
};

export function getQueryParams<T extends ParsedUrlQuery>(
  query: ParsedUrlQuery
): T {
  return query as T;
}

export function getPageSEO({
  title,
  keywords,
  type = "website",
  url,
  description
}: {
  title: string;
  keywords?: string;
  type?:
    | "website"
    | "article"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "profile"
    | "book";
  /** url without the leading forward slash (/) */
  url?: string;
  description?:string
}): Metadata {
  return {
    title: `${title} - ${siteDetails.name}`,
    description,
    keywords: `${siteDetails.keywords}, ${keywords?? ''}`,
    facebook: {
      appId: siteDetails.socialMedia.facebook.appId,
    },
    twitter:{
      site:siteDetails.socialMedia.twitter.username,
    },
    openGraph: {
      title: `${title} - ${siteDetails.name}`,
      description,
      type,
      countryName: "Kenya",
      siteName: siteDetails.name,
      phoneNumbers: [siteDetails.phone, siteDetails.phoneFormatted],
      emails: [siteDetails.email],
      url: `${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/${url?.replace(/^\//,"")}`,
    },
  };
}
