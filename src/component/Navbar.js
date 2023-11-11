import "./Navbar.css";
import logo from "../component/Logo.svg";
import search from "../component/search.svg"
import arrow from "../component/arrow.svg"
import { useEffect, useState } from "react";
import Logindropdown from "./Logindropdown";
import logochange from "../component/logochange.svg"

export default function Navbar() {

  const [dropdown, setDropdown] = useState(false);
  const [logindropdown, setLoginDropdown] = useState(false);

  const [navbarStyles, setNavbarStyles] = useState({
    backgroundColor: '#000000',
    color: 'white',
  });

  const [imageSrc, setImageSrc] = useState(logo);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newStyles = {
        backgroundColor: scrollPosition > 100 ? 'white' : '#000000',
        color: scrollPosition > 100 ? 'black' : 'white',
      };
      setNavbarStyles(newStyles);
      const newImageSrc = scrollPosition > 100 ? logochange : logo;
      setImageSrc(newImageSrc);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="Navbar" >
      <header style={navbarStyles}>
        <div className="headerleft">
          <img src={imageSrc} className="headerlogo" />
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
            <p className="learntext" style={navbarStyles}>Learn</p>
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
            <p className="subcriptiontext" style={navbarStyles}>Subscription</p>
          </div>
          
        </div>
        <div className="loginview">
          <div 
            className="loginuser" 
            onMouseEnter={() => setLoginDropdown(true)}
            onMouseLeave={() => setLoginDropdown(false)} >
            <button class="loginbutton">
              <span class="loginspan">VP</span>
            </button>   
            {logindropdown && (
              <Logindropdown/>
            )}        
          </div>
        </div>
        
      </header>
    </div>
  );
}
