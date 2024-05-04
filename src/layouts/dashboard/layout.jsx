// 라이브러리
import { Outlet, useNavigate } from "react-router-dom";
// 컴포넌트
import Sidebar from "@/components/sidebar/component";
// 스타일
import "./style.css";

const DashboardLayout = () => {
    return (
        <div id="dashboardLayout">
            <Sidebar />
            <div className="contentArea">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
