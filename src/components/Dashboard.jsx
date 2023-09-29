import { Routes, Route } from "react-router-dom";
import Testimonial from "../pages/DashTestimonial";
import Hero from "../pages/DashHeros";
import About from "../pages/DashAbout";
import Login from "../pages/DashLogin";
import ContactMe from "../pages/DashContactMe";
import SideBar from "./DashSideBar";
import Projects from "../pages/DashProjects";
import DashSkills from "../pages/DashSkills";
import ContactInfo from "../pages/DashContactInfo";
import "../css/Dashboard.css";
import { useState, useEffect } from "react";

function Dashboard() {
  const [contactInfoDesc, SetContactInfoDesc] = useState({});
  const fetchData = () => {
    fetch("http://localhost:5000/api/get/contactInfoDesc")
      .then((response) => response.json())
      .then((contactInfoDesc) => SetContactInfoDesc(contactInfoDesc.data))

      .catch((error) => console.log(error));
  };
  console.log(contactInfoDesc);
  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className="Container">
        <div className="sectionSideBar">
          <SideBar />

          <div className="contain">
            <Routes>
              <Route path="skills" element={<DashSkills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contactInfo" element={<ContactInfo />} />
              <Route path="contactMe" element={<ContactMe />} />
              <Route path="testimonial" element={<Testimonial />} />
              <Route path="about" element={<About />} />
              <Route path="hero" element={<Hero />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
