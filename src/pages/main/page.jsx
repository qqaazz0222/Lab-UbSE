// 라이브러리
// 서비스
// 컴포넌트
// 섹션
import ProjectSection from "./sections/project/section";
import SummarySection from "./sections/summary/section";
import WelcomeSection from "./sections/welcome/section";
// 아이콘
// 스타일
import "./style.css";

const MainPage = () => {
    return (
        <div id="mainPage" className="page">
            <WelcomeSection />
            <SummarySection />
            <ProjectSection />
        </div>
    );
};

export default MainPage;
