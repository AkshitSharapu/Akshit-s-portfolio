import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    // If user has already visited, skip landing page
    useEffect(() => {
        const visited = sessionStorage.getItem('portfolio_visited');
        if (visited) {
            navigate('/home', { replace: true });
        }
    }, [navigate]);

    const handleExplore = () => {
        sessionStorage.setItem('portfolio_visited', 'true');
        navigate('/home');
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-primary relative overflow-hidden">
            {/* Background/Ambient effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary opacity-50 z-0 pointer-events-none"></div>

            <div className="z-10 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4"
                >
                    Sharapu Akshit
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg md:text-2xl text-textDim italic mb-8 max-w-2xl mx-auto"
                >
                    "Motivated Data Analyst transforming raw data into meaningful insights."
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    onClick={handleExplore}
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                    Explore Portfolio
                </motion.button>
            </div>
        </div>
    );
};

export default LandingPage;
