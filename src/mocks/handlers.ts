import { BASE_URL } from "@/api/const";
import { saveAccessTokenToLocalStorage } from "@/utils/accessTokenHandler";
import { rest } from "msw";

export const handlers = [
  rest.get(`${BASE_URL}/api/v1/oauth/login`, (req, res, ctx) => {
    // const searchParams = req.url.searchParams;
    // const code = searchParams.get("code");
    const oAuthResponseData =
      "eyJhbGciOiJIUzM4NCJ9.eyJpZCI6InlvdWcxMzIyQG5hdmVyLmNvbSIsImlhdCI6MTcxNjIwNDA2NiwiZXhwIjoxNzE2MzA0MDY2fQ.lRGeWk3L25XP2Z49COO0vmH5HqtMzNjPccPpJCy1wVYwrTp8-AcHkcQrBlUWCstf";
    saveAccessTokenToLocalStorage(oAuthResponseData);
    return res(ctx.status(200), ctx.json("success"));
  }),

  rest.get(`${BASE_URL}/api/v1/my/member`, (req, res, ctx) => {
    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res(ctx.status(401), ctx.json({ error: "Unauthorized" }));
    }

    const user = {
      id: "yong80211@gmail.com",
    };

    return res(ctx.status(200), ctx.json(user));
  }),
];
