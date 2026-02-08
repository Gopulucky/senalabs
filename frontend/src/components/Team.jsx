import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const TeamMember = ({ name, role, institution, links, image, imagePlaceholder }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center group hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center h-full">
        <div className="w-32 h-32 mb-4 bg-gray-100 rounded-full flex items-center justify-center text-4xl overflow-hidden relative border-4 border-white shadow-sm">
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
                <span className="group-hover:scale-110 transition-transform duration-300 select-none">{imagePlaceholder}</span>
            )}
        </div>
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{name}</h3>
        <p className="text-blue-600 font-medium text-sm mb-2">{role}</p>
        {institution && <p className="text-gray-500 text-xs mb-4">{institution}</p>}

        <div className="flex justify-center space-x-3 text-gray-400 mt-auto">
            {links.linkedin && <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin size={18} /></a>}
            {links.github && <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors"><Github size={18} /></a>}
            {links.email && <a href={`mailto:${links.email}`} className="hover:text-red-500 transition-colors"><Mail size={18} /></a>}
        </div>
    </div>
);

const Team = () => {
    // Mentors - Industry Experts guiding our team
    const mentors = [
        {
            name: "Kasarapu Ashok",
            role: "R&D Coordinator",
            institution: "Trinity Engineering College and Technology, Peddapalli (13-14 Yrs Exp)",
            links: { email: "ashok@gmail.com" },
            imagePlaceholder: "👨‍🏫"
        }
    ];

    // Data extracted from People Details.docx
    const professionals = [
        {
            name: "Kurimilla Prashanth",
            role: "Network Security Lead",
            institution: "Capgemini (8+ Yrs Exp)",
            links: {}, // No links provided in doc
            image: "/images/prashant_photo.jpeg"
        },
        {
            name: "Nampelli Vinodkumar",
            role: "Operations & Admin",
            institution: "Vasavi Groups",
            links: {}, // No links provided in doc
            image: "/images/vinod_photo.jpeg"
        },
        {
            name: "Prasanna",
            role: "Team Member",
            institution: "",
            links: {},
            imagePlaceholder: "🧑‍💻"
        }
    ];

    const students = [
        {
            name: "MD Sameer",
            role: "Student Developer (IT)",
            institution: "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology",
            links: { email: "sameermohammad2344@gmail.com", linkedin: "https://www.linkedin.com/in/mohammad-sameer-47bb86325" },
            imagePlaceholder: "🧑‍🎓"
        },
        {
            name: "Janagani Shrethan Reddy",
            role: "Student Developer",
            institution: "Indian Institute of Technology Hyderabad",
            links: { email: "shrethan186@gmail.com", github: "https://github.com/Shrethan-ee/shrethan", linkedin: "https://www.linkedin.com/in/shrethan-reddy-janagani-83061a311/" },
            imagePlaceholder: "🧑‍🎓"
        },
        {
            name: "Kandula Rishitha Devi",
            role: "AI/ML Developer",
            institution: "Malla Reddy Engineering College for Women",
            links: { email: "rishithak996@gamil.com", linkedin: "https://share.google/xcE1aBo4QLujAOUj7" },
            imagePlaceholder: "👩‍🎓"
        },
        {
            name: "Jhansi Houdekari",
            role: "AI/ML Developer",
            institution: "Malla Reddy Engineering College for Women",
            links: { email: "jhansihoudekari944@gamil.com", linkedin: "https://www.linkedin.com/in/jhansi-houdekari-796666356" },
            image: "/images/jhanspic.jpeg"
        },
        {
            name: "Kusuma Sri",
            role: "AI/ML Developer",
            institution: "Malla Reddy Engineering College for Women",
            links: { email: "kusumakasarapu.111@gmail.com", linkedin: "https://in.linkedin.com/in/kasarapu-kusuma-sri-345886332" },
            imagePlaceholder: "👩‍🎓"
        },
        {
            name: "Vennapureddy Ashritha Reddy",
            role: "Student Developer",
            institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
            links: { email: "Vennapureddyashritha@gmail.com", linkedin: "https://www.linkedin.com/feed/" },
            imagePlaceholder: "👩‍🎓"
        }
    ];

    const allMembers = [...professionals, ...students];

    return (
        <section id="team" className="py-24 px-6 bg-accent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        A diverse mix of experienced professionals and innovation-driven students.
                    </p>
                </div>

                {/* Mentors Section */}
                {mentors.length > 0 && (
                    <>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎓 Our Mentors</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {mentors.map((mentor, index) => (
                                <TeamMember key={`mentor-${index}`} {...mentor} />
                            ))}
                        </div>
                    </>
                )}

                {/* Team Members Section */}
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">👥 Team Members</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
