import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Mission from '../components/Mission';

const AboutPage = () => {
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white">🎯 About Us</h1>
                        <p className="text-gray-300 text-lg max-w-3xl">
                            Learn about our mission, vision, and what drives SenA Labs forward.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Component */}
            <Mission />

            {/* Mentor Details Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="badge badge-orange">🧑‍🏫 Mentorship</span>
                        <h2 className="text-3xl font-extrabold text-gray-800 mt-4 tracking-tight">
                            Meet Our Mentors
                        </h2>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Our experienced mentors guide students through every step of their innovation journey.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="mat-card !p-0 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="/mentor-details.jpeg"
                                alt="Mentor Details"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="mat-card !p-0 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="/mentor-details2.jpeg"
                                alt="Mentor Details 2"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
