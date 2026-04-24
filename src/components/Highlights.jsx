// Live Operations – Hackathons & Deployments
import React from 'react';
import { Link } from 'react-router-dom';

const OperationCard = ({ status, title, description, date, type, accentColor }) => (
    <div className={`glass-card p-6 h-full flex flex-col group relative overflow-hidden`}
        style={{ borderLeft: `2px solid ${accentColor}` }}>
        
        {/* Animated Scanline overlay */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-fadeInUp" />

        <div className="flex items-center justify-between mb-4 font-mono text-xs">
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status === 'LIVE' ? 'bg-coral animate-ping' : 'bg-text-dim'}`} />
                <span className={`${status === 'LIVE' ? 'text-coral' : 'text-text-muted'}`}>[{status}]</span>
            </div>
            <span className="text-text-dim">{date}</span>
        </div>

        <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-aurora-cyan transition-colors">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 font-sans flex-grow">{description}</p>
        
        <div className="mt-auto pt-4 border-t border-border-subtle flex justify-between items-center">
            <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">{type}</span>
            <Link
                to="/hackathons"
                className="font-mono text-xs text-aurora-cyan hover:text-terminal-cyan transition-colors"
            >
                &gt; view_logs
            </Link>
        </div>
    </div>
);

const LiveOperations = () => {
    const operations = [
        {
            status: 'LIVE',
            title: 'Smart India Hackathon',
            description: 'Building an AI-driven predictive maintenance system for MSME manufacturing lines.',
            date: 'CURRENT',
            type: 'DEPLOYMENT_NATIONAL',
            accentColor: '#FF6B6B',
        },
        {
            status: 'COMPLETED',
            title: 'IIT Thirupati Hack',
            description: 'Developed an automated IoT crop monitoring solution winning 1st place in the AgTech category.',
            date: 'OCT_2025',
            type: 'DEPLOYMENT_NATIONAL',
            accentColor: '#10B981',
        },
        {
            status: 'COMPLETED',
            title: 'Eco Sensor Grid',
            description: 'Internal R&D project mapping air quality across campus using custom ESP32 nodes.',
            date: 'AUG_2025',
            type: 'INTERNAL_RND',
            accentColor: '#8B5CF6',
        },
        {
            status: 'COMPLETED',
            title: 'Algorithm Sprint',
            description: 'Intense 24-hour internal competitive programming workshop to prep for ICPC.',
            date: 'JUL_2025',
            type: 'TRAINING_EXERCISE',
            accentColor: '#06B6D4',
        },
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Terminal Section Header */}
                <div className="section-header-terminal font-mono">
                    <div className="flex flex-col">
                        <span className="terminal-label text-text-muted text-[10px]"># SYS.LOG.EVENTS</span>
                        <span className="text-aurora-cyan text-sm font-bold">LIVE OPERATIONS</span>
                    </div>
                    <span className="section-counter">[ 04 / 06 ]</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {operations.map((op, i) => (
                        <OperationCard key={i} {...op} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LiveOperations;
