import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3"
            >
                <span className="text-accent">06.</span> Get In Touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-lg mb-12"
            >
                I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 mb-12"
            >
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=akshitsharapu@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-secondary/50 rounded-lg hover:bg-secondary border border-white/10 hover:border-accent transition-all duration-300 group"
                >
                    <Mail className="text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium">akshitsharapu@gmail.com</span>
                </a>

                <a
                    href="tel:+91 9704124836"
                    className="flex items-center gap-3 px-8 py-4 bg-secondary/50 rounded-lg hover:bg-secondary border border-white/10 hover:border-accent transition-all duration-300 group"
                >
                    <Phone className="text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium">+91 9704124836</span>
                </a>
            </motion.div>

            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-sm text-gray-600 mt-20"
            >
                <p>Designed & Built by Sharapu Akshit</p>
            </motion.footer>
        </div>
    );
};

export default Contact;
