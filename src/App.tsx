import { useState, useEffect, useRef } from 'react';
import Projects from './components/Projects.tsx';
import useFetch from './hooks/useFetch.tsx';
import { fetchProjects } from './http.ts';

import './App.css';

const App = () => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(9);
    const prevScrollY = useRef(0);
    const { data, error, isLoading, hasMore } = useFetch(
        fetchProjects,
        { projects: [], total: 0 },
        {
            args: { limit, offset },
            dependencies: [limit, offset],
        }
    );

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        const isScrollingDown = currentScrollY > prevScrollY.current;
        prevScrollY.current = currentScrollY;

        const isOffsetGreaterThanTotal = offset + limit >= data.total;

        // Only trigger new fetch when scrolling down and near the bottom
        if (
            isScrollingDown &&
            window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 5 && // Adjust the threshold with bottom of the page
            hasMore &&
            !isLoading &&
            !isOffsetGreaterThanTotal
        ) {
            setOffset((prevOffset) => prevOffset + limit);
            setLimit(6);
        }
    };

    useEffect(() => {
        const debouncedScroll = () => {
            clearTimeout(debouncedScroll.timer);
            debouncedScroll.timer = setTimeout(handleScroll, 100); // Debounce scroll
        };

        window.addEventListener('scroll', debouncedScroll);
        return () => window.removeEventListener('scroll', debouncedScroll);
    }, [hasMore, isLoading]);

    return (
        <>
            <main className='container'>
                <header>
                    <h1>Portfolio</h1>
                    <p>Checkout the things I've built throughout the years.</p>
                </header>
                {isLoading && data.total === 0 && (
                    <div className='msg info'>
                        <h3>Loading</h3>
                        <p>Loading data, please wait...</p>
                    </div>
                )}
                {error.message && (
                    <div className='msg error'>
                        <h3>{error.title}</h3>
                        <p>{error.message}</p>
                    </div>
                )}
                <Projects projects={data.projects} />
                {isLoading && data.projects.length > 0 && (
                    <div className='msg info'>
                        <p>Loading more projects...</p>
                    </div>
                )}
            </main>
        </>
    );
};

export default App;
