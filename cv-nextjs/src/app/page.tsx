'use client';

import { useState, useEffect } from 'react';
import { CVHero } from '@/components/cv-hero';
import CVSidebar from '@/components/cv-sidebar';
import { CVMainContent } from '@/components/cv-main-content';
import { CVSkillsSection } from '@/components/cv-skills-section';
import { CVContactSection } from '@/components/cv-contact-section';
import { CVEducationSection } from '@/components/cv-education-section';
import { CVLanguagesSection } from '@/components/cv-languages-section';
import { CVNavigation } from '@/components/cv-navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { PrintButton } from '@/components/print-button';
import { cvData } from '@/lib/data';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const handlePrint = () => {
    window.print();
  };

  const renderSection = (section: string) => {
    switch (section) {
      case 'hero':
        return <CVHero personalInfo={cvData.personalInfo} />;
      case 'about':
        return <CVMainContent data={cvData} />;
      case 'experience':
        return <CVMainContent data={cvData} />;
      case 'skills':
        return <CVSkillsSection skills={cvData.skills} />;
      case 'education':
        return <CVEducationSection education={cvData.education} />;
      case 'languages':
        return <CVLanguagesSection languages={cvData.languages} />;
      case 'contact':
        return <CVContactSection personalInfo={cvData.personalInfo} />;
      default:
        return <CVHero personalInfo={cvData.personalInfo} />;
    }
  };

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Theme Toggle and Print Button */}
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <ThemeToggle />
        <PrintButton />
      </div>
      
      {/* Desktop Layout - Vue Template Style */}
      <div className="hidden lg:flex min-h-screen">
        {/* Fixed Sidebar */}
        <div className="w-80 flex-shrink-0">
          <CVSidebar 
            cvData={cvData} 
            isDarkMode={isDarkMode} 
            onToggleTheme={handleToggleTheme} 
            onPrint={handlePrint} 
          />
        </div>
        
        {/* Scrollable Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 py-8 lg:px-8 lg:py-12">
            <div className="space-y-20">
              {/* Hero Section */}
              <section id="hero" className="scroll-mt-8">
                <CVHero personalInfo={cvData.personalInfo} />
              </section>
              
              {/* About & Experience Section */}
              <section id="about" className="scroll-mt-8">
                <CVMainContent data={cvData} />
              </section>
              
              {/* Skills Section */}
              <section id="skills" className="scroll-mt-8">
                <CVSkillsSection skills={cvData.skills} />
              </section>
              
              {/* Education Section */}
              <section id="education" className="scroll-mt-8">
                <CVEducationSection education={cvData.education} />
              </section>
              
              {/* Languages Section */}
              <section id="languages" className="scroll-mt-8">
                <CVLanguagesSection languages={cvData.languages} />
              </section>
              
              {/* Contact Section */}
              <section id="contact" className="scroll-mt-8">
                <CVContactSection personalInfo={cvData.personalInfo} />
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="pb-20 px-4 pt-16">
          <div className="max-w-md mx-auto">
            {renderSection(activeSection)}
          </div>
        </div>
        <CVNavigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      </div>
    </div>
  );
}
