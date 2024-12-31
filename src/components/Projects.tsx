import Project from './Project';

const Projects = ({ projects }) => {
    return (
        <div className='projects'>
            {projects.map((project) => (
                <Project
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
