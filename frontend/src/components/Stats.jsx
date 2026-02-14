// Stats – Material Flat Enterprise Metrics
import React from 'react';

const Stats = () => {
    const stats = [
        { icon: "🏆", value: "20+", label: "Projects", accent: "bg-orange-50 text-orange-600" },
        { icon: "⚡", value: "30+", label: "Hackathons", accent: "bg-mint/10 text-mint" },
        { icon: "🎓", value: "100+", label: "Students Mentored", accent: "bg-lavender/10 text-lavender" },
    ];

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white elevation-2 rounded-2xl p-8 grid grid-cols-3 divide-x divide-gray-100">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center px-4 group">
                            <div className={`w-10 h-10 ${stat.accent} rounded-xl flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform duration-200`}>
                                {stat.icon}
                            </div>
                            <div className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 font-medium text-xs uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
