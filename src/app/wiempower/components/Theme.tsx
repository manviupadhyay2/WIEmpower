import React from "react";
import { motion } from "framer-motion";
import {
    Heart,
    Wallet,
    Leaf,
    GraduationCap,
    Users,
} from "lucide-react";

interface Track {
    icon: React.ElementType;
    title: string;
    description: string;
}

const TRACKS_DATA: Track[] = [
    {
        icon: Heart,
        title: "Quantum Exploration",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec neque tristique luctus. Integer at purus vitae arcu venenatis facilisis.",
    },
    {
        icon: Wallet,
        title: "Digital Frontiers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec enim sit amet erat egestas accumsan a at nunc. Suspendisse sit amet sem ac ante sollicitudin.",
    },
    {
        icon: Leaf,
        title: "Virtual Horizons",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis purus in nulla placerat, sed auctor purus dignissim. Integer id orci sit amet nisl auctor suscipit.",
    },
    {
        icon: GraduationCap,
        title: "Innovation Unleashed",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ligula ac turpis vehicula gravida id sed elit. Nulla facilisi. Mauris bibendum nulla et neque pretium.",
    },
    {
        icon: Users,
        title: "Future Pathways",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada, lectus eu tincidunt mollis, libero lorem tincidunt erat, id efficitur leo justo at felis.",
    },
];


interface TrackCardProps {
    track: Track;
    index: number;
}

// Component for each track card
const TrackCard: React.FC<TrackCardProps> = ({ track, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 
                 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 
                 hover:border-purple-500/40 transition-all duration-300
                 flex flex-col items-center text-center
                 group hover:-translate-y-2"
        >
            <div
                className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center
                    mb-4 group-hover:scale-110 transition-transform duration-300"
            >
                <track.icon className="w-8 h-8 text-blue-400" />
            </div>

            <h3
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                     bg-clip-text text-transparent mb-3"
            >
                {track.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">{track.description}</p>
        </motion.div>
    );
};

// Main Theme component
const Theme: React.FC = () => {
    return (
        <div className="min-h-screen bg-black p-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2
                        className="text-5xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 mb-6"
                    >
                        Hackathon Tracks
                    </h2>
                    <p className="text-purple-300 opacity-80 text-lg max-w-2xl mx-auto">
                        Choose from five innovative tracks designed to create meaningful
                        impact across different sectors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {TRACKS_DATA.map((track, index) => (
                        <TrackCard key={index} track={track} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Theme;
