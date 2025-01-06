'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/HeroPagePic/bg.jpg";

const styles = `
  @font-face {
    font-family: 'NeueMachina';
    src: url('/fonts/NeueMachina-Ultrabold.woff2') format('woff2');
  }

  .tech-title {
    font-family: 'NeueMachina', sans-serif;
    letter-spacing: 0.2em;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  }

  .dot-overlay {
    background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
    background-size: 30px 30px;
  }

  .tech-border {
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: transform 0.3s ease-in-out;
  }

  .tech-border:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default function Hero() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <style>{styles}</style>
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 dot-overlay" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="tech-title text-6xl md:text-7xl text-white font-extrabold"
              >
                WIEMPOWER
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-xl md:text-2xl"
              >
                INSPIRE | CREATE | INNOVATE
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold rounded-full flex items-center gap-2 border-2 border-transparent hover:border-white/40 transition-all duration-300"
                >
                  <span>REGISTER NOW</span>
                  <span className="text-xl">→</span>
                </motion.button>

                
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 max-w-lg"
              >
                Production and Industrial Engineering Society in collaboration with Institution's Innovation Council, IEEE IGDTUW
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:ml-auto text-gray-300"
            >
              <p className="text-lg md:text-xl">
                WIEMPOWER – Where Ideas Ignite and Innovation Thrives. A platform that empowers women to address real-life challenges head-on and showcase their creativity and ingenuity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
