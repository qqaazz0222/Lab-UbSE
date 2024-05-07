// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const PostViewer = ({ data = {} }) => {
    return (
        <div className="postViewer postContainer">
            {data.content.map((node, idx) => (
                <PostNode
                    type={node.type}
                    content={node.content}
                    src={node.src}
                    key={`poseNode${idx}`}
                />
            ))}
        </div>
    );
};

const PostEditor = () => {
    return <div className="postEditor postContainer"></div>;
};

const PostNode = ({ type, content, src }) => {
    if (type === "title") {
        return <h1 className="p_title">{content}</h1>;
    } else if (type === "subtitle") {
        return <h3 className="p_sub_title">{content}</h3>;
    } else if (type === "context") {
        return <p className="p_context">{content}</p>;
    } else if (type === "description") {
        return <p className="p_description">{content}</p>;
    } else if (type === "img") {
        return <img src={src} alt={content} />;
    } else if (type === "vid") {
        return <video src={src} alt={content} controls playsInline />;
    } else if (type === "space-1") {
        return <div className="p_space_1"></div>;
    } else if (type === "space-2") {
        return <div className="p_space_2"></div>;
    } else if (type === "space-3") {
        return <div className="p_space_3"></div>;
    } else {
        return <p className="p_context">{content}</p>;
    }
};

export { PostViewer, PostEditor };
