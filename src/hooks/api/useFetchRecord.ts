import { deleteRecord, getMyRecord } from "@/api/record";
import { IRecord } from "@/types/record";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchRecord = () => {
  return useQuery<IRecord[] | null>({
    queryKey: ["myRecord"],
    queryFn: getMyRecord,
    throwOnError: true,
  });
};

export const useDeleteRecord = (recordNo: string) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: () => deleteRecord(recordNo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myRecord"] });
    },
    onError: (error) => {
      console.error("Failed to delete record:", error);
    }
  });
}