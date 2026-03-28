import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users } from 'lucide-react';

const Interests = () => {
    return (
        <div className="w-full">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
            >
                <span className="text-accent">05.</span> Interests
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-secondary/30 p-8 rounded-2xl border border-white/5"
                >
                    <BookOpen className="text-accent mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
                    <p className="text-gray-400">
                        I enjoy reading blogs and articles about the latest advancements in Data Science, AI, and Web Development. Staying updated with the rapidly evolving tech landscape is a key part of my routine.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-secondary/30 p-8 rounded-2xl border border-white/5"
                >
                    <Users className="text-accent mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">Community Engagement</h3>
                    <p className="text-gray-400">
                        Attending seminars and webinars allows me to network with professionals and gain diverse perspectives. I believe in the power of community to foster growth and innovation.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Interests;
