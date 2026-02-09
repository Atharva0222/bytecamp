import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Briefcase, UsersRound, Sparkles } from 'lucide-react';
import Antigravity from './Antigravity';

const advantages = [
    {
        icon: <Code className="w-6 h-6" />,
        title: 'Skill Development',
        description: 'Gain hands-on coding experience, improve problem-solving skills, and learn to build real-world applications efficiently.',
        color: 'text-blue-400'
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: 'Innovation & Creativity',
        description: 'Explore new ideas, experiment with technologies, and develop unique solutions to challenging problems.',
        color: 'text-purple-400'
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: 'Networking',
        description: 'Connect with like-minded peers, industry experts, and mentors, opening doors to collaborations and career opportunities.',
        color: 'text-pink-400'
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        title: 'Career Advancement',
        description: 'Enhance your portfolio with practical projects, showcasing your technical skills and problem-solving abilities to recruiters.',
        color: 'text-purple-400'
    },
    {
        icon: <UsersRound className="w-6 h-6" />,
        title: 'Team Collaboration',
        description: 'Work in teams to improve communication, leadership, and teamwork skills while developing innovative projects.',
        color: 'text-blue-400'
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Fun & Motivation',
        description: 'Enjoy the thrill of competition, challenge yourself, and stay inspired in a high-energy, tech-driven environment!',
        color: 'text-pink-400'
    }
];

export default function Advantages() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Antigravity Background Animation */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                <Antigravity
                    count={300}
                    magnetRadius={6}
                    ringRadius={7}
                    waveSpeed={1.1}
                    waveAmplitude={1}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color="#2942ff"
                    autoAnimate
                    particleVariance={1}
                    rotationSpeed={0}
                    depthFactor={1}
                    pulseSpeed={3}
                    particleShape="sphere"
                    fieldStrength={10}
                />
            </div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none z-[1]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wider">
                            Advantages
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                            Explore the Benefits of
                        </span>
                        <br />
                        <span className="text-white">BYTECAMP'26</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4"
                        >
                            <div className={`${item.color} mt-1`}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
