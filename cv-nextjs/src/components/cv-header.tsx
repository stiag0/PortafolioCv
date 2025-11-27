'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';

interface CVHeaderProps {
    activeSection: string;
}

export function CVHeader({ activeSection }: CVHeaderProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a
                    href="#hero"
                    onClick={(e) => scrollToSection(e, 'hero')}
                    className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
                >
                    SA
                </a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                            className={`text-sm font-medium transition-colors relative ${activeSection === item.id
                                    ? 'text-black dark:text-white'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                                }`}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                    <ThemeToggle />
                </nav>

                <div className="md:hidden flex items-center">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
