// HackathonsPage – Aurora Terminal Theme
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Lightbulb, Target } from 'lucide-react';
import AsciiArt from '../components/ui/AsciiArt';

const HackathonCard = ({ title, subtitle, description, icon: Icon }) => (
    <div className="glass-card card-hover-glow p-8 mb-6">
        <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={24} />
            </div>
            <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-text-primary mb-1">{title}</h3>
                {subtitle && <p className="text-aurora-cyan font-mono text-sm mb-3">{subtitle}</p>}
            </div>
        </div>
        <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
);

const HackathonDetails = () => {
    const hackathons = [
        { title: 'MSME 5.0 - Sahaya Setu', subtitle: 'Digital Solution for Rural Businesses', description: 'Sahaya Setu is a digital solution created to support small and rural businesses in handling their inventory, logistics, and government scheme access with ease. The platform includes voice assistance, local language options, and easy-to-use dashboards for business owners, government officials, and NGO volunteers.', icon: Lightbulb },
        { title: 'IIT Thirupati - AGRI ASSIST', subtitle: 'Smart Farming AI Solution', description: 'AGRI ASSIST is a smart farming solution developed to support small and marginal farmers using AI, IoT, and satellite data. The platform provides voice-based guidance in local languages, crop health and pest monitoring, weather and irrigation planning, and soil health tracking.', icon: Target },
        { title: 'IIT Thirupati - Agri Roar', subtitle: 'Smart Farming Robot Kit', description: 'Agri Roar is a low-cost smart farming robot kit for small and rural farmers. It uses sensors, AI, and satellite data to monitor soil, crops, pests, and weather, while working offline with voice alerts in local languages. Powered by solar energy, it detects plant diseases and protects crops.', icon: Target },
        { title: 'Statathon 2025 - SurveySage', subtitle: 'AI-Powered Smart Survey Tool', description: 'SurveySage is an AI-powered smart survey tool designed to make data collection and analysis more efficient. It enables real-time data analysis, applies predictive modeling to identify patterns and trends, and provides a user-friendly dashboard for clear visualization.', icon: Lightbulb },
        { title: 'UIDAI Hackathon - Aadhaar Data Analysis', subtitle: 'Data Analytics & Visualization', description: 'This project focuses on transforming large-scale Aadhaar enrollment and update data into meaningful insights using data analytics, visualization, and anomaly detection techniques. The project analyzes temporal, geographic, and demographic patterns.', icon: Target },
    ];

    return (
        <div className="min-h-screen relative">
            {/* Hackathon Matrix Network Background */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-[70vh] pointer-events-none z-0 ascii-mask-fade-right opacity-30 mix-blend-screen overflow-hidden flex justify-end">
                <AsciiArt 
                    theme="hackathon_network" 
                    accent="primary" 
                    rows={40} 
                    cols={80} 
                    style={{ '--ascii-font-size': '18px', '--ascii-line-height': '1.1' }} 
                />
            </div>

            <section className="pt-32 pb-16 px-6 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-text-muted hover:text-aurora-cyan mb-8 transition-colors group font-mono text-sm">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        cd ~/home
                    </Link>
                    <div className="space-y-4">
                        <span className="badge-glass badge-orange">🏆 Quest Log</span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary text-shadow-xl">Our Hackathon Journey</h1>
                        <p className="text-text-secondary text-lg max-w-3xl mb-8 bg-bg-deep/50 backdrop-blur-sm p-4 rounded-xl border border-border-subtle inline-block">
                            Explore our innovative solutions developed through various national and international hackathons.
                        </p>
                    </div>
                </div>
            </section>
            <div className="section-divider" />

            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="section-header-terminal mb-8">
                        <span className="terminal-label">HACKATHON PROJECTS</span>
                        <span className="section-counter">[ 01 / 03 ]</span>
                    </div>
                    {hackathons.map((h, i) => <HackathonCard key={i} {...h} />)}
                </div>
            </section>
            <div className="section-divider" />

            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="section-header-terminal mb-8">
                        <span className="terminal-label">SMART INDIA HACKATHON</span>
                        <span className="section-counter">[ 02 / 03 ]</span>
                    </div>
                    <div className="glass-card p-8 md:p-12">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center"><Trophy size={24} /></div>
                            <div>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-1">Smart India Hackathon (SIH)</h2>
                                <p className="text-aurora-cyan font-mono text-sm">Team AyurSutra</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <p className="text-text-secondary leading-relaxed mb-4">We participated in the Smart India Hackathon (SIH), India's national innovation initiative that encourages students to solve real-world problems.</p>
                                <div className="flex items-center gap-2"><Users size={18} className="text-aurora-cyan" /><span className="font-mono text-sm text-text-primary">6 Team Members</span></div>
                            </div>
                            <div>
                                <h4 className="font-display text-lg font-bold text-text-primary mb-3">💡 Our Focus</h4>
                                <p className="text-text-secondary leading-relaxed">Our project focused on improving the Ayurvedic patient experience, addressing challenges such as appointment booking, therapy scheduling, treatment tracking, and patient management.</p>
                            </div>
                        </div>
                        <div className="border-t border-border-subtle pt-8">
                            <h4 className="font-display text-lg font-bold text-text-primary mb-4">📱 Solution: AyurSutra</h4>
                            <p className="text-text-secondary leading-relaxed mb-6">AyurSutra – Panchakarma Patient Management and Therapy Scheduling Software is a user-friendly mobile application that enables patients to connect with Ayurvedic doctors.</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div><h5 className="font-display font-bold text-text-primary mb-2">🛠️ Our Approach</h5><p className="text-text-secondary text-sm">We selected the problem from the SIH portal, identified gaps, and built the solution from scratch.</p></div>
                                <div><h5 className="font-display font-bold text-text-primary mb-2">🏆 Experience</h5><p className="text-text-secondary text-sm">SIH provided hands-on learning, expert mentorship, teamwork exposure, and recognition through certificates.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-divider" />

            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="section-header-terminal mb-8">
                        <span className="terminal-label">JOIN US</span>
                        <span className="section-counter">[ 03 / 03 ]</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-text-primary mb-4">Join Us in Innovation</h2>
                    <p className="text-text-secondary mb-8 text-lg">Ready to be part of our next hackathon team? Get in touch.</p>
                    <Link to="/contact" className="btn-aurora btn-aurora-warm font-mono">$ contact --senalabs</Link>
                </div>
            </section>
        </div>
    );
};

export default HackathonDetails;
