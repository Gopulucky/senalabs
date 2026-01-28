import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-primary">
            {/* Subtle Background Pattern (Optional, keeping it clean for now) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-primary to-primary"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">

                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                    Build. Innovate. Use.
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Empowering tomorrow's innovators with rigorous robotics training and tech challenges.
                    Join SenA Labs to shape the future.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    {/* Primary Button: White on Blue (Brand Color needed, using standard blue for now or white on transparent) 
             User Request: Blue text on White background OR White text on Blue background.
          */}
                    <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg shadow-md hover:bg-gray-100 transition-transform hover:-translate-y-0.5 w-full sm:w-auto">
                        Join Us
                    </button>
                    <button className="px-8 py-3 border border-gray-500 text-white font-bold rounded-lg hover:bg-white/10 transition-transform hover:-translate-y-0.5 w-full sm:w-auto">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
