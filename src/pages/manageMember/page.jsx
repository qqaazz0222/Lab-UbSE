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
import { Pen, Plus, Trash2 } from "lucide-react";
// 데이터
import { professor, undergraduate, graduate } from "./data";
// 스타일
import "./style.css";

const dataForm = { name: "", email: "", field: [], graduated: 0, company: "" };

const ManageMemberPage = () => {
    const [createPopUp, setCreatePopUp] = useState(false);
    const [updatePopUp, setUpdatePopUp] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [memberTyep, setMemberType] = useState("");
    const [target, setTarget] = useState(dataForm);
    const createMember = (type) => {
        setMemberType(type);
        setCreatePopUp(true);
    };
    const shortCutHandler = (target) => {
        const node = document.getElementById(target);
        const pos = node.offsetTop - 32;
        window.scrollTo({ top: pos, behavior: "smooth" });
    };
    return (
        <div id="manageMemberPage" className="page">
            <div className="shortCutWrap">
                <p>목록</p>
                <button
                    className="shortCutBtn"
                    onClick={() => {
                        shortCutHandler(`memberContainerProfessor`);
                    }}
                >
                    교수
                </button>
                <button
                    className="shortCutBtn"
                    onClick={() => {
                        shortCutHandler(`memberContainerUndergraduate`);
                    }}
                >
                    학부생
                </button>
                <button
                    className="shortCutBtn"
                    onClick={() => {
                        shortCutHandler(`memberContainerGraduate`);
                    }}
                >
                    졸업생
                </button>
            </div>
            <div className="memberContainer" id="memberContainerProfessor">
                <div className="headerWrap">
                    <h1 className="title">
                        교수<span>{professor.length}</span>
                    </h1>
                    <div className="funcWrap">
                        <button
                            onClick={() => {
                                createMember("professor");
                            }}
                        >
                            <Plus />
                            추가
                        </button>
                    </div>
                </div>
                <div className="memberWrap">
                    <div className="memberWrapHeader">
                        <p className="h_o_1">프로필</p>
                        <p className="h_o_2">이름</p>
                        <p className="h_o_3">이메일</p>
                        <p className="h_o_4">연구분야</p>
                        <p className="h_o_5">수정</p>
                        <p className="h_o_6">삭제</p>
                    </div>
                    {professor.map((data, idx) => (
                        <ProfessorItem
                            profile={data.profile}
                            name={data.name}
                            email={data.email}
                            field={data.filed}
                            setUpdate={setUpdatePopUp}
                            setDelete={setDeletePopUp}
                            setTarget={setTarget}
                        />
                    ))}
                </div>
            </div>
            <div className="memberContainer" id="memberContainerUndergraduate">
                <div className="headerWrap">
                    <h1 className="title">
                        학부생
                        <span>{undergraduate.length}</span>
                    </h1>
                    <div className="funcWrap">
                        <button
                            onClick={() => {
                                createMember("undergraduate");
                            }}
                        >
                            <Plus />
                            추가
                        </button>
                    </div>
                </div>
                <div className="memberWrap">
                    <div className="memberWrapHeader">
                        <p className="h_o_1">프로필</p>
                        <p className="h_o_2">이름</p>
                        <p className="h_o_3">이메일</p>
                        <p className="h_o_4">관심분야</p>
                        <p className="h_o_5">수정</p>
                        <p className="h_o_6">삭제</p>
                    </div>
                    {undergraduate.map((data, idx) => (
                        <UndergraduateItem
                            profile={data.profile}
                            name={data.name}
                            email={data.email}
                            field={data.filed}
                            setUpdate={setUpdatePopUp}
                            setDelete={setDeletePopUp}
                            setTarget={setTarget}
                        />
                    ))}
                </div>
            </div>
            {/* 졸업생 */}
            <div className="memberContainer" id="memberContainerGraduate">
                <div className="headerWrap">
                    <h1 className="title">
                        졸업생
                        <span>{graduate.length}</span>
                    </h1>
                    <div className="funcWrap">
                        <button
                            onClick={() => {
                                createMember("graduate");
                            }}
                        >
                            <Plus />
                            추가
                        </button>
                    </div>
                </div>
                <div className="memberWrap">
                    <div className="memberWrapHeader">
                        <p className="h_o_2">이름</p>
                        <p className="h_o_7">졸업년도</p>
                        <p className="h_o_3">이메일</p>
                        <p className="h_o_4">재직회사</p>
                        <p className="h_o_5">수정</p>
                        <p className="h_o_6">삭제</p>
                    </div>
                    {graduate.map((data, idx) => (
                        <GraduateItem
                            graduated={data.graduated}
                            name={data.name}
                            email={data.email}
                            company={data.company}
                            setUpdate={setUpdatePopUp}
                            setDelete={setDeletePopUp}
                            setTarget={setTarget}
                        />
                    ))}
                </div>
            </div>
            {createPopUp && (
                <MemberCreateDialog
                    trigger={setCreatePopUp}
                    type={memberTyep}
                />
            )}
            {updatePopUp && (
                <MemberUpdateDialog trigger={setUpdatePopUp} target={target} />
            )}
            {deletePopUp && (
                <MemberDeleteDialog trigger={setDeletePopUp} target={target} />
            )}
        </div>
    );
};

