export const handleScroll = (
    offset,
    limit,
    totalItems,
    prevScrollY,
    setOffset,
    setLimit,
    isLoading
) => {
    const currentScrollY = window.scrollY;
    const BOTTOM_THRESHOLD = 5;

    const isScrollingDown = currentScrollY > prevScrollY.current;
    prevScrollY.current = currentScrollY;

    const isOffsetGreaterThanTotal = offset + limit >= totalItems;

    // Only trigger new fetch when scrolling down and near the bottom
    if (
        isScrollingDown &&
        window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - BOTTOM_THRESHOLD && // Adjust the threshold with bottom of the page
        !isLoading &&
        !isOffsetGreaterThanTotal
    ) {
        setOffset((prevOffset) => prevOffset + limit);
        setLimit(6);
    }
};

export const handleMouseMove = (e, setMousePosition, setDimensions) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    setDimensions({
        width: rect.width,
        height: rect.height,
    });
};

export const calculateTransform = (
    mousePosition: { x: number; y: number },
    dimensions: { width: number; height: number }
) => {
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

export const getProjectImgStyle = (image: string) => {
    return {
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_BASE_URL}/${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
};

export const getShineStyle = (
    gradientX: number,
    gradientY: number,
    isHovered: boolean
) => {
    return {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 255, 255, 0.8), transparent 70%)`,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        opacity: isHovered ? 0.5 : 0,
        transition: 'opacity 0.3s ease',
    };
};
