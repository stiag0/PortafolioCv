'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Education } from '@/lib/data';

interface CVEducationSectionProps {
  education: Education[];
}

export function CVEducationSection({ education }: CVEducationSectionProps) {
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
          Education
        </h2>
      </div>

      <div className="pl-7 space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-8 group"
          >
            <div className="absolute -left-2 w-4 h-4 bg-gray-900 dark:bg-gray-100 rounded-full group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors"></div>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.graduationDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      {edu.school}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 