// Projects – Material Flat Cards
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, image, tech, to }) => (
    <Link to={to} className="block">
        <div className="mat-card !p-0 overflow-hidden group h-full flex flex-col">
            {/* Image area */}
            <div className="h-44 bg-gray-50 overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-accent-2">
                        <span className="text-4xl">🔧</span>
                    </div>
                )}
            </div>
            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                    {title}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-400" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-1.5">
                    {tech.map((t, i) => (
                        <span key={i} className="badge badge-mint text-[10px]">{t}</span>
                    ))}
                </div>
            </div>
        </div>
    </Link>
);

const Projects = () => {
    const projects = [
        {
            title: "Eco Sensor",
            description: "IoT-based environmental monitoring system for real-time data collection and analysis.",
            tech: ["IoT", "Python", "Sensors"],
            to: "/projects"
        },
        {
            title: "Smart Bot",
            description: "AI-powered robotics platform designed for automation and intelligent task management.",
            tech: ["AI", "Robotics", "Python"],
            to: "/projects"
        },
        {
            title: "AyurSutra",
            description: "Healthcare management app for Ayurvedic therapy scheduling and patient tracking.",
            tech: ["Mobile", "React", "Node.js"],
            to: "/projects"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="section-header">
                    <span className="badge badge-orange mb-4 inline-block">🔧 Featured Work</span>
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
