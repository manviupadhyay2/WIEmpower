'use client'
import Footer from '@/sections/Footer'
import React, { useEffect } from 'react';
import Header from "@/app/wiempower/components/Header";
import Faq from './components/Faq';
import Judges from './components/Judges';
import SpeakerSection from './components/Speaker';
import Timeline from './components/Timeline';
import Hero from './components/Hero';
import About from './components/About';

const wiempower = () => {
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
            <About/>
            <Timeline />
            <SpeakerSection />
            <Judges />
            <Faq />
            <Footer />
        </>
    );
};

export default wiempower;
