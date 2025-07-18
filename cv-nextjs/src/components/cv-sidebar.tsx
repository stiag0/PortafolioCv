'use client';

import { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Download,
  Moon,
  Sun,
  GraduationCap,
  Languages
} from 'lucide-react';
import { CVData } from '@/lib/data';

interface SidebarProps {
  cvData: CVData;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onPrint: () => void;
}

export default function CVSidebar({ cvData, isDarkMode, onToggleTheme, onPrint }: SidebarProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const socialLinks = [
    { icon: Github, href: cvData.links.find(link => link.label === 'GitHub')?.link, label: 'GitHub' },
    { icon: Linkedin, href: cvData.links.find(link => link.label === 'LinkedIn')?.link, label: 'LinkedIn' },
    { icon: Globe, href: cvData.links.find(link => link.label === 'Website')?.link, label: 'Website' },
  ].filter(link => link.href);

  // Deterministic skill level calculation to avoid hydration errors
  const getSkillLevel = (skill: string, index: number) => {
    const hash = skill.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const level = ((hash + index) % 40) + 60; // Between 60-100%
    return level;
  };

  return (
    <div className="w-80 h-screen fixed left-0 top-0 overflow-y-auto bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-xl border-r border-white/10 shadow-2xl">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 p-6 space-y-6">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          {/* Animated Avatar */}
          <div className="relative mx-auto w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-spin-slow opacity-20"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
              {cvData.personalInfo.photo ? (
                <img 
                  src={cvData.personalInfo.photo} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-16 h-16 text-white" />
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
            </h1>
            <p className="text-lg font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {cvData.personalInfo.jobTitle}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact
          </h3>
          
          <div className="space-y-3">
            <div 
              className="group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovered('email')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={`p-2 rounded-lg ${isHovered === 'email' ? 'bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse' : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20'}`}>
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {cvData.personalInfo.email}
              </span>
            </div>
            
            <div 
              className="group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovered('phone')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={`p-2 rounded-lg ${isHovered === 'phone' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse' : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'}`}>
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {cvData.personalInfo.phone}
              </span>
            </div>
            
            <div 
              className="group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovered('location')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={`p-2 rounded-lg ${isHovered === 'location' ? 'bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse' : 'bg-gradient-to-r from-green-500/20 to-emerald-500/20'}`}>
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {cvData.personalInfo.city}, {cvData.personalInfo.country}
              </span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Skills
          </h3>
          <div className="space-y-3">
            {cvData.skills.slice(0, 8).map((skill: string, index: number) => (
              <div 
                key={index}
                className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(`skill-${index}`)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isHovered === `skill-${index}` ? 'bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse' : 'bg-gradient-to-r from-yellow-400/50 to-orange-400/50'}`}></div>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-1000"
                    style={{ width: `${getSkillLevel(skill, index)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Education
          </h3>
          <div className="space-y-3">
            {cvData.education.map((edu, index) => (
              <div 
                key={index}
                className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(`education-${index}`)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className={`p-2 rounded-lg ${isHovered === `education-${index}` ? 'bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse' : 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20'} mb-2`}>
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-300 group-hover:text-white transition-colors">
                    {edu.degree}
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {edu.school}
                  </p>
                  <p className="text-gray-500 group-hover:text-gray-400 transition-colors">
                    {edu.graduationDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Languages
          </h3>
          <div className="space-y-3">
            {cvData.languages.map((language, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(`language-${index}`)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className={`p-2 rounded-lg ${isHovered === `language-${index}` ? 'bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse' : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'}`}>
                  <Languages className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {language}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Social Links
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setIsHovered(`social-${index}`)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className={`p-2 rounded-lg ${isHovered === `social-${index}` ? 'bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse' : 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20'}`}>
                    <link.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <button
            onClick={onPrint}
            className="w-full group flex items-center justify-center space-x-2 p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered('print')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`p-2 rounded-lg ${isHovered === 'print' ? 'bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse' : 'bg-gradient-to-r from-purple-500/50 to-pink-500/50'}`}>
              <Download className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              Download PDF
            </span>
          </button>
          
          <button
            onClick={onToggleTheme}
            className="w-full group flex items-center justify-center space-x-2 p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 hover:from-blue-500/40 hover:to-cyan-500/40 transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered('theme')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`p-2 rounded-lg ${isHovered === 'theme' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse' : 'bg-gradient-to-r from-blue-500/50 to-cyan-500/50'}`}>
              {isDarkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-white" />}
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
} 