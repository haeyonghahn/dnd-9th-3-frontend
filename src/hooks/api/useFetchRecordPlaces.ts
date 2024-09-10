import { getRecordPlace } from "@/api/record";
import { PaginatedRecordPlace } from "@/types/record";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

interface PaginationParams {
  keyword: string;
  size?: number;
}

export const useFetchRecordPlaces = ({
  keyword,
  size = 15,
}: PaginationParams) => {
  return useInfiniteQuery<PaginatedRecordPlace>({
    queryKey: ["places", keyword],
    queryFn: ({ pageParam }: QueryFunctionContext) =>
      getRecordPlace(keyword, pageParam as number, size),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.currentPage + 1;
      return lastPage.end || lastPage.data.length === 0 ? undefined : nextPage;
    },
    initialPageParam: 1,
  });
};
