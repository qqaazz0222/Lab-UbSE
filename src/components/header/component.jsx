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
    const scrollHandler = () => {
        if (window.scrollY <= 50) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    return (
        <div className={`header ${!isTop && "activate"}`}>
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
