import React from 'react';
import SkillContent from './SkillsContent';

function BackendSkills() {
    return (
        <div className="backend-skills">
            <SkillContent
                iconSrc="/Images/Backend/nodejs-svgrepo-com.svg"
                skillName="NodeJS"
            />
            <SkillContent
                iconSrc="/Images/Backend/nodejs-svgrepo-com.svg"
                skillName="ExpressJS"
            />
            <SkillContent
                iconSrc="/Images/Backend/mongodb-svgrepo-com.svg"
                skillName="MongoDB"
            />
            <SkillContent
                iconSrc="/Images/Backend/mongodb-svgrepo-com.svg"
                skillName="Mongoose"
            />
            <SkillContent
                iconSrc="/Images/Backend/php-svgrepo-com.svg"
                skillName="PHP Larvel"
            />
            <SkillContent
                iconSrc="/Images/Backend/mysql-svgrepo-com.svg"
                skillName="My SQL"
            />
            <SkillContent
                iconSrc="/Images/Backend/connectdevelop.svg"
                skillName="Restful APIs"
            />
        </div>
    );
}
export default BackendSkills;