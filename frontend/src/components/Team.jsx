// Team – Material Flat Enterprise Cards + Ashritha photo added
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const TeamCard = ({ name, role, institution, links, image, imagePlaceholder, credentials }) => (
    <div className="mat-card !p-5 text-center flex flex-col items-center h-full">
        {/* Avatar */}
        <div className="w-20 h-20 mb-4 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
                <span className="text-3xl select-none">{imagePlaceholder}</span>
            )}
        </div>

        <h3 className="text-sm font-bold text-gray-800 leading-snug mb-0.5">{name}</h3>
        <p className="text-orange-500 font-semibold text-xs mb-2">{role}</p>

        {/* Credential chips */}
        {credentials && credentials.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-1 mb-3">
                {credentials.map((cred, idx) => (
                    <span key={idx} className={`badge ${cred.color} text-[10px]`}>{cred.label}</span>
                ))}
            </div>
        ) : (
            institution && <p className="text-gray-400 text-[11px] mb-3 leading-snug px-1">{institution}</p>
        )}

        {/* Social links */}
        <div className="flex gap-1.5 mt-auto pt-2">
            {links.linkedin && (
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Linkedin size={13} />
                </a>
            )}
            {links.github && (
                <a href={links.github} target="_blank" rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                    <Github size={13} />
                </a>
            )}
            {links.email && (
                <a href={`mailto:${links.email}`}
                    className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                    <Mail size={13} />
                </a>
            )}
        </div>
    </div>
);

const Team = () => {
    const mentors = [
        {
            name: "Prof. Kasarapu Ashok",
            role: "National Level Mentor & R&D Coordinator",
            credentials: [
                { label: "🏛️ ARTPARK-IISc", color: "badge-orange" },
                { label: "🎓 TIH-IIT Bombay", color: "badge-lavender" },
                { label: "🔧 CITD Hyderabad", color: "badge-mint" },
                { label: "☁️ Azure Data Engineer", color: "badge-coral" },
                { label: "🤖 Google Gen AI", color: "badge-sunny" },
                { label: "⚡ AWS Expert", color: "badge-orange" },
                { label: "🏫 Trinity College, Peddapalli", color: "badge-mint" },
            ],
            links: { email: "ashok@gmail.com" },
            image: "/images/AshokSir.jpeg"
        }
    ];

    const professionals = [
        {
            name: "Kurimilla Prashanth",
            role: "Network Security Lead",
            institution: "Capgemini (8+ Yrs Exp)",
            links: {},
            image: "/images/prashant_photo.jpeg"
        },
        {
            name: "Nampelli Vinodkumar",
            role: "Operations & Admin",
            institution: "Vasavi Groups",
            links: {},
            image: "/images/vinod_photo.jpeg"
        }
    ];

    const students = [
        {
            name: "MD Sameer",
            role: "Student Developer (IT)",
            institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
            links: { email: "sameermohammad2344@gmail.com", linkedin: "https://www.linkedin.com/in/mohammad-sameer-47bb86325" },
            image: "/images/Sameer.jpg"
        },
        {
            name: "Janagani Shrethan Reddy",
            role: "Student Developer",
            institution: "Indian Institute of Technology Hyderabad",
            links: { email: "shrethan186@gmail.com", github: "https://github.com/Shrethan-ee/shrethan", linkedin: "https://www.linkedin.com/in/shrethan-reddy-janagani-83061a311/" },
            image: "/images/shrethan.jpg"
        },
        {
            name: "Jhansi Sri",
            role: "Student Developer",
            institution: "Trinity Engineering College",
            links: {},
            image: "/images/jhanspic.jpeg"
        },
        {
            name: "Rishitha",
            role: "Student Developer",
            institution: "Trinity Engineering College",
            links: {},
            image: "/images/Rishitha.jpeg"
        },
        {
            name: "Kasarapu Kusuma Sri",
            role: "Student Developer",
            institution: "Trinity Engineering College",
            links: { email: "kusumakasarapu.111@gmail.com", linkedin: "https://in.linkedin.com/in/kasarapu-kusuma-sri-345886332" },
            image: "/images/Kusuma.jpeg"
        },
        {
            name: "Vennapureddy Ashritha Reddy",
            role: "Student Developer",
            institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
            links: { email: "Vennapureddyashritha@gmail.com", linkedin: "https://www.linkedin.com/feed/" },
            image: "/images/ashritha.jpeg"
        },
        {
            name: "Katadi Prasanna Kumari",
            role: "AI/ML Developer",
            institution: "Malla Reddy Engineering College for Women, Maisammaguda",
            links: { email: "prasannakumari.katadi29@gmail.com" },
            image: "/images/PrasannaKumari.jpeg"
        }
    ];

    const allMembers = [...professionals, ...students];

    return (
        <section id="team" className="py-20 px-6 bg-surface">
            <div className="max-w-6xl mx-auto">
                <div className="section-header">
                    <span className="badge badge-lavender mb-4 inline-block">👥 Our People</span>
                    <h2>Meet the Team</h2>
                    <p>A diverse mix of experienced professionals and innovation-driven students.</p>
                </div>

                {/* Mentors */}
                {mentors.length > 0 && (
                    <div className="mb-12">
                        <div className="flex items-center gap-3 justify-center mb-6">
                            <div className="h-px w-10 bg-gray-200" />
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">🎓 Mentors</h3>
                            <div className="h-px w-10 bg-gray-200" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-full max-w-xs">
                                {mentors.map((mentor, index) => (
                                    <TeamCard key={`mentor-${index}`} {...mentor} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Team Members */}
                <div className="flex items-center gap-3 justify-center mb-6">
                    <div className="h-px w-10 bg-gray-200" />
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">👥 Team Members</h3>
                    <div className="h-px w-10 bg-gray-200" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {allMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
