// 라이브러리
// 서비스
// 컴포넌트
// 섹션
// 아이콘
// 이미지
// 데이터
import { news } from "./data";
// 스타일
import "./style.css";

const NewsPage = () => {
    return (
        <div id="newsPage" className="page">
            <div className="pageHeader">
                <div className="article">
                    <h1 className="title">소식</h1>
                    <h3 className="subTitle">News</h3>
                </div>
            </div>
            <div className="article">
                {news.map((n, idx) => (
                    <div className="newsContainer">
                        <h1 className="title">
                            {n.year}
                            <span>{n.content.length}</span>
                        </h1>
                        <div className="newsWrap">
                            {n.content.map((c, idx) => (
                                <div className="newsItem">
                                    <div className="infoWrap">
                                        <h3 className="title">{c.title}</h3>
                                        <p className="context">{c.context}</p>
                                        <p className="created">{c.created}</p>
                                    </div>
                                    <img className="thumb" src={c.thumb} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
