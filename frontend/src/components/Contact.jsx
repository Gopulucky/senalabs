// Contact – Material Design Flat Form
import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            if (response.ok) {
                setStatus('sent');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 px-6 bg-white">
            <div className="max-w-xl mx-auto">
                <div className="section-header">
                    <span className="badge badge-coral mb-4 inline-block">💬 Get in Touch</span>
                    <h2>Contact Us</h2>
                    <p>Have a question or want to join our team? Drop us a message!</p>
                </div>

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
        </section>
    );
};

export default Contact;
