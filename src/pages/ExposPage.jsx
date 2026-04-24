import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Gallery from '../components/Gallery';
import AsciiArt from '../components/ui/AsciiArt';

const ExposPage = () => {
    return (
        <div className="min-h-screen relative">
            {/* Expo Showcase Background Nodes */}
            <div className="absolute top-0 left-0 w-full md:w-1/2 h-[60vh] pointer-events-none z-0 ascii-mask-fade opacity-30 mix-blend-screen overflow-hidden flex justify-start">
                <AsciiArt 
                    theme="expo_showcase" 
                    accent="aurora-violet" 
                    rows={40} 
                    cols={80} 
                    style={{ '--ascii-font-size': '18px', '--ascii-line-height': '1.2' }} 
                />
            </div>

            <section className="pt-32 pb-16 px-6 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-aurora-violet/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-text-muted hover:text-aurora-cyan mb-8 transition-colors group font-mono text-sm">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        cd ~/home
                    </Link>
                    <div className="space-y-4">
                        <span className="badge-glass badge-violet">🎪 Events</span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary text-shadow-xl">Expos & Events</h1>
                        <p className="text-text-secondary text-lg max-w-3xl mb-8 bg-bg-deep/50 backdrop-blur-sm p-4 rounded-xl border border-border-subtle inline-block">
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
