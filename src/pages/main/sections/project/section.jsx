// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
import { ArrowUpRight } from "lucide-react";
// 스타일
import "./style.css";

const ProjectSection = () => {
    return (
        <div id="projectSection" className="section">
            <div className="article">
                <h1 className="articleTitle">프로젝트</h1>
                <div className="articleContent">
                    <div className="projectWrap">
                        {/* ProjectItem은 8개 또는 12개로 설정하여 사용 */}
                        <ProjectItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_01.jpg"
                            category="카테고리 1"
                            title="프로젝트 1"
                            desc="프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. "
                        />
                        <ProjectItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_01.jpg"
                            category="카테고리 2"
                            title="프로젝트 이름 두줄 들어갔을 때 테스트"
                        />
                        <ProjectItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_01.jpg"
                            category="카테고리 3"
                            title="프로젝트 이름 두줄 이상 들어갔을 때 테스트 프로젝트 이름 두줄 이상 들어갔을 때 테스트"
                        />
                        <ProjectItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_01.jpg"
                            category="카테고리 4"
                            title="프로젝트 이름 두줄 이상 들어갔을 때 테스트 프로젝트 이름 두줄 이상 들어갔을 때 테스트"
                        />
                        <ProjectItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_01.jpg"
                            category="카테고리 1"
                            title="프로젝트 1"
                            desc="프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. "
                        />
                        <ProjectItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_01.jpg"
                            category="카테고리 2"
                            title="프로젝트 이름 두줄 들어갔을 때 테스트"
                        />
                        <ProjectItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_01.jpg"
                            category="카테고리 3"
                            title="프로젝트 이름 두줄 이상 들어갔을 때 테스트 프로젝트 이름 두줄 이상 들어갔을 때 테스트"
                        />
                        <ProjectItem
                            thumb="https://uni.dongseo.ac.kr/computer/_Img/Content/facilities_01.jpg"
                            category="카테고리 4"
                            title="프로젝트 이름 두줄 이상 들어갔을 때 테스트 프로젝트 이름 두줄 이상 들어갔을 때 테스트"
                        />
                    </div>
                    <button className="more">프로젝트 전체보기</button>
                </div>
            </div>
        </div>
    );
};

const ProjectItem = ({
    thumb = "",
    category = "카테고리를 입력하세요",
    title = "제목을 입력하세요",
    desc = "설명을 입력하세요",
}) => {
    return (
        <div className="projectItem">
            <div className="thumbWrap">
                <img src={thumb} />
                <div className="iconWrap">
                    <ArrowUpRight />
                </div>
            </div>
            <div className="contextWrap">
                <div className="infoWrap">
                    <span className="category">{category}</span>
                    <h1 className="title">{title}</h1>
                    <p className="desc">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
