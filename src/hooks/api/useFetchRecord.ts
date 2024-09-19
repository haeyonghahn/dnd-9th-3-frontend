import {
  createRecord,
  deleteRecord,
  getMyRecord,
  getRecordPlace,
} from "@/api/record";
import {
  recordCategoriesAtom,
  recordDateAtom,
  recordDescriptAtom,
  recordImageAtom,
  recordPlaceAtom,
  recordScoreAtom,
  recordStateAtom,
  recordTitleAtom,
} from "@/atoms/record";
import { IRecord, PaginatedRecordPlace } from "@/types/record";
import {
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useResetRecoilState } from "recoil";
import { InterestElement } from "@/types/user";
import { useRouter } from "../useRouter";
import { deleteRecordPopUpOverAtom, scorePopUpAtom } from "@/atoms/popup";

interface PaginationParams {
  keyword: string;
  size?: number;
}

export const useFetchRecord = () => {
  return useQuery<IRecord[] | null>({
    queryKey: ["myRecord"],
    queryFn: getMyRecord,
    throwOnError: true,
  });
};

export const useCreateRecord = (
  files: File[],
  title: string,
  description: string,
  recordDate: string,
  placeTitle: string,
  placeLatitude: number,
  placeLongitude: number,
  state: string,
  score: number,
  interests: InterestElement[] | undefined
) => {
  const queryClient = useQueryClient();
  const { routeTo } = useRouter();

  const resetScorePopUp = useResetRecoilState(scorePopUpAtom);
  const resetRecordImages = useResetRecoilState(recordImageAtom);
  const resetRecordTitle = useResetRecoilState(recordTitleAtom);
  const resetRecordDescript = useResetRecoilState(recordDescriptAtom);
  const resetRecordDate = useResetRecoilState(recordDateAtom);
  const resetRecordPlace = useResetRecoilState(recordPlaceAtom);
  const resetRecordCategories = useResetRecoilState(recordCategoriesAtom);
  const resetRecordState = useResetRecoilState(recordStateAtom);
  const resetRecordScore = useResetRecoilState(recordScoreAtom);

  return useMutation({
    mutationFn: () =>
      createRecord(
        files,
        title,
        description,
        recordDate,
        placeTitle,
        placeLatitude,
        placeLongitude,
        state,
        score,
        interests
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myRecord"] });
      routeTo("/my/record/timeline");

      resetScorePopUp();
      resetRecordImages();
      resetRecordTitle();
      resetRecordDescript();
      resetRecordDate();
      resetRecordPlace();
      resetRecordCategories();
      resetRecordState();
      resetRecordScore();
    },
    onError: (error) => {
      console.error("Failed to delete record:", error);
    },
  });
};

export const useDeleteRecord = (recordNo: string) => {
  const queryClient = useQueryClient();
  const resetDeleteRecord = useResetRecoilState(deleteRecordPopUpOverAtom);

  return useMutation({
    mutationFn: () => deleteRecord(recordNo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myRecord"] });
      resetDeleteRecord();
    },
    onError: (error) => {
      console.error("Failed to delete record:", error);
    },
  });
};

export const useFetchRecordPlaces = ({
  keyword,
  size = 15,
}: PaginationParams) => {
  return useInfiniteQuery<PaginatedRecordPlace>({
    queryKey: ["places", keyword],
    queryFn: ({ pageParam }: QueryFunctionContext) =>
      getRecordPlace(keyword, pageParam as number, size),
    getNextPageParam: (lastPage, _) => {
      const nextPage = lastPage.currentPage + 1;
      return lastPage.end || lastPage.data.length === 0 ? undefined : nextPage;
    },
    initialPageParam: 1,
  });
};
