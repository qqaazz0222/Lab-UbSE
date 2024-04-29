// 라이브러리
import { Map, MapMarker } from "react-kakao-maps-sdk";
// 서비스
// 컴포넌트
// 아이콘
// 이미지
import MMK from "@/assets/images/professor-mmk.png";
import Field1 from "@/assets/images/ubse-field-1.png";
import Field2 from "@/assets/images/ubse-field-2.png";
import Field3 from "@/assets/images/ubse-field-3.png";
// 스타일
import "./style.css";

const IntroductionPage = () => {
    return (
        <div id="introductionPage" className="page">
            <div className="article article1">
                <h3 className="eng">UbSE</h3>
                <h1 className="kor">유비쿼터스 소프트웨어 공학 연구회</h1>
                <p className="desc">
                    본 연구실에서는 공학적인 접근방식에 의거하여 효율적이고
                    신뢰성 높은 소프트웨어를 개발하는데 필요한 소프트웨어 공학
                    이론과 응용기술을 연구한다. 특히 현재는 스마트 모바일에 대한
                    지식을 습득하며 안드로이드 및 iOS기반 애플리케이션을 기획 및
                    개발하고 있으며, 특히 최근에는 도시센싱을 활용하는 IoT응용을
                    구축하는데 초점을 두고 있다. 본 연구회는 본 연구회는 2008년
                    창립된 이후, 여러 가지 많은 프로젝트를 통해 나온 결과물을
                    가지고 교내외 경진대회, 공모전, 학술 엑스포 등에 참가하여
                    좋은 성과를 거두었다. 본 연구회 학생들은 자격증 취득,
                    봉사활동 참여, 영어점수 획득, 학점 관리 등을 통해 연구회원
                    각각의 포토폴리오를 계획적으로 설계하고 이를 알차게
                    구성해가고 있으며, 100% 취업과 진학을 위해 인성을 갖춘 실력
                    있는 소프트웨어 개발자로 성장하는 것을 목표로 노력하고 있다.
                </p>
            </div>
            <div className="article article2">
                <h1 className="title">연구 분야</h1>
                <div className="fieldWrap">
                    <div className="field">
                        <img src={Field1} alt="" className="thumb" />
                        <h3 className="title">소프트웨어 재사용 기술</h3>
                        <p className="desc">
                            소프트웨어 컴포넌트, 웹 서비스, 소프트웨어
                            프로덕트라인 등의 소프트웨어 재사용 기술에 대해
                            연구하고 있습니다. 특히 소프트웨어 프로덕트라인 공학
                            기술을 통해 재사용 가능한 핵심 자산(assets)을 만들기
                            위한 소프트웨어 프레임워크 구조를 중심적으로
                            연구하고 있습니다.
                        </p>
                    </div>
                    <div className="field">
                        <img src={Field2} alt="" className="thumb" />
                        <h3 className="title">RFID 미들웨어 기술</h3>
                        <p className="desc">
                            RFID 미들웨어 개발 및 RFID 기반 어플리케이션 개발
                            프레임워크에 대해 연구하고 있습니다. 즉 RFID
                            미들웨어로부터의 태그 데이터와 외부 정보서버로부터
                            수집한 데이터, 이력 정보 및 프로파일 정보, 센서에서
                            수집되는 실시간 환경 정보를 가공하여 상황 정보를
                            산출하고 이에 적응하는 응용 어플리케이션을 개발하는
                            기술에 대해 연구합니다.
                        </p>
                    </div>
                    <div className="field">
                        <img src={Field3} alt="" className="thumb" />
                        <h3 className="title">소프트웨어 모델링 및 분석</h3>
                        <p className="desc">
                            소프트웨어 개발 프로세스는 소프트웨어 제품을
                            개발하기 위해 필요한 과정 또는 구조입니다. 본
                            연구실에서는 UML 기반 소프트웨어의 모델링 및 설계
                            기법, 개발방법론 등에 대해 연구합니다.
                        </p>
                    </div>
                </div>
            </div>
            <div className="article article3">
                <h1 className="title">지도 교수</h1>
                <div className="professorWrap">
                    <img src={MMK} alt="문미경 교수" />
                    <div className="contentWrap">
                        <div className="comment">
                            첫째, 생각하라. 둘째, 믿어라. 셋째, 꿈꾸라.
                            <br />
                            그리고 마지막으로 덤벼들어라.
                        </div>
                        <div className="name">문미경</div>
                        <div className="rank">교수/소프트웨어중심대학단장</div>
                    </div>
                </div>
                <div className="infoWrap">
                    <div className="leftWrap">
                        <div className="subTitle">학력</div>
                        <ul>
                            <li>이화여자대학교 전자계산학과 이학사</li>
                            <li>이화여자대학교 전자계산학과 이학석사</li>
                            <li>부산대학교 컴퓨터공학과 공학박사</li>
                        </ul>
                        <div className="subTitle">경력</div>
                        <ul>
                            <li>부산대학교 U-Port 정보기술사업단 연구교수</li>
                            <li>
                                (사)한국여성정보인협회 부산지부장 및 학술위원
                            </li>
                        </ul>
                    </div>
                    <div className="rightWrap">
                        <div className="subTitle">연구활동</div>
                        <ul>
                            <li>소프트웨어 프로덕트라인에 관한 연구</li>
                            <li>
                                IEEE Transactions on Software Engineering 및
                                국내외 논문
                            </li>
                            <li>
                                RFID 미들웨어 기술에 관한 연구 특허 및 국내외
                                논문
                            </li>
                            <li>
                                <strong>교수님 논문 추가</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="article article4">
                <h1 className="title">오시는 길</h1>
                <a
                    className="placeWrap"
                    href="https://map.kakao.com/link/map/UbSE,35.14532844499781,129.00732031975863"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Map
                        level={3}
                        center={{
                            lat: 35.14532844499781,
                            lng: 129.00732031975863,
                        }}
                        style={{
                            width: "100%",
                            height: "500px",
                            borderRadius: "0.375rem",
                            boxShadow: "0 0 14rem rgb(0 0 0 / 3%)",
                        }}
                    >
                        <MapMarker
                            style={{ border: "tranparent" }}
                            position={{
                                lat: 35.14532844499781,
                                lng: 129.00732031975863,
                            }}
                        ></MapMarker>
                    </Map>
                    <p className="placeInfo">
                        부산 사상구 주례로 47 동서대학교 뉴밀레니엄관 2층 246호
                        (클릭시 카카오맵으로 이동됩니다.)
                    </p>
                </a>
            </div>
        </div>
    );
};

export default IntroductionPage;
