import Education from './Education';
import Skills from './Skills';

import classes from './Experience.module.css';

const Experience = ({ experience, education, skills }) => {
    const experienceToRender = experience.map((item, index) => {
        const from = new Date(item.from.split('-')).toLocaleDateString(
            'en-US',
            {
                month: 'short',
                year: 'numeric'
            }
        );

        const to = new Date(item.to.split('-')).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        });

        return (
            <li key={index} className={classes.experience}>
                <div className={classes.date}>
                    {from} to {to}
                </div>
                <div className={classes.role}>{item.role}</div>
                <div>{item.company}</div>
            </li>
        );
    });

    return (
        <section className={classes.experience}>
            <div className={classes['experience-title']}>
                Brief History In Time
            </div>
            <ul>
                {experienceToRender}
                <Education education={education} />
                <Skills skills={skills} />
            </ul>
        </section>
    );
};

export default Experience;
