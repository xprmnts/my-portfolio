import Education from "./Education";
import Skills from "./Skills";

import classes from "./Experience.module.css";

const Experience = ({ experience, education, skills }) => {
    const experienceToRender = experience.map((item, index) => {
        const from = new Date(item.from).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
        });

        const to = item.to
            ? new Date(item.to).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric"
              })
            : "Present";

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
            <div className={classes["experience-title"]}>
                Brief History In Time
            </div>
            <ul className={classes["experience-list"]}>{experienceToRender}</ul>
            <Education education={education} />
            <Skills skills={skills} />
        </section>
    );
};

export default Experience;
