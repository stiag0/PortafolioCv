import { CVData } from '../data';

export const ageroData: Partial<CVData> = {
  personalInfo: {
    firstName: 'Santiago Ramon',
    lastName: 'Alvarez Gomez',
    jobTitle: 'Senior Fullstack Engineer',
    photo: '/santiago-photo.jpg',
    city: 'Medellin',
    postalCode: '050022',
    country: 'Colombia',
    phone: '+573057668478',
    email: 'stiago4r@gmail.com',
    professionalSummary: `Senior Fullstack Engineer with 4+ years of experience designing and developing scalable web applications using Python, React, and AWS. Specialized in building production-ready systems with emphasis on performance, scalability, and security. Strong expertise in SQL (PostgreSQL) and NoSQL (MongoDB) databases, RESTful APIs, and serverless architecture. Proven track record in implementing backend services with Python (Django, FastAPI) and modern frontend interfaces with React. Experienced in deploying and maintaining cloud infrastructure on AWS, ensuring high availability and optimal application performance.`
  },
  skills: [
    // Must-have skills
    'Python', 'React', 'PostgreSQL', 'MongoDB', 'HTML5', 'CSS3',
    'RESTful APIs', 'Django', 'FastAPI', 'Node.js',
    'AWS', 'Serverless Architecture',
    // Additional relevant skills
    'JavaScript (ES6+)', 'TypeScript', 'Express.js',
    'MySQL', 'Firebase',
    'Docker', 'Git', 'GitHub',
    'Tailwind CSS', 'Next.js',
    'Vercel', 'Jest', 'Postman',
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
        'Designed and developed scalable e-commerce platform using Python, React, and AWS infrastructure',
        'Implemented backend services with Django and FastAPI, ensuring optimal performance and scalability',
        'Built responsive frontend interfaces with React and Tailwind CSS for enhanced user experience',
        'Deployed and maintained applications on AWS and Vercel with focus on security and high availability',
        'Managed PostgreSQL and MongoDB databases, optimizing queries for improved application performance',
        'Implemented comprehensive security best practices for data protection and secure API endpoints',
        'Collaborated with cross-functional teams to deliver high-quality software solutions'
      ],
    },
    {
      jobTitle: 'External Developer',
      startDate: 'March 2025',
      endDate: 'Present',
      employer: 'El Mundo de Laura',
      city: 'Remote',
      achievements: [
        'Developed scalable backend services for Shopify e-commerce platform using Python',
        'Implemented RESTful APIs for seamless integration with frontend and third-party services',
        'Ensured application security, performance optimization, and scalability',
        'Designed database schemas and optimized queries for MongoDB'
      ],
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'January 2019',
      endDate: 'June 2022',
      employer: 'Centraldelbarbero.com',
      city: 'Medellín',
      achievements: [
        'Designed and developed full-stack e-commerce mobile application using Angular and Firebase',
        'Implemented NoSQL database solutions (Firebase) with real-time synchronization',
        'Achieved 5,000+ downloads and generated $3,000+ USD in revenue',
        'Ensured application security and performance optimization',
        'Worked with cross-functional teams using Agile/Scrum methodology'
      ],
    }
  ],
  projects: [
    {
      name: 'AWS E-commerce Platform',
      description: 'Scalable e-commerce platform with Python/Django backend, React frontend, and AWS infrastructure. Implemented serverless architecture for optimal performance and cost efficiency.',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'AWS', 'Serverless', 'REST APIs'],
      link: 'https://centraldebelleza.co'
    },
    {
      name: 'Shopify Backend Services',
      description: 'Scalable backend services for Shopify platform with emphasis on performance, security, and MongoDB integration.',
      technologies: ['Python', 'MongoDB', 'RESTful APIs', 'Shopify'],
      link: 'https://elmundodelaura.com'
    },
    {
      name: 'E-commerce Mobile App',
      description: 'Full-stack mobile application with Angular frontend and Firebase backend. Achieved 5,000+ downloads with focus on scalability and security.',
      technologies: ['Angular', 'Firebase', 'NoSQL', 'TypeScript'],
      link: 'https://github.com/stiag0'
    }
  ]
};

export const companyName = 'Agero';

