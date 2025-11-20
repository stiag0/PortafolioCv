import { CVData } from '../data';

export const agileengineData: Partial<CVData> = {
  personalInfo: {
    firstName: 'Santiago Ramon',
    lastName: 'Alvarez Gomez',
    jobTitle: 'Python/React Full Stack Developer',
    photo: '/santiago-photo.jpg',
    city: 'Medellin',
    postalCode: '050022',
    country: 'Colombia',
    phone: '+573057668478',
    email: 'stiago4r@gmail.com',
    professionalSummary: `Python/React Full Stack Developer with 4+ years of experience building scalable web applications and e-commerce platforms. Specialized in Python, React.js, Node.js, and modern web technologies. Recent focus on developing production-ready applications with strong emphasis on system reliability, operational support, and e-commerce solutions. Expertise in SQL/NoSQL databases (PostgreSQL, MongoDB), RESTful APIs, Git version control, and agile methodologies. Proven track record in troubleshooting, maintaining production systems, and delivering high-quality, maintainable code through comprehensive testing and code reviews.`
  },
  skills: [
    // Must-have skills first
    'Python', 'React', 'Node.js', 'JavaScript (ES6+)', 'TypeScript',
    'PostgreSQL', 'MongoDB', 'MySQL',
    'HTML5', 'CSS3', 'Tailwind CSS',
    'Git', 'GitHub',
    'RESTful APIs', 'Express.js', 'Django', 'FastAPI',
    // E-commerce (nice to have)
    'WordPress (Headless)', 'Shopify', 'WooCommerce',
    // Additional relevant skills
    'Firebase', 'AWS', 'Vercel', 'Docker',
    'Jest', 'Cypress', 'Postman',
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
        'Leading full-stack development of e-commerce platform using Python, Node.js, and React',
        'Implementing headless WordPress architecture with Tailwind CSS on Vercel for centraldebelleza.co',
        'Monitoring and maintaining production system health, troubleshooting issues to ensure 99.9% uptime',
        'Developing custom backend logic and RESTful API integrations using Python and Node.js',
        'Ensuring code quality through comprehensive code reviews, testing, and best practices',
        'Working with PostgreSQL and MongoDB databases for scalable data management',
        'Collaborating with cross-functional teams using Git version control and Agile methodologies'
      ],
    },
    {
      jobTitle: 'External Developer',
      startDate: 'March 2025',
      endDate: 'Present',
      employer: 'El Mundo de Laura',
      city: 'Remote',
      achievements: [
        'Developed personalized backend logic for Shopify e-commerce platform using Python and JavaScript',
        'Implemented custom solutions to enhance online store functionality and operational efficiency',
        'Troubleshot and resolved production issues to maintain system reliability',
        'Created RESTful APIs for seamless integration with third-party services'
      ],
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'January 2019',
      endDate: 'June 2022',
      employer: 'Centraldelbarbero.com',
      city: 'Medellín',
      achievements: [
        'Developed and launched successful e-commerce mobile app using Angular, Firebase, and TypeScript',
        'Achieved over 5,000 downloads and more than $3,000 USD in revenues',
        'Collaborated with developers to identify and resolve software errors using Scrum methodology',
        'Implemented NoSQL database solutions (Firebase) for real-time data synchronization',
        'Conducted code reviews and maintained high code quality standards'
      ],
    }
  ],
  projects: [
    {
      name: 'AI-Powered E-commerce Platform',
      description: 'Full-stack e-commerce platform with Python backend, React frontend, and headless WordPress. Implemented comprehensive monitoring, troubleshooting systems, and operational support features.',
      technologies: ['Python', 'React', 'Node.js', 'PostgreSQL', 'WordPress (Headless)', 'Tailwind CSS', 'Vercel', 'Git'],
      link: 'https://centraldebelleza.co'
    },
    {
      name: 'El Mundo de Laura Shopify Integration',
      description: 'Custom backend logic and personalized solutions for Shopify e-commerce platform with focus on system reliability and operational efficiency.',
      technologies: ['Shopify', 'Python', 'JavaScript', 'RESTful APIs', 'MongoDB'],
      link: 'https://elmundodelaura.com'
    },
    {
      name: 'E-commerce Mobile App',
      description: 'Built with Angular and Firebase, achieved 5,000+ downloads. Implemented comprehensive testing and maintained production system health.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'HTML5', 'CSS3'],
      link: 'https://github.com/stiag0'
    }
  ]
};

export const companyName = 'AgileEngine';

