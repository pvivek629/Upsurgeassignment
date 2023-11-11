import "./Navbar.css";
import logo from "../component/Logo.svg";
import search from "../component/search.svg"
import arrow from "../component/arrow.svg"

export default function Navbar() {

  return (
    <div className="Navbar">
      <header>
        <div className="headerleft">
          <img src={logo} className="headerlogo" />
        </div>
        <div className="headerright">
          <div className="searchbody">
            <div className="searchdetail">
              <input
                type="search"
                name="search"
                placeholder="Search for Options, Strategies, Mutual Fund ... "
                class="searchinput"
              />
              <img className="searchicon" src={search} alt="" />
            </div>
          </div>
          <div className="learnheader">
            <p className="learntext">Learn</p>
            <div className="arrowicon">
              <img className="arrow" src={arrow} alt="" />
            </div>
            
            
          </div>

          <p className="subcriptiontext">Subscription</p>
        </div>
        <div className="loginview">
          <div className="loginuser">
            <button class="loginbutton"><span class="loginspan">VP</span></button>           
          </div>
        </div>
        
      </header>
    </div>
  );
}
