// ProgramsPage – Warm Minimalist Light Theme
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Brain, Wrench, Code, Users, Zap } from 'lucide-react';

const ProgramCard = ({ title, overview, keyLearning, hardware, outcome, icon: Icon, featured = false }) => (
    <div className={`bg-white p-8 rounded-2xl border-2 ${featured ? 'border-orange-300 shadow-lg shadow-orange-100/30' : 'border-gray-100'} card-hover mb-8`}>
        {featured && (
            <div className="badge badge-orange mb-4">⭐ Featured Workshop</div>
        )}
        <div className="flex items-start gap-4 mb-6">
            <div className={`w-14 h-14 ${featured ? 'bg-gradient-to-br from-orange-400 to-coral' : 'bg-orange-50'} ${featured ? 'text-white' : 'text-orange-500'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon size={28} />
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            </div>
        </div>

        <div className="space-y-6">
            <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-orange-400" /> Overview
                </h4>
                <p className="text-gray-500 leading-relaxed">{overview}</p>
            </div>

            {keyLearning && (
                <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Brain size={18} className="text-orange-400" /> Key Learning Areas
                    </h4>
                    <ul className="space-y-2">
                        {keyLearning.map((item, idx) => (
                            <li key={idx} className="text-gray-500 flex items-start gap-2">
                                <span className="text-mint mt-1">•</span>
                                <span className="flex-1">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {hardware && (
                <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Wrench size={18} className="text-orange-400" /> Hardware & Implementation
                    </h4>
                    <p className="text-gray-500 leading-relaxed mb-3">{hardware.description}</p>
                    {hardware.components && (
                        <ul className="space-y-1 mb-3">
                            {hardware.components.map((comp, idx) => (
                                <li key={idx} className="text-gray-500 flex items-start gap-2">
                                    <span className="text-mint">✓</span>
                                    <span>{comp}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {hardware.skills && (
                        <div className="mt-3">
                            <p className="text-sm font-semibold text-gray-700 mb-2">Technical Skills:</p>
                            <ul className="space-y-1">
                                {hardware.skills.map((skill, idx) => (
                                    <li key={idx} className="text-gray-500 text-sm flex items-start gap-2">
                                        <span className="text-orange-400">→</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {outcome && (
                <div className="bg-gradient-to-r from-orange-50 to-accent p-4 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-orange-700 mb-2">🎯 Outcome</h4>
                    <p className="text-orange-600">{outcome}</p>
                </div>
            )}
        </div>
    </div>
);

const ProgramsDetails = () => {
    const programs = [
        {
            title: "Robotics Workshop: Hand Gesture Controlled Robot",
            icon: Cpu,
            featured: true,
            overview: "In December, we participated in a robotics workshop held during the Techfest event at IIT Bombay. The core focus of this workshop was the development of a hand gesture-controlled robot. The training covered both the software/machine learning aspects and the necessary hardware integration.",
            keyLearning: [
                "Learning fundamental machine learning concepts and algorithms",
                "Writing and experimenting with machine learning code specifically for interpreting hand gestures",
                "Understanding the practical integration of ML with robotics hardware"
            ],
            hardware: {
                description: "Following the software training, participants were provided with the necessary hardware components to build the robot.",
                components: ["ESP chip (ESP32 or ESP8266)", "Chassis and body components", "Wheels (tyres)", "Motors and motor drivers"],
                skills: [
                    "Breadboarding: Learning how to safely and effectively place the ESP chip onto a breadboard",
                    "Wiring and Connections: Understanding how to connect the various components (motors, power source, etc.) to the ESP chip",
                    "Deployment: Utilizing the Arduino IDE to deploy the gesture recognition code onto the ESP chip"
                ]
            },
            outcome: "The workshop successfully culminated in the assembly and operation of the hand gesture-controlled robot. We were able to test and run the final robot on-site, demonstrating control via learned hand gestures."
        },
        {
            title: "LLM using Python: Implementation and Concepts",
            icon: Brain,
            overview: "We participated in a comprehensive workshop focused on Large Language Models (LLMs) held during Techfest at IIT Bombay. The session provided a strong foundational understanding of LLMs, coupled with practical implementation techniques using Python.",
            keyLearning: [
                "What is an LLM? A deep dive into the architecture, function, and significance of Large Language Models in modern AI",
                "LLM Fundamentals: Understanding the core concepts, including transformer architecture, tokenization, and pre-training methodologies",
                "Implementation using Python: Practical guidance on leveraging Python libraries and frameworks (like Hugging Face) to interact with and deploy LLMs",
                "Model Fine-Tuning: Introduction to the principles of adapting pre-trained LLMs for specific downstream tasks",
                "API Utilization: Learning how to effectively integrate LLM capabilities into applications using available APIs"
            ],
            outcome: "Gained comprehensive understanding of LLM architecture and practical implementation skills using Python, enabling us to integrate AI capabilities into real-world applications."
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
                        <div className="badge badge-mint">🎓 Skill Tree</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">🎓 Our Workshops & Training Programs</h1>
                        <p className="text-gray-500 text-lg max-w-3xl">
                            Explore our hands-on training programs and workshops held at prestigious institutions like IIT Bombay's Techfest,
                            where we gained practical skills in robotics, AI, and emerging technologies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    {programs.map((program, index) => (
                        <ProgramCard key={index} {...program} />
                    ))}
                </div>
            </section>

            {/* Workshops Conducted By Us */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="badge badge-mint mb-4">🎯 Organized By SenA Labs</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Workshops Conducted By Us</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            We don't just participate—we also organize and host workshops to nurture innovation and inspire the next generation of creators.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-mint/50">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-mint to-teal-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                                🤖
                            </div>
                            <div className="flex-1">
                                <div className="badge badge-mint mb-2">SenA Labs Event</div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Robotics Workshop</h3>
                                <p className="text-mint font-medium">Organized by SenA Labs</p>
                            </div>
                        </div>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            Our flagship Robotics Workshop brings together students, professionals, and enthusiasts to learn hands-on robotics skills.
                            Participants get practical experience with hardware and software, building robots that solve real-world challenges,
                            fostering creativity, teamwork, and technical excellence in the field of robotics and automation.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="badge badge-orange">🔧 Hardware Projects</span>
                            <span className="badge badge-lavender">🧠 AI Integration</span>
                            <span className="badge badge-mint">🤝 Team Collaboration</span>
                            <span className="badge badge-sunny">📜 Certificates</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-accent">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-coral mb-2">IIT Bombay</div>
                            <p className="text-gray-500">Techfest Event</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mint to-teal-600 mb-2">3+</div>
                            <p className="text-gray-500">Workshops Completed</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lavender to-purple-600 mb-2">Hands-On</div>
                            <p className="text-gray-500">Practical Learning</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Want to Learn With Us?</h2>
                    <p className="text-gray-500 mb-8 text-lg">
                        Join our team for future workshops and training programs. Get hands-on experience with cutting-edge technologies.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-8 py-3.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-200/50 hover:shadow-orange-300/50 hover:scale-[1.02] transition-all"
                    >
                        🎮 Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProgramsDetails;
