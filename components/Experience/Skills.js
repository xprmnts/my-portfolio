import { Fragment } from 'react';
import classes from './Skills.module.css';

function Skills({ skills }) {
    const languages = [];
    const frameworks = [];
    const otherSkills = [];

    skills.forEach(skill => {
        if (skill.type === 'language') {
            languages.push(skill);
        } else if (skill.type === 'framework') {
            frameworks.push(skill);
        } else {
            otherSkills.push(skill);
        }
    });

    return (
        <Fragment>
            <div className={classes['skills-title']}>Skills</div>
            <ul className={classes['skills-list']}>
                {languages.map(lang => (
                    <li>{lang.name}</li>
                ))}
            </ul>
            <ul className={classes['skills-list']}>
                {frameworks.map(item => (
                    <li>{item.name}</li>
                ))}
            </ul>
            <ul className={classes['skills-list']}>
                {otherSkills.map(skill => (
                    <li className={classes['skills-list-item']}>
                        {skill.name}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
export default Skills;
