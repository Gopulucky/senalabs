// ProjectsPage – Warm Minimalist Light Theme
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Code, Cpu, Leaf } from 'lucide-react';

const ProjectDetailCard = ({ title, description, tags, imagePlaceholder, icon: Icon }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 card-hover mb-8">
        <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon size={32} />
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="badge badge-orange">{tag}</span>
                    ))}
                </div>
            </div>
        </div>

        <div className="aspect-video bg-gradient-to-br from-orange-50 to-accent rounded-2xl border border-orange-100 flex items-center justify-center overflow-hidden shadow-sm">
            <div className="text-7xl opacity-40 hover:opacity-60 hover:scale-110 transition-all duration-500">{imagePlaceholder}</div>
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
            {/* Hero Section – Light Gradient */}
            <section className="bg-hero-gradient pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-mint/10 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-orange-500 mb-8 transition-colors group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="space-y-4">
                        <div className="badge badge-mint">🔬 Crafting Table</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">🔬 Research & Development Projects</h1>
                        <p className="text-gray-500 text-lg max-w-3xl">
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
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Active Projects</h2>
                        <p className="text-gray-500">
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technologies We Use</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-orange-50/50 rounded-2xl border border-orange-100 card-hover">
                            <div className="text-4xl mb-3">🐍</div>
                            <h3 className="font-bold text-gray-800 mb-2">Python & AI</h3>
                            <p className="text-gray-500 text-sm">Machine learning, computer vision, and data processing</p>
                        </div>
                        <div className="text-center p-6 bg-mint/5 rounded-2xl border border-mint/20 card-hover">
                            <div className="text-4xl mb-3">⚙️</div>
                            <h3 className="font-bold text-gray-800 mb-2">IoT & Hardware</h3>
                            <p className="text-gray-500 text-sm">Raspberry Pi, ESP32, sensors, and embedded systems</p>
                        </div>
                        <div className="text-center p-6 bg-lavender/5 rounded-2xl border border-lavender/20 card-hover">
                            <div className="text-4xl mb-3">💻</div>
                            <h3 className="font-bold text-gray-800 mb-2">Web Development</h3>
                            <p className="text-gray-500 text-sm">React, Node.js, and modern web technologies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-orange-400 to-coral rounded-2xl p-12 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4">Have a Project Idea?</h2>
                            <p className="text-orange-100 mb-8 text-lg">
                                We're always looking for new challenges and collaborative opportunities.
                                Let's work together to bring your vision to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/#contact"
                                    className="inline-block px-8 py-3 bg-white text-orange-500 font-bold rounded-xl shadow-md hover:bg-gray-50 transition-colors"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    to="/hackathons"
                                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors group"
                                >
                                    View Hackathons
                                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsDetails;
