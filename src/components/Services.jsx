// Protocols – Knowledge Base & Teaching
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ASCII_ICONS = {
    knowledge: `┌─────────┐
│ >_      │
│         │
│ doc.txt │
└─────────┘`,
    hardware: `   _[]_
  [____]
  | || |
  | || |
  ======`,
};

const ProtocolCard = ({ title, description, to, tags, asciiArt, accentColor }) => (
    <Link to={to} className="block group">
        <div className="glass-card card-hover-glow p-8 h-full flex flex-col font-mono relative overflow-hidden">
            {/* Top Bar (like a window) */}
            <div className="absolute top-0 left-0 w-full h-6 border-b border-border-subtle bg-bg-surface/50 flex items-center px-3 gap-2">
                <div className="w-2 h-2 rounded-full bg-coral/50" />
                <div className="w-2 h-2 rounded-full bg-sunny/50" />
                <div className="w-2 h-2 rounded-full bg-terminal-green/50" />
                <span className="text-[10px] text-text-dim ml-2">protocol_{title.toLowerCase().replace(' ', '_')}</span>
            </div>

            {/* Header row */}
            <div className="flex items-start justify-between mb-6 mt-4">
                <pre className={`text-[11px] leading-tight select-none ${accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {asciiArt}
                </pre>
            </div>

            <h3 className="font-display text-xl font-bold text-text-primary mb-3 flex items-center gap-2 group-hover:text-aurora-cyan transition-colors">
                {title}
                <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-aurora-cyan" />
            </h3>
            
            <p className="text-text-secondary text-sm leading-relaxed mb-6 font-sans flex-grow">
                {description}
            </p>

            {/* Tags array */}
            <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-text-dim text-xs">tags:</span>
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs text-aurora-cyan/80 bg-aurora-cyan/10 px-1.5 py-0.5 rounded border border-aurora-cyan/20">
                        [{tag}]
                    </span>
                ))}
            </div>
        </div>
    </Link>
);

const Protocols = () => {
    const protocols = [
        {
            title: 'Knowledge Base',
            description: 'Comprehensive documentation and training modules for our members. Covering full-stack development, version control, and system architecture.',
            to: '/programs',
            tags: ['react', 'node.js', 'git_flow'],
            asciiArt: ASCII_ICONS.knowledge,
            accentColor: 'text-aurora-cyan',
        },
        {
            title: 'Hardware Labs',
            description: 'Hands-on hardware integration protocols. Learning to bridge the gap between software algorithms and physical robotics.',
            to: '/projects',
            tags: ['iot', 'arduino', 'sensors'],
            asciiArt: ASCII_ICONS.hardware,
            accentColor: 'text-terminal-amber',
        },
    ];

    return (
        <section className="py-20 px-6 bg-bg-surface/30 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border-glow to-transparent opacity-50" />
            
            <div className="max-w-6xl mx-auto">
                {/* Terminal Section Header */}
                <div className="section-header-terminal font-mono">
                    <div className="flex flex-col">
                        <span className="terminal-label text-text-muted text-[10px]"># SYSTEM.MANUAL</span>
                        <span className="text-aurora-cyan text-sm font-bold">PROTOCOLS & TEACHING</span>
                    </div>
                    <span className="section-counter">[ 03 / 06 ]</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {protocols.map((protocol, index) => (
                        <ProtocolCard key={index} {...protocol} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Protocols;
