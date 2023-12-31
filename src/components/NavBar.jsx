import { useRef} from "react";
import "../css/HeroSection.css";
import { Link } from "react-router-dom";
import { FaBars ,FaTimes } from "react-icons/fa";


const NavBar = () => {
  const navRef = useRef();
  const showNavBar=() => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
  return (
    <div className="header">
   
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars className="Fabars" />
      </button>
      <div className="headerlogo">
      <a href="#"><img src="/Images/logo-removebg.png" alt="Logo" /></a>
      </div>

     
      <nav  className="header-nav"ref={navRef}>
      <a className="header-a"  href="/#AboutMe-void">About me</a>
      <a className="header-a"  href="/#ProjectCarousel-wrapper">MyProjects</a>
      <a className="header-a"  href="/#MySkills">My Skills</a>
      <a className="header-a" href="/#TestimonialSection">Testimonials</a>
      <a className="header-a"  href="/#MainFooter">Contact Me</a>
        <button className="nav-btn1 nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

    

      <div className="headeruser">
        <Link to="/login">
          <img src="/Images/user.png" alt="User" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
