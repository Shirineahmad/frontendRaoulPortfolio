import React from 'react';
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';

function SkillsSection() {
    return (
        <div>
            <h2 className="MySkills" id='MySkills'>My Skills</h2>
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
            
        </div>
    );
}

export default SkillsSection;