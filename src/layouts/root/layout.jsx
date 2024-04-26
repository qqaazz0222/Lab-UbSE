// 라이브러리
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// 컴포넌트
import Header from "@/components/header/component";

// 스타일
import "./style.css";

const RootLayout = () => {
    return (
        <div id="rootLayout">
            <Header />
            <Outlet />
        </div>
    );
};

export default RootLayout;
