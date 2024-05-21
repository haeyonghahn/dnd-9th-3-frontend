import { Record } from "@/types/record";
import { BASE_URL } from "./const";
import { getAccessTokenFromLocalStorage } from "@/utils/accessTokenHandler";

export const getMyRecord = async (): Promise<Record[] | null> => {
  const recordRes = await fetch(`${BASE_URL}/api/v1/my/record`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
  });
  if (!recordRes.ok) {
    throw new Error("Network response was not ok");
  }
  return recordRes.json();
};
