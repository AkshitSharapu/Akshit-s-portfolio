import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Interests from '../components/Interests';
import Contact from '../components/Contact';
import { useNavigate } from 'react-router-dom';

const PortfolioContainer = () => {
    const navigate = useNavigate();
    const sections = [
        { id: 'home', title: 'Home', Component: Hero },
        { id: 'about', title: 'About', Component: About },
        { id: 'skills', title: 'Skills', Component: Skills },
        { id: 'projects', title: 'Projects', Component: Projects },
        { id: 'certifications', title: 'Certifications', Component: Certifications },
        { id: 'interests', title: 'Interests', Component: Interests },
        { id: 'contact', title: 'Contact', Component: Contact },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogoClick = () => {
        // Optional: If user clicks logo, maybe they want to see the landing animation again? 
        // Or just scroll top? Let's scroll top for now.
        // If we wanted to go back to landing page, we would clear session storage.
        scrollToSection('home');
    };

    return (
        <div className="min-h-screen bg-primary text-textLight relative">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md shadow-lg border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 font-bold text-xl text-accent cursor-pointer" onClick={handleLogoClick}>
                            SA
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className="text-gray-300 hover:text-accent hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Mobile menu button placeholder */}
                        <div className="md:hidden flex space-x-2 overflow-x-auto pb-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="text-xs text-gray-300 hover:text-accent whitespace-nowrap px-2"
                                >
                                    {section.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-16">
                {sections.map(({ id, Component }) => (
                    <section key={id} id={id} className="min-h-screen flex flex-col justify-center py-10 px-4 md:px-10 border-b border-white/5 last:border-0 relative overflow-hidden">
                        {/* Subtle background decoration for each section */}
                        <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_${id === 'home' ? 'top_right' : 'bottom_left'},_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none`}></div>
                        <div className="max-w-4xl mx-auto w-full z-10">
                            <Component />
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default PortfolioContainer;
