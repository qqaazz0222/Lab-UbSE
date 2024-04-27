// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
import { FlaskConical, Shapes, FolderKanban, ChevronRight } from "lucide-react";
// 스타일
import "./style.css";

const SummarySection = () => {
    return (
        <div id="summarySection" className="section">
            <div className="article">
                <h1 className="articleTitle">개발자로의 첫걸음, UbSE에서</h1>
                <div className="articleContent">
                    <div className="infoWrap">
                        <div className="infoItem">
                            <div className="itemIcon">
                                <FlaskConical />
                            </div>
                            <div className="itemTitle">
                                연구회 소개
                                <ChevronRight />
                            </div>
                            <div className="itemDesc">
                                UbSE연구회에 대해 소개합니다.
                            </div>
                        </div>
                        <div className="infoItem">
                            <div className="itemIcon">
                                <Shapes />
                            </div>
                            <div className="itemTitle">
                                연구 분야
                                <ChevronRight />
                            </div>
                            <div className="itemDesc">
                                연구 분야를 알려드립니다.
                            </div>
                        </div>
                        <div className="infoItem">
                            <div className="itemIcon">
                                <FolderKanban />
                            </div>
                            <div className="itemTitle">
                                프로젝트
                                <ChevronRight />
                            </div>
                            <div className="itemDesc">
                                진행했던 프로젝트를 확인하세요.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummarySection;
