// Services – Material Flat Cards
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Award, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, to, badge, emoji }) => (
    <Link to={to} className="block">
        <div className="mat-card group cursor-pointer h-full">
            {/* Top bar accent */}
            <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
                    {emoji ? <span className="text-xl">{emoji}</span> : <Icon size={24} />}
                </div>
                {badge && <span className="badge badge-orange">{badge}</span>}
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                {title}
                <ArrowRight size={16} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-400" />
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
    </Link>
);

const Services = () => {
    const services = [
        {
            icon: Award,
            emoji: "⚡",
            title: "Hackathons",
            description: "Intense coding events where creativity meets real-world challenges.",
            to: "/hackathons",
            badge: "🔥 5+ National Level"
        },
        {
            icon: Cpu,
            emoji: "🤖",
            title: "Workshops",
            description: "Hands-on training sessions covering robotics, AI, and emerging technologies.",
            to: "/programs",
            badge: "🎓 IIT Bombay Certified"
        }
    ];

    return (
        <section id="programs" className="py-20 px-6 bg-surface">
            <div className="max-w-6xl mx-auto">
                <div className="section-header">
                    <span className="badge badge-mint mb-4 inline-block">🎯 Choose Your Path</span>
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
