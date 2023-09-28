import React from 'react';
import SkillContent from './components/SkillsContent';
import FrontendSkills from './components/FrontendSkills';
import BackendSkills from './components/BackendSkills';
import OtherSkills from './components/OtherSkills';
import './css/SkillsSection.css';
import Testimonials from './components/TestimonialsSection';
// import ReviewModal from './components/ReviewModal';
import './css/Testimonials.css';

function App() {
  return (
    <div>
      <h2 className="MySkills">My Skills</h2>
      <div className="skills-grid">
        <div className="frontend-skills">
          <h4 className="skill-title">Front End</h4>
          <FrontendSkills />
        </div>
        <div className="backend-skills">
          <h4 className="skill-title">Back End</h4>
          <BackendSkills />
        </div>
        <div className="other-skills">
          <h4 className="skill-title">Other</h4>
          <OtherSkills />
        </div>
      </div>
      <p className="transition-project">Discover More in Projects</p>

      <Testimonials />
    </div>
  );
}

export default App;