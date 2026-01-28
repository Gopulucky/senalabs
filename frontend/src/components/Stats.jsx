import React from 'react';

const Stats = () => {
    return (
        <section className="bg-blue-600 py-12 px-6 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                    <div className="text-blue-100 font-medium">Proven Projects</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
                    <div className="text-blue-100 font-medium">Trusted Globally</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                    <div className="text-blue-100 font-medium">Hackathons</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">2k+</div>
                    <div className="text-blue-100 font-medium">Students Mentored</div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
