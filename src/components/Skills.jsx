import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Code, Database, Layout } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Data Analysis",
            icon: <BarChart className="text-accent" size={24} />,
            skills: [
                { name: "Power BI", level: "Proficient", width: "95%" },
                { name: "Python", level: "Intermediate", width: "85%" },
                { name: "SQL", level: "Basics", width: "70%" }, // Added SQL as common for data scientists
            ]
        },
        {
            title: "Development",
            icon: <Code className="text-accent" size={24} />,
            skills: [
                { name: "Web Development", level: "Static & Interactive", width: "90%" },
                { name: "Java", level: "Basic", width: "60%" },
                { name: "React High-Level", level: "Intermediate", width: "75%" }
            ]
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
                <span className="text-accent">02.</span> Skills
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-secondary/30 p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            {category.icon}
                            <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>

                        <div className="space-y-6">
                            {category.skills.map((skill, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-gray-200">{skill.name}</span>
                                        <span className="text-xs text-accent px-2 py-1 bg-accent/10 rounded-full">{skill.level}</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.width }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-accent"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
