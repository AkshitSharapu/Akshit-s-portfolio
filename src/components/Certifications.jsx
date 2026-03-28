import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        { name: "Java Certification", issuer: "NPTEL" },
        { name: "Python Certification", issuer: "CISCO" },
        { name: "Power BI", issuer: "Intrainz Innovation" },
    ];

    return (
        <div className="w-full">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
            >
                <span className="text-accent">04.</span> Certifications
            </motion.h2>

            <div className="space-y-4 max-w-2xl">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 bg-secondary/20 p-4 rounded-lg border border-white/5 hover:bg-secondary/40 transition-colors"
                    >
                        <Award className="text-accent flex-shrink-0" size={28} />
                        <div>
                            <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                            <p className="text-sm text-gray-400">Issued by: <span className="text-gray-300">{cert.issuer}</span></p>
                        </div>
                        <CheckCircle className="ml-auto text-green-500/50" size={20} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
