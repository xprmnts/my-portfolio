import ProjectItem from './ProjectItem';
import classes from './Projects.module.css';

function Projects(props) {
    const renderedProjectsList = props.projects.map(project => (
        <ProjectItem key={project.title} project={project} />
    ));

    return (
        <section className={classes.projects}>
            <div className={classes['projects-title']}>Projects</div>
            <ul>{renderedProjectsList}</ul>
        </section>
    );
}
export default Projects;
