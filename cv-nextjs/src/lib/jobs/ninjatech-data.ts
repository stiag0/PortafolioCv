import { CVData } from '../data';

export const ninjatechData: Partial<CVData> = {
  personalInfo: {
    firstName: 'Santiago Ramon',
    lastName: 'Alvarez Gomez',
    jobTitle: 'Senior Software Engineer',
    photo: '/santiago-photo.jpg',
    city: 'Medellin',
    postalCode: '050022',
    country: 'Colombia',
    phone: '+573057668478',
    email: 'stiago4r@gmail.com',
    professionalSummary: `Senior Software Engineer with 4+ years of experience developing and shipping production-ready applications using React, Next.js, Python, TypeScript, and AWS. Specialized in building scalable backend services that integrate with complex systems and handle high-volume data processing. Strong expertise in designing APIs, working with healthcare/enterprise systems, and collaborating with AI and product teams to create innovative features. Proven track record in developing applications that scale to serve millions of users while maintaining high performance and reliability.`
  },
  skills: [
    // Must-have skills
    'React', 'Next.js', 'Python', 'TypeScript', 'AWS',
    'JavaScript (ES6+)', 'RESTful APIs', 'GraphQL',
    'Django', 'FastAPI', 'Node.js',
    // Additional relevant skills
    'PostgreSQL', 'MongoDB',
    'Docker', 'Git', 'GitHub',
    'HTML5', 'CSS3', 'Tailwind CSS',
    'Express.js', 'Firebase',
    'Vercel', 'Serverless',
    'AI Integration', 'ChatGPT API', 'OpenAI API',
    'Agile/Scrum', 'JIRA'
  ],
  employmentHistory: [
    {
      jobTitle: 'AI Developer & Full Stack Developer',
      startDate: 'January 2023',
      endDate: 'Present',
      employer: 'Central de belleza ©',
      city: 'Medellín',
      achievements: [
        'Developed and shipped scalable applications using React, Next.js, Python, and AWS',
        'Designed backend services that integrate with multiple systems and scale to thousands of users',
        'Collaborated with AI team to integrate ChatGPT API and OpenAI API for innovative features',
        'Partnered with product team to create features that enhance user interactions and experience',
        'Implemented TypeScript for type-safe development and improved code maintainability',
        'Deployed applications on AWS and Vercel with focus on scalability and performance',
        'Built RESTful and GraphQL APIs for seamless frontend-backend communication'
      ],
    },
    {
      jobTitle: 'External Developer',
      startDate: 'March 2025',
      endDate: 'Present',
      employer: 'El Mundo de Laura',
      city: 'Remote',
      achievements: [
        'Developed custom backend services that integrate with Shopify platform',
        'Partnered with client to create features that improve customer experience',
        'Designed scalable APIs for handling high-volume e-commerce transactions',
        'Implemented best practices for code quality and system reliability'
      ],
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'January 2019',
      endDate: 'June 2022',
      employer: 'Centraldelbarbero.com',
      city: 'Medellín',
      achievements: [
        'Developed and shipped mobile application using Angular and Firebase',
        'Designed backend services that scaled to 5,000+ users with 300+ concurrent users',
        'Collaborated with product team to create features based on user feedback',
        'Implemented real-time data synchronization for enhanced user experience',
        'Generated $3,000+ USD in revenue through successful product launch'
      ],
    }
  ],
  projects: [
    {
      name: 'AI-Powered E-commerce Platform',
      description: 'Developed and shipped scalable application using React, Next.js, and Python. Integrated AI features using ChatGPT API and OpenAI API. Designed backend services that handle thousands of daily transactions.',
      technologies: ['React', 'Next.js', 'Python', 'TypeScript', 'AWS', 'ChatGPT API', 'OpenAI API'],
      link: 'https://centraldebelleza.co'
    },
    {
      name: 'Scalable E-commerce Backend',
      description: 'Designed backend services that integrate with multiple platforms and scale to handle high-volume transactions. Partnered with product team for feature development.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'RESTful APIs', 'AWS'],
      link: 'https://elmundodelaura.com'
    },
    {
      name: 'Real-time Mobile Application',
      description: 'Shipped mobile application that scaled to 5,000+ users. Designed backend services for real-time data synchronization.',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Real-time APIs'],
      link: 'https://github.com/stiag0'
    }
  ]
};

export const companyName = 'NinjaTech-AI';

