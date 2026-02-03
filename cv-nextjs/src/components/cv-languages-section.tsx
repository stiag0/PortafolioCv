'use client';

import { motion } from 'framer-motion';
import { Languages, Star } from 'lucide-react';

interface CVLanguagesSectionProps {
  languages: string[];
}

export function CVLanguagesSection({ languages }: CVLanguagesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Define proficiency levels for each language
  const languageData = [
    { name: 'Spanish', level: 'Native', proficiency: 100, flag: '🇪🇸' },
    { name: 'English', level: 'Fluent', proficiency: 85, flag: '🇺🇸' },
  ];

  // Match actual languages from data with predefined proficiency
  const matchedLanguages = languages.map(lang => {
    const found = languageData.find(l => l.name.toLowerCase() === lang.toLowerCase());
    return found || { name: lang, level: 'Intermediate', proficiency: 70, flag: '🌐' };
  });

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="flex items-center space-x-4">
        <div className="w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
          Languages
        </h2>
      </div>

      <div className="pl-7 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matchedLanguages.map((language, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Languages className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                      <span>{language.name}</span>
                      <span className="text-xl">{language.flag}</span>
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language.level}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(language.proficiency / 20)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                        }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {language.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${language.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 