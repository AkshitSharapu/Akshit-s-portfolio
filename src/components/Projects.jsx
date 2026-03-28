import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Rustico Restaurant",
            description: "A full-stack restaurant website featuring user authentication, menu browsing, and a responsive frontend.",
            timeline: "Sep 2025 - Oct 2025",
            tech: ["React", "Node.js", "Tailwind", "Auth"],
            type: "Web App"
        },
        {
            title: "EcoSync",
            description: "An eco-friendly synchronization platform for sustainable living tracking and carbon footprint reduction.",
            timeline: "Jan 2026 - Feb 2026",
            tech: ["React", "Node.js", "MongoDB", "Leaflet"],
            type: "Web App"
        },
        {
            title: "Document Analyzer",
            description: "An AI-powered tool for parsing, summarizing, and extracting key insights from large datasets and documents.",
            timeline: "Feb 2026 - Mar 2026",
            tech: ["Python", "FastAPI", "React", "NLP"],
            type: "AI Tool"
        },
        {
            title: "Style AI",
            description: "A generative AI platform that provides personalized fashion recommendations based on user preferences.",
            timeline: "Mar 2026 - Present",
            tech: ["Next.js", "Tailwind", "OpenAI", "Stripe"],
            type: "AI Web App"
        },
        {
            title: "Personal Portfolio",
            description: "A premium personal portfolio website showcasing projects and skills with fluid animations.",
            timeline: "Nov 2025 - Dec 2025",
            tech: ["React", "Framer Motion", "Tailwind"],
            type: "Web Design"
        }
    ];

    return (
        <div className="w-full">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
            >
                <span className="text-accent">03.</span> Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-secondary/40 p-6 rounded-xl border border-white/5 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <Folder className="text-accent" size={40} />
                            <div className="flex gap-4">
                                <Github className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                                <ExternalLink className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-sm text-accent/80 mb-4">{project.timeline}</p>

                        <p className="text-gray-400 mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-xs font-mono text-gray-400">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
