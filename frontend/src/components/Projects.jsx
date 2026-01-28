import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, tags, imagePlaceholder, alignLeft, buttonText = "View Project" }) => (
    <div className={`flex flex-col md:flex-row items-center gap-12 mb-24 last:mb-0 ${alignLeft ? '' : 'md:flex-row-reverse'}`}>
        {/* Image Side */}
        <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-200 rounded-lg border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm relative group">
                {/* Placeholder */}
                <div className="text-gray-400 text-5xl transition-transform duration-500 group-hover:scale-110">
                    {imagePlaceholder}
                </div>
            </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium tracking-wide">
                        {tag}
                    </span>
                ))}
            </div>

            <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors group mt-4">
                <span>{buttonText}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Smart Bot",
            description: "An autonomous robot navigating complex mazes.",
            tags: ["Python", "OpenCV", "Raspberry Pi"],
            imagePlaceholder: "🤖",
            alignLeft: true,
            buttonText: "View Project"
        },
        {
            title: "Eco Sensor",
            description: "A device monitoring air quality in real time.",
            tags: ["IoT", "React", "Node.js"],
            imagePlaceholder: "🌱",
            alignLeft: false,
            buttonText: "Join Now"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Projects</h2>

                <div>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} buttonText={project.buttonText} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
