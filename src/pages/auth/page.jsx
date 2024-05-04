// 라이브러리
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Map, MapMarker } from "react-kakao-maps-sdk";
// 서비스
// 컴포넌트
// 아이콘
import { Lock, Eye, EyeOff } from "lucide-react";
// 이미지
import MMK from "@/assets/images/professor-mmk.png";
import Field1 from "@/assets/images/ubse-field-1.png";
import Field2 from "@/assets/images/ubse-field-2.png";
import Field3 from "@/assets/images/ubse-field-3.png";
// 스타일
import "./style.css";

const AuthPage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const authRef = useRef();
    const auth = () => {
        const authKey = authRef.current.value;
        if (authKey !== "") {
            console.log("인증성공");
            navigate("/manage/member");
        } else {
            console.log("인증실패");
        }
    };
    return (
        <div id="authPage" className="page">
            <div className="article">
                <div className="authContainer">
                    <div className="authHeader">
                        <div className="iconWrap">
                            <Lock />
                        </div>

                        <p>관리자 인증</p>
                    </div>
                    <div className="authBody">
                        <div className="inputWrap">
                            <input
                                type={isVisible ? "text" : "password"}
                                name="key"
                                id=""
                                placeholder="인증키를 입력하세요"
                                ref={authRef}
                            />
                            <button
                                onClick={() => {
                                    setIsVisible(!isVisible);
                                }}
                            >
                                {isVisible ? <Eye /> : <EyeOff />}
                            </button>
                        </div>
                        <button className="authBtn" onClick={auth}>
                            인증하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
