import {useEffect} from 'react';
import {FullPage, Slide} from 'react-full-page';
import myself from '../pic/myself.png';
import './App.css';



function App() {

    const workProjects = [
        {
            projectName :"빅온(미정)",
            projectImg:myself,
            projectTime : "2020.11",
            projectSkill : "Javascript / Hapi.JS",
            projectRole : "서버 단독 개발",
            projectDescribe:[
                "음직점 주문 애플리케이션",
                "데이터베이스 설계 (Mysql)",
                "모바일, 관리자 API 개발"
            ]
        },
        {
            projectName :"빅온2",
            projectImg:myself,
            projectTime : "2020.11",
            projectSkill : "Javascript / Hapi.JS",
            projectRole : "서버 단독 개발",
            projectDescribe:[
                "음직점 주문 애플리케이션",
                "데이터베이스 설계 (Mysql)",
                "모바일, 관리자 API 개발"
            ]
        }
    ]

    return (
        // <div className="App">
        //     <header className="App-header">
        //         <div className="App-container">
        //         <div className="App-png">
        //             <img src={myself} className="App-myself" alt="logo"/>
        //         </div>
        //         <div className="App-intro">
        //                 <div className="App-intro-cell">✅ 백엔드 개발 1년차 개발자입니다.</div>
        //                 <div className="App-intro-cell">✅ 사람들과 소통하는 것을 좋아합니다.</div>
        //                 <div className="App-intro-cell">✅ 함께 공부하는 것을 좋아합니다! </div>
        //         </div>
        //         </div>
        //     </header>
        //     <div className="App-Navigation">
        //         HI
        //     </div>
        // </div>
        <FullPage className="App">
            <Slide className="App-header">
                <div className="App-container">
                    <div className="App-png">
                        <img src={myself} className="App-myself" alt="logo"/>
                    </div>
                    <div className="App-intro">
                        <div className="App-intro-cell">✅ 백엔드 개발 1년차 개발자입니다.</div>
                        <div className="App-intro-cell">✅ 사람들과 소통하는 것을 좋아합니다.</div>
                        <div className="App-intro-cell">✅ 함께 공부하는 것을 좋아합니다!</div>
                    </div>
                </div>
            </Slide>
            <Slide className="App-Nav">
                <div className="App-Nav-container">
                    <div className="App-Nav-item"><a href="#Work">WORK</a></div>
                    <div className="App-Nav-item"><a href="#Personal">PERSONAL</a></div>
                    <div className="App-Nav-item"><a href="#Skill">SKILL</a></div>
                    <div className="App-Nav-item"><a href="#ETC">ETC</a></div>
                </div>
            </Slide>
            <Slide className="App-Work" id="Work">
                <div className="App-Work-header-container">
                    <div className="App-Work-header-item">
                        <div>
                            NomadSoft
                        </div>
                        <div>
                            2019.11 ~ 2020.11 (13month)
                        </div>
                    </div>
                    <div className="App-Work-header-item">
                        <div>
                            - 모바일앱 전문 개발 회사 (SI)
                        </div>
                        <div>
                            - 서버 개발 및 유지보수 ( 백엔드팀 근무 )
                        </div>
                        <div>
                            - 애플리케이션, 관리자 웹 API 개발
                        </div>
                        <div>
                            - 단독 서버 개발 프로젝트 3건, 공동 서버 개발 프로젝트 4건
                        </div>
                        <div>
                            - 백엔드팀 온보딩 문서 작성, 가산 맛집 정리 등 노션 활성화에 기여
                        </div>
                    </div>
                </div>
                <div className="App-Work-project-container">
                        {workProjects.map((project,index)=>(
                            <div className="App-Work-project-box">
                            <div className="App-work-project-img">
                                <img src={project.projectImg} className="App-work-project-img-file" alt="logo"/>
                            </div>
                            <div className="App-Work-project-detail">
                                <div className="App-Work-project-name">
                                    {project.projectName}
                                </div>
                                <div className="App-Work-project-time">
                                    {project.projectTime}
                                </div>
                                <div className="App-Work-project-skill">
                                    {project.projectSkill}
                                </div>
                                <div className="App-Work-project-role">
                                    {project.projectRole}
                                </div>
                                <div className="App-Work-project-detail">
                                {project.projectDescribe.map((detail,i)=>(
                                        <div className="App-Work-project-detail-item">
                                            {detail}
                                        </div>
                                ))}
                                </div>
                            </div>
                            </div>
                        ))}
                </div>
            </Slide>
            <Slide className="App-Personal" id="Personal">
                Personal
                <div className="App-Personal-container">
                    <div className="App-Personal-youtube">
                        <iframe className="App-Personal-youtube" src="https://www.youtube.com/embed/JCwe4TmahsI?autoplay=1&mute=1&loop=1"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="App-Personal-detail">
                        <div className="App-Personal-detail-item"> 배찌 </div>
                        <div className="App-Personal-detail-item"> 배찌 </div>
                        <div className="App-Personal-detail-item"> 배찌 </div>
                        <div className="App-Personal-detail-item"> 배찌 </div>
                    </div>
                </div>
            </Slide>
            <Slide className="App-Skill" id="Skill">
                Skill
                <div className="App-Skill-container">

                </div>
            </Slide>
            <Slide className="App-ETC" id="ETC">
                ETC
            </Slide>
        </FullPage>
    );
}

export default App;
