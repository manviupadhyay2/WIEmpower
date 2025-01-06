import React from 'react';
import { motion } from 'framer-motion';
import { PASTEVENTS } from '@/constants';

const PastEvents = () => {
    return (
        <div className="relative overflow-hidden py-20 bg-transparent">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center py-6 text-white">
                Glimpse of Our Past WIEmpower
            </h2>

            {/* Slider Container */}
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                }}
                transition={{
                    x: {
                        repeat: Infinity, // Loop infinitely
                        repeatType: 'loop',
                        duration: 12, // Adjust to control speed of the slide
                        ease: 'linear', // Smooth constant movement
                    },
                }}
                style={{ display: 'flex' }}
            >
                {/* Render all the images from PASTEVENTS */}
                {PASTEVENTS.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[25%] mx-4 relative" // Adjust width for images
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-40 rounded-lg z-10"></div> {/* Shadowing effect */}
                        <img
                            src={image.src}
                            alt={`Past Event ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                ))}

                {/* Repeat the images to make the loop seamless */}
                {PASTEVENTS.map((image, index) => (
                    <div
                        key={index + PASTEVENTS.length}
                        className="flex-shrink-0 w-[25%] mx-4 relative" // Same width for repeated images
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-40 rounded-lg z-10"></div> {/* Shadowing effect */}
                        <img
                            src={image.src}
                            alt={`Past Event ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default PastEvents;
