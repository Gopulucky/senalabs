import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

// Simple X icon component since it might not be in older lucide versions or explicitly named yet
const XIcon = ({ size = 20, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

const Footer = () => {
    const [email, setEmail] = React.useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            if (data.success) {
                alert('Subscribed successfully!');
                setEmail('');
            } else {
                alert(data.message || 'Subscription failed.');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            alert('An error occurred during subscription.');
        }
    };

    return (
        <footer className="bg-primary pt-16 pb-8 border-t border-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Newsletter / CTA */}
                <div className="mb-16 pb-12 border-b border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">Join SenA Labs</h3>
                        <p className="text-gray-400">Stay updated on workshops and events.</p>
                    </div>
                    <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email here"
                            required
                            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 w-full md:w-80"
                        />
                        <button type="submit" className="px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                            Send
                        </button>
                    </form>
                </div>

                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">SenA Labs</h3>
                        <p className="text-gray-400 text-sm">
                            Empowering students and creators with robotics and tech challenges.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="text-xs font-bold">TikTok</span></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center space-x-2">
                                <Mail size={16} />
                                <span>hello@senalabs.io</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin size={16} />
                                <span>+1-555-789-1234</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 SenA Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
