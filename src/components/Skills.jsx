import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';
import "../css/SkillsSection.css";


function Skills() {
    return(
    <div id='MySkills'>
    <h2 className="MySkills">My Skills</h2>
      <div className="skills-grid">
        <div>
          <h4 className="skill-title">Front End</h4>
          <FrontendSkills />
        </div>
        <div>
          <h4 className="skill-title">Back End</h4>
          <BackendSkills />
        </div>
        <div>
          <h4 className="skill-title">Other</h4>
          <OtherSkills />
        </div> 
        </div> 
       
        <div className="TestimonialTitles">
             
            <b className="IntroToProjects">Discover More In Projects</b></div>
           
            
        </div> )
}
export default Skills;