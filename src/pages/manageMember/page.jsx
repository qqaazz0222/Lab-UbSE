// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
// 이미지
import { Pen, Plus, Trash2 } from "lucide-react";
// 데이터
import { professor, undergraduate, graduate } from "./data";
// 스타일
import "./style.css";
import {
    MemberCreateDialog,
    MemberUpdateDialog,
    MemberDeleteDialog,
} from "@/components/dialog/component";

const dataForm = { name: "", email: "", field: [], graduated: 0, company: "" };

const ManageMemberPage = () => {
    const [createPopUp, setCreatePopUp] = useState(false);
    const [updatePopUp, setUpdatePopUp] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [memberTyep, setMemberType] = useState("");
    const [target, setTarget] = useState({
        name: "",
        email: "",
        field: [],
        graduated: 0,
        company: "",
    });
    const createMember = (type) => {
        setMemberType(type);
        setCreatePopUp(true);
    };
    return (
        <div id="manageMemberPage" className="page">
            <div className="memberContainer">
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
            <div className="memberContainer">
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
            <div className="memberContainer">
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
            <h6 className="subTitle">연구분야</h6>
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
            <h6 className="subTitle">관심분야</h6>
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
            <h3 className="name">
                {name}
                <span>{graduated}년 졸업</span>
            </h3>
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
