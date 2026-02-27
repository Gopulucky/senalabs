// Highlights – Material Flat Grid Cards
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Lightbulb, Users, Rocket } from 'lucide-react';

const HighlightCard = ({ emoji, title, description, link, linkText, badgeText, accentColor }) => (
    <div className="mat-card group h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
            <div className={`w-11 h-11 ${accentColor} rounded-xl flex items-center justify-center text-lg`}>
                {emoji}
            </div>
            {badgeText && <span className="badge badge-orange text-[10px]">{badgeText}</span>}
        </div>
        <h3 className="text-base font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        <Link
            to={link}
            className="inline-flex items-center text-orange-500 font-semibold text-sm hover:text-orange-600 group/link mt-auto"
        >
            {linkText}
            <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
    </div>
);

const Highlights = () => {
    const highlights = [
        {
            emoji: "🏆",
            title: "5+ National Hackathons",
            description: "From Smart India Hackathon to IIT Thirupati challenges, we've built real solutions for MSME, Agriculture, and Data Analytics.",
            link: "/hackathons",
            linkText: "View Journey",
            badgeText: "⭐ Top",
            accentColor: "bg-orange-50 text-orange-500"
        },
        {
            emoji: "💡",
            title: "IIT Bombay Techfest",
            description: "Hands-on workshops in Robotics and LLM implementation, gaining practical skills in AI, ML, and hardware integration.",
            link: "/programs",
            linkText: "Explore",
            badgeText: "🎓 Certified",
            accentColor: "bg-mint/10 text-mint"
        },
        {
            emoji: "🚀",
            title: "R&D Projects",
            description: "Building innovative solutions like Smart Bots and Eco Sensors using Python, IoT, and cutting-edge technologies.",
            link: "/projects",
            linkText: "See Projects",
            badgeText: "🔬 Active",
            accentColor: "bg-coral/10 text-coral"
        },
        {
            emoji: "👥",
            title: "Diverse Team",
            description: "Industry professionals and brilliant students from IIT, VNR, GRIET, and more collaborating on impactful solutions.",
            link: "/team",
            linkText: "Meet Team",
            badgeText: "🤝 Growing",
            accentColor: "bg-lavender/10 text-lavender"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="section-header">
                    <span className="badge badge-sunny mb-4 inline-block">🎮 Achievements Unlocked</span>
                    <h2>What We've Achieved</h2>
                    <p>A glimpse into our journey of innovation, learning, and building impactful solutions.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {highlights.map((h, i) => (
                        <HighlightCard key={i} {...h} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
