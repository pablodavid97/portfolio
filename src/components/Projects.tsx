import Project from './Project';
import type { ProjectType } from '../types';

type Props = {
    projects: ProjectType[];
};

const Projects = ({ projects }: Props) => {
    return (
        <div className='projects'>
            {projects.map((project) => (
                <Project
                    id={project.id}
                    key={project.id}
                    title={project.title}
                    url={project.url}
                    image={project.image}
                />
            ))}
        </div>
    );
};

export default Projects;
