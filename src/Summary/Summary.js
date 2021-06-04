import "./Summary.css"

function Summary() {

    return (
        <div className="Summary">

            <div className="Summary-Containers">
                <div className="Summary-Title">
                    💻 기술
                </div>

                <div className="Summary-Containers-container">
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type">
                            🎛 BACK-END
                        </div>
                        <div className="Summary-Containers-items-detail">
                            <div className="Summary-Containers-items-detail-info">
                                ✦ Node.js (Express, Hapi)
                            </div>
                            <div className="Summary-Containers-items-detail-info">
                                ✦ Typescript / Javascript
                            </div>
                            <div className="Summary-Containers-items-detail-info">
                                ✦ AWS(EC2)
                            </div>
                        </div>
                    </div>
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type">
                            💾 DB
                        </div>
                        <div className="Summary-Containers-items-detail">
                            <div className="Summary-Containers-items-detail-info">
                                ✦ MySQL / MariaDB
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Summary-Containers">
                <div className="Summary-Title">
                   📜  자격증
                </div>
                <div className="Summary-Containers-container">
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> SQLD</div>
                        <div className="Summary-Containers-items-detail-info">2021.03 취득</div>
                    </div>
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> TOEIC</div>
                        <div className="Summary-Containers-items-detail-info"> 2021.02 취득 ( 890 )</div>
                    </div>
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> 정보처리기사</div>
                        <div className="Summary-Containers-items-detail-info"> 2019 취득</div>
                    </div>
                </div>
            </div>

            <div className="Summary-Containers">
                <div className="Summary-Title">
                   👩‍💻 경력
                </div>
                <div className="Summary-Containers-container">
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> NomadSoft / 노마드소프트 </div>
                        <div className="Summary-Containers-items-detail-info">
                            2019.11 ~ 2020.11 (13month)
                        </div>
                </div>
            </div>
            <div className="Summary-Containers">
                <div className="Summary-Title">
                    🎓 교육
                </div>
                <div className="Summary-Containers-container">
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> 컴퓨터과학과 </div>
                        <div className="Summary-Containers-items-detail-info">
                            2016.03 - 2020.02
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Summary;