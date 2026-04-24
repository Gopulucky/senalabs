// Highlights – Glass Achievement Cards with Terminal Headers
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HighlightCard = ({ emoji, title, description, link, linkText, badgeText, accentBorder }) => (
    <div className={`glass-card card-hover-glow p-6 h-full flex flex-col group`}
        style={{ borderTop: `2px solid ${accentBorder}` }}>
        <div className="flex items-start justify-between mb-4">
            <span className="text-2xl">{emoji}</span>
            {badgeText && <span className="badge-glass badge-orange text-[10px]">{badgeText}</span>}
        </div>
        <h3 className="font-display text-base font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        <Link
            to={link}
            className="inline-flex items-center text-aurora-cyan font-semibold text-sm hover:text-terminal-cyan group/link mt-auto font-mono"
        >
            {linkText}
            <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
    </div>
);

const Highlights = () => {
    const highlights = [
        {
            emoji: '🏆',
            title: '5+ National Hackathons',
            description: 'From Smart India Hackathon to IIT Thirupati challenges, we\'ve built real solutions for MSME, Agriculture, and Data Analytics.',
            link: '/hackathons',
            linkText: 'View Journey',
            badgeText: '⭐ Top',
            accentBorder: 'rgba(255, 140, 66, 0.5)',
        },
        {
            emoji: '💡',
            title: 'IIT Bombay Techfest',
            description: 'Hands-on workshops in Robotics and LLM implementation, gaining practical skills in AI, ML, and hardware integration.',
            link: '/programs',
            linkText: 'Explore',
            badgeText: '🎓 Certified',
            accentBorder: 'rgba(6, 182, 212, 0.5)',
        },
        {
            emoji: '🚀',
            title: 'R&D Projects',
            description: 'Building innovative solutions like Smart Bots and Eco Sensors using Python, IoT, and cutting-edge technologies.',
            link: '/projects',
            linkText: 'See Projects',
            badgeText: '🔬 Active',
            accentBorder: 'rgba(236, 72, 153, 0.5)',
        },
        {
            emoji: '👥',
            title: 'Diverse Team',
            description: 'Industry professionals and brilliant students from IIT, VNR, GRIET, and more collaborating on impactful solutions.',
            link: '/team',
            linkText: 'Meet Team',
            badgeText: '🤝 Growing',
            accentBorder: 'rgba(139, 92, 246, 0.5)',
        },
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Terminal Section Header */}
                <div className="section-header-terminal">
                    <span className="terminal-label">ACHIEVEMENTS</span>
                    <span className="section-counter">[ 04 / 06 ]</span>
                </div>

                <div className="section-title-block">
                    <span className="badge-glass badge-amber mb-4 inline-block">🎮 Achievements Unlocked</span>
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
