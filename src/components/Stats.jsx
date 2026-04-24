// System Metrics – Brutalist Grid Layout
import React from 'react';
import AsciiArt from './ui/AsciiArt';

const SystemMetrics = () => {
    const metrics = [
        { label: 'TOTAL_PROTOTYPES', value: '47', color: 'text-text-primary' },
        { label: 'HACKATHONS_WON', value: '12', color: 'text-aurora-cyan' },
        { label: 'MEMBERS_TRAINED', value: '150+', color: 'text-terminal-amber' },
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Terminal Section Header */}
                <div className="section-header-terminal font-mono mb-0 border-b-0 flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="terminal-label text-text-muted text-[10px]"># SYS.PERFORMANCE</span>
                        <span className="text-aurora-cyan text-sm font-bold">METRICS</span>
                    </div>
                    
                    <div className="hidden md:block opacity-30">
                        <AsciiArt theme="server_rack" accent="text-text-muted" />
                    </div>

                    <span className="section-counter">[ 02 / 06 ]</span>
                </div>

                {/* Brutalist Grid */}
                <div className="border border-border-strong grid grid-cols-1 md:grid-cols-3 bg-bg-deep">
                    {metrics.map((metric, i) => (
                        <div
                            key={i}
                            className={`p-10 flex flex-col justify-center items-center relative group transition-colors duration-300 hover:bg-bg-surface ${i < metrics.length - 1 ? 'border-b md:border-b-0 md:border-r border-border-strong' : ''
                                }`}
                        >
                            {/* Inner Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-text-muted opacity-50" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-text-muted opacity-50" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-text-muted opacity-50" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-text-muted opacity-50" />

                            <div className={`font-mono text-7xl md:text-8xl font-black ${metric.color} tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-300 drop-shadow-md`}>
                                {metric.value}
                            </div>
                            <div className="font-mono text-text-secondary text-xs tracking-[0.2em] bg-bg-surface/50 px-3 py-1 border border-border-subtle rounded-sm">
                                &gt; {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SystemMetrics;
