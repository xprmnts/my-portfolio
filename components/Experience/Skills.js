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

            <img src='/images/koi.svg' alt='koi' className={classes.koi}></img>

            <ul className={classes['skills-list']}>
                {languages.map(lang => (
                    <li key={lang.name}>{lang.name}</li>
                ))}
            </ul>
            <ul className={classes['skills-list']}>
                {frameworks.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
            <ul className={classes['skills-list']}>
                {otherSkills.map(skill => (
                    <li
                        key={skill.name}
                        className={classes['skills-list-item']}
                    >
                        {skill.name}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
export default Skills;
