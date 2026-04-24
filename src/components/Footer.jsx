// Footer – Dark Terminal with ASCII Banner
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, Send, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subStatus, setSubStatus] = useState(null);

    const handleNewsletter = async (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubStatus('sending');
        setTimeout(() => {
            setSubStatus('done');
            setEmail('');
        }, 1000);
    };

    const quickLinks = [
        { name: 'Home', to: '/' },
        { name: 'Hackathons', to: '/hackathons' },
        { name: 'Programs', to: '/programs' },
        { name: 'Projects', to: '/projects' },
    ];

    return (
        <footer className="relative border-t border-border-subtle bg-bg-surface/50">
            {/* Subtle ASCII Banner Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <pre className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[120px] md:text-[180px] font-bold text-text-dim/[0.03] whitespace-nowrap select-none leading-none tracking-tighter">
                    SENA LABS
                </pre>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
                <div className="grid md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/images/logo.jpeg" alt="SenA Labs" className="h-9 w-9 rounded-xl object-cover" />
                            <span className="font-display text-lg font-bold text-text-primary">SenA Labs</span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
                            Empowering innovators through robotics, hackathons, and cutting-edge tech education.
                        </p>

                        {/* Newsletter – Terminal Style */}
                        <form onSubmit={handleNewsletter} className="flex gap-2">
                            <div className="flex-1 relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-text-dim text-sm">$</span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="subscribe --email"
                                    className="input-dark !pl-7 font-mono text-sm"
                                />
                            </div>
                            <button type="submit" className="btn-aurora btn-aurora-primary !px-4 !rounded-xl">
                                <Send size={16} />
                            </button>
                        </form>
                        {subStatus === 'done' && <p className="font-mono text-terminal-green text-xs mt-2">$ ✓ subscribed successfully</p>}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="terminal-label mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.to} className="text-text-secondary hover:text-aurora-cyan text-sm font-mono transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="terminal-label mb-4">Contact</h4>
                        <ul className="space-y-3 text-text-secondary text-sm">
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-primary" />
                                <span className="font-mono text-xs">ashok.kasarapu@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-primary" />
                                <span className="font-mono text-xs">+91 85559 25670</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={14} className="text-primary mt-0.5" />
                                <span className="font-mono text-xs">Sri Chaitanya Colony, Peddapalli</span>
                            </li>
                        </ul>

                        {/* Socials */}
                        <div className="flex gap-2 mt-6">
                            <a href="https://www.linkedin.com/in/kasarapu-ashok-287748186/" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center text-text-muted hover:text-aurora-blue hover:bg-aurora-blue/10 transition-all">
                                <Linkedin size={15} />
                            </a>
                            <a href="#"
                                className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/10 transition-all">
                                <Github size={15} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="section-divider" />
            <div className="py-4 px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p className="font-mono text-text-dim text-xs">© 2026 SenA Labs. All rights reserved.</p>
                    <p className="font-mono text-text-dim text-xs">Built with ❤️ by SenA Labs</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
