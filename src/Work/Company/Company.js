import "./Company.css"



function Company(props) {

    const companyInfos = [
            {
                companyPic: "../../pic/nomadlogo.png",
                companyIndex: 0,
                key : 0,
                companyName: "노마드소프트",
                workTime: "2019.11 ~ 2020.11",
                workTerm: "13 months",
                job:
                    "백엔드개발자",
                companyIntro:
                    [
                        "모바일앱 전문 개발 회사 (SI)",
                        "서버 개발 및 유지보수 (백엔드팀 근무)",
                        "애플리케이션, 관리자 웹 API 개발",
                        "단독 서버 개발 프로젝트 3건, 공동 서버 개발 프로젝트 4건",
                        "백엔드팀 온보딩 문서 작성, 가산 맛집 정리 등 회사 노션 활성화에 기여"
                    ]
            }
        ];

    return (
        <div className="Company">
            <div className="Company-company-title">
                🏢Company List🏢
            </div>
            {props.company == "root" ?
                  (  /* 회사 리스트 */
                      <div className="Company-company-list">
                          <div className="Company-company-name" key={"root"} value={"root"}  onClick={()=> props.setCompany("root")}  >

                              ✨

                          </div>
                    {
                      companyInfos.map(company=>{
                          return (
                              <div className="Company-company-name" key={company.key}  value={company.key} onClick={()=> props.setCompany(company.key)}  >

                                      {company.companyName}

                              </div>
                          )
                      })
                    }
                      </div>

                    )

                :
                (
                    // 회사 정보
                    <div className="Company-company-info">
                            <div  key={"root"} value={"root"}  onClick={()=> props.setCompany("root")} >
                                <div className="Company-company-back">
                                    ✨Back✨
                                </div>
                            </div>
                            <div className="Company-company-data">
                                <div className="Company-company-data-title">
                                    {companyInfos[props.company].companyName}
                                </div>
                                <div className="Company-company-data-detail">
                                    <div className="Company-company-data-detail-time">
                                        {companyInfos[props.company].workTime} / {companyInfos[props.company].workTerm}
                                    </div>
                                    <div className="Company-company-data-detail-job">
                                        {companyInfos[props.company].job}
                                    </div>
                                    <div className="Company-company-data-detail-intro">
                                        {
                                            companyInfos[props.company].companyIntro.map((info)=>{
                                                return (
                                                    <div className="Company-company-data-detail-intro-item"> <span className="star">⭐️</span>  { info}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                    </div>
                )
            }
        </div>
    );
}

export default Company;