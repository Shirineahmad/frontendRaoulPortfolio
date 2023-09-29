import React from 'react';
import SkillContent from './SkillsContent';
import "../css/SkillsSection.css";

function OtherSkills() {
    return (
        <div className="other-skills">
            <SkillContent
                iconSrc="/Images/Other/git-svgrepo-com.svg"
                skillName="Git"
            />
            <SkillContent
                iconSrc="/Images/Other/github-142-svgrepo-com.svg"
                skillName="Github"
            />
            <SkillContent
                iconSrc="/Images/Other/visual-studio-code-svgrepo-com.svg"
                skillName="VS Code"
            />
            <SkillContent
                iconSrc="/Images/Other/trello-svgrepo-com.svg"
                skillName="Trello"
            />
            <SkillContent
                iconSrc="/Images/Other/figma-svgrepo-com.svg"
                skillName="Figma"
            />
            <SkillContent
                iconSrc="/Images/Other/miro-svgrepo-com.svg"
                skillName="Miro.com"
            />
            <SkillContent
                iconSrc="/Images/Other/iteration_5398368.png"
                skillName="Agile Methodology"
            />
        </div>
    );
}
export default OtherSkills;