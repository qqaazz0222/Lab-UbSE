// 라이브러리
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
// 아이콘
import { FlaskConical, Shapes, FolderKanban, ChevronRight } from "lucide-react";
// 스타일
import "./style.css";

const SummarySection = () => {
    const navigate = useNavigate();
    return (
        <div id="summarySection" className="section">
            <div className="article">
                <h1 className="articleTitle">
                    <span>개발자로의 첫걸음,</span>
                    <span>UbSE에서</span>
                </h1>
                <div className="articleContent">
                    <div className="labDescWrap">
                        <h3 className="title">
                            UbSE (유비쿼터스 소프트웨어 공학 연구회)
                        </h3>
                        <p className="context">
                            본 연구실에서는 공학적인 접근방식에 의거하여
                            효율적이고 신뢰성 높은 소프트웨어를 개발하는데
                            필요한 소프트웨어 공학 이론과 응용기술을 연구한다.
                            특히 현재는 스마트 모바일에 대한 지식을 습득하며
                            안드로이드 및 iOS기반 애플리케이션을 기획 및
                            개발하고 있으며, 특히 최근에는 도시센싱을 활용하는
                            IoT응용을 구축하는데 초점을 두고 있다. 본 연구회는
                            본 연구회는 2008년 창립된 이후, 여러 가지 많은
                            프로젝트를 통해 나온 결과물을 가지고 교내외
                            경진대회, 공모전, 학술 엑스포 등에 참가하여 좋은
                            성과를 거두었다. 본 연구회 학생들은 자격증 취득,
                            봉사활동 참여, 영어점수 획득, 학점 관리 등을 통해
                            연구회원 각각의 포토폴리오를 계획적으로 설계하고
                            이를 알차게 구성해가고 있으며, 100% 취업과 진학을
                            위해 인성을 갖춘 실력 있는 소프트웨어 개발자로
                            성장하는 것을 목표로 노력하고 있다.
                        </p>
                    </div>
                    <div className="infoWrap">
                        <div
                            className="infoItem"
                            onClick={() => {
                                navigate("/introduction");
                            }}
                        >
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
                        <div
                            className="infoItem"
                            onClick={() => {
                                navigate("/introduction");
                            }}
                        >
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
                        <div
                            className="infoItem"
                            onClick={() => {
                                navigate("/project");
                            }}
                        >
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
