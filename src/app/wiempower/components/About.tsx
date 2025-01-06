import React from 'react';
import Wieimage from '@/assets/collegePic/igdtuw_pic.jpg'; // Image import

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 transition-transform duration-500">
            WIEmpower 5.0
          </h2>
          <p className="text-white text-opacity-90 text-base sm:text-lg font-light leading-relaxed tracking-wide">
            WIEmpower 5.0 is an initiative that seeks to bring together like-minded individuals
            from diverse backgrounds to empower and inspire the community. Through a series of
            events, workshops, and talks, WIEmpower 5.0 aims to foster innovation, leadership,
            and growth. Our mission is to create a platform where ideas are exchanged, skills
            are enhanced, and connections are made.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 overflow-hidden rounded-xl shadow-2xl">
          <img
            src={Wieimage.src}
            alt="WIEmpower 5.0"
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
