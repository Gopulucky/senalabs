// Contact – Material Design Flat Form + Contact Details
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        setTimeout(() => {
            setStatus('sent');
            setForm({ name: '', email: '', message: '' });
        }, 1200);
    };

    return (
        <section id="contact" className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="section-header">
                    <span className="badge badge-coral mb-4 inline-block">💬 Get in Touch</span>
                    <h2>Contact Us</h2>
                    <p>Have a question or want to join our team? Drop us a message!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Details Card */}
                    <div className="mat-card !p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-6">Contact Details</h3>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail size={18} className="text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                                        <a href="mailto:ashok.kasarapu@gmail.com" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
                                            ashok.kasarapu@gmail.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone size={18} className="text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Mobile</p>
                                        <a href="tel:+918555925670" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
                                            +91 85559 25670
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin size={18} className="text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Address</p>
                                        <p className="text-sm font-medium text-gray-700">Sri Chaitanya Colony, Peddapalli</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Linkedin size={18} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/kasarapu-ashok-287748186/" target="_blank" rel="noopener noreferrer"
                                            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                                            Kasarapu Ashok
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="mat-card">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-800 text-sm font-medium
                                        focus:bg-white focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-800 text-sm font-medium
                                        focus:bg-white focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-800 text-sm font-medium
                                        focus:bg-white focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all resize-none"
                                    placeholder="Tell us what you need..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="mat-btn mat-btn-primary w-full !py-3.5 !rounded-xl !text-base"
                            >
                                {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent!' : 'Send Message'}
                            </button>
                            {status === 'error' && (
                                <p className="text-coral text-sm text-center font-medium">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
