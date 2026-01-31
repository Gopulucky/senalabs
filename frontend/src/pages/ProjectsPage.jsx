import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Code, Cpu, Leaf } from 'lucide-react';

const ProjectDetailCard = ({ title, description, tags, imagePlaceholder, icon: Icon }) => (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 mb-8">
        <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon size={32} />
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium tracking-wide">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
            <div className="text-7xl opacity-50">
                {imagePlaceholder}
            </div>
        </div>
    </div>
);

const ProjectsDetails = () => {
    const projects = [
        {
            title: "Smart Bot",
            description: "An autonomous robot navigating complex mazes using advanced computer vision and pathfinding algorithms. This project combines robotics hardware with intelligent software to create a self-navigating system capable of adapting to dynamic environments.",
            tags: ["Python", "OpenCV", "Raspberry Pi", "AI", "Robotics"],
            imagePlaceholder: "🤖",
            icon: Cpu
        },
        {
            title: "Eco Sensor",
            description: "A real-time air quality monitoring device that provides instant feedback on environmental conditions. Built with IoT technology, this sensor network collects and analyzes air quality data, making it accessible through an intuitive web dashboard for informed decision-making.",
            tags: ["IoT", "React", "Node.js", "Environmental Tech", "Data Analytics"],
            imagePlaceholder: "🌱",
            icon: Leaf
        }
    ];

    return (
        <div className="min-h-screen bg-accent">
            {/* Hero Section */}
            <section className="bg-primary pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">🔬 Research & Development Projects</h1>
                        <p className="text-gray-300 text-lg max-w-3xl">
                            Explore our innovative R&D projects where we combine cutting-edge technology with practical applications
                            to solve real-world problems. From autonomous robotics to environmental monitoring, our projects push
                            the boundaries of what's possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Active Projects</h2>
                        <p className="text-gray-600">
                            Our team is currently working on these innovative projects, combining hardware and software to create impactful solutions.
                        </p>
                    </div>

                    {projects.map((project, index) => (
                        <ProjectDetailCard key={index} {...project} />
                    ))}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies We Use</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6">
                            <div className="text-4xl mb-3">🐍</div>
                            <h3 className="font-bold text-gray-900 mb-2">Python & AI</h3>
                            <p className="text-gray-600 text-sm">Machine learning, computer vision, and data processing</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-3">⚙️</div>
                            <h3 className="font-bold text-gray-900 mb-2">IoT & Hardware</h3>
                            <p className="text-gray-600 text-sm">Raspberry Pi, ESP32, sensors, and embedded systems</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-3">💻</div>
                            <h3 className="font-bold text-gray-900 mb-2">Web Development</h3>
                            <p className="text-gray-600 text-sm">React, Node.js, and modern web technologies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Have a Project Idea?</h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            We're always looking for new challenges and collaborative opportunities.
                            Let's work together to bring your vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/#contact"
                                className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/hackathons"
                                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors group"
                            >
                                View Hackathons
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsDetails;
