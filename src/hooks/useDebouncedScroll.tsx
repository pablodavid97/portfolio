import { useEffect } from 'react';

const useDebouncedScroll = (callback: () => void, delay: number = 100) => {
    useEffect(() => {
        let timer: number;

        const debouncedScroll = () => {
            clearTimeout(timer);
            timer = setTimeout(callback, delay);
        };

        window.addEventListener('scroll', debouncedScroll);
        return () => window.removeEventListener('scroll', debouncedScroll);
    }, [callback, delay]);
};

export default useDebouncedScroll;
