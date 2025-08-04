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

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education[];
  links: Link[];
  skills: string[];
  languages: string[];
  employmentHistory: Employment[];
  certifications?: Certification[];
  projects?: Project[];
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
    professionalSummary: `Full Stack Developer with 4+ years of experience building scalable web applications and e-commerce solutions. Specialized in modern JavaScript frameworks (React, Angular, Next.js), Python/Django, and Node.js development. Recent focus on AI integration and headless CMS implementations, including AI-powered e-commerce platforms and custom Shopify solutions. Strong expertise in database design, RESTful APIs, cloud deployment (Vercel, AWS), and agile methodologies. Passionate about clean code, performance optimization, and creating exceptional user experiences. Also experienced in game development with Godot Engine.`
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
    {
      label: 'WhatsApp',
      link: 'https://wa.me/573057668478',
    },
  ],
  skills: [
    // Frontend
    'React', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js', 'Next.js', 'Svelte',
    // Backend
    'Python', 'Node.js', 'Express.js', 'Django', 'FastAPI', 'RESTful APIs', 'GraphQL',
    // E-commerce & CMS
    'WordPress (Headless)', 'Shopify', 'WooCommerce', 'Strapi', 'Sanity',
    // Databases
    'PostgreSQL', 'MongoDB', 'Firebase', 'MySQL', 'Redis', 'SQLite', 'Supabase', 'PlanetScale',
    // Cloud & Deployment
    'Vercel', 'AWS', 'Docker', 'Git', 'GitHub', 'Netlify', 'Railway', 'Heroku',
    // AI & Machine Learning
    'Claude CLI', 'ChatGPT API', 'OpenAI API', 'TensorFlow', 'Prompt Engineering', 'AI Integration',
    // Game Development
    'Godot Engine', 'GDScript', 'Unity', 'C#', 'Blender',
    // Testing & Tools
    'Jest', 'Cypress', 'Postman', 'Insomnia', 'Figma', 'Adobe XD',
    // Other
    'Agile/Scrum', 'JIRA', 'Confluence', 'Slack', 'Discord'
  ],
  languages: ['Spanish', 'English'],
  employmentHistory: [
    {
      jobTitle: 'AI Developer & Full Stack Developer',
      startDate: 'January 2023',
      endDate: 'Present',
      employer: 'Central de belleza ©',
      city: 'Medellín',
      achievements: [
        'Leading full-stack development of e-commerce platform using Python, Node.js, and modern web technologies',
        'Implementing headless WordPress architecture for centraldebelleza.co with Tailwind CSS on Vercel hybrid deployment',
        'Developing custom backend logic and API integrations for enhanced e-commerce functionality',
        'Integrating AI capabilities using Claude CLI, ChatGPT API, and OpenAI API for enhanced user experiences',
        'Implementing AI-powered features including intelligent product recommendations and automated customer support',
        'Optimizing website performance and user experience through modern development practices',
        'Collaborating with design and development teams to create scalable, maintainable solutions'
      ],
    },
    {
      jobTitle: 'External Developer',
      startDate: 'March 2025',
      endDate: 'Present',
      employer: 'El Mundo de Laura',
      city: 'Remote',
      achievements: [
        'Developed and implemented personalized backend logic for Shopify e-commerce platform',
        'Created custom solutions to enhance online store functionality and user experience',
        'Provided technical consultation and development services as external contractor',
        'Implemented custom features and integrations to meet specific business requirements'
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
      name: 'AI-Powered E-commerce Platform',
      description: 'Enhanced e-commerce platform with AI integration using Claude CLI, ChatGPT API, and OpenAI API for intelligent features',
      technologies: ['Python', 'Node.js', 'Claude CLI', 'ChatGPT API', 'OpenAI API', 'TensorFlow', 'Vercel'],
      link: 'https://centraldebelleza.co'
    },
    {
      name: 'El Mundo de Laura Shopify Integration',
      description: 'Custom backend logic and personalized solutions for Shopify e-commerce platform',
      technologies: ['Shopify', 'JavaScript', 'Liquid', 'API Integration'],
      link: 'https://elmundodelaura.com'
    },
    {
      name: 'Godot Engine Projects',
      description: 'Personal game development projects and learning experiences using Godot Engine and GDScript',
      technologies: ['Godot Engine', 'GDScript', 'Game Development'],
      link: 'https://github.com/stiag0'
    },
    {
      name: 'E-commerce Mobile App',
      description: 'Built with Angular and Firebase, achieved 5,000+ downloads',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      link: 'https://github.com/stiag0'
    }
  ]
}; 