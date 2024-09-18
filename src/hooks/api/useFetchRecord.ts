import { deleteRecord, getMyRecord } from "@/api/record";
import { IRecord } from "@/types/record";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchRecord = () => {
  return useQuery<IRecord[] | null>({
    queryKey: ["myRecord"],
    queryFn: getMyRecord,
    throwOnError: true,
    refetchOnMount: "always",
  });
};
