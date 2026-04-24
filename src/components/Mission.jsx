// Mission – Dark Glass Split Layout with ASCII Art
import React from 'react';

const MISSION_ASCII = `
  ┌──────────────────┐
  │  ╭───╮   ╭───╮  │
  │  │ $ │   │ > │  │
  │  ╰───╯   ╰───╯  │
  │  ┌─────────────┐ │
  │  │  ░░░░░░░░░  │ │
  │  │  ░ CODE  ░  │ │
  │  │  ░░░░░░░░░  │ │
  │  └─────────────┘ │
  │    ╱╱╱╱╱╱╱╱╱╱    │
  └──────────────────┘
   Students @ SenA Labs`;

const Mission = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
                {/* Content – 3 cols */}
                <div className="md:col-span-3 space-y-5">
                    <span className="badge-glass badge-orange">🎯 Our Mission</span>
                    <h2 className="font-display text-3xl font-extrabold text-text-primary leading-tight tracking-tight">
                        Empowering Tomorrow's Innovators
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-violet rounded-full" />
                    <p className="text-text-secondary text-base leading-relaxed">
                        At Sena Labs, we fuel creativity through robotics training, hackathons, and national expos designed for students and professionals alike.
                    </p>
                    <p className="text-text-secondary text-base leading-relaxed">
                        We support student startups and foster partnerships with industry and government to drive real-world innovation forward.
                    </p>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        <span className="badge-glass badge-cyan">🏫 IIT Partners</span>
                        <span className="badge-glass badge-green">🤝 MSME Certified</span>
                    </div>
                </div>

                {/* Visual – 2 cols – ASCII Art in Glass Card */}
                <div className="md:col-span-2">
                    <div className="glass-card p-6 animate-float">
                        <pre className="font-mono text-aurora-cyan text-[11px] leading-tight select-none whitespace-pre text-center opacity-70">
                            {MISSION_ASCII}
                        </pre>
                        <div className="flex gap-2 mt-4 justify-center">
                            <span className="badge-glass badge-orange text-[10px]">🔧 Hardware</span>
                            <span className="badge-glass badge-violet text-[10px]">🧠 AI/ML</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
