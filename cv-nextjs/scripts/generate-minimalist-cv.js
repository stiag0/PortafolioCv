const fs = require('fs');
const path = require('path');

// Minimalist CV generator - ATS-friendly, plain text focused
// Reads from the main data.ts file structure

// Since we can't directly import TypeScript, we'll create a standalone version
// with the corrected data embedded

const cvData = {
  personalInfo: {
    firstName: 'Santiago Ramon',
    lastName: 'Alvarez Gomez',
    jobTitle: 'Full Stack Developer',
    city: 'Medellin',
    country: 'Colombia',
    phone: '+573057668478',
    email: 'stiago4r@gmail.com',
    professionalSummary: `Full Stack Developer with 4+ years of experience building scalable web applications and e-commerce solutions. Specialized in modern JavaScript frameworks (React, Angular, Next.js), Python/Django, and Node.js development. Recent focus on AI integration and headless CMS implementations, including AI-powered e-commerce platforms and custom Shopify solutions. Strong expertise in database design, RESTful APIs, cloud deployment (Vercel, AWS), and agile methodologies.`
  },
  skills: [
    'React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js', 'Next.js',
    'Python', 'Node.js', 'Express.js', 'Django', 'FastAPI', 'RESTful APIs', 'GraphQL',
    'WordPress', 'Shopify', 'WooCommerce',
    'PostgreSQL', 'MongoDB', 'Firebase', 'MySQL',
    'Vercel', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Git', 'GitHub',
    'Visual Basic', 'VBA', 'Power BI', 'Power Query', 'Power Automate',
    'Claude CLI', 'ChatGPT API', 'OpenAI API', 'TensorFlow',
    'Jest', 'Cypress', 'Postman',
    'Agile', 'Scrum', 'JIRA'
  ],
  employmentHistory: [
    {
      jobTitle: 'AI Developer & Full Stack Developer',
      startDate: 'January 2023',
      endDate: 'Present',
      employer: 'Central de belleza',
      city: 'Medellín',
      achievements: [
        'Leading full-stack development of e-commerce platform using Python, Node.js, and modern web technologies',
        'Implementing headless WordPress architecture with Tailwind CSS on Vercel hybrid deployment',
        'Utilizing Google Firebase for real-time database, authentication, and cloud functions',
        'Developing custom backend logic and API integrations for enhanced e-commerce functionality',
        'Integrating AI capabilities using Claude CLI, ChatGPT API, and OpenAI API for enhanced user experiences',
        'Implementing AI-powered features including intelligent product recommendations and automated customer support',
        'Optimizing website performance and user experience through modern development practices'
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
        'Implemented GraphQL APIs for efficient data querying and custom Shopify integrations',
        'Created custom solutions using JavaScript and RESTful APIs to enhance online store functionality',
        'Provided technical consultation and development services as external contractor',
        'Built custom features meeting specific e-commerce business requirements'
      ],
    },
    {
      jobTitle: 'Full-stack Developer',
      startDate: 'August 2021',
      endDate: 'February 2022',
      employer: 'Tigo Colombia',
      city: 'Remote',
      achievements: [
        'Developed multiple automations on Microsoft Azure environment to resolve delays in operational timeline',
        'Implemented solutions using Visual Basic, Excel VBA macros, Power Query (DAX), Power BI, and Power Automate',
        'Created automated workflows with Power Automate to deploy software with dynamic response',
        'Designed a normalizer to format data-sets as a tool to improve the consumers data ratio and make it more accessible to the operational team',
        'Reduced operational timeline delays by 60% through Microsoft automation tools',
        'Mentored team members in Microsoft technologies and technical progression'
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
    }
  ],
  education: [
    {
      school: 'Universidad EAFIT',
      degree: 'Bachelor in Software Engineering',
      graduationDate: '2024',
      description: 'Software Engineering'
    }
  ],
  languages: ['Spanish (Native)', 'English (Professional)'],
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
      description: 'Enhanced e-commerce platform with headless WordPress, Firebase backend, and AI integration using Claude CLI, ChatGPT API, and OpenAI API',
      technologies: ['Python', 'Node.js', 'WordPress', 'Firebase', 'Claude CLI', 'ChatGPT API', 'Vercel', 'Tailwind CSS']
    },
    {
      name: 'El Mundo de Laura Shopify Integration',
      description: 'Custom backend logic and personalized solutions for Shopify e-commerce platform using GraphQL APIs',
      technologies: ['Shopify', 'GraphQL', 'JavaScript', 'RESTful APIs', 'Python']
    },
    {
      name: 'Microsoft Automation Suite - Tigo Colombia',
      description: 'Automated workflows and data processing tools using Microsoft Azure stack, reducing operational delays by 60%',
      technologies: ['Azure', 'Visual Basic', 'VBA', 'Power BI', 'Power Query', 'Power Automate']
    }
  ]
};

