'use client';

import { useState, useEffect } from 'react';
import { CVHeader } from '@/components/cv-header';
import { IDEHero } from '@/components/ide-hero';
import { TechnicalProficiency } from '@/components/technical-proficiency';
import { CVMainContent } from '@/components/cv-main-content';
import { CVContactSection } from '@/components/cv-contact-section';
import { CVEducationSection } from '@/components/cv-education-section';
import { CVLanguagesSection } from '@/components/cv-languages-section';
import { PrintLayout } from '@/components/print-layout';
import { cvData } from '@/lib/data';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Intersection Observer to update active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
      <CVHeader activeSection={activeSection} />

      <main className="pt-0">
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <IDEHero personalInfo={cvData.personalInfo} />
        </section>

        {/* Technical Proficiency Section */}
        <TechnicalProficiency />

        <div className="cv-container space-y-24 pb-24">
          <section id="experience" className="scroll-mt-24">
            <CVMainContent data={cvData} />
          </section>

          <section id="education" className="scroll-mt-24">
            <CVEducationSection education={cvData.education} />
          </section>

          <section id="languages" className="scroll-mt-24">
            <CVLanguagesSection languages={cvData.languages} />
          </section>

          <section id="contact" className="scroll-mt-24">
            <CVContactSection personalInfo={cvData.personalInfo} />
          </section>
        </div>
      </main>

      {/* Print Layout */}
      <div className="hidden print:block">
        <PrintLayout />
      </div>
    </div>
  );
}
