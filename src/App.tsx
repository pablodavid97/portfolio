import Project from './components/Project';

import './App.css';

const App = () => {
    return (
        <>
            <main>
                <header>
                    <h1>Portfolio</h1>
                    <p>Checkout the things I've built throughout the years.</p>
                </header>
                <div className='projects'>
                    <Project key={1} number={1} />
                    <Project key={2} number={2} />
                    <Project key={3} number={3} />
                    <Project key={4} number={4} />
                    <Project key={5} number={5} />
                    <Project key={6} number={6} />
                    <Project key={7} number={7} />
                    <Project key={8} number={8} />
                    <Project key={9} number={9} />
                </div>
            </main>
        </>
    );
};

export default App;
