import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Award, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, to }) => (
    <Link to={to} className="block">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                {title}
                <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    </Link>
);

const Services = () => {
    const services = [
        {
            icon: Award,
            title: "Hackathons",
            description: "Intense coding events where creativity meets real-world challenges.",
            to: "/hackathons"
        },
        {
            icon: Cpu,
            title: "Workshops",
            description: "Hands-on training sessions covering robotics, AI, and emerging technologies.",
            to: "/programs"
        }
    ];

    return (
        <section id="programs" className="py-24 px-6 bg-accent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Empowering minds through innovative hackathons and hands-on workshops.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
