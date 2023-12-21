import { saveAccessTokenToLocalStorage } from "@/utils/accessTokenHandler";
import { User } from "../types/user";
import { BASE_URL } from "./const";

type LoginResult = "success" | "fail";

export interface LoginRequest {
  username: string;
  password: string;
}

const fetchClient = async (url: string, options: RequestInit) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
    ...options,
  });
};

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  const loginRes = await fetchClient(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(args),
  });

  return loginRes.ok ? "success" : "fail";
};

export const getCurrentUserInfoWithToken = async (
  token: string
): Promise<User | null> => {
  try {
    const userInfoRes = await fetch(`${BASE_URL}/api/v1/user/2942669632`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return userInfoRes.ok ? userInfoRes.json() : null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const socialLogin = async (code: string): Promise<LoginResult> => {
  const loginRes = await fetch(`${BASE_URL}/oauth/kakao?accessToken=${code}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (loginRes.ok) {
    const oAuthResponseData = await loginRes.json();
    saveAccessTokenToLocalStorage(oAuthResponseData.accessToken);
    return "success";
  }
  return "fail";
};
