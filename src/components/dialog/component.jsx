// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const Dialog = () => {
    return <div className="dialog"></div>;
};

const MemberCreateDialog = ({ trigger, type = "" }) => {
    const [memeberType, setMemberType] = useState(type);
    return (
        <div
            className="dialogWrap"
            onClick={() => {
                trigger(false);
            }}
        >
            <div
                className="dialog member create"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="dialogHeader">
                    <h1>구성원 추가</h1>
                    <p>연구실 구성원을 추가합니다.</p>
                </div>
                <div className="dialogBody">
                    <div className="dialogGroup type">
                        <h3>구성원 타입</h3>
                        <select
                            onChange={(e) => {
                                setMemberType(e.target.value);
                            }}
                        >
                            <option
                                value="professor"
                                selected={type === "professor"}
                            >
                                교수
                            </option>
                            <option
                                value="undergraduate"
                                selected={type === "undergraduate"}
                            >
                                학부생
                            </option>
                            <option
                                value="graduate"
                                selected={type === "graduate"}
                            >
                                졸업생
                            </option>
                        </select>
                    </div>
                    <div className="dialogGroup name">
                        <h3>이름</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="이름을 입력하세요"
                        />
                    </div>
                    <div className="dialogGroup email">
                        <h3>이메일</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="이메일을 입력하세요"
                        />
                    </div>
                    {memeberType !== "graduate" && (
                        <div className="dialogGroup field">
                            <h3>연구/관심분야</h3>
                            <input
                                type="text"
                                name="field"
                                placeholder="연구/관심분야를 입력하세요 ('/'로 구분)"
                            />
                        </div>
                    )}
                    {memeberType === "graduate" && (
                        <>
                            <div className="dialogGroup graduate">
                                <h3>졸업년도</h3>
                                <input
                                    type="number"
                                    name="graduate"
                                    placeholder="졸업년도를 입력하세요"
                                    defaultValue={2024}
                                />
                            </div>
                            <div className="dialogGroup field">
                                <h3>회사</h3>
                                <input
                                    type="text"
                                    name="field"
                                    placeholder="회사를 입력하세요"
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="dialogFooter">
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        취소
                    </button>
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        추가
                    </button>
                </div>
            </div>
        </div>
    );
};

const MemberUpdateDialog = ({ trigger, target }) => {
    console.log(target.graduated);
    return (
        <div
            className="dialogWrap"
            onClick={() => {
                trigger(false);
            }}
        >
            <div
                className="dialog member update"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="dialogHeader">
                    <h1>구성원 정보 수정</h1>
                    <p>연구실 구성원의 정보를 수정합니다.</p>
                </div>
                <div className="dialogBody">
                    <div className="dialogGroup name">
                        <h3>이름</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="이름을 입력하세요"
                            defaultValue={target.name}
                        />
                    </div>
                    <div className="dialogGroup email">
                        <h3>이메일</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="이메일을 입력하세요"
                            defaultValue={target.email}
                        />
                    </div>
                    {target.graduated === 0 ? (
                        <div className="dialogGroup field">
                            <h3>연구/관심분야</h3>
                            <input
                                type="text"
                                name="field"
                                placeholder="연구/관심분야를 입력하세요 ('/'로 구분)"
                                defaultValue={target.field.join("/")}
                            />
                        </div>
                    ) : (
                        <>
                            <div className="dialogGroup graduate">
                                <h3>졸업년도</h3>
                                <input
                                    type="number"
                                    name="graduate"
                                    placeholder="졸업년도를 입력하세요"
                                    defaultValue={2024}
                                />
                            </div>
                            <div className="dialogGroup field">
                                <h3>회사</h3>
                                <input
                                    type="text"
                                    name="field"
                                    placeholder="회사를 입력하세요"
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="dialogFooter">
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        취소
                    </button>
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        수정
                    </button>
                </div>
            </div>
        </div>
    );
};

const MemberDeleteDialog = ({ trigger, target }) => {
    return (
        <div
            className="dialogWrap"
            onClick={() => {
                trigger(false);
            }}
        >
            <div
                className="dialog member delete"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="dialogHeader">
                    <h1>구성원 삭제</h1>
                    <p>연구실 구성원을 삭제합니다.</p>
                </div>
                <div className="dialogBody">
                    <div className="dialogGroup target">
                        <p>
                            <strong>{target.name}</strong>을(를)
                            삭제하시겠습니까?
                        </p>
                    </div>
                </div>
                <div className="dialogFooter">
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        취소
                    </button>
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProjectCreateDialog = ({ trigger, type = "" }) => {
    const [projectType, setProjectType] = useState(type);
    return (
        <div
            className="dialogWrap"
            onClick={() => {
                trigger(false);
            }}
        >
            <div
                className="dialog project create"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="dialogHeader">
                    <h1>프로젝트 추가</h1>
                    <p>프로젝트를 추가합니다.</p>
                </div>
                <div className="dialogBody">
                    <div className="dialogGroup type">
                        <h3>진행 상태</h3>
                        <select
                            onChange={(e) => {
                                setProjectType(e.target.value);
                            }}
                        >
                            <option
                                value="progress"
                                selected={type === "progress"}
                            >
                                진행중
                            </option>
                            <option
                                value="complete"
                                selected={type === "complete"}
                            >
                                완료
                            </option>
                        </select>
                    </div>
                    <div className="dialogGroup name">
                        <h3>프로젝트명</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="프로젝트명을 입력하세요"
                        />
                    </div>
                    <div className="dialogGroup start">
                        <h3>시작일</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="시작일을 입력하세요"
                        />
                    </div>
                    <div className="dialogGroup end">
                        <h3>종료일</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="종료일을 입력하세요"
                        />
                    </div>
                    <div className="dialogGroup desc">
                        <h3>설명</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="프로젝트 설명을 입력하세요"
                        />
                    </div>
                    <div className="dialogGroup leader">
                        <h3>프로젝트 리더</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="프로젝트 리더를 입력하세요"
                        />
                    </div>
                    <div className="dialogGroup member">
                        <h3>참여 연구원</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="ex) 홍길동/프론트엔드, 홍길동/백엔드..."
                        />
                    </div>
                    <div className="dialogGroup link">
                        <h3>링크</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="ex) git/http://~, web/http://~..."
                        />
                    </div>
                </div>
                <div className="dialogFooter">
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        취소
                    </button>
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        추가
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProjectUpdateDialog = ({ trigger, target }) => {
    return (
        <div
            className="dialogWrap"
            onClick={() => {
                trigger(false);
            }}
        >
            <div
                className="dialog member update"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="dialogHeader">
                    <h1>구성원 정보 수정</h1>
                    <p>연구실 구성원의 정보를 수정합니다.</p>
                </div>
                <div className="dialogBody">
                    <div className="dialogGroup name">
                        <h3>이름</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="이름을 입력하세요"
                            defaultValue={target.name}
                        />
                    </div>
                    <div className="dialogGroup email">
                        <h3>이메일</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="이메일을 입력하세요"
                            defaultValue={target.email}
                        />
                    </div>
                    {target.graduated === 0 ? (
                        <div className="dialogGroup field">
                            <h3>연구/관심분야</h3>
                            <input
                                type="text"
                                name="field"
                                placeholder="연구/관심분야를 입력하세요 ('/'로 구분)"
                                defaultValue={target.field.join("/")}
                            />
                        </div>
                    ) : (
                        <>
                            <div className="dialogGroup graduate">
                                <h3>졸업년도</h3>
                                <input
                                    type="number"
                                    name="graduate"
                                    placeholder="졸업년도를 입력하세요"
                                    defaultValue={2024}
                                />
                            </div>
                            <div className="dialogGroup field">
                                <h3>회사</h3>
                                <input
                                    type="text"
                                    name="field"
                                    placeholder="회사를 입력하세요"
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="dialogFooter">
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        취소
                    </button>
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        수정
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProjectDeleteDialog = ({ trigger, target }) => {
    return (
        <div
            className="dialogWrap"
            onClick={() => {
                trigger(false);
            }}
        >
            <div
                className="dialog member delete"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="dialogHeader">
                    <h1>구성원 삭제</h1>
                    <p>연구실 구성원을 삭제합니다.</p>
                </div>
                <div className="dialogBody">
                    <div className="dialogGroup target">
                        <p>
                            <strong>{target.name}</strong>을(를)
                            삭제하시겠습니까?
                        </p>
                    </div>
                </div>
                <div className="dialogFooter">
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        취소
                    </button>
                    <button
                        onClick={() => {
                            trigger(false);
                        }}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
};

export {
    Dialog,
    MemberCreateDialog,
    MemberUpdateDialog,
    MemberDeleteDialog,
    ProjectCreateDialog,
    ProjectUpdateDialog,
    ProjectDeleteDialog,
};
