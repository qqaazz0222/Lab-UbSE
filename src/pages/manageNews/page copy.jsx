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
import { progress, complete } from "./data";
// 스타일
import "./style.css";

const ManageProjectPage = () => {
    const [createPopUp, setCreatePopUp] = useState(false);
    const [updatePopUp, setUpdatePopUp] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [projectType, setProjectType] = useState("");
    const [target, setTarget] = useState({
        name: "",
        start: "",
        end: "",
        desc: "",
        leader: "",
        member: [{ name: "", role: "" }],
        link: [{ type: "", url: "" }],
    });
    const createProject = (type) => {
        setProjectType(type);
        setCreatePopUp(true);
    };
    return (
        <div id="manageProjectPage" className="page">
            <div className="projectContainer">
                <div className="headerWrap">
                    <h1 className="title">
                        진행중인 프로젝트<span>{progress.length}</span>
                    </h1>
                    <div className="funcWrap">
                        <button
                            onClick={() => {
                                createProject("progress");
                            }}
                        >
                            <Plus />
                            추가
                        </button>
                    </div>
                </div>
                <div className="projectWrap">
                    <div className="projectWrapHeader">
                        <p className="h_o_1">썸네일</p>
                        <p className="h_o_2">프로젝트명</p>
                        <p className="h_o_3">기간</p>
                        <p className="h_o_4">설명</p>
                        <p className="h_o_5">참여 연구원</p>
                        <p className="h_o_6">링크</p>
                        <p className="h_o_7">수정</p>
                        <p className="h_o_8">삭제</p>
                    </div>
                    {progress.map((data, idx) => (
                        <ProjectItem
                            thumb={data.thumb}
                            name={data.name}
                            start={data.start}
                            end={data.end}
                            desc={data.desc}
                            laeder={data.desc}
                            member={data.member}
                            link={data.link}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
            <div className="projectContainer">
                <div className="headerWrap">
                    <h1 className="title">
                        완료된 프로젝트<span>{complete.length}</span>
                    </h1>
                    <div className="funcWrap">
                        <button
                            onClick={() => {
                                createProject("complete");
                            }}
                        >
                            <Plus />
                            추가
                        </button>
                    </div>
                </div>
                <div className="projectWrap">
                    <div className="projectWrapHeader">
                        <p className="h_o_1">썸네일</p>
                        <p className="h_o_2">프로젝트명</p>
                        <p className="h_o_3">기간</p>
                        <p className="h_o_4">설명</p>
                        <p className="h_o_5">참여 연구원</p>
                        <p className="h_o_6">링크</p>
                        <p className="h_o_7">수정</p>
                        <p className="h_o_8">삭제</p>
                    </div>
                    {complete.map((data, idx) => (
                        <ProjectItem
                            thumb={data.thumb}
                            name={data.name}
                            start={data.start}
                            end={data.end}
                            desc={data.desc}
                            laeder={data.desc}
                            member={data.member}
                            link={data.link}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
            {createPopUp && (
                <ProjectCreateDialog
                    trigger={setCreatePopUp}
                    type={projectType}
                />
            )}
            {updatePopUp && (
                <ProjectUpdateDialog trigger={setUpdatePopUp} target={target} />
            )}
            {deletePopUp && (
                <ProjectDeleteDialog trigger={setDeletePopUp} target={target} />
            )}
        </div>
    );
};

const ProjectItem = ({
    thumb = null,
    name = "프로젝트명",
    desc = "프로젝트설명",
    start = "",
    end = "",
    leader = "프로젝트리더",
    member = [],
    link = [],
}) => {
    return (
        <div className="projectItem">
            <div className="thumb">
                <img src={thumb} alt={name} />
            </div>
            <h3 className="name">{name}</h3>
            <p className="period">
                {start} ~ {end}
            </p>
            <p className="desc">{desc}</p>
            <ul className="memberWrap">
                <li className="member" key={`leader`}>
                    <span className="name">{leader}</span>
                    <span className="role">프로젝트 리더</span>
                </li>
                {member.map((m, idx) => (
                    <li className="member" key={`member${idx}`}>
                        <span className="name">{m.name}</span>
                        <span className="role">{m.role}</span>
                    </li>
                ))}
            </ul>
            <div className="linkWrap">
                {link.map((l, idx) => (
                    <a href={l.url} key={`link${idx}`} target="_blank">
                        {l.type === "git" ? <Github /> : <PanelTop />}
                    </a>
                ))}
            </div>
            <div className="funcWrap">
                <button onClick={() => {}}>
                    <Pen />
                </button>
                <button onClick={() => {}}>
                    <Trash2 />
                </button>
            </div>
        </div>
    );
};

export default ManageProjectPage;
