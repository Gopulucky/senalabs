// Mission – Material Design Enterprise Layout
import React from 'react';

const Mission = () => {
    return (
        <section id="about" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
                {/* Content – 3 cols */}
                <div className="md:col-span-3 space-y-5">
                    <span className="badge badge-orange">🎯 Our Mission</span>
                    <h2 className="text-3xl font-extrabold text-gray-800 leading-tight tracking-tight">
                        Empowering Tomorrow's Innovators
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full" />
                    <p className="text-gray-500 text-base leading-relaxed">
                        At Sena Labs, we fuel creativity through robotics training, hackathons, and national expos designed for students and professionals alike.
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed">
                        We support student startups and foster partnerships with industry and government to drive real-world innovation forward.
                    </p>

                    {/* Material chips row */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        <div className="mat-btn mat-btn-outlined !py-2 !px-4 !text-xs !font-semibold !rounded-lg">
                            🏫 IIT Partners
                        </div>
                        <div className="mat-btn mat-btn-outlined !py-2 !px-4 !text-xs !font-semibold !rounded-lg">
                            🤝 MSME Certified
                        </div>
                    </div>
                </div>

                {/* Visual – 2 cols – flat graphic card */}
                <div className="md:col-span-2">
                    <div className="mat-card !p-0 overflow-hidden">
                        <div className="bg-gradient-to-br from-orange-50 to-accent-2 h-80 flex flex-col items-center justify-center p-8">
                            <span className="text-6xl block mb-4 animate-float">👨‍💻</span>
                            <p className="text-gray-500 font-semibold text-sm mb-4">Students working on robotics</p>
                            <div className="flex gap-2">
                                <span className="badge badge-orange">🔧 Hardware</span>
                                <span className="badge badge-mint">🧠 AI/ML</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
