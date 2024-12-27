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
                    <Project
                        key={1}
                        title='Tanstack Events'
                        url='https://tanstack-events-project.vercel.app'
                        image='image.png'
                    />
                    <Project key={2} />
                    <Project key={3} />
                    <Project key={4} />
                    <Project key={5} />
                    <Project key={6} />
                    <Project key={7} />
                    <Project key={8} />
                    <Project key={9} />
                </div>
            </main>
        </>
    );
};

export default App;
