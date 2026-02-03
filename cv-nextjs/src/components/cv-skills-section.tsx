'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai';
}

interface CVSkillsSectionProps {
  skills: string[];
}

export function CVSkillsSection({ skills }: CVSkillsSectionProps) {
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
  ];

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'DevOps & Tools' },
    { id: 'ai', label: 'AI Integration' },
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
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="cv-title">Technical Proficiency</h2>
        <p className="cv-subtitle">
          A comprehensive overview of my technical skills and tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, idx) => {
          const categorySkills = categorizedSkills.filter(s => s.category === category.id);
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}