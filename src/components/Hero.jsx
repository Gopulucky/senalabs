// Hero – Mission Control Split Screen
import React from 'react';
import { Link } from 'react-router-dom';

const Radar = () => (
    <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Radar Background Circles */}
        <div className="absolute inset-0 rounded-full border border-aurora-cyan/20 animate-pulse" />
        <div className="absolute inset-10 rounded-full border border-aurora-cyan/30" />
        <div className="absolute inset-20 rounded-full border border-aurora-cyan/40" />
        <div className="absolute inset-30 rounded-full border border-aurora-cyan/50 bg-aurora-cyan/5" />
        
        {/* Crosshairs */}
        <div className="absolute w-full h-[1px] bg-aurora-cyan/20" />
        <div className="absolute h-full w-[1px] bg-aurora-cyan/20" />
        
        {/* Radar Sweep */}
        <div className="absolute w-1/2 h-1/2 top-0 right-0 origin-bottom-left animate-radar">
            <div className="w-full h-full bg-gradient-to-tr from-aurora-cyan/40 to-transparent rounded-tr-full" />
        </div>
        
        {/* Blips (Activity) */}
        <div className="absolute w-2 h-2 bg-aurora-cyan rounded-full top-20 right-24 animate-ping" />
        <div className="absolute w-1.5 h-1.5 bg-terminal-green rounded-full bottom-24 left-20 animate-ping delay-300" />
        <div className="absolute w-1 h-1 bg-aurora-pink rounded-full top-32 left-32 animate-ping delay-500" />
    </div>
);

const Hero = () => {
    return (
        <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 overflow-hidden bg-bg-deep">
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Split Screen Layout Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 border-t border-b border-border-subtle py-20 lg:py-0 lg:min-h-[70vh]">
                
                {/* Left: Content */}
                <div className="flex-1 w-full text-left animate-fadeInUp lg:pr-8">
                    {/* Terminal Status Chip */}
                    <div className="terminal-prompt mb-10 inline-flex">
                        <span className="prompt-symbol">~</span>
                        <span className="text-text-secondary">/senalabs/mission</span>
                        <span className="text-text-dim ml-2 animate-blink">▌</span>
                    </div>

                    <div className="mb-8 max-w-[90%]">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.1] animate-typing inline-block border-r-2 border-aurora-cyan pr-2">
                            Surviving the tech industry
                        </h1>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-muted tracking-tight leading-[1.1] mt-2 animate-fadeInUp delay-1000">
                            isn't a solo mission.
                        </h1>
                    </div>

                    <p className="text-text-secondary text-lg font-mono max-w-xl leading-relaxed mb-12 animate-fadeInUp delay-300 border-l-2 border-border-strong pl-4">
                        Welcome to the Lab. We don't just write code. We build hackers.
                    </p>

                    {/* Terminal Command CTA */}
                    <div className="flex flex-wrap gap-4 items-center animate-fadeInUp delay-500">
                        <Link to="/contact" className="btn-aurora btn-aurora-primary font-mono text-sm">
                            &gt;_ join_squad()
                        </Link>
                        <span className="font-mono text-xs text-text-muted hidden sm:inline-block">
                            [ STATUS: ACCEPTING_RECRUITS ]
                        </span>
                    </div>
                </div>

                {/* Right: Radar/Activity Graph */}
                <div className="flex-1 w-full flex justify-center lg:justify-end animate-fadeInUp delay-500">
                    <div className="glass-card p-10 relative overflow-hidden group">
                        <div className="absolute top-2 left-3 font-mono text-[10px] text-aurora-cyan opacity-50 uppercase tracking-widest">
                            Live_Operations_Radar
                        </div>
                        <Radar />
                        <div className="absolute bottom-2 right-3 font-mono text-[10px] text-text-muted">
                            LAT: 17.3850 N | LNG: 78.4867 E
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
