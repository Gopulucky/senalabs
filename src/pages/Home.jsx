import React from 'react';
import Hero from '../components/Hero';
import Protocols from '../components/Services';
import LiveOperations from '../components/Highlights';
import SystemMetrics from '../components/Stats';

const Home = () => {
    return (
        <main className="flex-grow">
            <Hero />
            <div className="section-divider" />
            <SystemMetrics />
            <div className="section-divider" />
            <Protocols />
            <div className="section-divider" />
            <LiveOperations />
        </main>
    );
};

export default Home;
