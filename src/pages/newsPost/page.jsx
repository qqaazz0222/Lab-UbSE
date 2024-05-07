// 라이브러리
import { useState } from "react";
import { useParams } from "react-router-dom";
// 서비스
// 컴포넌트
// 섹션
// 아이콘
// 이미지
// 데이터
import { news } from "./data";
// 스타일
import "./style.css";
import { PostViewer } from "@/components/post/component";

const NewsPostPage = () => {
    // console.log(news[0].content[0].thumb);
    const { postId } = useParams();
    const [content, setContent] = useState(news[0].content[postId]);
    const [context, setContext] = useState(news[0].content[postId].context);
    console.log(content);
    return (
        <div id="newsPostPage" className="page">
            <div
                className="pageHeader"
                style={{
                    backgroundImage: `url(${content.thumb})`,
                }}
            >
                <div className="article">
                    <h1 className="title">{content.title}</h1>
                    <h3 className="subTitle">{content.created} 작성</h3>
                </div>
            </div>
            <div className="article">
                <PostViewer data={context} />
            </div>
        </div>
    );
};

export default NewsPostPage;
