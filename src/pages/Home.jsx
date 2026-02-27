import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Highlights from '../components/Highlights';
import Stats from '../components/Stats';

const Home = () => {
    return (
        <main className="flex-grow">
            <Hero />
            <Stats />
            <Services />
            <Highlights />
        </main>
    );
};

export default Home;
