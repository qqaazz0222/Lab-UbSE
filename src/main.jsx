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
import NewsPostPage from "./pages/newsPost/page";
import AuthPage from "./pages/auth/page";
import ManageMemberPage from "./pages/manageMember/page";
import ManageProjectPage from "./pages/manageProject/page";
import ManageNewsPage from "./pages/manageNews/page";
// 스타일
import "./index.css";
import "./custom.css";
import { PostEditor, PostViewer } from "./components/post/component";

const postData = {
    header: { align: "center" },
    content: [
        { type: "title", content: "제목입니다." },
        { type: "subtitle", content: "부제목입니다." },
        { type: "context", content: "본문입니다." },
        { type: "description", content: "설명입니다." },
        {
            type: "img",
            content: "이미지 샘플",
            src: "https://opengraph.githubassets.com/3282e88cc98a1a79acc2058ae17c6a985eb61812e59e06df40985646c6508763/Autodesk/cam-posteditor",
        },
    ],
};

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
            {
                path: "/news/post/:postId",
                element: <NewsPostPage />,
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
    {
        path: "/test/postviewer",
        element: <PostViewer data={postData} />,
    },
    {
        path: "/test/posteditor",
        element: <PostEditor data={postData} />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
