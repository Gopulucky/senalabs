import React from 'react';

const Mission = () => {
    return (
        <section id="about" className="py-24 px-6 bg-secondary text-text-main">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Empowering Tomorrow's Innovators
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At Sena labs, we fuel creativity through robotics training, hackathons, and national expos designed for students and professionals alike.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We student startups and foster partnerships with industry and government to drive real-world innovation forward.
                    </p>
                </div>

                {/* Image/Visual - Using a clean placeholder or image style */}
                <div className="relative">
                    {/* Simple shadow decoration */}
                    <div className="absolute top-4 left-4 w-full h-full bg-gray-100 rounded-lg -z-10"></div>
                    <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center overflow-hidden shadow-lg">
                        {/* Placeholder for real-world image */}
                        <div className="text-center p-8">
                            <span className="text-6xl block mb-4">👨‍💻</span>
                            <p className="text-gray-500 font-medium">Students working on robotics</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
