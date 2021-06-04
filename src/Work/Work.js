import React, {useState} from "react"
import "./Work.css"
import Company from "./Company/Company";
import WorkProject from "./WorkProject/WorkProject";



function Work(){


    const [company,setCompany] = useState("root");

    function changeCompany(newCompany){
        console.log(newCompany)
        setCompany(newCompany);
    }


 return (
     <div className="Work">
         <div className="Work-company-container">
             <Company company ={company} setCompany={changeCompany}/>
         </div>
         <div className="Work-project">
             <WorkProject company={company}/>
         </div>
     </div>

 );
}

export default Work;