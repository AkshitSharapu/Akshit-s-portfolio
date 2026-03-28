import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <div className="w-full">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3"
            >
                <span className="text-accent">01.</span> About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-300 space-y-4 text-lg leading-relaxed"
                >
                    <p>
                        I am a versatile and passionate Software Professional with a strong foundation in building impactful digital solutions. My journey is driven by a curiosity to explore diverse technologies, leading me to develop expertise across full-stack development, AI integrations, and data-driven applications.
                    </p>
                    <p>
                        I thrive on solving complex problems and adapting to new challenges in any domain. Whether it's architecting scalable web platforms, designing intuitive interfaces, or implementing intelligent features, I am committed to delivering adaptable, high-quality results that align with broad business goals.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-secondary/50 p-6 rounded-xl border border-white/5 backdrop-blur-sm"
                >
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <GraduationCap className="text-accent" /> Education
                    </h3>
                    <ul className="space-y-6">
                        <li className="relative pl-6 border-l-2 border-gray-700 hover:border-accent transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-accent"></div>
                            <h4 className="font-bold text-white">David Memorial Junior College</h4>
                            <p className="text-sm text-gray-400">Intermediate / Pre-University</p>
                        </li>
                        <li className="relative pl-6 border-l-2 border-gray-700 hover:border-accent transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-accent"></div>
                            <h4 className="font-bold text-white">The Mother's Integral School</h4>
                            <p className="text-sm text-gray-400">High School</p>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
