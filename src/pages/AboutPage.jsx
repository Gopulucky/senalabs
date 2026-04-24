import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Mission from '../components/Mission';
import AsciiArt from '../components/ui/AsciiArt';

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-aurora-violet/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-text-muted hover:text-aurora-cyan mb-8 transition-colors group font-mono text-sm">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        cd ~/home
                    </Link>
                    <div className="space-y-4">
                        <span className="badge-glass badge-orange">🎯 About</span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">About Us</h1>
                        <p className="text-text-secondary text-lg max-w-3xl mb-8">
                            Learn about our mission, vision, and what drives SenA Labs forward.
                        </p>
                        
                        <div className="glass-card p-6 inline-block mt-8">
                            <AsciiArt theme="ai_brain" accent="aurora-violet" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider" />
            <Mission />

            {/* Mentor Details Section */}
            <div className="section-divider" />
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="badge-glass badge-orange mb-4 inline-block">🧑‍🏫 Mentorship</span>
                        <h2 className="font-display text-3xl font-extrabold text-text-primary mt-4 tracking-tight">
                            Meet Our Mentors
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-violet rounded-full mx-auto mt-4" />
                        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
                            Our experienced mentors guide students through every step of their innovation journey.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-card !p-0 overflow-hidden rounded-2xl card-hover-glow">
                            <img src="/mentor-details.jpeg" alt="Mentor Details" className="w-full h-auto object-cover" />
                        </div>
                        <div className="glass-card !p-0 overflow-hidden rounded-2xl card-hover-glow">
                            <img src="/mentor-details2.jpeg" alt="Mentor Details 2" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
