import { PaginatedRecordPlace, IRecord } from "@/types/record";
import { BASE_URL } from "./const";
import { getAccessTokenFromLocalStorage } from "@/utils/accessTokenHandler";
import { IInterest } from "@/types/user";
import { IFeed } from "@/types/feed";

export const getMyRecord = async (): Promise<IRecord[] | null> => {
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

export const getRecordByBookMark = async (): Promise<IRecord[] | null> => {
  const recordRes = await fetch(`${BASE_URL}/api/v1/my/bookmark`, {
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
}

export const createRecord = async (
  files: File[],
  title: string,
  description: string,
  recordDate: string,
  placeTitle: string,
  placeLatitude: number,
  placeLongitude: number,
  state: string,
  recordScore: number,
  interests: IInterest[] | undefined
): Promise<void> => {
  const recordRequest = {
    title: title,
    description: description,
    recordDate: recordDate,
    placeTitle: placeTitle,
    placeLatitude: placeLatitude,
    placeLongitude: placeLongitude,
    state: state,
    recordScore: recordScore,
    interests: interests,
  };

  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });
  formData.append("recordRequest", JSON.stringify(recordRequest));

  const recordRes = await fetch(`${BASE_URL}/api/v1/record`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
    body: formData,
  });
  if (!recordRes.ok) {
    throw new Error("Network response was not ok");
  }
};

export const deleteRecord = async (recordNo: string): Promise<void> => {
  const recordRes = await fetch(
    `${BASE_URL}/api/v1/record?recordNo=${recordNo}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
      },
    }
  );
  if (!recordRes.ok) {
    throw new Error("Network response was not ok");
  }
};

export const getRecordPlace = async (
  keyword: string,
  page: number = 1,
  size: number = 15
): Promise<PaginatedRecordPlace> => {
  if (keyword) {
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

    const data = await recordPlaceRes.json();
    return {
      data: data.data,
      totalPages: data.totalCount,
      currentPage: page,
      end: data.end,
    };
  } else {
    return {
      data: [],
      totalPages: 0,
      currentPage: page,
      end: true,
    };
  }
};

export const getFeeds = async (): Promise<IFeed[] | null> => {
  const feedRes = await fetch(`${BASE_URL}/api/v1/feed`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
  });
  if (!feedRes.ok) {
    throw new Error("Network response was not ok");
  }
  return feedRes.json();
};

export const getBookMark = async (recordNo: string): Promise<string> => {
  const bookMarkRes = await fetch(
    `${BASE_URL}/api/v1/bookmark?recordNo=${recordNo}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
      },
    }
  );
  if (!bookMarkRes.ok) {
    throw new Error("Network response was not ok");
  }
  return bookMarkRes.text();
};

export const saveBookMark = async (recordNo: string): Promise<string> => {
  const bookMarkRes = await fetch(`${BASE_URL}/api/v1/bookmark`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
    body: recordNo,
  });
  if (!bookMarkRes.ok) {
    throw new Error("Network response was not ok");
  }
  return bookMarkRes.text();
};
