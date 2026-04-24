// ProjectsPage – Aurora Terminal Theme
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Cpu, Leaf } from 'lucide-react';

const ProjectDetailCard = ({ title, description, tags, imagePlaceholder, icon: Icon }) => (
    <div className="glass-card card-hover-glow p-8 mb-8">
        <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-aurora-cyan/20 to-aurora-violet/20 text-aurora-cyan rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon size={32} />
            </div>
            <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-3">{title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => <span key={tag} className="badge-glass badge-cyan">{tag}</span>)}
                </div>
            </div>
        </div>
        <div className="aspect-video bg-gradient-to-br from-bg-surface to-bg-elevated rounded-2xl border border-border-subtle flex items-center justify-center overflow-hidden">
            <div className="text-7xl opacity-30 hover:opacity-50 hover:scale-110 transition-all duration-500">{imagePlaceholder}</div>
        </div>
    </div>
);

const ProjectsDetails = () => {
    const projects = [
        { title: 'Smart Bot', description: 'An autonomous robot navigating complex mazes using advanced computer vision and pathfinding algorithms.', tags: ['Python', 'OpenCV', 'Raspberry Pi', 'AI', 'Robotics'], imagePlaceholder: '🤖', icon: Cpu },
        { title: 'Eco Sensor', description: 'A real-time air quality monitoring device that provides instant feedback on environmental conditions.', tags: ['IoT', 'React', 'Node.js', 'Environmental Tech'], imagePlaceholder: '🌱', icon: Leaf },
    ];

    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-terminal-green/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-text-muted hover:text-aurora-cyan mb-8 transition-colors group font-mono text-sm">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        cd ~/home
                    </Link>
                    <div className="space-y-4">
                        <span className="badge-glass badge-green">🔬 Crafting Table</span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Research & Development Projects</h1>
                        <p className="text-text-secondary text-lg max-w-3xl">
                            Explore our innovative R&D projects where we combine cutting-edge technology with practical applications.
                        </p>
                    </div>
                </div>
            </section>
            <div className="section-divider" />

            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="section-header-terminal mb-8">
                        <span className="terminal-label">ACTIVE PROJECTS</span>
                        <span className="section-counter">[ 01 / 03 ]</span>
                    </div>
                    {projects.map((p, i) => <ProjectDetailCard key={i} {...p} />)}
                </div>
            </section>
            <div className="section-divider" />

            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="section-header-terminal mb-8">
                        <span className="terminal-label">TECH STACK</span>
                        <span className="section-counter">[ 02 / 03 ]</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-text-primary mb-8 text-center">Technologies We Use</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '🐍', title: 'Python & AI', desc: 'Machine learning, computer vision, and data processing', color: 'border-primary/20' },
                            { icon: '⚙️', title: 'IoT & Hardware', desc: 'Raspberry Pi, ESP32, sensors, and embedded systems', color: 'border-aurora-cyan/20' },
                            { icon: '💻', title: 'Web Development', desc: 'React, Node.js, and modern web technologies', color: 'border-aurora-violet/20' },
                        ].map((t, i) => (
                            <div key={i} className={`glass-card text-center p-6 card-hover-glow border ${t.color}`}>
                                <div className="text-4xl mb-3">{t.icon}</div>
                                <h3 className="font-display font-bold text-text-primary mb-2">{t.title}</h3>
                                <p className="text-text-secondary text-sm">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-divider" />

            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="section-header-terminal mb-8">
                        <span className="terminal-label">COLLABORATE</span>
                        <span className="section-counter">[ 03 / 03 ]</span>
                    </div>
                    <div className="glass-card bg-gradient-to-r from-aurora-cyan/10 to-aurora-violet/10 p-12 text-center relative overflow-hidden">
                        <h2 className="font-display text-3xl font-bold text-text-primary mb-4">Have a Project Idea?</h2>
                        <p className="text-text-secondary mb-8 text-lg">We're always looking for new challenges and collaborative opportunities.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-aurora btn-aurora-primary font-mono">Contact Us</Link>
                            <Link to="/hackathons" className="btn-aurora btn-aurora-outline font-mono group">
                                View Hackathons <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsDetails;
