// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
import { FlaskConical, Shapes, FolderKanban, ChevronRight } from "lucide-react";
// 스타일
import "./style.css";

const IntroductionSection = () => {
    return (
        <div id="introductionSection" className="section">
            <div className="article">
                <h1 className="articleTitle">
                    Ubiquitous Software Engineering
                </h1>
                <div className="articleContent">
                    <div className="filedWrap">
                        <div className="infoGraphicWrap">
                            <div className="infoItemWrap">
                                <span>소프트웨어</span>
                                <span>재사용</span>
                            </div>
                            <div className="infoItemWrap">
                                <span>RFID</span>
                                <span>미들웨어</span>
                            </div>
                            <div className="infoItemWrap">
                                <span>소프트웨어</span>
                                <span>모델링 및 분석</span>
                            </div>
                        </div>
                        <div className="infoWrap">
                            <div className="infoItemWrap">
                                <div className="infoItemIndexWrap">
                                    <div className="index">1</div>
                                </div>
                                <div className="infoItemContentWrap">
                                    <div className="title">
                                        소프트웨어 재사용 기술
                                    </div>
                                    <div className="desc">
                                        소프트웨어 컴포넌트, 웹 서비스,
                                        소프트웨어 프로덕트라인 등의 소프트웨어
                                        재사용 기술에 대해 연구하고 있습니다.
                                        특히 소프트웨어 프로덕트라인 공학 기술을
                                        통해 재사용 가능한 핵심 자산(assets)을
                                        만들기 위한 소프트웨어 프레임워크 구조를
                                        중심적으로 연구합니다.
                                    </div>
                                </div>
                            </div>
                            <div className="infoItemWrap">
                                <div className="infoItemIndexWrap">
                                    <div className="index">2</div>
                                </div>
                                <div className="infoItemContentWrap">
                                    <div className="title">
                                        RFID 미들웨어 기술
                                    </div>
                                    <div className="desc">
                                        RFID 미들웨어 개발 및 RFID 기반
                                        어플리케이션 개발 프레임워크에 대해
                                        연구하고 있습니다. 즉 RFID
                                        미들웨어로부터의 태그 데이터와 외부
                                        정보서버로부터 수집한 데이터, 이력 정보
                                        및 프로파일 정보, 센서에서 수집되는
                                        실시간 환경 정보를 가공하여 상황 정보를
                                        산출하고 이에 적응하는 응용
                                        어플리케이션을 개발하는 기술에 대해
                                        연구합니다.
                                    </div>
                                </div>
                            </div>
                            <div className="infoItemWrap">
                                <div className="infoItemIndexWrap">
                                    <div className="index">3</div>
                                </div>
                                <div className="infoItemContentWrap">
                                    <div className="title">
                                        소프트웨어 모델링 및 분석
                                    </div>
                                    <div className="desc">
                                        소프트웨어 개발 프로세스는 소프트웨어
                                        제품을 개발하기 위해 필요한 과정 또는
                                        구조입니다. 본 연구실에서는 UML 기반
                                        소프트웨어의 모델링 및 설계 기법,
                                        개발방법론 등에 대해 연구합니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroductionSection;
