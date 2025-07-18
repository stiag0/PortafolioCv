'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { CVData } from '@/lib/data';

interface CVMainContentProps {
  data: CVData;
}

export function CVMainContent({ data }: CVMainContentProps) {
  const { personalInfo, employmentHistory } = data;

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
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* About Me Section */}
      <motion.section variants={itemVariants} className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
            About Me
          </h2>
        </div>
        <div className="pl-7">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            {personalInfo.professionalSummary}
          </p>
        </div>
      </motion.section>

      {/* Employment History */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
            Experience
          </h2>
        </div>
        <div className="pl-7 space-y-8">
          {employmentHistory.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8"
            >
              <div className="absolute -left-2 w-4 h-4 bg-gray-900 dark:bg-gray-100 rounded-full"></div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 uppercase">
                    {job.jobTitle}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{job.employer}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.city}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
} 