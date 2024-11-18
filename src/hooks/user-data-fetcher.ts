"use client"
import {
  useInfiniteQuery,
  QueryFunction,
  useQueryClient,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { useCallback, useMemo, useRef } from "react";

interface UseDataFetchProps<T> {
  queryKey: string[];
  queryFn?: QueryFunction<T, string[], number | undefined>;
  /**The time in milliseconds after data is considered stale */
  staleTime?: number;
  /**the query will continuously refetch at this frequency in milliseconds. Use false to disable */
  refetchInterval?: number | false;
  skip?:boolean
}

const defaultQueryFn: QueryFunction<
  any,
  string[],
  number | undefined
> = async () => {
  return {} as any;
};

export function useDataFetch() {
  const queryClient = useQueryClient();

  const invalidateQuery = async (queryKey: string[]) => {
    await queryClient.invalidateQueries({ queryKey, stale: true });
    await queryClient.refetchQueries({ queryKey, stale: true });
  };

  const getCachedData = async <T>(queryKey: string[]) => {
    const data = (await queryClient.getQueryData(queryKey)) as T;
    return data;
  };

  const useInfiniteData = <T = any>({
    queryKey,
    queryFn = defaultQueryFn,
    staleTime = 0,
    refetchInterval = false,
    skip = false
  }: UseDataFetchProps<T[]>) => {
    const observer = useRef<IntersectionObserver>();

    const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isFetching,
      isLoading,
    } = useInfiniteQuery({
      queryKey,
      queryFn,
      staleTime,
      refetchInterval,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage && lastPage.length ? allPages.length + 1 : undefined;
        return nextPage;
      },
      enabled: !skip
    });

    const lastElementRef = useCallback(
      (node: HTMLDivElement) => {
        if (isLoading) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        });

        if (node) observer.current.observe(node);
      },
      [fetchNextPage, hasNextPage, isFetchingNextPage, isLoading]
    );

    const currentData = useMemo(() => {
      return data?.pages.reduce((acc: T[], page: T[]) => {
        return [...acc, ...page];
      }, []);
    }, [data]);

    return {
      data: currentData,
      error,
      isLoading,
      isFetching,
      lastElementRef,
    };
  };

  const useData = <T = any>({
    queryKey,
    queryFn = defaultQueryFn,
    staleTime,
    refetchInterval = false,
    skip= false
  }: UseDataFetchProps<T>): UseQueryResult<T, Error> => {
    const results = useQuery<T, Error>({
      queryKey,
      queryFn: queryFn as any,
      staleTime,
      refetchInterval,
      enabled: !skip
    });

    return results;
  };

  return {
    queryClient,
    invalidate: invalidateQuery,
    fetchInfiniteData: useInfiniteData,
    fetchData: useData,
    getCachedData,
  };
}
