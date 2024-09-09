import { Record, RecordPlace } from "@/types/record";
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

export const getRecordPlace = async (
  keyword: string,
  page: number = 1,
  size: number = 15
): Promise<RecordPlace[] | null> => {
  const recordPlaceRes = await fetch(
    `${BASE_URL}/api/v1/record/place?keyword=${keyword}&page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
      },
    }
  );
  if (!recordPlaceRes.ok) {
    throw new Error("Network RecordPlace response was not ok");
  }
  return recordPlaceRes.json();
};
