import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Stats from '../components/Stats';

const Home = () => {
    return (
        <main className="flex-grow">
            <Hero />
            <Stats />
            <Services />
            <Pricing />
        </main>
    );
};

export default Home;
