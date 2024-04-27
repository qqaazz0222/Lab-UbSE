// 라이브러리
import { useEffect, useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
import { MessageSquareMore } from "lucide-react";
// 스타일
import "./style.css";

const Header = () => {
    const [isTop, setIsTop] = useState(true);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [isHidden, setIsHidden] = useState(false);
    let preScrollY = 0;
    const scrollHandler = (e) => {
        const curScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        let curScrollDirection = "";
        setIsTop(curScrollY <= 50);
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
        console.log(isHidden);
        const target = document.getElementById("header");
        if (isHidden) {
            target.style.transform = "translateY(-100%)";
        } else {
            target.style.transform = "translateY(0%)";
        }
    }, [isHidden]);
    return (
        <div id="header" className={`header ${!isTop && "activate"}`}>
            <div className="headerContainer">
                <div className="logoWrap">UbSE</div>
                <div className="menuWrap">
                    <ul>
                        <li>
                            <p>연구실 소개</p>
                            <hr />
                        </li>
                        <li>
                            <p>구성원</p>
                            <hr />
                        </li>
                        <li>
                            <p>프로젝트</p>
                            <hr />
                        </li>
                        <li>
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
