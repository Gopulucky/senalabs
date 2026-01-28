import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Still employing placeholders, but with a cleaner palette integration if needed.
    // Using Slate/Gray tones or keeping vibrant colors for the actual content is fine.
    const images = [
        { id: 1, color: 'bg-red-100', title: 'Hackathon 2024' },
        { id: 2, color: 'bg-blue-100', title: 'Robotics Workshop' },
        { id: 3, color: 'bg-green-100', title: 'Science Fair' },
        { id: 4, color: 'bg-yellow-100', title: 'Guest Lecture' },
        { id: 5, color: 'bg-purple-100', title: 'Project Demo' },
        { id: 6, color: 'bg-pink-100', title: 'Team Building' },
    ];

    return (
        <section id="gallery" className="py-24 px-6 bg-accent">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Journey & Events</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            onClick={() => setSelectedImage(img)}
                            className={`aspect-square ${img.color} rounded-lg cursor-pointer hover:shadow-md transition-all duration-300 relative group overflow-hidden border border-gray-100`}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-white/90 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-gray-900 text-sm font-semibold">{img.title}</p>
                            </div>

                            {/* Center Icon placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="text-4xl">📷</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-slate-900/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors">
                        <X size={32} />
                    </button>

                    <div
                        className={`w-full max-w-4xl aspect-video ${selectedImage.color} rounded-lg shadow-2xl flex items-center justify-center bg-white`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-3xl font-bold text-gray-400">{selectedImage.title}</h3>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
