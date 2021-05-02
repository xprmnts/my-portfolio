import classes from './ProjectItem.module.css';

function ProjectItem({ project }) {
    return (
        <li className={classes['project-item']}>
            <a
                href={project.url ? project.url : '/'}
                target='_blank'
                rel='noopener noreferrer'
            >
                <h4>
                    <div>{project.title}</div>
                </h4>
                <p>{project.description}</p>
            </a>
        </li>
    );
}

export default ProjectItem;
