import { useRef } from 'react';
import useGlobal from './hooks/useGlobal.tsx';
import Projects from './components/Projects.tsx';
import useFetch from './hooks/useFetch.tsx';
import { fetchProjects } from './http.ts';
import { handleScroll } from './util.ts';
import useDebouncedScroll from './hooks/useDebouncedScroll.tsx';
import InfoMessage from './components/InfoMessage.tsx';
import Spinner from './components/Spinner.tsx';

import './App.css';

const App = () => {
    const prevScrollY = useRef(0);
    const { limit, offset, setOffset, setLimit } = useGlobal();
    const { data, error, isLoading } = useFetch(
        fetchProjects,
        { projects: [], total: 0 },
        { limit, offset }
    );

    useDebouncedScroll(() => {
        handleScroll(
            offset,
            limit,
            data?.total,
            prevScrollY,
            setOffset,
            setLimit,
            isLoading
        );
    }, []);

    return (
        <>
            <main className='container'>
                <header>
                    <h1>Portfolio</h1>
                    <p>Checkout the things I've built throughout the years.</p>
                </header>
                {isLoading && data.total === 0 && <Spinner />}
                {error.message && (
                    <InfoMessage
                        title={error.title}
                        message={error.message}
                        type='error'
                    />
                )}
                <Projects projects={data.projects} />
                {isLoading && data.projects.length > 0 && <Spinner />}
            </main>
        </>
    );
};

export default App;
