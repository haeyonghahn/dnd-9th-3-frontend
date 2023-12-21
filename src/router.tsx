import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import { Home, Login, PageA, PageB, PageC } from "./pages";
import { SidebarElement } from "./types/sidebar";
import SocialLogin from "./pages/Login/SocialLogin";
import Layout from "./layout/LayoutProps";

const routerData: RouterElement[] = [
  // 로그인 페이지 라우터 등록하기 ('login', withAuth: false)
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: false,
  },
  {
    id: 1,
    path: "/login",
    label: "로그인",
    element: <Login />,
    withAuth: false,
  },
  {
    id: 2,
    path: "/oauth/kakao",
    label: "소셜로그인",
    element: <SocialLogin />,
    withAuth: false,
  },
  {
    id: 3,
    path: "/page-a",
    label: "페이지 A",
    element: <PageA />,
    withAuth: true,
  },
  {
    id: 4,
    path: "/page-b",
    label: "페이지 B",
    element: <PageB />,
    withAuth: true,
  },
  {
    id: 5,
    path: "/page-c",
    label: "페이지 C",
    element: <PageC />,
    withAuth: true,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  // GeneralLayout 에는 페이지 컴포넌트를 children 으로 전달
  routerData.map((router) => {
    return {
      path: router.path,
      element: <Layout>{router}</Layout>,
    };
  })
);

export const SidebarContent: SidebarElement[] = routerData.reduce(
  (prev, router) => {
    // 인증이 필요한 페이지만 사이드바에 표시하기
    if (!router.withAuth) return prev;

    return [
      ...prev,
      {
        id: router.id,
        path: router.path,
        label: router.label,
      },
    ];
  },
  [] as SidebarElement[]
);
