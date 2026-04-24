// Hero – Aurora Terminal with ASCII Art
import React from 'react';
import { Link } from 'react-router-dom';
import AsciiBackground from './AsciiBackground';

const ROBOT_ASCII = `
    ╔══════════════╗
    ║  ┌──┐  ┌──┐  ║
    ║  │▓▓│  │▓▓│  ║
    ║  └──┘  └──┘  ║
    ║    ╔════╗    ║
    ║    ║ ≡≡ ║    ║
    ║    ╚════╝    ║
    ╠══════════════╣
    ║  ║▓▓▓▓▓▓║   ║
    ║  ╚══════╝   ║
    ╚══════╦═╦════╝
           ║ ║
          ═╝ ╚═`;

const Hero = () => {
    return (
        <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            {/* ASCII Rain Background */}
            <AsciiBackground density={25} />

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/50 via-transparent to-bg-deep pointer-events-none z-[1]" />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left: Content */}
                <div className="flex-1 text-center lg:text-left animate-fadeInUp">
                    {/* Terminal Status Chip */}
                    <div className="terminal-prompt mb-8 inline-flex">
                        <span className="prompt-symbol">$</span>
                        <span className="text-text-secondary">status:</span>
                        <span className="text-terminal-green font-semibold">active</span>
                        <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse ml-1" />
                    </div>

                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary tracking-tight leading-[1.08] mb-6">
                        Build. <span className="gradient-text">Innovate.</span> Use.
                    </h1>

                    <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
                        Empowering tomorrow's innovators with rigorous robotics training and tech challenges.
                        Join SenA Labs to shape the future.
                    </p>

                    {/* Terminal Command CTA */}
                    <Link to="/contact" className="terminal-prompt !py-3 !px-6 mb-8 inline-flex group">
                        <span className="prompt-symbol">$</span>
                        <span className="text-text-secondary group-hover:text-terminal-green transition-colors">
                            join --team senalabs
                        </span>
                        <span className="text-text-dim animate-blink">▌</span>
                    </Link>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-6">
                        {[
                            { value: '20+', label: 'Projects', icon: '🏆' },
                            { value: '30+', label: 'Hackathons', icon: '⚡' },
                            { value: '100+', label: 'Students', icon: '🎓' },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="text-sm">{stat.icon}</span>
                                <span className="font-mono font-bold text-text-primary text-sm">{stat.value}</span>
                                <span className="text-text-muted text-xs font-mono">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: ASCII Art Robot */}
                <div className="hidden lg:block animate-fadeInUp delay-300">
                    <div className="glass-card p-6 animate-float">
                        <pre className="font-mono text-aurora-cyan text-xs leading-tight select-none whitespace-pre">
                            {ROBOT_ASCII}
                        </pre>
                        <div className="flex gap-2 mt-4 justify-center">
                            <span className="badge-glass badge-cyan text-[10px]">🔧 Hardware</span>
                            <span className="badge-glass badge-violet text-[10px]">🧠 AI/ML</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
