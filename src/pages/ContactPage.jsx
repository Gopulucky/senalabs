import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Contact from '../components/Contact';

const ContactPage = () => {
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white">📬 Contact Us</h1>
                        <p className="text-gray-300 text-lg max-w-3xl">
                            Have questions or want to collaborate? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Component */}
            <Contact />
        </div>
    );
};

export default ContactPage;
