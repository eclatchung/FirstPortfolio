import "./WorkProject.css";
import {useState} from "react";

function WorkProject(props) {

    const [isMouse, setIsMouse] = useState(false);
    const [nowIndex, setNowIndex] = useState(-1);

    function changeIsMouse(newMouse) {
        setIsMouse(newMouse);
    }

    function changeNowIndex(newIndex) {
        setNowIndex(newIndex);
    }


    const workProjectInfo = {
        0: [
            {
                projectName: "빅온",
                projectPic: [
                    "BigOne1.jpeg",
                    "bigOne2.jpeg"
                ],
                projectTime: "2020.11",
                projectSkill: "Javascript / Hapi.JS",
                projectRole: "서버 단독 개발",
                projectDescribe: [
                    "음직점 주문 애플리케이션",
                    "데이터베이스 설계 (Mysql)",
                    "모바일, 관리자 API 개발"
                ]
            },
            {
                projectName: "한국전력 메신저 모바일",
                projectPic: [],
                projectTime: "2020.08 ~ 2020.11",
                projectSkill: "Typescript / Express.JS",
                projectRole: "서버 공동 개발",
                projectDescribe: [
                    "한국전력 납품용 전용 메신저앱",
                    "회사 서버 모듈 전환 (Hapi.js/Javascript → express.js/Typescript)",
                    "기존 Javascript로 작성된 엑셀 다운로드 기능 Typescript로 전환",
                    "게시글, 게시글 타임라인 및 캘린더 타임라인 관련 API 개발",
                    "동호회모임방 기능 API 개발",
                    "프로젝트모임방 기능 API 개발"
                ]
            },
            {
                projectName: "놀공알프로퀴즈",
                projectPic: [
                    "놀공알1.png"
                ],
                projectTime: "2020.06 ~ 2020.07",
                projectSkill: "Javascript / Hapi.JS",
                projectRole: "서버 단독 개발",
                projectDescribe: [
                    "아마추어 퀴즈로 퀴즈 풀기 연습을 하고 프로퀴즈로 랭킹에 도전하여 상금을 탈 수 있는 앱",
                    "데이터베이스 설계 (Mysql)",
                    "모바일, 관리자 API 개발",
                    "AWS EC2 / ubuntu 18.04",
                    "인앱 결제 기능 개발(안드로이드, IOS)",
                    "여러 퀴즈 형태(3가지 / 초성, 다지선다, OX ) 일괄 엑셀 업로드하는 엑셀 업로드 기능 개발"
                ]
            },
            {
                projectName: "계양전동공구",
                projectPic: [
                    "계양전기1.png"
                ],
                projectTime: "2020.05~2020.06",
                projectSkill: "Javascript / Hapi.JS",
                projectRole: "서버 공동 개발",
                projectDescribe: [
                    "계양전기의 새로운 모바일 창구 앱",
                    "기존 계양전기 홈페이지 회원 통합 작업 진행",
                    "기존 계양전기 홈페이지 공지사항 연동작업",
                    "해당 앱의 문의사항을 기존 계양 전기 홈페이지와 연동하는 작업",
                    "회원의 위치기반 푸쉬 서비스 기능 개발",
                    "대리점 지도 위치 기반 검색 기능 개발 "
                ]
            },
            {
                projectName: "익스피리언스(Xperience, 운영안함)",
                projectPic: [
                    "exp1.jpeg"
                ],
                projectTime: "2020.03~2020.04",
                projectSkill: "Javascript / Hapi.JS",
                projectRole: "서버 단독 개발",
                projectDescribe: [
                    "광고, 구매 플랫폼 애플리케이션",
                    "데이터베이스 설계 (Mysql)",
                    "모바일, 관리자 API 개발",
                    "PG 연동 ( 아임포트 )",
                    "기프티콘(giftishow) 연동 모듈 개발",
                    "sms 문자 전송(알리고) 모듈 개발",

                ]
            },
            {
                projectName: "DoWhat",
                projectPic: [
                    "dowhat1.jpeg",
                    "dowhat2.jpeg",
                    "dowhat3.jpeg",
                    "dowhat4.jpeg"
                ],
                projectTime: "2019.12~2020.02",
                projectSkill: "Javascript / Hapi.JS",
                projectRole: "서버 공동 개발",
                projectDescribe: [
                    "스마트 호텔 컨시어지 앱",
                    "직원 전용 앱 (초기버전) API 개발",
                    "다국어 서비스를 위한 CRUD API 개발"
                ]
            },
            {
                projectName: "SU(납품용)",
                projectPic: [
                    "SU1.png"
                ],
                projectTime: "2019.11~2019.12",
                projectSkill: "Javascript / Hapi.JS",
                projectRole: "서버 공동 개발",
                projectDescribe: [
                    "남서울대학 외국인 학생을 위한 앱",
                    "간단한 CRUD를 사용하여 API 개발",
                    "회사 서버모듈의 이해도와 실무능력 향상을 위해 과제 형식으로 프로젝트를 진행"
                ]
            }
        ]
    };

    function randomPic(arrLen){
        return (arrLen -1 == 0? 0 :  Math.floor(Math.random() * (arrLen - 0)) + 0)
    }

    return (
        <div className="WorkProject">
            {props.company == "root" ?
                <div> Pick the Company! </div> :
                <div className="WorkProject-projects-container">
                    {workProjectInfo[props.company].map((project, index) => {
                        return (
                            <div className="WorkProject-projects-container-cube"
                                 onMouseEnter={() => {
                                     changeIsMouse(true)
                                     changeNowIndex(index)
                                 }}
                                 onMouseLeave={() => {
                                     changeIsMouse(false)
                                     changeNowIndex(index)
                                 }}
                            >
                                {
                                    // true =>hover false => not hover
                                    ((index == nowIndex) && isMouse ?
                                            (
                                                <div className="WorkProject-projects-container-cube-hover">
                                                    {
                                                        project.projectDescribe.map(info => {
                                                            return (
                                                                <div className="WorkProject-projects-container-cube-hover-detail">
                                                                    <span> ✨ </span>
                                                                    {info}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                            :
                                            (
                                                <div className="WorkProject-projects-container-cube-show">
                                                    {
                                                        (project.projectPic.length == 0 ?
                                                                (
                                                                    <div
                                                                        className="WorkProject-projects-container-cube-pic"
                                                                        style={{
                                                                            backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/" + "b737e766-dff7-4e65-9a11-fad9e4850da5.jpeg"}) `
                                                                        }}>
                                                                        <div
                                                                            className="WorkProject-projects-container-cube-name">
                                                                            {project.projectName}
                                                                        </div>
                                                                        <div
                                                                            className="WorkProject-projects-container-cube-etc">
                                                                            {project.projectTime}
                                                                        </div>
                                                                        <div
                                                                            className="WorkProject-projects-container-cube-etc">
                                                                            {project.projectSkill}
                                                                        </div>
                                                                        <div
                                                                            className="WorkProject-projects-container-cube-etc">
                                                                            {project.projectRole}
                                                                        </div>
                                                                    </div>
                                                                )
                                                                :
                                                                (

                                                                    <div
                                                                        className="WorkProject-projects-container-cube-pic"
                                                                        style={{
                                                                            backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/" + project.projectPic[randomPic(project.projectPic.length)]}) `
                                                                        }}>
                                                                        <div
                                                                            className="WorkProject-projects-container-cube-name">
                                                                            {project.projectName}
                                                                        </div>
                                                                        <div
                                                                            className="WorkProject-projects-container-cube-etc">
                                                                            {project.projectTime}
                                                                        </div>
                                                                        <div
                                                                            className="WorkProject-projects-container-cube-etc">
                                                                            {project.projectSkill}
                                                                        </div>
                                                                        <div
                                                                            className="WorkProject-projects-container-cube-etc">
                                                                            {project.projectRole}
                                                                        </div>
                                                                    </div>
                                                                )
                                                        )
                                                    }
                                                </div>
                                            )
                                    )
                                }
                            </div>
                        );
                    })}
                </div>

            }
        </div>
    );
}

export default WorkProject;