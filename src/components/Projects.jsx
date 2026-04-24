// Projects – Glass Cards with ASCII Art Project Icons
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, image, tech, to, asciiIcon }) => (
    <Link to={to} className="block group">
        <div className="glass-card card-hover-glow !p-0 overflow-hidden h-full flex flex-col">
            {/* Image / ASCII area */}
            <div className="h-44 overflow-hidden relative bg-gradient-to-br from-bg-surface to-bg-elevated flex items-center justify-center">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                ) : (
                    <pre className="font-mono text-aurora-cyan text-xs leading-tight select-none whitespace-pre opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                        {asciiIcon}
                    </pre>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent" />
            </div>
            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-display text-base font-bold text-text-primary mb-2 flex items-center gap-2">
                    {title}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-aurora-cyan" />
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-1.5">
                    {tech.map((t, i) => (
                        <span key={i} className="badge-glass badge-cyan text-[10px]">{t}</span>
                    ))}
                </div>
            </div>
        </div>
    </Link>
);

const Projects = () => {
    const projects = [
        {
            title: 'Eco Sensor',
            description: 'IoT-based environmental monitoring system for real-time data collection and analysis.',
            tech: ['IoT', 'Python', 'Sensors'],
            to: '/projects',
            asciiIcon: `
  ┌───────┐
  │ ◉ AIR │
  │ ━━━━━ │
  │ █▓▒░  │
  │ 42 μg │
  └───┬───┘
      │
   ╔══╧══╗
   ║SENSE║
   ╚═════╝`,
        },
        {
            title: 'Smart Bot',
            description: 'AI-powered robotics platform designed for automation and intelligent task management.',
            tech: ['AI', 'Robotics', 'Python'],
            to: '/projects',
            asciiIcon: `
   ┌─────┐
   │◉   ◉│
   │  ▬  │
   │═════│
   └──┬──┘
  ┌───┴───┐
  │ ROBOT │
  │ v2.0  │
  └───────┘`,
        },
        {
            title: 'AyurSutra',
            description: 'Healthcare management app for Ayurvedic therapy scheduling and patient tracking.',
            tech: ['Mobile', 'React', 'Node.js'],
            to: '/projects',
            asciiIcon: `
   ╔═══════╗
   ║ ♥ APP ║
   ╠═══════╣
   ║ ┌───┐ ║
   ║ │ ☘ │ ║
   ║ └───┘ ║
   ║ AYUR  ║
   ╚═══════╝`,
        },
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="section-header-terminal">
                    <span className="terminal-label">PROJECTS</span>
                    <span className="section-counter">[ 05 / 06 ]</span>
                </div>

                <div className="section-title-block">
                    <span className="badge-glass badge-orange mb-4 inline-block">🔧 Featured Work</span>
                    <h2>Our Projects</h2>
                    <p>Innovation-driven solutions built with cutting-edge technology.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
