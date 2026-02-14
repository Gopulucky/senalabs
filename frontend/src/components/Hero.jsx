// Hero – Material Flat + Graphical + Youthful
import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-hero-gradient">
            {/* Graphical decorative shapes – flat geometric */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-orange-100/40 rounded-[40px] rotate-12 animate-float" />
                <div className="absolute top-1/3 -left-12 w-48 h-48 bg-mint/15 rounded-[32px] -rotate-6 animate-float-delayed" />
                <div className="absolute -bottom-8 right-1/4 w-56 h-56 bg-sunny/15 rounded-[36px] rotate-6 animate-float" />
                {/* Small graphic circles */}
                <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-orange-300/50 rounded-lg rotate-45" />
                <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-mint/40 rounded-lg rotate-12" />
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-coral/30 rounded-lg -rotate-12" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto animate-fadeInUp">
                {/* Status chip – flat material */}
                <div className="inline-flex items-center gap-2 bg-white elevation-1 px-4 py-2 rounded-lg mb-8">
                    <span className="text-base">🚀</span>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Level Up Your Skills</span>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight leading-[1.1] mb-6">
                    Build. <span className="text-primary">Innovate.</span> Use.
                </h1>

                <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed mb-10">
                    Empowering tomorrow's innovators with rigorous robotics training and tech challenges.
                    Join SenA Labs to shape the future.
                </p>

                {/* Stats row – flat material chips */}
                <div className="inline-flex items-center gap-4 bg-white elevation-1 px-6 py-3 rounded-xl">
                    <div className="flex items-center gap-2">
                        <span className="text-orange-400 text-sm">🏆</span>
                        <span className="font-bold text-gray-800 text-sm">20+</span>
                        <span className="text-gray-400 text-xs">Projects</span>
                    </div>
                    <div className="w-px h-5 bg-gray-200" />
                    <div className="flex items-center gap-2">
                        <span className="text-mint text-sm">⚡</span>
                        <span className="font-bold text-gray-800 text-sm">30+</span>
                        <span className="text-gray-400 text-xs">Hackathons</span>
                    </div>
                    <div className="w-px h-5 bg-gray-200" />
                    <div className="flex items-center gap-2">
                        <span className="text-coral text-sm">🎓</span>
                        <span className="font-bold text-gray-800 text-sm">100+</span>
                        <span className="text-gray-400 text-xs">Students</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
