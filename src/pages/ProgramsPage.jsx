// ProgramsPage – Aurora Terminal Theme
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Brain, Wrench, Zap } from 'lucide-react';
import AsciiArt from '../components/ui/AsciiArt';

const ProgramCard = ({ title, overview, keyLearning, hardware, outcome, icon: Icon, featured = false }) => (
    <div className={`glass-card card-hover-glow p-8 mb-8 ${featured ? 'ring-1 ring-aurora-cyan/30' : ''}`}>
        {featured && <span className="badge-glass badge-cyan mb-4 inline-block">⭐ Featured Workshop</span>}
        <div className="flex items-start gap-4 mb-6">
            <div className={`w-14 h-14 ${featured ? 'bg-gradient-to-br from-aurora-cyan to-aurora-violet' : 'bg-aurora-cyan/10'} ${featured ? 'text-white' : 'text-aurora-cyan'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon size={28} />
            </div>
            <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">{title}</h3>
            </div>
        </div>

        <div className="space-y-6">
            <div>
                <h4 className="font-display font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-aurora-cyan" /> Overview
                </h4>
                <p className="text-text-secondary leading-relaxed">{overview}</p>
            </div>

            {keyLearning && (
                <div>
                    <h4 className="font-display font-bold text-text-primary mb-3 flex items-center gap-2">
                        <Brain size={18} className="text-aurora-cyan" /> Key Learning Areas
                    </h4>
                    <ul className="space-y-2">
                        {keyLearning.map((item, idx) => (
                            <li key={idx} className="text-text-secondary flex items-start gap-2">
                                <span className="text-terminal-green mt-1 font-mono text-xs">▸</span>
                                <span className="flex-1">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {hardware && (
                <div>
                    <h4 className="font-display font-bold text-text-primary mb-3 flex items-center gap-2">
                        <Wrench size={18} className="text-aurora-cyan" /> Hardware & Implementation
                    </h4>
                    <p className="text-text-secondary leading-relaxed mb-3">{hardware.description}</p>
                    {hardware.components && (
                        <ul className="space-y-1 mb-3">
                            {hardware.components.map((comp, idx) => (
                                <li key={idx} className="text-text-secondary flex items-start gap-2 font-mono text-sm">
                                    <span className="text-terminal-green">✓</span>
                                    <span>{comp}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {hardware.skills && (
                        <div className="mt-3">
                            <p className="text-sm font-semibold text-text-primary mb-2 font-mono">Technical Skills:</p>
                            <ul className="space-y-1">
                                {hardware.skills.map((skill, idx) => (
                                    <li key={idx} className="text-text-secondary text-sm flex items-start gap-2">
                                        <span className="text-aurora-cyan font-mono">→</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {outcome && (
                <div className="bg-aurora-cyan/5 border border-aurora-cyan/10 p-4 rounded-xl">
                    <h4 className="font-display font-bold text-aurora-cyan mb-2">🎯 Outcome</h4>
                    <p className="text-text-secondary">{outcome}</p>
                </div>
            )}
        </div>
    </div>
);

const ProgramsDetails = () => {
    const programs = [
        {
            title: 'Robotics Workshop: Hand Gesture Controlled Robot',
            icon: Cpu,
            featured: true,
            overview: 'In December, we participated in a robotics workshop held during the Techfest event at IIT Bombay. The core focus of this workshop was the development of a hand gesture-controlled robot. The training covered both the software/machine learning aspects and the necessary hardware integration.',
            keyLearning: [
                'Learning fundamental machine learning concepts and algorithms',
                'Writing and experimenting with machine learning code specifically for interpreting hand gestures',
                'Understanding the practical integration of ML with robotics hardware',
            ],
            hardware: {
                description: 'Following the software training, participants were provided with the necessary hardware components to build the robot.',
                components: ['ESP chip (ESP32 or ESP8266)', 'Chassis and body components', 'Wheels (tyres)', 'Motors and motor drivers'],
                skills: [
                    'Breadboarding: Learning how to safely and effectively place the ESP chip onto a breadboard',
                    'Wiring and Connections: Understanding how to connect the various components (motors, power source, etc.) to the ESP chip',
                    'Deployment: Utilizing the Arduino IDE to deploy the gesture recognition code onto the ESP chip',
                ],
            },
            outcome: 'The workshop successfully culminated in the assembly and operation of the hand gesture-controlled robot. We were able to test and run the final robot on-site, demonstrating control via learned hand gestures.',
        },
        {
            title: 'LLM using Python: Implementation and Concepts',
            icon: Brain,
            overview: 'We participated in a comprehensive workshop focused on Large Language Models (LLMs) held during Techfest at IIT Bombay. The session provided a strong foundational understanding of LLMs, coupled with practical implementation techniques using Python.',
            keyLearning: [
                'What is an LLM? A deep dive into the architecture, function, and significance of Large Language Models in modern AI',
                'LLM Fundamentals: Understanding the core concepts, including transformer architecture, tokenization, and pre-training methodologies',
                'Implementation using Python: Practical guidance on leveraging Python libraries and frameworks (like Hugging Face) to interact with and deploy LLMs',
                'Model Fine-Tuning: Introduction to the principles of adapting pre-trained LLMs for specific downstream tasks',
                'API Utilization: Learning how to effectively integrate LLM capabilities into applications using available APIs',
            ],
            outcome: 'Gained comprehensive understanding of LLM architecture and practical implementation skills using Python, enabling us to integrate AI capabilities into real-world applications.',
        },
    ];

    return (
        <div className="min-h-screen relative">
            {/* Expressive Art Pillars */}
            <div className="absolute top-0 left-0 w-1/4 h-full pointer-events-none z-0 ascii-mask-fade-right opacity-20 mix-blend-screen overflow-hidden hidden md:block">
                <AsciiArt 
                    theme="canvas_waves" 
                    accent="aurora-cyan" 
                    rows={120} 
                    cols={30} 
                    style={{ '--ascii-font-size': '14px', '--ascii-line-height': '0.9' }} 
                />
            </div>
            <div className="absolute top-0 right-0 w-1/4 h-full pointer-events-none z-0 ascii-mask-fade opacity-20 mix-blend-screen overflow-hidden hidden md:block" style={{ transform: 'scaleX(-1)' }}>
                <AsciiArt 
                    theme="canvas_waves" 
                    accent="aurora-violet" 
                    rows={120} 
                    cols={30} 
                    style={{ '--ascii-font-size': '14px', '--ascii-line-height': '0.9' }} 
                />
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-aurora-cyan/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-text-muted hover:text-aurora-cyan mb-8 transition-colors group font-mono text-sm">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        cd ~/home
                    </Link>
                    <div className="space-y-4">
                        <span className="badge-glass badge-green">🎓 Skill Tree</span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary text-shadow-xl">Our Workshops & Training Programs</h1>
                        <p className="text-text-secondary text-lg max-w-3xl mb-8 bg-bg-deep/50 backdrop-blur-sm p-4 rounded-xl border border-border-subtle inline-block">
                            Explore our hands-on training programs and workshops held at prestigious institutions like IIT Bombay's Techfest,
                            where we gained practical skills in robotics, AI, and emerging technologies.
                        </p>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Programs */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="section-header-terminal mb-8">
                        <span className="terminal-label">WORKSHOPS ATTENDED</span>
                        <span className="section-counter">[ 01 / 03 ]</span>
                    </div>
                    {programs.map((program, index) => (
                        <ProgramCard key={index} {...program} />
                    ))}
                </div>
            </section>

            <div className="section-divider" />

            {/* Workshops Conducted */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="section-header-terminal mb-8">
                        <span className="terminal-label">WORKSHOPS CONDUCTED</span>
                        <span className="section-counter">[ 02 / 03 ]</span>
                    </div>

                    <div className="text-center mb-12">
                        <span className="badge-glass badge-green mb-4 inline-block">🎯 Organized By SenA Labs</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">Workshops Conducted By Us</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                            We don't just participate—we also organize and host workshops to nurture innovation and inspire the next generation of creators.
                        </p>
                    </div>

                    <div className="glass-card p-8 ring-1 ring-terminal-green/20">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-terminal-green to-aurora-cyan text-white rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                                🤖
                            </div>
                            <div className="flex-1">
                                <span className="badge-glass badge-green mb-2 inline-block">SenA Labs Event</span>
                                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Robotics Workshop</h3>
                                <p className="text-terminal-green font-mono text-sm">Organized by SenA Labs</p>
                            </div>
                        </div>
                        <p className="text-text-secondary leading-relaxed mb-6">
                            Our flagship Robotics Workshop brings together students, professionals, and enthusiasts to learn hands-on robotics skills.
                            Participants get practical experience with hardware and software, building robots that solve real-world challenges,
                            fostering creativity, teamwork, and technical excellence in the field of robotics and automation.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="badge-glass badge-orange">🔧 Hardware Projects</span>
                            <span className="badge-glass badge-violet">🧠 AI Integration</span>
                            <span className="badge-glass badge-green">🤝 Team Collaboration</span>
                            <span className="badge-glass badge-amber">📜 Certificates</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Stats */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="section-header-terminal mb-8">
                        <span className="terminal-label">STATS</span>
                        <span className="section-counter">[ 03 / 03 ]</span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="glass-card p-6">
                            <div className="font-mono text-3xl font-bold gradient-text mb-2">IIT Bombay</div>
                            <p className="text-text-secondary font-mono text-sm">Techfest Event</p>
                        </div>
                        <div className="glass-card p-6">
                            <div className="font-mono text-3xl font-bold gradient-text-cyan mb-2">3+</div>
                            <p className="text-text-secondary font-mono text-sm">Workshops Completed</p>
                        </div>
                        <div className="glass-card p-6">
                            <div className="font-mono text-3xl font-bold gradient-text mb-2">Hands-On</div>
                            <p className="text-text-secondary font-mono text-sm">Practical Learning</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* CTA */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-3xl font-bold text-text-primary mb-4">Want to Learn With Us?</h2>
                    <p className="text-text-secondary mb-8 text-lg">
                        Join our team for future workshops and training programs. Get hands-on experience with cutting-edge technologies.
                    </p>
                    <Link to="/contact" className="btn-aurora btn-aurora-primary font-mono">
                        $ contact --senalabs
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProgramsDetails;
