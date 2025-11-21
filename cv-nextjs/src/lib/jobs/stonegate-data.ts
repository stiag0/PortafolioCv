import { CVData } from '../data';

export const stonegateData: Partial<CVData> = {
  personalInfo: {
    firstName: 'Santiago Ramon',
    lastName: 'Alvarez Gomez',
    jobTitle: 'Lead Full Stack Engineer',
    photo: '/santiago-photo.jpg',
    city: 'Medellin',
    postalCode: '050022',
    country: 'Colombia',
    phone: '+573057668478',
    email: 'stiago4r@gmail.com',
    professionalSummary: `Lead Full Stack Engineer with 4+ years of experience designing and developing scalable web applications using React.js, Python, and modern web technologies. Strong leadership skills with proven track record in mentoring junior developers, conducting code reviews, and leading technical teams. Expertise in React.js, Python (Flask/Django/FastAPI), and DevOps practices including Docker, Kubernetes, and CI/CD pipelines. Experienced with cloud platforms (AWS) and implementing best practices for scalable architecture. Passionate about clean code, team collaboration, and delivering high-quality software solutions.`
  },
  skills: [
    // Must-have skills
    'React', 'Python', 'Django', 'FastAPI', 'Flask',
    'Docker', 'Kubernetes', 'Git', 'GitHub',
    'AWS', 'CI/CD Pipelines',
    // Additional relevant skills
    'JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Express.js',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js',
    'PostgreSQL', 'MongoDB', 'MySQL',
    'RESTful APIs', 'GraphQL',
    'Jest', 'Cypress',
    'Agile/Scrum', 'JIRA', 'Code Review',
    'Team Leadership', 'Mentoring'
  ],
  employmentHistory: [
    {
      jobTitle: 'AI Developer & Full Stack Developer',
      startDate: 'January 2023',
      endDate: 'Present',
      employer: 'Central de belleza ©',
      city: 'Medellín',
      achievements: [
        'Led full-stack development team in building scalable e-commerce platform using React and Python',
        'Designed and implemented microservices architecture with Docker containerization',
        'Established CI/CD pipelines for automated testing and deployment on AWS',
        'Mentored team members in React.js, Python, and best development practices',
        'Conducted comprehensive code reviews to ensure code quality and maintainability',
        'Collaborated with DevOps team to implement Docker and deployment automation',
        'Built RESTful APIs using Django and FastAPI for seamless frontend-backend integration'
      ],
    },
    {
      jobTitle: 'External Developer',
      startDate: 'March 2025',
      endDate: 'Present',
      employer: 'El Mundo de Laura',
      city: 'Remote',
      achievements: [
        'Led development of custom backend solutions for Shopify platform',
        'Implemented DevOps best practices and automated deployment processes',
        "Mentored client's technical team on modern development practices",
        'Designed scalable API architecture for third-party integrations'
      ],
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'January 2019',
      endDate: 'June 2022',
      employer: 'Centraldelbarbero.com',
      city: 'Medellín',
      achievements: [
        'Led development team in creating e-commerce mobile application using Angular',
        'Mentored junior developers in Angular, Firebase, and Agile methodologies',
        'Conducted code reviews and established coding standards for the team',
        'Implemented CI/CD practices for automated testing and deployment',
        'Achieved 5,000+ downloads through effective team leadership and quality code'
      ],
    },
    {
      jobTitle: 'Full-stack Developer',
      startDate: 'August 2021',
      endDate: 'February 2022',
      employer: 'Tigo Colombia',
      city: 'Remote',
      achievements: [
        'Mentored team members in development best practices and technical progression',
        'Led automation initiatives that reduced operational delays by 60%',
        'Designed and implemented scalable solutions for data processing',
        'Collaborated with cross-functional teams to improve operational efficiency'
      ],
    }
  ],
  projects: [
    {
      name: 'Dockerized E-commerce Platform',
      description: 'Led development of scalable e-commerce platform with React frontend and Python/Django backend. Implemented Docker containerization and CI/CD pipelines for automated deployment.',
      technologies: ['React', 'Python', 'Django', 'Docker', 'AWS', 'CI/CD', 'PostgreSQL'],
      link: 'https://centraldebelleza.co'
    },
    {
      name: 'Microservices Backend Architecture',
      description: 'Designed and implemented microservices architecture for e-commerce platform with emphasis on scalability and maintainability.',
      technologies: ['Python', 'Flask', 'FastAPI', 'Docker', 'Kubernetes', 'RESTful APIs'],
      link: 'https://elmundodelaura.com'
    },
    {
      name: 'E-commerce Mobile App',
      description: 'Led team in developing mobile application with Angular and Firebase. Mentored developers and established code review processes.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'CI/CD'],
      link: 'https://github.com/stiag0'
    }
  ]
};

export const companyName = 'StoneGate-Technologies';

