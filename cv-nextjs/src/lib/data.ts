export interface PersonalInfo {
  firstName: string;
  lastName: string;
  jobTitle: string;
  photo?: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
  professionalSummary: string;
}

export interface Education {
  school: string;
  degree: string;
  graduationDate: string;
  description: string;
}

export interface Link {
  label: string;
  link: string;
}

export interface Employment {
  jobTitle: string;
  startDate: string;
  endDate: string;
  employer: string;
  city: string;
  achievements: string[];
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education[];
  links: Link[];
  skills: string[];
  languages: string[];
  employmentHistory: Employment[];
}

export const cvData: CVData = {
  personalInfo: {
    firstName: 'Santiago Ramon',
    lastName: 'Alvarez Gomez',
    jobTitle: 'Full Stack Developer',
    photo: '',
    city: 'Medellin',
    postalCode: '050022',
    country: 'Colombia',
    phone: '+573057668478',
    email: 'stiago4r@gmail.com',
    professionalSummary: `Full Stack Developer with 2+ years of experience building scalable web applications and mobile solutions. Specialized in React, Angular, and Python/Django with proven track record of delivering high-impact projects including a successful e-commerce app with 5,000+ downloads and $3,000+ revenue. Strong expertise in modern JavaScript frameworks, database design, and agile methodologies. Passionate about clean code, performance optimization, and creating exceptional user experiences.`
  },
  education: [
    {
      school: 'Universidad EAFIT',
      degree: 'Bachelor',
      graduationDate: '2024',
      description: 'Software Engineering',
    },
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/stiag0',
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/santiago-alvarez-b6a530233/',
    },
  ],
  skills: [
    // Frontend
    'React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS',
    // Backend
    'Python', 'Django', 'Node.js', 'Express.js', 'RESTful APIs',
    // Databases
    'PostgreSQL', 'MongoDB', 'Firebase',
    // Tools & Platforms
    'Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Netlify',
    // Game Development
    'Unity', 'C#', 'C++',
    // Other
    'Agile/Scrum', 'JIRA', 'Postman', 'Figma'
  ],
  languages: ['Spanish', 'English'],
  employmentHistory: [
    {
      jobTitle: 'Full-stack Developer',
      startDate: 'January 2023',
      endDate: 'December 2024',
      employer: 'Central de belleza ©',
      city: 'Medellín',
      achievements: [
        'Developed a responsive website for a local beauty supply center using WordPress and PHP solutions',
        'Collaborated with the design team to create a visually appealing and user-friendly website',
        'Optimized the website\'s performance by implementing caching and compression',
        'Worked closely with information team to clean up the data by creating a database',
        'Increased website performance by 40% through optimization',
        'Built with WordPress, PHP, MySQL, and custom CSS'
      ],
    },
    {
      jobTitle: 'Full-stack Developer',
      startDate: 'August 2021',
      endDate: 'February 2022',
      employer: 'Tigo Colombia',
      city: 'Remote',
      achievements: [
        'Developed multiple automations on Microsoft environment to resolve delays in operational timeline using Excel macros, Power Query (DAX) and Power Automate to deploy software with dynamic response compared to classic Excel usages',
        'Mentored team members in development, issues and technical progression',
        'Designed a normalizer to format data-sets as a tool to improve the consumers data ratio and make it more accessible to the operational team',
        'Reduced operational timeline delays by 60% through automation',
        'Implemented Power Automate workflows and Excel VBA macros'
      ],
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'January 2019',
      endDate: 'June 2022',
      employer: 'Centraldelbarbero.com',
      city: 'Medellín',
      achievements: [
        'Developed, launched and managed the commercialization of a successful app along with other engineers using Scrum, Firebase and Angular',
        'Collaborated with other developers to identify and alleviate software errors and inefficiencies',
        'Discussed project progress with customers, collected feedback on different stages and directly addressed concerns',
        'Achieved over 5,000 downloads, more than 300 users online simultaneously and more than $3,000 USD in revenues',
        'Led full-stack development using Angular, Firebase, and Scrum methodology'
      ],
    },
    {
      jobTitle: 'Showcase Salesman',
      startDate: 'February 2010',
      endDate: 'December 2013',
      employer: 'Central de belleza ©',
      city: 'Medellín',
      achievements: [
        'My first job became a complete new challenge, but after training became a successful deal closer, specializing in hair dryers, straighteners and electronics in general',
        'Learned to recommend products across different categories including nail polish and hair dye color combinations',
        'Performed social network integration for business development'
      ],
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2024'
    }
  ],
  projects: [
    {
      name: 'E-commerce Mobile App',
      description: 'Built with Angular and Firebase, achieved 5,000+ downloads',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      link: 'https://github.com/your-repo'
    }
  ]
}; 