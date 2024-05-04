// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
import {
    MemberCreateDialog,
    MemberUpdateDialog,
    MemberDeleteDialog,
} from "@/components/dialog/component";
// 아이콘
// 이미지
import { Pen, Plus, Trash2, Github, PanelTop } from "lucide-react";
// 데이터
import { progress, complete } from "./data";
// 스타일
import "./style.css";

const ManageProjectPage = () => {
    return (
        <div id="manageProjectPage" className="page">
            <div className="projectContainer">
                <div className="headerWrap">
                    <h1 className="title">
                        진행중인 프로젝트<span>{progress.length}</span>
                    </h1>
                    <div className="funcWrap">
                        <button onClick={() => {}}>
                            <Plus />
                            추가
                        </button>
                    </div>
                </div>
                <div className="projectWrap">
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
                        <button onClick={() => {}}>
                            <Plus />
                            추가
                        </button>
                    </div>
                </div>
                <div className="projectWrap">
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
                        />
                    ))}
                </div>
            </div>
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
            <div className="contentWrap">
                <h3 className="name">{name}</h3>
                <p className="period">
                    {start} ~ {end}
                </p>
                <p className="desc">{desc}</p>
                <h6 className="subTitle">참여 연구원</h6>
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
            </div>
        </div>
    );
};

export default ManageProjectPage;
