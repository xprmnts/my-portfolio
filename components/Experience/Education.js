import classes from './Education.module.css';

function Education({ education }) {
    return (
        <ul className={classes['education-list']}>
            <li>
                <div className={classes.date}>
                    {education.from} to {education.to}
                </div>
                <div className={classes.degree}>{education.degree}</div>
                <div>{education.school}</div>
            </li>
        </ul>
    );
}

export default Education;
