'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Gamepad2 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

interface CVSkillsSectionProps {
  skills: string[];
}

export function CVSkillsSection({ skills }: CVSkillsSectionProps) {
  // Categorize skills with levels (you can adjust these)
  const categorizedSkills: Skill[] = [
    // Frontend
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'Angular', level: 80, category: 'frontend' },
    { name: 'Vue', level: 75, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'CSS', level: 85, category: 'frontend' },
    
    // Backend
    { name: 'Python', level: 85, category: 'backend' },
    { name: 'Django', level: 80, category: 'backend' },
    { name: 'Java', level: 75, category: 'backend' },
    { name: 'C++', level: 70, category: 'backend' },
    { name: 'C#', category: 'backend', level: 75 },
    
    // Database
    { name: 'PostgreSQL', level: 80, category: 'database' },
    { name: 'MongoDB', level: 75, category: 'database' },
    
    // Tools & Others
    { name: 'Unity', level: 70, category: 'tools' },
    { name: 'VBA', level: 80, category: 'tools' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Globe, color: 'bg-blue-500' },
    { id: 'backend', name: 'Backend', icon: Code, color: 'bg-green-500' },
    { id: 'database', name: 'Database', icon: Database, color: 'bg-purple-500' },
    { id: 'tools', name: 'Tools', icon: Gamepad2, color: 'bg-orange-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
          Skills & Technologies
        </h2>
      </div>

      <div className="pl-7 space-y-8">
        {categories.map((category) => {
          const Icon = category.icon;
          const categorySkills = categorizedSkills.filter(skill => skill.category === category.id);
          
          return (
            <motion.div key={category.id} variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {category.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* All Skills Grid */}
      <motion.div variants={itemVariants} className="pl-7 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          All Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
} 