import { useEffect, useState } from 'react';
import Projects from './components/Projects.tsx';
import { fetchProjects } from './http.ts';

import './App.css';

const App = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const projects = await fetchProjects();

            console.log('projects: ', projects);

            setProjects(projects);
        };
        fetchData();
    }, []);

    return (
        <>
            <main>
                <header>
                    <h1>Portfolio</h1>
                    <p>Checkout the things I've built throughout the years.</p>
                </header>
                <Projects projects={projects} />
            </main>
        </>
    );
};

export default App;
