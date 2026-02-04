'use client';

import { motion } from 'framer-motion';
import { CodeEditor } from './code-editor';
import { TerminalPanel } from './terminal-panel';
import { Code2, MessageCircle } from 'lucide-react';
import { PersonalInfo } from '@/lib/data';

interface IDEHeroProps {
    personalInfo?: PersonalInfo;
}

export function IDEHero({ personalInfo }: IDEHeroProps) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center px-6 py-16 bg-gray-50 dark:bg-[#0a0a0a]">
            <div className="w-full max-w-[1400px]">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Personal Info - Left Side */}
                    {personalInfo && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:col-span-5 space-y-6"
                        >
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-3 leading-tight"
                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                >
                                    {personalInfo.firstName}
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                        {personalInfo.lastName}
                                    </span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl md:text-2xl text-cyan-400 font-medium"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {personalInfo.jobTitle}
                                </motion.p>
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-xl"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {personalInfo.professionalSummary && personalInfo.professionalSummary.substring(0, 280)}...
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex flex-wrap gap-4"
                            >
                                <a
                                    href="#contact"
                                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Get In Touch
                                </a>
                                <a
                                    href="/santiago-alvarez-cv.pdf"
                                    download="Santiago_Alvarez_CV.pdf"
                                    className="px-8 py-3 bg-gray-800/50 text-white rounded-lg font-medium border border-gray-700 hover:bg-gray-800 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Download CV
                                </a>
                                <a
                                    href="https://wa.me/573057668478?text=vi%20tu%20cv%20y%20estamos%20interesados"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-[#25D366]/10 text-[#25D366] rounded-lg font-medium border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 flex items-center gap-2"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp
                                </a>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* IDE Window - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="lg:col-span-7 relative"
                    >
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 bg-[#1e1e1e]">
                            {/* Window Title Bar */}
                            <div className="h-11 bg-[#323233] border-b border-[#25252580] flex items-center justify-between px-4">
                                {/* Traffic Lights */}
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                                </div>

                                {/* Window Title */}
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <Code2 className="w-4 h-4" />
                                    <span className="font-medium">developer.js</span>
                                </div>

                                {/* Window Controls */}
                                <div className="flex items-center gap-1 opacity-60">
                                    <div className="w-3 h-3" />
                                </div>
                            </div>

                            {/* IDE Content */}
                            <div className="flex flex-col h-[500px] lg:h-[550px]">
                                {/* Editor Area */}
                                <div className="flex-1 flex overflow-hidden">
                                    <CodeEditor />
                                </div>

                                {/* Terminal */}
                                <TerminalPanel />
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl opacity-30 rounded-xl" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
