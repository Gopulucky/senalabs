// HackathonsPage – Warm Minimalist Light Theme
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Lightbulb, Target } from 'lucide-react';

const HackathonCard = ({ title, subtitle, description, icon: Icon, featured = false }) => (
    <div className={`bg-white p-8 rounded-2xl border-2 ${featured ? 'border-orange-300 shadow-lg shadow-orange-100/30' : 'border-gray-100'} card-hover mb-6`}>
        {featured && (
            <div className="badge badge-orange mb-4">⭐ Featured Project</div>
        )}
        <div className="flex items-start gap-4 mb-4">
            <div className={`w-12 h-12 ${featured ? 'bg-gradient-to-br from-orange-400 to-coral' : 'bg-orange-50'} ${featured ? 'text-white' : 'text-orange-500'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon size={24} />
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
                {subtitle && <p className="text-orange-500 font-medium text-sm mb-3">{subtitle}</p>}
            </div>
        </div>
        <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
);

const HackathonDetails = () => {
    const hackathons = [
        {
            title: "MSME 5.0 - Sahaya Setu",
            subtitle: "Digital Solution for Rural Businesses",
            description: "Sahaya Setu is a digital solution created to support small and rural businesses in handling their inventory, logistics, and government scheme access with ease. The platform includes voice assistance, local language options, and easy-to-use dashboards for business owners, government officials, and NGO volunteers. It brings community collaboration, labor support, and scheme information together in a single system. This project is aimed at increasing business efficiency, promoting digital inclusion, and creating practical impact for MSMEs in rural regions.",
            icon: Lightbulb
        },
        {
            title: "IIT Thirupati - AGRI ASSIST",
            subtitle: "Smart Farming AI Solution",
            description: "AGRI ASSIST is a smart farming solution developed to support small and marginal farmers using AI, IoT, and satellite data. The platform provides voice-based guidance in local languages, crop health and pest monitoring, weather and irrigation planning, and soil health tracking. It is designed to work even in low-internet conditions, making it accessible to rural farmers with limited digital skills. This project focuses on improving farm productivity, reducing losses, and promoting sustainable agriculture through simple and practical technology.",
            icon: Target
        },
        {
            title: "IIT Thirupati - Agri Roar",
            subtitle: "Smart Farming Robot Kit",
            description: "Agri Roar is a low-cost smart farming robot kit for small and rural farmers. It uses sensors, AI, and satellite data to monitor soil, crops, pests, and weather, while working offline with voice alerts in local languages. Powered by solar energy, it detects plant diseases, gives early warnings, and protects crops using natural bird-scaring sounds. Easy to maintain and scalable, Agri Roar helps farmers make timely decisions, reduce losses, improve yield, and support sustainable agriculture in line with the Viksit Bharat vision.",
            icon: Target
        },
        {
            title: "Statathon 2025 - SurveySage",
            subtitle: "AI-Powered Smart Survey Tool",
            description: "SurveySage is an AI-powered smart survey tool designed to make data collection and analysis more efficient. It enables real-time data analysis, applies predictive modeling to identify patterns and trends, and provides a user-friendly dashboard for clear visualization and decision-making. Built with open-source technologies like Python, R, SQL, and visualization tools such as PowerBI and Streamlit, it ensures automation, scalability, and transparency. By addressing challenges like large dataset handling and model bias through preprocessing, cross-validation, and cloud deployment, SurveySage delivers data-driven insights, efficient resource allocation, and scalable solutions that support impactful and transparent decision-making.",
            icon: Lightbulb
        },
        {
            title: "UIDAI Hackathon - Aadhaar Data Analysis",
            subtitle: "Data Analytics & Visualization",
            description: "This project focuses on transforming large-scale Aadhaar enrollment and update data into meaningful insights using data analytics, visualization, and anomaly detection techniques. The project analyzes temporal, geographic, and demographic patterns across biometric updates, demographic updates, and new enrollments to uncover hidden trends and irregularities. A key outcome of the study is the identification of unexpected adult (18+) enrollment anomalies in a largely saturated Aadhaar ecosystem, with strong geographic concentration in international border regions. By combining robust data engineering, exploratory visualizations, and targeted geospatial case studies, the solution supports evidence-based decision-making and highlights areas requiring policy attention and enhanced verification.",
            icon: Target
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
                        <div className="badge badge-orange">🏆 Quest Log</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">🚀 Our Hackathon Journey</h1>
                        <p className="text-gray-500 text-lg max-w-3xl">
                            Explore our innovative solutions developed through various national and international hackathons,
                            where creativity meets real-world problem-solving.
                        </p>
                    </div>
                </div>
            </section>

            {/* Hackathon Projects */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-2">
                        {hackathons.map((hackathon, index) => (
                            <HackathonCard key={index} {...hackathon} />
                        ))}
                    </div>
                </div>
            </section>

            {/* SIH Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-gray-100 card-hover">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Trophy size={24} />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Smart India Hackathon (SIH)</h2>
                                <p className="text-orange-500 font-medium text-sm">Team AyurSutra</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <p className="text-gray-500 leading-relaxed mb-4">
                                    We participated in the Smart India Hackathon (SIH), India's national innovation initiative
                                    that encourages students to solve real-world problems using technology with expert and government guidance.
                                </p>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Users size={18} className="text-orange-400" />
                                    <span className="font-medium text-gray-700">6 Team Members</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3">💡 Our Focus</h4>
                                <p className="text-gray-500 leading-relaxed">
                                    Our project focused on improving the Ayurvedic patient experience, addressing challenges such as
                                    appointment booking, therapy scheduling, treatment tracking, and patient management.
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">📱 Solution: AyurSutra (Danavantari)</h4>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                AyurSutra – Panchakarma Patient Management and Therapy Scheduling Software is a user-friendly mobile
                                application that enables patients to connect with Ayurvedic doctors, manage therapy schedules, and
                                track treatments through reminders and follow-ups.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h5 className="font-bold text-gray-800 mb-2">🛠️ Our Approach</h5>
                                    <p className="text-gray-500 text-sm">
                                        We selected the problem from the SIH portal, identified gaps in existing systems, and built
                                        the solution from scratch through research, teamwork, and mentor feedback.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-800 mb-2">🏆 Experience</h5>
                                    <p className="text-gray-500 text-sm">
                                        SIH provided hands-on learning, expert mentorship, teamwork exposure, networking opportunities,
                                        and recognition through certificates and prizes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Us in Innovation</h2>
                    <p className="text-gray-500 mb-8 text-lg">
                        Ready to be part of our next hackathon team? Get in touch and let's build something amazing together.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-8 py-3.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-200/50 hover:shadow-orange-300/50 hover:scale-[1.02] transition-all"
                    >
                        🎮 Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HackathonDetails;
