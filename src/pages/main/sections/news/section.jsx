// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
import { SquareArrowOutUpRight } from "lucide-react";
// 스타일
import "./style.css";

const NewsSection = () => {
    return (
        <div id="newsSection" className="section">
            <div className="article">
                <h1 className="articleTitle">연구회 소식</h1>
                <div className="articleContent">
                    <div className="newsWrap">
                        {/* NewsItem 4개로 설정하여 사용 (가장 최근 소식 4개 표시) */}
                        <NewsItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_01.jpg"
                            tags={["활동"]}
                            title="연구회 소식 1"
                            created="2024-04-28"
                        />
                        <NewsItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_02.jpg"
                            tags={["수상"]}
                            title="연구회 소식 2"
                            created="2024-04-28"
                        />
                        <NewsItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_03.jpg"
                            tags={["공지"]}
                            title="연구회 소식 3"
                            created="2024-04-28"
                        />
                        <NewsItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_04.jpg"
                            tags={["활동"]}
                            title="연구회 소식 4"
                            created="2024-04-28"
                        />
                    </div>
                    <button className="more">소식 전체보기</button>
                </div>
            </div>
        </div>
    );
};

const NewsItem = ({
    thumb = "",
    tags = ["태그를", "입력하세요"],
    title = "제목을 입력하세요",
    created = "0000-00-00",
}) => {
    return (
        <div className="newsItem">
            <div className="thumbWrap">
                <img src={thumb} />
                <div className="iconWrap">
                    <SquareArrowOutUpRight />
                </div>
            </div>
            <div className="tagWrap">
                {tags.map((tag, idx) => (
                    <div className="tag" key={`tag${idx}`}>
                        {tag}
                    </div>
                ))}
            </div>
            <div className="title">{title}</div>
            <div className="created">{created}</div>
        </div>
    );
};

export default NewsSection;
