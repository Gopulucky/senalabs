import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Lightbulb, Users, Rocket } from 'lucide-react';

const HighlightCard = ({ icon: Icon, title, description, link, linkText, bgColor = 'bg-blue-50', iconColor = 'text-blue-600' }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
        <div className={`w-12 h-12 ${bgColor} ${iconColor} rounded-lg flex items-center justify-center mb-4`}>
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        <Link
            to={link}
            className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 group"
        >
            {linkText}
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
    </div>
);

const Highlights = () => {
    const highlights = [
        {
            icon: Trophy,
            title: "5+ National Hackathons",
            description: "From Smart India Hackathon to IIT Thirupati challenges, we've built real solutions for MSME, Agriculture, and Data Analytics.",
            link: "/hackathons",
            linkText: "View Our Journey",
            bgColor: "bg-yellow-50",
            iconColor: "text-yellow-600"
        },
        {
            icon: Lightbulb,
            title: "IIT Bombay Techfest",
            description: "Hands-on workshops in Robotics and LLM implementation, gaining practical skills in AI, ML, and hardware integration.",
            link: "/programs",
            linkText: "Explore Workshops",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            icon: Rocket,
            title: "R&D Projects",
            description: "Building innovative solutions like Smart Bots and Eco Sensors using Python, IoT, and cutting-edge technologies.",
            link: "/projects",
            linkText: "See Projects",
            bgColor: "bg-green-50",
            iconColor: "text-green-600"
        },
        {
            icon: Users,
            title: "Diverse Team",
            description: "Industry professionals and brilliant students from IIT, VNR, GRIET, and more collaborating on impactful solutions.",
            link: "/team",
            linkText: "Meet The Team",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We've Achieved</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        A glimpse into our journey of innovation, learning, and building impactful solutions.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((highlight, index) => (
                        <HighlightCard key={index} {...highlight} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
