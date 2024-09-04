import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import {
  Home,
  Login,
  MyRecord,
  MySave,
  MyTimeLine,
  Onboarding,
  Welcome,
} from "./pages";
import { SidebarElement } from "./types/sidebar";
import SocialLogin from "./pages/Login/SocialLogin";
import Layout from "./layout/Layout";
import { sidebar } from "./_shared/icons";
import Recommend from "./pages/Feed/Recommend/Recommend";
import Feed from "./pages/Feed/Feed";
import Record from "./pages/Record/Record";

const routerData: RouterElement[] = [
  // 로그인 페이지 라우터 등록하기 ('login', withAuth: false)
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: false,
    withSidebar: false,
  },
  {
    id: 1,
    path: "/login",
    label: "로그인",
    element: <Login />,
    withAuth: false,
    withSidebar: false,
  },
  {
    id: 2,
    path: "/oauth/kakao",
    label: "소셜로그인",
    element: <SocialLogin />,
    withAuth: false,
    withSidebar: false,
  },
  {
    id: 3,
    path: "/onboarding",
    label: "온보딩",
    element: <Onboarding />,
    withAuth: true,
    withSidebar: false,
  },
  {
    id: 4,
    path: "/welcome",
    label: "환영",
    element: <Welcome />,
    withAuth: true,
    withSidebar: false,
  },
  {
    id: 5,
    path: "/feed",
    label: "피드",
    image: <sidebar.feed />,
    element: <Feed />,
    withAuth: true,
    withSidebar: true,
    children: [
      {
        id: 10,
        path: "recommend",
        label: "추천",
        image: <></>,
        element: <Recommend />,
        withAuth: true,
        withSidebar: false,
      },
    ],
  },
  {
    id: 6,
    path: "/record",
    label: "기록",
    image: <sidebar.record />,
    element: <Record />,
    withAuth: true,
    withSidebar: true,
  },
  {
    id: 7,
    path: "/my/record",
    label: "나의 굳잉",
    image: <sidebar.mygooding />,
    element: <MyRecord />,
    withAuth: true,
    withSidebar: true,
    children: [
      {
        id: 8,
        path: "timeline",
        label: "타임라인",
        image: <></>,
        element: <MyTimeLine />,
        withAuth: true,
        withSidebar: false,
      },
      {
        id: 9,
        path: "save",
        label: "저장",
        image: <></>,
        element: <MySave />,
        withAuth: true,
        withSidebar: false,
      },
    ],
  },
];

export const routers: RemixRouter = createBrowserRouter(
  // GeneralLayout 에는 페이지 컴포넌트를 children 으로 전달
  routerData.map((router) => {
    return {
      path: router.path,
      element: <Layout>{router}</Layout>,
      children: router.children?.map((child) => ({
        path: child.path,
        label: child.label,
        element: child.element,
        withAuth: true,
        withSidebar: false,
      })),
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
        image: router.image,
        withSidebar: router.withSidebar,
      },
    ];
  },
  [] as SidebarElement[]
);
