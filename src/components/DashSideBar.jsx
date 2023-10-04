import { useState } from "react";
import "../css/DashSideBar.css";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(true);
  
  function handleLogout() {
    localStorage.clear();}

  const updateMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar clicked");
    } else {
      setBurgerClass("burger-bar unclicked");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ gridColumn: "1/3" }}>
     
      <div className="nav">
        {isMenuClicked ? (
          <Link to="/" onClick={handleLogout}><BiLogOut className="dashboradLogout" /></Link>
        ) : (
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        )}
      </div>
      <div className={`dashboradMenu ${isMenuClicked ? "visible" : "hidden"}`}>

      <div className="dashboardLogin">
          <Link to="/dashboard/login">UserInfo</Link>
        </div>
      <div className="dashboardHeros">
          <Link to="/dashboard/hero">Hero</Link>
        </div>
        <div className="dashboardContactMe">
          <Link to="/dashboard/about">About</Link>
        </div>
        <div className="dashboardSkills">
          <Link to="/dashboard/skills">Skills</Link>
        </div>
        <div className="dashboardProjects">
          <Link to="/dashboard/projects">Projects</Link>
        </div>
        <div className="dashboardTestimonial">
          <Link to="/dashboard/testimonial">Testimonials</Link>
        </div>
        <div className="dashboardMyInfo">
          <Link to="/dashboard/contactInfo">Contact Info</Link>
        </div>
        <div className="dashboardAbout">
          <Link to="/dashboard/contactMe">Contact Me</Link>
        </div>
       
        
        
       
      </div>
    </div>
  );
};

export default SideBar;
