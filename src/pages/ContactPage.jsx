import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Contact from '../components/Contact';
import AsciiArt from '../components/ui/AsciiArt';

const ContactPage = () => {
    return (
        <div className="min-h-screen relative">
            {/* Contact Radiating Signals Background */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-[70vh] pointer-events-none z-0 ascii-mask-fade opacity-30 mix-blend-screen overflow-hidden flex justify-end">
                <AsciiArt 
                    theme="contact_network" 
                    accent="aurora-pink" 
                    rows={40} 
                    cols={80} 
                    style={{ '--ascii-font-size': '18px', '--ascii-line-height': '1.1' }} 
                />
            </div>

            <section className="pt-32 pb-16 px-6 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-aurora-pink/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-text-muted hover:text-aurora-cyan mb-8 transition-colors group font-mono text-sm">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        cd ~/home
                    </Link>
                    <div className="space-y-4">
                        <span className="badge-glass badge-pink">📬 Connect</span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary text-shadow-xl">Contact Us</h1>
                        <p className="text-text-secondary text-lg max-w-3xl mb-8 bg-bg-deep/50 backdrop-blur-sm p-4 rounded-xl border border-border-subtle inline-block">
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
