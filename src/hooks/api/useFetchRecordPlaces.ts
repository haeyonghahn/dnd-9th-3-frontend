import { getRecordPlace } from "@/api/record";
import { RecordPlace } from "@/types/record";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

interface PaginationParams {
  keyword?: string;
  size?: number;
}

const placeKeys = {
  all: ['places'] as const,
  lists: () => [...placeKeys.all, 'list'] as const,
}

export const useFetchRecordPlaces = ({ keyword, size = 15 }: PaginationParams) => {
  return useInfiniteQuery<RecordPlace[]>({
    queryKey: placeKeys.lists(),
    queryFn: ({ pageParam = 1 }: QueryFunctionContext) =>
      getRecordPlace(keyword, pageParam as number, size),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.length === 0 ? undefined : nextPage;
    },
    initialPageParam: 1,
  });
};