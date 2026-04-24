import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-aurora-pink/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-text-muted hover:text-aurora-cyan mb-8 transition-colors group font-mono text-sm">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        cd ~/home
                    </Link>
                    <div className="space-y-4">
                        <span className="badge-glass badge-pink">📬 Connect</span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Contact Us</h1>
                        <p className="text-text-secondary text-lg max-w-3xl">
                            Have questions or want to collaborate? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            <div className="section-divider" />
            <Contact />
        </div>
    );
};

export default ContactPage;
