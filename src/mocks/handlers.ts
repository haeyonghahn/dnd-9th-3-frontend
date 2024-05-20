import { BASE_URL } from "@/api/const";
import { rest } from "msw";

export const handlers = [
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
