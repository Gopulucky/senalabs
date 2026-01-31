import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Real event photos from team folder
    const images = [
        {
            id: 1,
            src: '/images/WhatsApp Image 2026-01-29 at 3.44.12 PM.jpeg',
            title: 'Team Workshop Session'
        },
        {
            id: 2,
            src: '/images/WhatsApp Image 2026-01-29 at 3.44.12 PM (1).jpeg',
            title: 'Hackathon Event'
        },
        {
            id: 3,
            src: '/images/WhatsApp Image 2026-01-29 at 3.44.16 PM.jpeg',
            title: 'Technical Training'
        },
        {
            id: 4,
            src: '/images/WhatsApp Image 2026-01-29 at 3.44.24 PM.jpeg',
            title: 'Project Presentation'
        },
        {
            id: 5,
            src: '/images/WhatsApp Image 2026-01-29 at 3.44.26 PM.jpeg',
            title: 'Team Building Activity'
        },
    ];

    return (
        <section id="gallery" className="py-24 px-6 bg-accent">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                    Journey & Events
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Capturing moments from our workshops, hackathons, and team activities.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            onClick={() => setSelectedImage(img)}
                            className="aspect-square rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 relative group overflow-hidden border border-gray-200"
                        >
                            {/* Image */}
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-sm font-medium">{img.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10">
                        <X size={32} />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full h-full object-contain rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 rounded-b-lg">
                            <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
