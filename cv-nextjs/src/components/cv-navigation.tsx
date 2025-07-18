'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Award, Mail, Home, GraduationCap, Languages } from 'lucide-react';

interface CVNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function CVNavigation({ activeSection, onSectionChange }: CVNavigationProps) {
  const sections = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'languages', label: 'Languages', icon: Languages },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-around overflow-x-auto">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`flex flex-col items-center py-3 px-3 transition-colors whitespace-nowrap ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{section.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 w-12 h-0.5 bg-blue-600 dark:bg-blue-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
} 