const ProfessorItem = ({
    profile = null,
    name = "이름",
    email = "이메일",
    field = ["연구분야"],
    setUpdate,
    setDelete,
    setTarget,
}) => {
    const updateMember = () => {
        let temp = dataForm;
        temp.name = name;
        temp.email = email;
        temp.field = field;
        temp.graduated = 0;
        setTarget(temp);
        setUpdate(true);
    };
    const deleteMember = () => {
        let temp = dataForm;
        temp.name = name;
        temp.email = email;
        temp.field = field;
        temp.graduated = 0;
        setTarget(temp);
        setDelete(true);
    };
    return (
        <div className="memberItem">
            <img className="profile" src={profile} alt={name} />
            <h3 className="name">{name}</h3>
            <p className="email">{email}</p>
            <ul className="fieldWrap">
                {field.map((f, idx) => (
                    <li className="field" key={`field{idx}`}>
                        {f}
                    </li>
                ))}
            </ul>
            <div className="funcWrap">
                <button onClick={updateMember}>
                    <Pen />
                </button>
                <button onClick={deleteMember}>
                    <Trash2 />
                </button>
            </div>
        </div>
    );
};

const UndergraduateItem = ({
    profile = null,
    name = "이름",
    email = "이메일",
    field = ["연구분야"],
    setUpdate,
    setDelete,
    setTarget,
}) => {
    const updateMember = () => {
        let temp = dataForm;
        temp.name = name;
        temp.email = email;
        temp.field = field;
        temp.graduated = 0;
        setTarget(temp);
        setUpdate(true);
    };
    const deleteMember = () => {
        let temp = dataForm;
        temp.name = name;
        temp.email = email;
        temp.field = field;
        temp.graduated = 0;
        setTarget(temp);
        setDelete(true);
    };
    return (
        <div className="memberItem">
            <img className="profile" src={profile} alt={name} />
            <h3 className="name">{name}</h3>
            <p className="email">{email}</p>
            <ul className="fieldWrap">
                {field.map((f, idx) => (
                    <li className="field" key={`field{idx}`}>
                        {f}
                    </li>
                ))}
            </ul>
            <div className="funcWrap">
                <button onClick={updateMember}>
                    <Pen />
                </button>
                <button onClick={deleteMember}>
                    <Trash2 />
                </button>
            </div>
        </div>
    );
};

const GraduateItem = ({
    graduated = 2024,
    name = "이름",
    email = "이메일",
    company = "회사",
    setUpdate,
    setDelete,
    setTarget,
}) => {
    const updateMember = () => {
        let temp = dataForm;
        temp.name = name;
        temp.graduated = graduated;
        temp.email = email;
        temp.company = company;
        setTarget(temp);
        setUpdate(true);
    };
    const deleteMember = () => {
        let temp = dataForm;
        temp.name = name;
        temp.graduated = graduated;
        temp.email = email;
        temp.company = company;
        setTarget(temp);
        setDelete(true);
    };
    return (
        <div className="memberItem">
            <h3 className="name">{name}</h3>
            <p className="graduated">{graduated}년 졸업</p>
            <p className="email">{email}</p>
            <p className="company">{company}</p>
            <div className="funcWrap">
                <button onClick={updateMember}>
                    <Pen />
                </button>
                <button onClick={deleteMember}>
                    <Trash2 />
                </button>
            </div>
        </div>
    );
};

export default ManageMemberPage;
