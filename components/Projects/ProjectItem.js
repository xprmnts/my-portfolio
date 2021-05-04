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
                    <div
                        className={
                            project.comingSoon === 'true'
                                ? `${classes['coming-soon']}`
                                : ''
                        }
                    >
                        {project.title}
                    </div>
                </h4>
            </a>
            <p>{project.description}</p>
        </li>
    );
}

export default ProjectItem;
