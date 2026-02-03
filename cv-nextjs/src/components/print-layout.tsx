'use client';

import { cvData } from '@/lib/data';

export function PrintLayout() {
  return (
    <div id="cv-content" className="print-layout bg-white text-black p-8 max-w-4xl mx-auto">
      {/* Header */}
      <header className="border-b-2 border-gray-300 pb-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
            </h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-3">
              {cvData.personalInfo.jobTitle}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
              {cvData.personalInfo.professionalSummary}
            </p>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>{cvData.personalInfo.city}, {cvData.personalInfo.country}</p>
            <p>{cvData.personalInfo.postalCode}</p>
            <p>{cvData.personalInfo.phone}</p>
            <p>{cvData.personalInfo.email}</p>
            <p className="text-blue-600">{cvData.links[0]?.link}</p>
            <p className="text-blue-600">{cvData.links[1]?.link}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Professional Experience */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {cvData.employmentHistory.map((job, index) => (
                <div key={index} className="experience-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{job.jobTitle}</h4>
                    <span className="text-sm text-gray-600">
                      {job.startDate} - {job.endDate}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">
                    {job.employer}, {job.city}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              Education
            </h3>
            <div className="space-y-4">
              {cvData.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <span className="text-sm text-gray-600">{edu.graduationDate}</span>
                  </div>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Skills */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              Technical Skills
            </h3>
            <div className="space-y-3">
              {cvData.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="text-sm text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              Languages
            </h3>
            <div className="space-y-2">
              {cvData.languages.map((language, index) => (
                <div key={index} className="text-sm text-gray-700">
                  {language}
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          {cvData.certifications && cvData.certifications.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                Certifications
              </h3>
              <div className="space-y-3">
                {cvData.certifications.map((cert, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 text-sm">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-600">{cert.date}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {cvData.projects && cvData.projects.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                Key Projects
              </h3>
              <div className="space-y-4">
                {cvData.projects.map((project, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 text-sm">{project.name}</h4>
                    <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
} 