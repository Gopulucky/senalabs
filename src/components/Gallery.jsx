// Gallery – Material Flat Grid
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, src: '/images/WhatsApp Image 2026-01-29 at 3.44.12 PM.jpeg', title: 'Team Workshop Session' },
        { id: 2, src: '/images/WhatsApp Image 2026-01-29 at 3.44.12 PM (1).jpeg', title: 'Hackathon Event' },
        { id: 3, src: '/images/WhatsApp Image 2026-01-29 at 3.44.16 PM.jpeg', title: 'Technical Training' },
        { id: 4, src: '/images/WhatsApp Image 2026-01-29 at 3.44.24 PM.jpeg', title: 'Project Presentation' },
        { id: 5, src: '/images/WhatsApp Image 2026-01-29 at 3.44.26 PM.jpeg', title: 'Team Building Activity' },
    ];

    return (
        <section id="gallery" className="py-20 px-6 bg-surface">
            <div className="max-w-6xl mx-auto">
                <div className="section-header">
                    <span className="badge badge-lavender mb-4 inline-block">📸 Memory Lane</span>
                    <h2>Journey & Events</h2>
                    <p>Capturing moments from our workshops, hackathons, and team activities.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            onClick={() => setSelectedImage(img)}
                            className="mat-card !p-1.5 cursor-pointer group"
                        >
                            <div className="aspect-square rounded-xl overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                                />
                            </div>
                            <p className="text-xs font-medium text-gray-500 mt-2 px-1 truncate">{img.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-6 right-6 text-white hover:text-orange-300 transition-colors z-10">
                        <X size={28} />
                    </button>
                    <div
                        className="relative max-w-4xl max-h-[85vh] w-full animate-fadeInUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full h-full object-contain rounded-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4 rounded-b-2xl">
                            <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
