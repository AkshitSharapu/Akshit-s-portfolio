import React from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <div className="flex flex-col items-start justify-center">
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent font-semibold tracking-wide mb-2"
            >
                Hello, I am
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-blue-500 mb-4"
            >
                Sharapu Akshit
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-5xl font-bold text-textDim mb-6"
            >
                Software Engineer & Tech Enthusiast
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed"
            >
                Versatile developer passionate about building robust applications, integrating AI solutions, and solving complex problems across the full technology stack.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
            >
                <a
                    href="/resume.pdf"
                    download="Sharapu_Akshit_Resume.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-cyan-300 transition duration-300"
                >
                    <Download size={20} /> Download Resume
                </a>
                <a
                    href="https://www.linkedin.com/" // User didn't provide specific URL, placeholder
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-lg hover:border-accent hover:text-accent transition duration-300"
                >
                    <Linkedin size={20} /> LinkedIn
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=akshitsharapu@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-lg hover:border-accent hover:text-accent transition duration-300"
                >
                    <Mail size={20} /> Email Me
                </a>
            </motion.div>
        </div>
    );
};

export default Hero;
