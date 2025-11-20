import { CVData } from '../data';

export const fullstackGenericData: Partial<CVData> = {
  personalInfo: {
    firstName: 'Santiago Ramon',
    lastName: 'Alvarez Gomez',
    jobTitle: 'Full Stack Developer',
    photo: '/santiago-photo.jpg',
    city: 'Medellin',
    postalCode: '050022',
    country: 'Colombia',
    phone: '+573057668478',
    email: 'stiago4r@gmail.com',
    professionalSummary: `Full Stack Developer with 4+ years of experience building scalable web applications and e-commerce solutions. Specialized in modern JavaScript frameworks (React, Angular, Next.js), Python/Django, and Node.js development. Strong expertise in both frontend and backend development, database design (SQL and NoSQL), RESTful APIs, and cloud deployment (AWS, Vercel). Proven track record in delivering high-quality software solutions using agile methodologies. Passionate about clean code, performance optimization, and creating exceptional user experiences.`
  },
  skills: [
    // Frontend
    'React', 'Angular', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js',
    // Backend
    'Python', 'Node.js', 'Django', 'Express.js', 'FastAPI',
    'RESTful APIs', 'GraphQL',
    // Databases
    'PostgreSQL', 'MongoDB', 'MySQL', 'Firebase',
    // Cloud & DevOps
    'AWS', 'Vercel', 'Docker', 'Git', 'GitHub',
    // E-commerce & CMS
    'WordPress (Headless)', 'Shopify', 'WooCommerce',
    // Testing & Tools
    'Jest', 'Cypress', 'Postman',
    // Methodologies
    'Agile/Scrum', 'JIRA', 'Code Review'
  ],
  employmentHistory: [
    {
      jobTitle: 'AI Developer & Full Stack Developer',
      startDate: 'January 2023',
      endDate: 'Present',
      employer: 'Central de belleza ©',
      city: 'Medellín',
      achievements: [
        'Leading full-stack development of e-commerce platform using Python, Node.js, React, and modern web technologies',
        'Implementing headless WordPress architecture with Tailwind CSS on Vercel',
        'Developing custom backend logic and RESTful API integrations',
        'Managing PostgreSQL and MongoDB databases for scalable data solutions',
        'Optimizing website performance and user experience through modern development practices',
        'Collaborating with cross-functional teams using Git and Agile methodologies'
      ],
    },
    {
      jobTitle: 'External Developer',
      startDate: 'March 2025',
      endDate: 'Present',
      employer: 'El Mundo de Laura',
      city: 'Remote',
      achievements: [
        'Developed personalized backend logic for Shopify e-commerce platform',
        'Created custom solutions to enhance online store functionality',
        'Implemented RESTful APIs for seamless integrations',
        'Provided technical consultation and full-stack development services'
      ],
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'January 2019',
      endDate: 'June 2022',
      employer: 'Centraldelbarbero.com',
      city: 'Medellín',
      achievements: [
        'Developed and launched e-commerce mobile app using Angular and Firebase',
        'Achieved 5,000+ downloads and $3,000+ USD in revenue',
        'Collaborated with developers using Scrum methodology',
        'Implemented full-stack features with Angular frontend and Firebase backend'
      ],
    }
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce platform with Python backend, React frontend, and headless WordPress CMS.',
      technologies: ['Python', 'React', 'Node.js', 'PostgreSQL', 'WordPress', 'Tailwind CSS', 'Vercel'],
      link: 'https://centraldebelleza.co'
    },
    {
      name: 'Shopify Integration',
      description: 'Custom backend logic and full-stack solutions for Shopify e-commerce platform.',
      technologies: ['Shopify', 'Python', 'JavaScript', 'RESTful APIs', 'MongoDB'],
      link: 'https://elmundodelaura.com'
    },
    {
      name: 'Mobile E-commerce App',
      description: 'Full-stack mobile application achieving 5,000+ downloads.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'NoSQL'],
      link: 'https://github.com/stiag0'
    }
  ]
};

export const companyName = 'Company';

