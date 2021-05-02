import classes from './Education.module.css';

function Education({ education }) {
    return (
        <li className={classes.education}>
            <div className={classes.date}>
                {education.from} to {education.to}
            </div>
            <div className={classes.degree}>{education.degree}</div>
            <div>{education.school}</div>
        </li>
    );
}

export default Education;
