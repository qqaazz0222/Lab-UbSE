// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
// 이미지
import DSULOGO from "@/assets/images/dsu-logo.png";
import DSUSWLOGO from "@/assets/images/dsu-sw-logo.png";
// 스타일
import "./style.css";

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="navContainer"></div>
            <div className="infoContainer">
                <div className="menuWrap"></div>
                <div className="linkWrap">
                    <a href="https://www.dongseo.ac.kr/">동서대학교</a>
                    <a href="https://uni.dongseo.ac.kr/sw/">
                        동서대학교 소프트웨어융합대학
                    </a>
                    <a href="https://aisw.dongseo.ac.kr/">
                        동서대학교 SW중심대학사업단
                    </a>
                </div>
                <div className="infoWrap">
                    <div className="descWrap">
                        <ul>
                            <span>UbSE</span>
                            <li>지도교수 문미경</li>
                            <li>부산 사상구 주례로 47 동서대학교 NM관 246호</li>
                            <li>TEL (051)320-1702</li>
                        </ul>
                        <div className="row"></div>
                        <div className="copyrightWrap">
                            COPYRIGHT © UbSE. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                    <div className="logoWrap">
                        <img src={DSULOGO} alt="동서대학교" />
                        <img src={DSUSWLOGO} alt="동서대학교 소중대 사업단" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
