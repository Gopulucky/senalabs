// Footer – Material Flat Enterprise
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

        // Simulate an API call
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
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/images/logo.jpeg" alt="SenA Labs" className="h-9 w-9 rounded-xl object-cover" />
                            <span className="text-lg font-bold text-gray-800">SenA Labs</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                            Empowering innovators through robotics, hackathons, and cutting-edge tech education.
                        </p>

                        {/* Newsletter */}
                        <form onSubmit={handleNewsletter} className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className="flex-1 px-4 py-2.5 bg-white rounded-xl text-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all"
                            />
                            <button type="submit" className="mat-btn mat-btn-primary !px-4 !rounded-xl">
                                <Send size={16} />
                            </button>
                        </form>
                        {subStatus === 'done' && <p className="text-mint text-xs mt-2 font-semibold">✓ Subscribed!</p>}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.to} className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-orange-400" />
                                <span>ashok.kasarapu@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-orange-400" />
                                <span>+91 85559 25670</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={14} className="text-orange-400 mt-0.5" />
                                <span>Sri Chaitanya Colony, Peddapalli</span>
                            </li>
                        </ul>

                        {/* Socials */}
                        <div className="flex gap-2 mt-6">
                            <a href="https://www.linkedin.com/in/kasarapu-ashok-287748186/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white elevation-1 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors">
                                <Linkedin size={15} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-white elevation-1 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors">
                                <Github size={15} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-200 py-4 px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p className="text-gray-400 text-xs">© 2026 SenA Labs. All rights reserved.</p>
                    <p className="text-gray-400 text-xs">Built with ❤️ by SenA Labs</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
