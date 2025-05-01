import { useRef } from 'react';
import useGlobal from './hooks/useGlobal.tsx';
import Projects from './components/Projects.tsx';
import { handleScroll } from './util.ts';
import useDebouncedScroll from './hooks/useDebouncedScroll.tsx';

import './App.css';

const App = () => {
    const prevScrollY = useRef<number>(0);
    const { limit, offset, setOffset, setLimit } = useGlobal();
    const isLoading = false;
    const PROJECT_COUNT = 18;

    useDebouncedScroll(() => {
        handleScroll(
            offset,
            limit,
            PROJECT_COUNT,
            prevScrollY,
            setOffset,
            setLimit,
            isLoading
        );
    });

    const projects = [
        {
            id: 1,
            key: 1,
            title: 'Tanstack Events',
            url: 'https://tanstack-events-project.vercel.app',
            image: 'tanstack-events.png',
        },
        {
            id: 6,
            key: 6,
            title: 'Next Level Food',
            url: 'https://next-foodies-project-rust.vercel.app/',
            image: 'next-level-food.png',
        },
        {
            id: 2,
            key: 2,
            title: 'Travel Agency',
            url: 'https://travel-project-ashy.vercel.app/',
            image: 'travel-agency.png',
        },
        {
            id: 10,
            key: 10,
            title: 'PlacePicker',
            url: 'https://place-picker-app-delta.vercel.app/',
            image: 'place-picker.png',
        },
        {
            id: 18,
            key: 18,
            title: 'ReactQuiz',
            url: 'https://react-quiz-app-one-orpin.vercel.app/',
            image: 'react-quiz.png',
        },
        {
            id: 13,
            key: 13,
            title: 'Final Countdown',
            url: 'https://final-countdown-five.vercel.app/',
            image: 'final-countdown.png',
        },
        {
            id: 15,
            key: 15,
            title: 'Investment Calculator',
            url: 'https://investment-calculator-five-navy.vercel.app/',
            image: 'investment-calculator.png',
        },
        {
            id: 9,
            key: 9,
            title: 'React Challenges',
            url: 'https://framer-motion-challenge-project.vercel.app/',
            image: 'framer-motion-challenge.png',
        },
        {
            id: 8,
            key: 8,
            title: 'Events Authentication',
            url: 'https://authentication-app-two-eta.vercel.app/',
            image: 'authentication-app.png',
        },
        {
            id: 3,
            key: 3,
            title: 'React TS Todo',
            url: 'https://react-ts-todo-indol.vercel.app/',
            image: 'react-ts-todo.png',
        },
        {
            id: 4,
            key: 4,
            title: 'Server Components',
            url: 'https://react-server-components-peach.vercel.app/',
            image: 'react-server-components.png',
        },
        {
            id: 5,
            key: 5,
            title: 'Redux Hooks',
            url: 'https://react-redux-hooks.vercel.app/',
            image: 'react-redux-hooks.png',
        },
        {
            id: 7,
            key: 7,
            title: 'Next Routes',
            url: 'https://next-routes-project.vercel.app/',
            image: 'next-routes.png',
        },
        {
            id: 10,
            key: 10,
            title: 'Motion Playground',
            url: 'https://framer-motion-playground-rho.vercel.app/',
            image: 'framer-motion-playground.png',
        },
        {
            id: 11,
            key: 11,
            title: 'SPA Events',
            url: 'https://spa-events-app.vercel.app/',
            image: 'spa-events.png',
        },
        {
            id: 12,
            key: 12,
            title: 'Redux Shopping',
            url: 'https://redux-shopping-app-livid.vercel.app/',
            image: 'redux-shopping-cart.png',
        },
        {
            id: 13,
            key: 13,
            title: 'Redux Auth',
            url: 'https://redux-authentication-three.vercel.app/',
            image: 'redux-auth.png',
        },
        {
            id: 14,
            key: 14,
            title: 'Redux Counter',
            url: 'https://redux-counter-steel.vercel.app/',
            image: 'redux-counter.png',
        },
        {
            id: 15,
            key: 15,
            title: 'ReactFood',
            url: 'https://food-order-app-seven-jade.vercel.app/',
            image: 'react-food.png',
        },
        {
            id: 16,
            key: 16,
            title: 'React Counter',
            url: 'https://counter-project-omega.vercel.app/',
            image: 'react-counter.png',
        },
        {
            id: 17,
            key: 17,
            title: 'React Forms',
            url: 'https://react-form-actions.vercel.app/',
            image: 'react-forms.png',
        },
        {
            id: 11,
            key: 11,
            title: 'React Shopping',
            url: 'https://react-shopping-app-seven.vercel.app/',
            image: 'react-shopping.png',
        },
        {
            id: 12,
            key: 12,
            title: 'Project Manager',
            url: 'https://react-project-manager-app.vercel.app/',
            image: 'react-project-manager.png',
        },
        {
            id: 14,
            key: 14,
            title: 'ReactArt',
            url: 'https://react-art-project.vercel.app/',
            image: 'react-art.png',
        },
        {
            id: 16,
            key: 16,
            title: 'Tic Tac Toe',
            url: 'https://react-tic-tac-toe-two-snowy.vercel.app/',
            image: 'tic-tac-toe.png',
        },
        {
            id: 17,
            key: 17,
            title: 'React Essentials',
            url: 'https://react-components-black-rho.vercel.app/',
            image: 'react-essentials.png',
        },
        {
            id: 18,
            key: 18,
            title: 'React Blog',
            url: 'https://react-blog-app-tau-self.vercel.app/',
            image: 'react-blog-app.png',
        },
    ];

    return (
        <>
            <main className='container'>
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
