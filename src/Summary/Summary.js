import "./Summary.css"

function Summary() {

    return (
        <div className="Summary">

            <div className="Summary-Containers">
                <div className="Summary-Title">
                    π» κΈ°μ 
                </div>

                <div className="Summary-Containers-container">
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type">
                            π BACK-END
                        </div>
                        <div className="Summary-Containers-items-detail">
                            <div className="Summary-Containers-items-detail-info">
                                β¦ Node.js (Express, Hapi)
                            </div>
                            <div className="Summary-Containers-items-detail-info">
                                β¦ Typescript / Javascript
                            </div>
                            <div className="Summary-Containers-items-detail-info">
                                β¦ AWS(EC2)
                            </div>
                        </div>
                    </div>
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type">
                            πΎ DB
                        </div>
                        <div className="Summary-Containers-items-detail">
                            <div className="Summary-Containers-items-detail-info">
                                β¦ MySQL / MariaDB
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Summary-Containers">
                <div className="Summary-Title">
                   π  μκ²©μ¦
                </div>
                <div className="Summary-Containers-container">
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> SQLD</div>
                        <div className="Summary-Containers-items-detail-info">2021.03 μ·¨λ</div>
                    </div>
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> TOEIC</div>
                        <div className="Summary-Containers-items-detail-info"> 2021.02 μ·¨λ ( 890 )</div>
                    </div>
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> μ λ³΄μ²λ¦¬κΈ°μ¬</div>
                        <div className="Summary-Containers-items-detail-info"> 2019 μ·¨λ</div>
                    </div>
                </div>
            </div>

            <div className="Summary-Containers">
                <div className="Summary-Title">
                   π©βπ» κ²½λ ₯
                </div>
                <div className="Summary-Containers-container">
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> NomadSoft / λΈλ§λμννΈ </div>
                        <div className="Summary-Containers-items-detail-info">
                            2019.11 ~ 2020.11 (13month)
                        </div>
                </div>
            </div>
            <div className="Summary-Containers">
                <div className="Summary-Title">
                    π κ΅μ‘
                </div>
                <div className="Summary-Containers-container">
                    <div className="Summary-Containers-items">
                        <div className="Summary-Containers-items-type"> μ»΄ν¨ν°κ³Όνκ³Ό </div>
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