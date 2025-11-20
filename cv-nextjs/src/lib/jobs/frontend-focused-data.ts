import { CVData } from '../data';

export const frontendFocusedData: Partial<CVData> = {
  personalInfo: {
    firstName: 'Santiago Ramon',
    lastName: 'Alvarez Gomez',
    jobTitle: 'Senior Frontend Developer',
    photo: '/santiago-photo.jpg',
    city: 'Medellin',
    postalCode: '050022',
    country: 'Colombia',
    phone: '+573057668478',
    email: 'stiago4r@gmail.com',
    professionalSummary: `Senior Frontend Developer with 4+ years of experience building modern, responsive web applications using React, Angular, Next.js, and TypeScript. Specialized in creating exceptional user experiences with focus on performance optimization, accessibility, and modern UI/UX practices. Strong expertise in component-based architecture, state management, and frontend best practices. Experienced in collaborating with backend teams to integrate RESTful APIs and working in agile environments. Passionate about writing clean, maintainable code and staying current with the latest frontend technologies.`
  },
  skills: [
    // Core Frontend
    'React', 'Angular', 'Next.js', 'Vue.js', 'Svelte',
    'TypeScript', 'JavaScript (ES6+)',
    'HTML5', 'CSS3', 'Tailwind CSS',
    // State Management & Tools
    'Redux', 'Context API', 'React Hooks',
    'Webpack', 'Vite',
    // UI/UX & Design
    'Responsive Design', 'Mobile-First Design',
    'Figma', 'Adobe XD',
    // Testing
    'Jest', 'Cypress', 'React Testing Library',
    // Backend Integration
    'RESTful APIs', 'GraphQL', 'Node.js',
    'Python', 'Django', 'Express.js',
    // Tools & Methodologies
    'Git', 'GitHub', 'Agile/Scrum',
    'Performance Optimization', 'SEO',
    'Vercel', 'AWS', 'Firebase'
  ],
  employmentHistory: [
    {
      jobTitle: 'AI Developer & Full Stack Developer',
      startDate: 'January 2023',
      endDate: 'Present',
      employer: 'Central de belleza ©',
      city: 'Medellín',
      achievements: [
        'Leading frontend development of e-commerce platform using React and Next.js',
        'Implementing responsive, mobile-first designs with Tailwind CSS',
        'Optimizing website performance achieving 90+ Lighthouse scores',
        'Building reusable component libraries for consistent UI/UX across platform',
        'Integrating RESTful APIs and managing application state efficiently',
        'Collaborating with backend team for seamless API integration',
        'Implementing accessibility best practices (WCAG 2.1 compliance)'
      ],
    },
    {
      jobTitle: 'External Developer',
      startDate: 'March 2025',
      endDate: 'Present',
      employer: 'El Mundo de Laura',
      city: 'Remote',
      achievements: [
        'Developed custom frontend features for Shopify e-commerce platform',
        'Created responsive, mobile-friendly user interfaces',
        'Optimized frontend performance for improved user experience',
        'Implemented modern JavaScript frameworks and best practices'
      ],
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'January 2019',
      endDate: 'June 2022',
      employer: 'Centraldelbarbero.com',
      city: 'Medellín',
      achievements: [
        'Led frontend development of mobile app using Angular and TypeScript',
        'Created responsive, intuitive user interfaces achieving 5,000+ downloads',
        'Implemented component-based architecture for maintainable code',
        'Optimized app performance and user experience based on user feedback',
        'Collaborated with designers to implement pixel-perfect UI designs'
      ],
    }
  ],
  projects: [
    {
      name: 'Modern E-commerce Frontend',
      description: 'Responsive e-commerce platform built with React, Next.js, and Tailwind CSS. Achieved 90+ Lighthouse performance score with optimized loading times.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Performance Optimization'],
      link: 'https://centraldebelleza.co'
    },
    {
      name: 'Shopify Custom Theme',
      description: 'Custom responsive theme for Shopify platform with focus on user experience and mobile optimization.',
      technologies: ['JavaScript', 'Liquid', 'HTML5', 'CSS3', 'Responsive Design'],
      link: 'https://elmundodelaura.com'
    },
    {
      name: 'Mobile E-commerce App',
      description: 'Angular-based mobile application with focus on performance and user experience, achieving 5,000+ downloads.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Material Design'],
      link: 'https://github.com/stiag0'
    }
  ]
};

export const companyName = 'Company';

