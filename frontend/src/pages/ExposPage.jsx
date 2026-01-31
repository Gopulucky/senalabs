import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Gallery from '../components/Gallery';

const ExposPage = () => {
    return (
        <div className="min-h-screen bg-accent">
            {/* Hero Section */}
            <section className="bg-primary pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">🎪 Expos & Events</h1>
                        <p className="text-gray-300 text-lg max-w-3xl">
                            Explore our gallery of events, exhibitions, and memorable moments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Component */}
            <Gallery />
        </div>
    );
};

export default ExposPage;
