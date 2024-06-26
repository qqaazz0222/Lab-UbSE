// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
import { ChevronDown } from "lucide-react";
// 이미지
import LOGO from "@/assets/images/ubse-logo-typo.svg";
// 동영상
import BG from "@/assets/videos/bg-main.mp4";
// 스타일
import "./style.css";

const WelcomeSection = () => {
    return (
        <div id="welcomeSection" className="section">
            <div className="bgWrap">
                <video src={BG} loop muted autoPlay playsInline />
            </div>
            <div className="fgWrap">
                <div className="displayWrap">
                    <img src={LOGO} alt="" srcset="" />
                </div>
            </div>
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
