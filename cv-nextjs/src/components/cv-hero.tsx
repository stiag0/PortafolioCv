'use client';

import { motion } from 'framer-motion';
import { Download, Mail, MapPin } from 'lucide-react';
import { PersonalInfo } from '@/lib/data';

interface CVHeroProps {
  personalInfo: PersonalInfo;
}

export function CVHero({ personalInfo }: CVHeroProps) {
  return (
    <div className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium">
            {personalInfo.jobTitle}
          </h2>

          <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>{personalInfo.city}, {personalInfo.country}</span>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {personalInfo.professionalSummary}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>

            <button
              onClick={() => window.print()}
              className="px-8 py-3 border border-gray-200 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}