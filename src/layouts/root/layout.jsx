// 라이브러리
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// 컴포넌트
import Header from "@/components/header/component";
import Footer from "@/components/footer/component";
// 스타일
import "./style.css";

const RootLayout = () => {
    return (
        <div id="rootLayout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;
