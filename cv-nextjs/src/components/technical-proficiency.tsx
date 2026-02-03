'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
    name: string;
    experience: string;
}

interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        id: 'frontend',
        name: 'Frontend & UI',
        icon: '🎨',
        skills: [
            { name: 'React', experience: '5+ Years' },
            { name: 'Next.js', experience: '4+ Years' },
            { name: 'TypeScript', experience: '4+ Years' },
            { name: 'JavaScript', experience: '6+ Years' },
            { name: 'Tailwind CSS', experience: '3+ Years' },
        ],
    },
    {
        id: 'backend',
        name: 'Backend & Core',
        icon: '⚙️',
        skills: [
            { name: 'Python', experience: '6+ Years' },
            { name: 'MongoDB', experience: '6+ Years' },
            { name: 'C# .NET', experience: '2 Years' },
            { name: 'Node.js', experience: '3+ Years' },
            { name: 'SQL', experience: '3+ Years' },
        ],
    },
    {
        id: 'mobile',
        name: 'Mobile & Systems',
        icon: '📱',
        skills: [
            { name: 'Android (Java)', experience: '2+ Years' },
            { name: 'Desktop Apps', experience: '2+ Years' },
            { name: 'Responsive Design', experience: '5+ Years' },
            { name: 'PWA', experience: '2+ Years' },
            { name: 'System Arch', experience: '2+ Years' },
        ],
    },
    {
        id: 'tools',
        name: 'Cloud & Tools',
        icon: '🛠️',
        skills: [
            { name: 'Git', experience: '5+ Years' },
            { name: 'GitHub / GitLab', experience: '5+ Years' },
            { name: 'Linux', experience: '5+ Years' },
            { name: 'Vercel', experience: '3+ Years' },
            { name: 'Agile', experience: '3+ Years' },
        ],
    },
];

export function TechnicalProficiency() {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const activeCategoryData = skillCategories.find((cat) => cat.id === activeCategory);

    return (
        <section className="w-full py-20 md:py-32 bg-white dark:bg-[#0a0a0a]">
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Proficiency</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                        A comprehensive overview of my technical skills and experience across various domains
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {skillCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === category.id
                                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700'
                                }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="min-h-[400px]">
                    {activeCategoryData && (
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {activeCategoryData.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                {skill.name}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-1.5 flex-1 bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '85%' }}
                                                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                                />
                                            </div>
                                            <span className="text-xs text-cyan-400 font-mono font-medium">{skill.experience}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
