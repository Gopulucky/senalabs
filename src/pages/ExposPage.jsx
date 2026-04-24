import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Gallery from '../components/Gallery';

const ExposPage = () => {
    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-aurora-violet/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-text-muted hover:text-aurora-cyan mb-8 transition-colors group font-mono text-sm">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        cd ~/home
                    </Link>
                    <div className="space-y-4">
                        <span className="badge-glass badge-violet">🎪 Events</span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Expos & Events</h1>
                        <p className="text-text-secondary text-lg max-w-3xl">
                            Explore our gallery of events, exhibitions, and memorable moments.
                        </p>
                    </div>
                </div>
            </section>

            <div className="section-divider" />
            <Gallery />
        </div>
    );
};

export default ExposPage;
