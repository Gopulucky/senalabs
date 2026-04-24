// Stats – Terminal Monospace Grid with ASCII Box Borders
import React from 'react';

const Stats = () => {
    const stats = [
        { icon: '🏆', value: '20+', label: 'Projects', color: 'text-primary' },
        { icon: '⚡', value: '30+', label: 'Hackathons', color: 'text-aurora-cyan' },
        { icon: '🎓', value: '100+', label: 'Students Mentored', color: 'text-lavender' },
    ];

    return (
        <section className="py-16 px-6 relative">
            <div className="max-w-4xl mx-auto">
                {/* Terminal Section Header */}
                <div className="section-header-terminal mb-8">
                    <span className="terminal-label">METRICS</span>
                    <span className="section-counter">[ 02 / 06 ]</span>
                </div>

                {/* ASCII Box Stats */}
                <div className="glass-card p-0 overflow-hidden">
                    {/* Top border decoration */}
                    <div className="px-6 py-2 border-b border-border-subtle">
                        <span className="font-mono text-[11px] text-text-dim">
                            ┌─── performance_metrics.log ───┐
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`flex flex-col items-center py-10 px-4 group transition-all duration-300 hover:bg-white/[0.02] ${i < stats.length - 1 ? 'md:border-r border-b md:border-b-0 border-border-subtle' : ''
                                    }`}
                            >
                                <div className={`text-2xl mb-3 group-hover:scale-110 transition-transform duration-200`}>
                                    {stat.icon}
                                </div>
                                <div className={`font-mono text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                                    {stat.value}
                                </div>
                                <div className="font-mono text-text-muted text-xs uppercase tracking-widest text-center">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom border decoration */}
                    <div className="px-6 py-2 border-t border-border-subtle">
                        <span className="font-mono text-[11px] text-text-dim">
                            └─── last_updated: 2026 ────────┘
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
