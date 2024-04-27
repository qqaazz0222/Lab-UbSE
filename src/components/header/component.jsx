// 라이브러리
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
// 아이콘
import { MessageSquareMore } from "lucide-react";
// 스타일
import "./style.css";

const Header = () => {
    console.log(window.location.pathname);
    const navigate = useNavigate();
    const [isTop, setIsTop] = useState(true);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [isHidden, setIsHidden] = useState(false);
    let preScrollY = 0;
    const scrollHandler = (e) => {
        const curScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        let curScrollDirection = "";
        if (window.location.pathname === "/") {
            setIsTop(curScrollY <= 50);
        }
        if (preScrollY < curScrollY) {
            curScrollDirection = "down";
        } else {
            curScrollDirection = "up";
        }
        setScrollDirection(preScrollY < curScrollY ? "down" : "up");
        if (curScrollY > windowHeight) {
            if (curScrollDirection == "up") {
                setIsHidden(false);
            } else if (curScrollDirection == "down") {
                setIsHidden(true);
            }
        }
        preScrollY = curScrollY;
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    useEffect(() => {
        const target = document.getElementById("header");
        if (isHidden) {
            target.style.transform = "translateY(-100%)";
        } else {
            target.style.transform = "translateY(0%)";
        }
    }, [isHidden]);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (window.location.pathname === "/") {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    }, [window.location.pathname]);
    return (
        <div id="header" className={`header ${!isTop && "activate"}`}>
            <div className="headerContainer">
                <div
                    className="logoWrap"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    UbSE
                </div>
                <div className="menuWrap">
                    <ul>
                        <li
                            onClick={() => {
                                navigate("/introduction");
                            }}
                        >
                            <p>연구실 소개</p>
                            <hr />
                        </li>
                        <li
                            onClick={() => {
                                navigate("/member");
                            }}
                        >
                            <p>구성원</p>
                            <hr />
                        </li>
                        <li
                            onClick={() => {
                                navigate("/project");
                            }}
                        >
                            <p>프로젝트</p>
                            <hr />
                        </li>
                        <li
                            onClick={() => {
                                navigate("/news");
                            }}
                        >
                            <p>소식</p>
                            <hr />
                        </li>
                    </ul>
                </div>
                <div className="funcWrap">
                    <button>
                        문의하기
                        <MessageSquareMore />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
