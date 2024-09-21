import {
  createRecord,
  deleteRecord,
  getMyRecord,
  getRecordPlace,
} from "@/api/record";
import {
  deleteRecordNumberAtom,
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
import { useRouter } from "../useRouter";
import { deleteRecordPopUpOverAtom, scorePopUpAtom } from "@/atoms/popup";
import { IInterest } from "@/types/user";

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

export const useCreateRecord = () => {
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
    mutationFn: ({
      files,
      title,
      description,
      recordDate,
      placeTitle,
      placeLatitude,
      placeLongitude,
      state,
      score,
      interests,
    }: {
      files: File[];
      title: string;
      description: string;
      recordDate: string;
      placeTitle: string;
      placeLatitude: number;
      placeLongitude: number;
      state: string;
      score: number;
      interests: IInterest[] | undefined;
    }) =>
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
      routeTo("/my/record");

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

export const useDeleteRecord = () => {
  const queryClient = useQueryClient();
  const resetDeleteRecordNumber = useResetRecoilState(deleteRecordNumberAtom);
  const resetDeleteRecord = useResetRecoilState(deleteRecordPopUpOverAtom);

  return useMutation({
    mutationFn: (recordNo: string) => deleteRecord(recordNo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myRecord"] });
      resetDeleteRecordNumber();
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
