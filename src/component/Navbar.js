import "./Navbar.css";
import logo from "../component/Logo.svg";
import search from "../component/search.svg"
import arrow from "../component/arrow.svg"
import { useState } from "react";

export default function Navbar() {

  const [dropdown, setDropdown] = useState(false);

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
          <div 
            className="learnheader"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <p className="learntext">Learn</p>
            <div className="arrowicon">
              <img className="arrow" src={arrow} alt="" />
            </div>    
            {dropdown && (
              <>
                <div className="coursecategories">
                  <div className="coursedetail">
                    <p className="coursetext">Course Categories</p>
                    <div className="coursepara">
                      <a className="coursedropdown" href="">Options Trading</a>
                      <a className="coursedropdown" href="">Stock Market Basics</a>
                      <a className="coursedropdown" href="">Technical Analysis</a>
                      <a className="coursedropdown" href="">Trading Strategies</a>
                      <a className="coursedropdown" href="">Algo Trading</a>
                      <a className="coursedropdown" href="">Investing Strategy</a>
                      <a className="coursedropdown" href="">Stock Market Valuation</a>
                      <a className="coursedropdown" href="">Stock Market Investing</a>
                      <a className="coursedropdown" href="">Other Courses</a>
                    </div>
                  </div>
                </div>
              </>
            )}       
          </div>
          <div>
            <p className="subcriptiontext">Subscription</p>
          </div>
          
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
