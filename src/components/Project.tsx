import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    handleMouseMove,
    calculateTransform,
    getProjectImgStyle,
    getShineStyle,
} from '../util';

const Project = ({ title = '', url = '#', image = '' }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const { rotateX, rotateY, translateZ } = calculateTransform(
        mousePosition,
        dimensions
    );

    const imageStyle = getProjectImgStyle(image);

    const gradientX = (mousePosition.x / dimensions.width) * 100 || 50;
    const gradientY = (mousePosition.y / dimensions.height) * 100 || 50;
    const shineStyle = getShineStyle(gradientX, gradientY, isHovered);

    return (
        <motion.a
            className='project'
            onMouseMove={(event) =>
                handleMouseMove(event, setMousePosition, setDimensions)
            }
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
