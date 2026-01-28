import React from 'react';
import { Cpu, Users, Award, Rocket } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
            {description}
        </p>
    </div>
);

const Services = () => {
    const services = [
        {
            icon: Cpu,
            title: "Robotics Training",
            description: "Hands-on courses designed for students to build and program robots."
        },
        {
            icon: Award,
            title: "Hackathons",
            description: "Intense coding events where creativity meets real-world challenges."
        }
    ];

    return (
        <section id="programs" className="py-24 px-6 bg-accent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Empowering minds with robotics training and hackathons.
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
