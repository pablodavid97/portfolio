const Project = ({ title = '', url = '#', image = '' }) => {
    const imageStyle = {
        backgroundImage: `url(${
            import.meta.env.VITE_PUBLIC_URL
        }/images/${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <a className='project' href={url} target={url} style={imageStyle}>
            <div className='project-meta'>
                <h3 className='project-title'>{title}</h3>
                <div className='divider'></div>
            </div>
        </a>
    );
};

export default Project;