function generateMinimalistHTML() {
  const { personalInfo, skills, employmentHistory, education, languages, certifications, projects } = cvData;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personalInfo.firstName} ${personalInfo.lastName} - ${personalInfo.jobTitle}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 11pt;
            line-height: 1.4;
            color: #000000;
            background: #ffffff;
            padding: 0.5in;
        }
        
        h1 {
            font-size: 18pt;
            font-weight: bold;
            text-align: center;
            margin-bottom: 5pt;
            text-transform: uppercase;
            letter-spacing: 1pt;
        }
        
        h2 {
            font-size: 14pt;
            font-weight: bold;
            margin-top: 12pt;
            margin-bottom: 6pt;
            text-transform: uppercase;
            border-bottom: 1pt solid #000000;
            padding-bottom: 2pt;
        }
        
        h3 {
            font-size: 12pt;
            font-weight: bold;
            margin-top: 8pt;
            margin-bottom: 3pt;
        }
        
        .contact-info {
            text-align: center;
            font-size: 10pt;
            margin-bottom: 10pt;
        }
        
        .contact-info span {
            margin: 0 8pt;
        }
        
        .summary {
            margin-bottom: 10pt;
            text-align: justify;
        }
        
        .summary p {
            font-size: 11pt;
            line-height: 1.5;
        }
        
        .skills {
            margin-bottom: 10pt;
        }
        
        .skills-list {
            font-size: 10pt;
            line-height: 1.6;
        }
        
        .skills-list span {
            margin-right: 8pt;
        }
        
        .job {
            margin-bottom: 10pt;
        }
        
        .job-header {
            margin-bottom: 4pt;
        }
        
        .job-title {
            font-weight: bold;
            font-size: 11pt;
        }
        
        .job-company {
            font-style: italic;
            font-size: 10pt;
        }
        
        .job-date {
            float: right;
            font-size: 10pt;
        }
        
        .job-achievements {
            margin-left: 20pt;
            margin-top: 4pt;
        }
        
        .job-achievements li {
            margin-bottom: 3pt;
            font-size: 10pt;
            line-height: 1.4;
        }
        
        .project {
            margin-bottom: 8pt;
        }
        
        .project-name {
            font-weight: bold;
            font-size: 11pt;
        }
        
        .project-description {
            font-size: 10pt;
            margin-top: 2pt;
            margin-bottom: 2pt;
        }
        
        .project-tech {
            font-size: 9pt;
            font-style: italic;
            color: #333333;
        }
        
        .education-item {
            margin-bottom: 6pt;
        }
        
        .education-degree {
            font-weight: bold;
            font-size: 11pt;
        }
        
        .education-school {
            font-size: 10pt;
        }
        
        .education-date {
            font-size: 10pt;
            float: right;
        }
        
        .languages {
            font-size: 10pt;
        }
        
        .certification {
            margin-bottom: 4pt;
            font-size: 10pt;
        }
        
        .certification-name {
            font-weight: bold;
        }
        
        @media print {
            body {
                padding: 0.5in;
            }
            
            .job-date,
            .education-date {
                float: right;
            }
        }
        
        @page {
            size: letter;
            margin: 0.5in;
        }
    </style>
