// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
import { ChevronDown } from "lucide-react";
// 스타일
import "./style.css";

const WelcomeSection = () => {
    return (
        <div id="welcomeSection" className="section">
            <div className="bgWrap"></div>
            <div className="fgWrap"></div>
            <div className="hintWrap">
                <div className="iconWrap">
                    <ChevronDown />
                    <ChevronDown />
                </div>
                <p>Scroll</p>
            </div>
        </div>
    );
};

export default WelcomeSection;
