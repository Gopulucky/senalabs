// Services – Bento Glass Cards with Terminal Headers
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ASCII_ICONS = {
    hackathon: `  ╱╲
 ╱  ╲
╱ ⚡ ╲
╲    ╱
 ╲  ╱
  ╲╱`,
    workshop: `┌─────┐
│ ◉ ◉ │
│  ▬  │
│ ═══ │
└──┬──┘
   │`,
};

const ServiceCard = ({ title, description, to, badge, asciiArt, accentColor }) => (
    <Link to={to} className="block group">
        <div className="glass-card card-hover-glow p-7 h-full flex flex-col">
            {/* Header row */}
            <div className="flex items-start justify-between mb-6">
                <pre className={`font-mono text-[11px] leading-tight select-none ${accentColor} opacity-60 group-hover:opacity-100 transition-opacity`}>
                    {asciiArt}
                </pre>
                {badge && <span className="badge-glass badge-orange text-[10px]">{badge}</span>}
            </div>

            <h3 className="font-display text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
                {title}
                <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-aurora-cyan" />
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed flex-grow">{description}</p>
        </div>
    </Link>
);

const Services = () => {
    const services = [
        {
            title: 'Hackathons',
            description: 'Intense coding events where creativity meets real-world challenges. From SIH to IIT competitions.',
            to: '/hackathons',
            badge: '🔥 5+ National Level',
            asciiArt: ASCII_ICONS.hackathon,
            accentColor: 'text-primary',
        },
        {
            title: 'Workshops',
            description: 'Hands-on training sessions covering robotics, AI, and emerging technologies at IIT Bombay Techfest.',
            to: '/programs',
            badge: '🎓 IIT Bombay Certified',
            asciiArt: ASCII_ICONS.workshop,
            accentColor: 'text-aurora-cyan',
        },
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Terminal Section Header */}
                <div className="section-header-terminal">
                    <span className="terminal-label">SERVICES</span>
                    <span className="section-counter">[ 03 / 06 ]</span>
                </div>

                <div className="section-title-block">
                    <span className="badge-glass badge-cyan mb-4 inline-block">🎯 Choose Your Path</span>
                    <h2>Our Services</h2>
                    <p>Empowering minds through innovative hackathons and hands-on workshops.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
