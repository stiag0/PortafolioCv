'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai';
}

export function CVSkillsSection() {
  // Simplified categories for cleaner look
  const categorizedSkills: Skill[] = [
    { name: 'React', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'AWS', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'Git', category: 'tools' },
    { name: 'OpenAI API', category: 'ai' },
    { name: 'LangChain', category: 'ai' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="flex items-center space-x-4">
        <div className="w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
          Skills
        </h2>
      </div>

      <div className="pl-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(['frontend', 'backend', 'database', 'tools', 'ai'] as const).map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorizedSkills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                    {skill.name}
                  </motion.span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}