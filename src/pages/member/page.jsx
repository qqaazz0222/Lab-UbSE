// 라이브러리
// 서비스
// 컴포넌트
// 섹션
// 아이콘
// 이미지
import BG from "@/assets/images/dsu-pic-1.jpg";
// 데이터
import { professor, undergraduate, graduate } from "./data";
// 스타일
import "./style.css";

const MemberPage = () => {
    return (
        <div id="memberPage" className="page">
            <div className="pageHeader">
                <div className="article">
                    <h1 className="title">구성원</h1>
                    <h3 className="subTitle">Members</h3>
                </div>
            </div>
            <div className="article">
                {/* 교수 */}
                <div className="memberContainer">
                    <h1 className="title">
                        교수<span>{professor.length}</span>
                    </h1>
                    <div className="memberWrap">
                        {professor.map((data, idx) => (
                            <ProfessorItem
                                profile={data.profile}
                                name={data.name}
                                email={data.email}
                                field={data.filed}
                            />
                        ))}
                    </div>
                </div>
                {/* 필요시 사용! */}
                {/* 대학원생(박사) */}
                {/* <div className="memberContainer ">
                    <h1 className="title">박사과정</h1>
                    <div className="memberWrap"></div>
                </div> */}
                {/* 대학원생(석사) */}
                {/* <div className="memberContainer">
                    <h1 className="title">석사과정</h1>
                    <div className="memberWrap"></div>
                </div> */}
                {/* 학부생 */}
                <div className="memberContainer">
                    <h1 className="title">
                        학부생
                        <span>{undergraduate.length}</span>
                    </h1>
                    <div className="memberWrap">
                        {undergraduate.map((data, idx) => (
                            <UndergraduateItem
                                profile={data.profile}
                                name={data.name}
                                email={data.email}
                                field={data.filed}
                            />
                        ))}
                    </div>
                </div>
                {/* 졸업생 */}
                <div className="memberContainer">
                    <h1 className="title">
                        졸업생
                        <span>{graduate.length}</span>
                    </h1>
                    <div className="memberWrap">
                        {graduate.map((data, idx) => (
                            <GraduateItem
                                graduated={data.graduated}
                                name={data.name}
                                email={data.email}
                                company={data.company}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfessorItem = ({
    profile = null,
    name = "이름",
    email = "이메일",
    field = ["연구분야"],
}) => {
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
        </div>
    );
};

const UndergraduateItem = ({
    profile = null,
    name = "이름",
    email = "이메일",
    field = ["연구분야"],
}) => {
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
        </div>
    );
};

const GraduateItem = ({
    graduated = 2024,
    name = "이름",
    email = "이메일",
    company = "회사",
}) => {
    return (
        <div className="memberItem">
            <h3 className="name">
                {name}
                <span>{graduated}년 졸업</span>
            </h3>
            <p className="email">{email}</p>
            <p className="company">{company}</p>
        </div>
    );
};

export default MemberPage;
