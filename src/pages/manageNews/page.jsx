// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
import {
    ProjectCreateDialog,
    ProjectUpdateDialog,
    ProjectDeleteDialog,
} from "@/components/dialog/component";
// 아이콘
// 이미지
import { Pen, Plus, Trash2, Github, PanelTop } from "lucide-react";
// 데이터
import { news } from "./data";
// 스타일
import "./style.css";

const ManageNewsPage = () => {
    const [createPopUp, setCreatePopUp] = useState(false);
    const [updatePopUp, setUpdatePopUp] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [target, setTarget] = useState({
        name: "",
        start: "",
        end: "",
        desc: "",
        leader: "",
        member: [{ name: "", role: "" }],
        link: [{ type: "", url: "" }],
    });
    const shortCutHandler = (target) => {
        const node = document.getElementById(target);
        const pos = node.offsetTop - 32;
        window.scrollTo({ top: pos, behavior: "smooth" });
    };
    return (
        <div id="manageNewsPage" className="page">
            <div className="shortCutWrap">
                <p>목록</p>
                {news.map((data, idx) => (
                    <button
                        className="shortCutBtn"
                        onClick={() => {
                            shortCutHandler(`newsContainer${data.year}`);
                        }}
                    >
                        {data.year}
                    </button>
                ))}
            </div>
            {news.map((data, idx) => (
                <div className="newsContainer" id={`newsContainer${data.year}`}>
                    <div className="headerWrap">
                        <h1 className="title">
                            {data.year}
                            <span>{data.content.length}</span>
                        </h1>
                        <div className="funcWrap">
                            <button
                                onClick={() => {
                                    setCreatePopUp(true);
                                }}
                            >
                                <Plus />
                                추가
                            </button>
                        </div>
                    </div>
                    <div className="newsWrap">
                        <div className="newsWrapHeader">
                            <p className="h_o_1">썸네일</p>
                            <p className="h_o_2">제목</p>
                            <p className="h_o_3">내용</p>
                            <p className="h_o_4">작성일</p>
                            <p className="h_o_5">수정</p>
                            <p className="h_o_6">삭제</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManageNewsPage;
