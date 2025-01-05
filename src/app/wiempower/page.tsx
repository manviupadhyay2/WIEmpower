// page.tsx
'use client'; // <-- Add this line to mark the file as a client-side component

import React, { useEffect } from 'react';
import Header from "@/app/wiempower/components/Header";
import Hero from './components/Hero';
import About from './components/About';
import PastEvents from './components/PastEvents';
import Timeline from './components/Timeline';
import Theme from './components/Theme';
import SpeakerSection from './components/Speaker';
import Judges from './components/Judges';
import Faq from './components/Faq';
import Footer from '@/sections/Footer';
import BackToTop from './components/BackToTop';

const Wiempower = () => {
    useEffect(() => {
        const crsr = document.getElementById("cursor");
        const blur = document.getElementById("cursor-blur");

        const throttle = <T extends unknown[]>(func: (...args: T) => void, limit: number) => {
            let lastFunc: ReturnType<typeof setTimeout>;
            let lastRan: number;

            return (...args: T) => {
                if (!lastRan) {
                    func(...args);
                    lastRan = Date.now();
                } else {
                    clearTimeout(lastFunc);
                    lastFunc = setTimeout(() => {
                        if (Date.now() - lastRan >= limit) {
                            func(...args);
                            lastRan = Date.now();
                        }
                    }, limit - (Date.now() - lastRan));
                }
            };
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (crsr && blur) {
                crsr.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
                blur.style.transform = `translate(${event.clientX - 150}px, ${event.clientY - 150}px)`;
            }
        };

        const throttledMouseMove = throttle(handleMouseMove, 50);

        document.addEventListener("mousemove", throttledMouseMove);

        return () => {
            document.removeEventListener("mousemove", throttledMouseMove);
        };
    }, []);

    return (
        <>
            <div id="cursor"></div>
            <div id="cursor-blur"></div>

            <Header />
            <Hero />
            <About />
            <PastEvents />
            <Timeline />
            <Theme />
            <SpeakerSection />
            <Judges />
            <Faq />
            <Footer />
            <BackToTop /> {/* Add BackToTopButton here */}
        </>
    );
};

export default Wiempower;
