import { useEffect } from 'react';

const useDebouncedScroll = (callback: () => void, delay: number = 100) => {
    useEffect(() => {
        const debouncedScroll = () => {
            clearTimeout(debouncedScroll.timer);
            debouncedScroll.timer = setTimeout(callback, delay); // Debounce scroll
        };

        window.addEventListener('scroll', debouncedScroll);
        return () => window.removeEventListener('scroll', debouncedScroll);
    }, [callback, delay]);
};

export default useDebouncedScroll;
