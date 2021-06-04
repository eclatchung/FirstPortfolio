import "./Personal.css"


function Personal(){

    return (
        <div className="Personal">
            <div>
                <iframe className="App-Personal-youtube" src="https://www.youtube.com/embed/JCwe4TmahsI?autoplay=1&mute=1&loop=1"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <div className="Personal-name">
                2020 DevFest Women TechMakers 해커톤 참가
            </div>
            <div className="Personal-detail">
                Javascript / Express.JS
            </div>
            <div className="Personal-detail">
                ( 2020.10 2주간)
            </div>
            <div className="Personal-detail">
                비건 식단 저장 앱
            </div>
            <div className="Personal-detail">
                서버 개발/ 벳지, PPT 디자인 (얌얌윤)
            </div>
            <div className="Personal-detail">
                서비스 구조 설계
            </div>
            <div className="Personal-detail">
                AWS EC2(ubuntu 18.04) 배포
            </div>
            <div>
                <a href="https://github.com/veggie-meal"> <img className="Personal-github" src={process.env.PUBLIC_URL + "/pic/" + "github.svg"}/></a>
            </div>


        </div>
    );
}

export default Personal;