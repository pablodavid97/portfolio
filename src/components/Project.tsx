import { useState } from 'react';
import { motion } from 'framer-motion';

const Project = ({ title = '', url = '#', image = '' }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });

        setDimensions({
            width: rect.width,
            height: rect.height,
        });
    };

    const calculateTransform = () => {
        const { x, y } = mousePosition;
        const { width, height } = dimensions;

        if (width === 0 || height === 0)
            return { rotateX: 0, rotateY: 0, translateZ: 0 };

        const centerX = width / 2;
        const centerY = height / 2;

        const normalizedX = (x - centerX) / centerX;
        const normalizedY = (y - centerY) / centerY;

        const rotateX = normalizedY * 15;
        const rotateY = normalizedX * 15;

        const distanceToCenter = Math.sqrt(normalizedX ** 2 + normalizedY ** 2);
        const translateZ = 15 - distanceToCenter * 30;

        return { rotateX, rotateY, translateZ };
    };

    const { rotateX, rotateY, translateZ } = calculateTransform();

    const gradientX = (mousePosition.x / dimensions.width) * 100 || 50;
    const gradientY = (mousePosition.y / dimensions.height) * 100 || 50;

    const imageStyle = {
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_BASE_URL}/${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const shineStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 255, 255, 0.8), transparent 70%)`,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        opacity: isHovered ? 0.5 : 0, // Show only on hover
        transition: 'opacity 0.3s ease', // Smooth transition in/out
    };

    return (
        <motion.a
            className='project'
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)} // Activate shine on hover
            onMouseLeave={() => {
                setIsHovered(false); // Deactivate shine
                setMousePosition({
                    x: dimensions.width / 2,
                    y: dimensions.height / 2,
                });
            }}
            animate={{
                rotateX,
                rotateY,
                z: translateZ,
            }}
            whileHover={{ scale: 1.15 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }}
            href={url}
            target={url}
            style={imageStyle}
        >
            <div className='shine' style={shineStyle}></div>
            <div className='project-meta'>
                <h3 className='project-title'>{title}</h3>
                <div className='divider'></div>
            </div>
        </motion.a>
    );
};

export default Project;
