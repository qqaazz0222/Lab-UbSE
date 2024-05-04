// 라이브러리
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 서비스
// 레이아웃
import RootLayout from "./layouts/root/layout";
import DashboardLayout from "./layouts/dashboard/layout";
// 페이지
import MainPage from "./pages/main/page";
import IntroductionPage from "./pages/introduction/page";
import MemberPage from "./pages/member/page";
import ProjectPage from "./pages/project/page";
import NewsPage from "./pages/news/page";
import AuthPage from "./pages/auth/page";
import ManageMemberPage from "./pages/manageMember/page";
import ManageProjectPage from "./pages/manageProject/page";
import ManageNewsPage from "./pages/manageNews/page";
// 스타일
import "./index.css";
import "./custom.css";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/introduction",
                element: <IntroductionPage />,
            },
            {
                path: "/member",
                element: <MemberPage />,
            },
            {
                path: "/project",
                element: <ProjectPage />,
            },
            {
                path: "/news",
                element: <NewsPage />,
            },
        ],
    },
    {
        element: <DashboardLayout />,
        children: [
            {
                path: "/manage/member",
                element: <ManageMemberPage />,
            },
            {
                path: "/manage/project",
                element: <ManageProjectPage />,
            },
            {
                path: "/manage/news",
                element: <ManageNewsPage />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
