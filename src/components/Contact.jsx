// Contact – Terminal-styled Dark Glass Form
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            setForm({ name: '', email: '', message: '' });
        }, 1200);
    };

    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="section-title-block">
                    <span className="badge-glass badge-pink mb-4 inline-block">💬 Get in Touch</span>
                    <h2>Contact Us</h2>
                    <p>Have a question or want to join our team? Drop us a message!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Details Card */}
                    <div className="glass-card p-6 flex flex-col justify-between">
                        <div>
                            <div className="font-mono text-[11px] text-text-dim mb-4">
                                ┌─── contact_info.json ───┐
                            </div>
                            <h3 className="font-display text-lg font-bold text-text-primary mb-6">Contact Details</h3>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-0.5">Email</p>
                                        <a href="mailto:ashok.kasarapu@gmail.com" className="text-sm font-medium text-text-primary hover:text-aurora-cyan transition-colors">
                                            ashok.kasarapu@gmail.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-0.5">Mobile</p>
                                        <a href="tel:+918555925670" className="text-sm font-medium text-text-primary hover:text-aurora-cyan transition-colors">
                                            +91 85559 25670
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-0.5">Address</p>
                                        <p className="text-sm font-medium text-text-primary">Sri Chaitanya Colony, Peddapalli</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-aurora-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Linkedin size={18} className="text-aurora-blue" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-0.5">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/kasarapu-ashok-287748186/" target="_blank" rel="noopener noreferrer"
                                            className="text-sm font-medium text-aurora-blue hover:text-aurora-cyan transition-colors">
                                            Kasarapu Ashok
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="glass-card p-6">
                        <div className="font-mono text-[11px] text-text-dim mb-4">
                            ┌─── new_message.sh ───┐
                        </div>
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block font-mono text-[10px] text-text-muted uppercase tracking-wider mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="input-dark"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-[10px] text-text-muted uppercase tracking-wider mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="input-dark"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-[10px] text-text-muted uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="input-dark resize-none"
                                    placeholder="Tell us what you need..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="btn-aurora btn-aurora-primary w-full !py-3.5 !rounded-xl font-mono"
                            >
                                {status === 'sending' ? '> SENDING...' : status === 'sent' ? '> ✓ SENT!' : '> SEND MESSAGE'}
                            </button>
                            {status === 'error' && (
                                <p className="text-coral text-sm text-center font-medium font-mono">$ error: something went wrong</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
