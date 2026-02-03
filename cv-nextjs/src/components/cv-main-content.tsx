'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { CVData } from '@/lib/data';

interface CVMainContentProps {
  data: CVData;
}

export function CVMainContent({ data }: CVMainContentProps) {
  const { employmentHistory } = data;

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="cv-title">Experience</h2>
        <p className="cv-subtitle">
          My professional journey and key achievements.
        </p>
      </motion.div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent dark:before:via-gray-700">
        {employmentHistory.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Briefcase className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  {job.jobTitle}
                </h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                  {job.startDate} - {job.endDate}
                </span>
              </div>

              <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Briefcase className="w-4 h-4" />
                  <span>{job.employer}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{job.city}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}