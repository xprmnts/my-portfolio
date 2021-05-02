import { getProjects } from '../../lib/content-utils';
import Projects from './Projects';

function ProjectItem({ project }) {
    return (
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
    );
}

export default ProjectItem;
