import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PastEvents = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const images = [
        { id: 1, pos: 'top-left', src: '/src/assets/sliderPhotos/event1_img2.jpg' },
        { id: 2, pos: 'top-center', src: '/src/assets/sliderPhotos/event2_img2.jpg' },
        { id: 3, pos: 'top-right', src: '/src/assets/sliderPhotos/event3_img2.jpg' },
        { id: 4, pos: 'middle-far-left', src: '/src/assets/sliderPhotos/event4_img2.jpg' },
        { id: 5, pos: 'middle-left', src: '/src/assets/sliderPhotos/event5_img2.jpg' },
        { id: 6, pos: 'middle-center', src: '/src/assets/sliderPhotos/event6_img2.jpg' },
        { id: 7, pos: 'middle-right', src: '/src/assets/sliderPhotos/event7_img2.jpg' },
        { id: 8, pos: 'middle-far-right', src: '/src/assets/sliderPhotos/event8_img2.jpg' },
        { id: 9, pos: 'bottom-left', src: '/src/assets/sliderPhotos/event9_img2.jpg' },
        { id: 10, pos: 'bottom-center-left', src: '/src/assets/sliderPhotos/event10_img2.jpg' },
        { id: 11, pos: 'bottom-center', src: '/src/assets/sliderPhotos/event11_img2.jpg' },
        { id: 12, pos: 'bottom-center-right', src: '/src/assets/sliderPhotos/event12_img2.jpg' },
        { id: 13, pos: 'bottom-right', src: '/src/assets/sliderPhotos/event13_img2.jpg' },
        { id: 14, pos: 'extra-bottom-left', src: '/src/assets/sliderPhotos/event14_img2.jpg' },
        { id: 15, pos: 'extra-bottom-right', src: '/src/assets/sliderPhotos/event15_img2.jpg' },
    ];

    if (!isClient) {
        return null;
    }

    // Define the positions type
    const positions: { [key in 'top-left' | 'top-center' | 'top-right' | 'middle-far-left' | 'middle-left' | 'middle-center' | 'middle-right' | 'middle-far-right' | 'bottom-left' | 'bottom-center-left' | 'bottom-center' | 'bottom-center-right' | 'bottom-right' | 'extra-bottom-left' | 'extra-bottom-right']: string } = {
        'top-left': 'top-0 left-0',
        'top-center': 'top-0 left-[25%]',
        'top-right': 'top-0 left-[50%]',
        'middle-far-left': 'top-[20%] left-[-12%]',
        'middle-left': 'top-[20%] left-[12%]',
        'middle-center': 'top-[20%] left-[36%]',
        'middle-right': 'top-[20%] left-[60%]',
        'middle-far-right': 'top-[20%] left-[84%]',
        'bottom-left': 'top-[40%] left-0',
        'bottom-center-left': 'top-[40%] left-[25%]',
        'bottom-center': 'top-[40%] left-[50%]',
        'bottom-center-right': 'top-[40%] left-[75%]',
        'bottom-right': 'top-[40%] left-[100%]',
        'extra-bottom-left': 'top-[60%] left-[12%]',
        'extra-bottom-right': 'top-[60%] left-[36%]',
    };

    return (
        <section className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Section - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-6"
                    >
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500">
                            Our Past WIEmpower Events
                        </h2>
                        <p className="text-purple-300 opacity-80 text-lg max-w-2xl">
                            Relive the extraordinary moments that shaped our community. Each event represents our commitment to empowerment, innovation, and collective growth.
                        </p>
                    </motion.div>

                    {/* Right Section - Diamond Grid Gallery */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px]"
                    >
                        <div className="absolute inset-0">
                            {images.map((img, index) => {
                                return (
                                    <motion.div
                                        key={img.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`absolute ${positions[img.pos as keyof typeof positions]} w-[150px] h-[150px] transform hover:scale-105 transition-transform duration-300`}
                                    >
                                        <div className="absolute inset-0 rotate-45 overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                                            <div className="absolute inset-[-100%] rotate-[-45deg] bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm">
                                                <img
                                                    src={img.src}
                                                    alt={`Event photo ${img.id}`}
                                                    className="h-[200%] w-[200%] object-cover"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PastEvents;
