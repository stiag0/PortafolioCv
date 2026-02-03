'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, X, FileText } from 'lucide-react';
import { Education } from '@/lib/data';

interface CVEducationSectionProps {
  education: Education[];
}

export function CVEducationSection({ education }: CVEducationSectionProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="cv-title">Education</h2>
        <p className="cv-subtitle">
          Academic background and certifications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {edu.school}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{edu.graduationDate}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {edu.certificate && (
                  <button
                    onClick={() => setSelectedCertificate(edu.certificate || null)}
                    className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>
                )}
              </div>

              {edu.certificateImage && (
                <div
                  className="w-full md:w-48 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  onClick={() => edu.certificate && setSelectedCertificate(edu.certificate || null)}
                >
                  <img
                    src={edu.certificateImage}
                    alt="Certificate Preview"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full h-[80vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Certificate View
                </h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 bg-gray-100 dark:bg-gray-900 overflow-hidden">
                <iframe
                  src={selectedCertificate}
                  className="w-full h-full border-none"
                  title="Certificate"
                />
              </div>

              <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3">
                <a
                  href={selectedCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Open in New Tab
                </a>
                <a
                  href={selectedCertificate}
                  download
                  className="px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}