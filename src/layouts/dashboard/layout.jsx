// 라이브러리
import { Outlet, useNavigate } from "react-router-dom";
// 컴포넌트
import Sidebar from "@/components/sidebar/component";
// 아이콘
import { ArrowUpFromLine } from "lucide-react";
// 스타일
import "./style.css";

const DashboardLayout = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    return (
        <div id="dashboardLayout">
            <Sidebar />
            <div className="contentArea">
                <Outlet />
            </div>
            <button className="toTopBtn" onClick={scrollTop}>
                <ArrowUpFromLine />
            </button>
        </div>
    );
};

export default DashboardLayout;
