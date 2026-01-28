import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Mission />
        <Services />
        <Pricing />
        <Projects />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
