import {useState} from "react";
import myself from '../pic/myself.png';
import './App.css';
import Nav from "../Nav/Nav";
import Intro from "../Intro/Intro";
import ETC from "../ETC/ETC";
import Work from "../Work/Work";
import Summary from "../Summary/Summary";
import Personal from "../Personal/Personal";



function App() {

  const [page, setPage] = useState("root");

  function changePage(newPage){
      setPage(newPage);
  }

  if(page =="root"){
      return (
          <div className="App">
              <div className="App-home" id ="Home">
                  <div className="App-home-container">
                      <div className="App-png">
                          <img src={myself} className="App-png" alt="logo"/>
                      </div>
                      <div className="App-intro">
                          <div className="App-intro-cell">Welcome</div>
                          <div className="App-intro-cell">to </div>
                          <div className="App-intro-cell">eclat's portfolio</div>
                          <div className="App-intro-cell" onClick={()=>changePage("intro")}> 👉click!👈 </div>
                          <div className="App-intro-cell">:-></div>
                      </div>
                  </div>
              </div>
          </div>
      )

  }else if(page == "intro"){
      return (
          <div className="App">
              <div className="App-Basic" id="Intro">
                  <div className="App-Nav">
                      <Nav changePage={changePage} isNow="Intro"/>
                  </div>
                  <section className="App-container">
                      <Intro/>
                  </section>
              </div>
          </div>
      )
  }else if(page == "summary"){
      return (
          <div className="App">
              <div className="App-Basic" id="Summary">
                  <div className="App-Nav">
                      <Nav changePage={changePage}  isNow="Summary"/>
                  </div>
                  <section className="App-container">
                      <Summary/>
                  </section>
              </div>
          </div>
      )
  }else if(page == "work"){
      return (
          <div className="App">

              <div className="App-Basic" id="Work">
                  <div className="App-Nav">
                      <Nav changePage={changePage}  isNow="Work"/>
                  </div>
                  <section className="App-container">
                      <Work/>
                  </section>
              </div>
          </div>
      )
  }else if(page =="personal"){
      return (
          <div className="App">
              <div className="App-Basic" id="Personal">
                  <div className="App-Nav">
                      <Nav changePage={changePage}  isNow="Personal"/>
                  </div>
                  <section className="App-container">
                      <Personal/>
                  </section>
              </div>
          </div>
      )
  }else if(page =="etc"){
      return (
          <div className="App">
              <div className="App-Basic" id="ETC">
                  <div className="App-Nav">
                      <Nav changePage={changePage}  isNow="ETC"/>
                  </div>
                  <section className="App-container">
                      <ETC/>
                  </section>
              </div>
          </div>
      )
  }
}

export default App;
