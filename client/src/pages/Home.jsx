import React from 'react'
import About from './About';
import Hero from '../pages/Hero';
import Features from './Features';
import Parallelx from '../components/Parallelx';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Parallelx/>
            <About />
        </>
    )
}

export default Home