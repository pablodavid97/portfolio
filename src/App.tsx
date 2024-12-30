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
                        image='tanstack-events.png'
                    />
                    <Project
                        key={6}
                        title='Next Level Food'
                        url='https://next-foodies-project-rust.vercel.app/'
                        image='next-level-food.png'
                    />
                    <Project
                        key={2}
                        title='Travel Agency'
                        url='https://travel-project-ashy.vercel.app/'
                        image='travel-agency.png'
                    />
                    <Project
                        key={10}
                        title='PlacePicker'
                        url='https://place-picker-app-delta.vercel.app/'
                        image='place-picker.png'
                    />
                    <Project
                        key={18}
                        title='ReactQuiz'
                        url='https://react-quiz-app-one-orpin.vercel.app/'
                        image='react-quiz.png'
                    />
                    <Project
                        key={13}
                        title='Final Countdown'
                        url='https://final-countdown-five.vercel.app/'
                        image='final-countdown.png'
                    />
                    <Project
                        key={15}
                        title='Investment Calculator'
                        url='https://investment-calculator-five-navy.vercel.app/'
                        image='investment-calculator.png'
                    />
                    <Project
                        key={9}
                        title='React Challenges'
                        url='https://framer-motion-challenge-project.vercel.app/'
                        image='framer-motion-challenge.png'
                    />
                    <Project
                        key={8}
                        title='Events Authentication'
                        url='https://authentication-app-two-eta.vercel.app/'
                        image='authentication-app.png'
                    />
                    <Project
                        key={3}
                        title='React TS Todo'
                        url='https://react-ts-todo-indol.vercel.app/'
                        image='react-ts-todo.png'
                    />
                    <Project
                        key={4}
                        title='Server Components'
                        url='https://react-server-components-peach.vercel.app/'
                        image='react-server-components.png'
                    />
                    <Project
                        key={5}
                        title='Redux Hooks'
                        url='https://react-redux-hooks.vercel.app/'
                        image='react-redux-hooks.png'
                    />
                    <Project
                        key={7}
                        title='Next Routes'
                        url='https://next-routes-project.vercel.app/'
                        image='next-routes.png'
                    />
                    <Project
                        key={10}
                        title='Motion Playground'
                        url='https://framer-motion-playground-rho.vercel.app/'
                        image='framer-motion-playground.png'
                    />
                    <Project
                        key={11}
                        title='SPA Events'
                        url='https://spa-events-app.vercel.app/'
                        image='spa-events.png'
                    />
                    <Project
                        key={12}
                        title='Redux Shopping'
                        url='https://redux-shopping-app-livid.vercel.app/'
                        image='redux-shopping-cart.png'
                    />
                    <Project
                        key={13}
                        title='Redux Auth'
                        url='https://redux-authentication-three.vercel.app/'
                        image='redux-auth.png'
                    />
                    <Project
                        key={14}
                        title='Redux Counter'
                        url='https://redux-counter-steel.vercel.app/'
                        image='redux-counter.png'
                    />
                    <Project
                        key={15}
                        title='ReactFood'
                        url='https://food-order-app-seven-jade.vercel.app/'
                        image='react-food.png'
                    />
                    <Project
                        key={16}
                        title='React Counter'
                        url='https://counter-project-omega.vercel.app/'
                        image='react-counter.png'
                    />
                    <Project
                        key={17}
                        title='React Forms'
                        url='https://react-form-actions.vercel.app/'
                        image='react-forms.png'
                    />
                    <Project
                        key={11}
                        title='React Shopping'
                        url='https://react-shopping-app-seven.vercel.app/'
                        image='react-shopping.png'
                    />
                    <Project
                        key={12}
                        title='Project Manager'
                        url='https://react-project-manager-app.vercel.app/'
                        image='react-project-manager.png'
                    />
                    <Project
                        key={14}
                        title='ReactArt'
                        url='https://react-art-project.vercel.app/'
                        image='react-art.png'
                    />
                    <Project
                        key={16}
                        title='Tic Tac Toe'
                        url='https://react-tic-tac-toe-two-snowy.vercel.app/'
                        image='tic-tac-toe.png'
                    />
                    <Project
                        key={17}
                        title='React Essentials'
                        url='https://react-components-black-rho.vercel.app/'
                        image='react-essentials.png'
                    />
                    <Project
                        key={18}
                        title='React Blog'
                        url='https://react-blog-app-tau-self.vercel.app/'
                        image='react-blog-app.png'
                    />
                </div>
            </main>
        </>
    );
};

export default App;
