import React from 'react';
import BlogList from './BlogList.component';
import './Home.css';

const Home = () => (
    <>
        <section className='hero'>
            <div className='hero-content'>
                <h1>Hi There, I'm Pablo</h1>
                <img
                    src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                    alt='3D Avatar'
                    className='avatar'
                />
                <h4>
                    I'm a Software Developer based in Quito. Focusing on Web
                    technologies like React, TypeScript, and Node.js.
                </h4>
            </div>
        </section>
        <section className='blog-list-section'>
            <BlogList />
        </section>
    </>
);

export default Home;