</head>
<body>
    <h1>${personalInfo.firstName.toUpperCase()} ${personalInfo.lastName.toUpperCase()}</h1>
    
    <div class="contact-info">
        <span>${personalInfo.email}</span> | 
        <span>${personalInfo.phone}</span> | 
        <span>${personalInfo.city}, ${personalInfo.country}</span> | 
        <span>GitHub: github.com/stiag0</span> | 
        <span>LinkedIn: linkedin.com/in/santiago-alvarez-b6a530233</span>
    </div>
    
    <h2>Professional Summary</h2>
    <div class="summary">
        <p>${personalInfo.professionalSummary}</p>
    </div>
    
    <h2>Technical Skills</h2>
    <div class="skills">
        <div class="skills-list">
            ${skills.map(skill => `<span>${skill}</span>`).join(' • ')}
        </div>
    </div>
    
    <h2>Professional Experience</h2>
    ${employmentHistory.map(job => `
    <div class="job">
        <div class="job-header">
            <span class="job-title">${job.jobTitle}</span>
            <span class="job-date">${job.startDate} - ${job.endDate}</span>
        </div>
        <div class="job-company">${job.employer}, ${job.city}</div>
        <ul class="job-achievements">
            ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('\n            ')}
        </ul>
    </div>
    `).join('\n    ')}
    
    <h2>Key Projects</h2>
    ${projects.map(project => `
    <div class="project">
        <div class="project-name">${project.name}</div>
        <div class="project-description">${project.description}</div>
        <div class="project-tech">Technologies: ${project.technologies.join(', ')}</div>
    </div>
    `).join('\n    ')}
    
    <h2>Education</h2>
    ${education.map(edu => `
    <div class="education-item">
        <span class="education-degree">${edu.degree}</span>
        <span class="education-date">${edu.graduationDate}</span>
        <div class="education-school">${edu.school} - ${edu.description}</div>
    </div>
    `).join('\n    ')}
    
    ${certifications && certifications.length > 0 ? `
    <h2>Certifications</h2>
    ${certifications.map(cert => `
    <div class="certification">
        <span class="certification-name">${cert.name}</span> - ${cert.issuer} (${cert.date})
    </div>
    `).join('\n    ')}
    ` : ''}
    
    <h2>Languages</h2>
    <div class="languages">
        ${languages.join(' | ')}
    </div>
</body>
</html>`;
}

// Main function
function main() {
  const outputDir = path.join(__dirname, '..', 'generated-cvs');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 Generating minimalist ATS-friendly CV...\n');

  try {
    const html = generateMinimalistHTML();
    const fileName = 'santiago-alvarez-cv-minimalist-ats.html';
    const filePath = path.join(outputDir, fileName);
    
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`✅ Generated: ${fileName}`);
    console.log(`📁 Location: ${filePath}`);
    console.log('\n✨ Minimalist CV generated successfully!');
    console.log('\n📝 Features:');
    console.log('   - Plain black text on white background');
    console.log('   - Times New Roman font (ATS-friendly)');
    console.log('   - Simple structure, no complex layouts');
    console.log('   - All text easily readable by automated systems');
    console.log('   - Keyword-rich content');
    console.log('   - Standard section headers');
    console.log('\n🖨️  To convert to PDF:');
    console.log('   1. Open the HTML file in your browser');
    console.log('   2. Press Ctrl+P (or Cmd+P on Mac)');
    console.log('   3. Select "Save as PDF"');
    console.log('   4. Save as: Santiago_Alvarez_CV_2025.pdf');
    console.log('\n💡 This version is optimized for:');
    console.log('   - Applicant Tracking Systems (ATS)');
    console.log('   - Quick scanning by recruiters');
    console.log('   - Automated keyword matching');
    console.log('   - Plain text extraction\n');
  } catch (error) {
    console.error(`❌ Error generating minimalist CV:`, error.message);
  }
}

main();

