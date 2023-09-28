import React from 'react';
import SkillContent from './SkillsContent';

function FrontendSkills() {
    return (
        <div className="frontend-skills">
            <SkillContent
                iconSrc="/Images/Frontend/html5-alt-svgrepo-com.svg"
                skillName="HTML"
            />
            <SkillContent
                iconSrc="/Images/Frontend/css3-alt.svg"
                skillName="CSS"
            />
            <SkillContent
                iconSrc=" /Images/Frontend/square-js.svg"
                skillName="Javascript"
            />
            <SkillContent
                iconSrc="/Images/Frontend/react.svg"
                skillName="React"
            />
            <SkillContent
                iconSrc="/Images/Frontend/redux-fill-svgrepo-com.svg"
                skillName="Redux"
            />
            <SkillContent
                iconSrc="/Images/Frontend/tailwindcss-svgrepo-com.svg"
                skillName="TailwindCSS"
            />
            <SkillContent
                iconSrc="/Images/Frontend/bootstrap-fill-svgrepo-com.svg"
                skillName="Bootstap"
            />
        </div>
    );
}

export default FrontendSkills;
