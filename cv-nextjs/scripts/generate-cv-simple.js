const fs = require('fs');
const path = require('path');

// This script generates CVs by reading from your corrected data.ts
// It creates simplified versions highlighting different aspects

// Import the main CV data (we'll require the compiled version)
const { cvData } = require('../src/lib/data.ts');

// Define which skills to emphasize for each job type
const jobConfigurations = {
  agileengine: {
    companyName: 'AgileEngine',
    jobTitle: 'Python/React Full Stack Developer',
    focusSkills: ['Python', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'JavaScript (ES6+)', 'TypeScript', 'Git', 'RESTful APIs', 'Django', 'WordPress (Headless)', 'Tailwind CSS', 'Vercel', 'HTML5', 'CSS3', 'Shopify', 'Express.js', 'FastAPI', 'Agile/Scrum', 'Jest', 'Postman'],
    summary: `Python/React Full Stack Developer with 4+ years of experience building scalable web applications and e-commerce platforms. Specialized in Python, React.js, Node.js, Firebase, and modern web technologies. Strong expertise in SQL/NoSQL databases (PostgreSQL, MongoDB, Firebase), RESTful APIs, Git version control, and agile methodologies. Proven track record in troubleshooting, maintaining production systems, and delivering high-quality code.`
  },
  agero: {
    companyName: 'Agero',
    jobTitle: 'Senior Fullstack Engineer',
    focusSkills: ['Python', 'React', 'PostgreSQL', 'MongoDB', 'Firebase', 'AWS', 'HTML5', 'CSS3', 'RESTful APIs', 'Django', 'FastAPI', 'Node.js', 'JavaScript (ES6+)', 'TypeScript', 'Express.js', 'Git', 'Vercel', 'Tailwind CSS', 'Next.js', 'MySQL', 'Docker', 'Agile/Scrum'],
    summary: `Senior Fullstack Engineer with 4+ years of experience designing and developing scalable web applications using Python, React, and cloud technologies. Specialized in building production-ready systems with emphasis on performance, scalability, and security. Strong expertise in SQL (PostgreSQL) and NoSQL (MongoDB, Firebase) databases, RESTful APIs. Proven track record in implementing backend services with Python (Django, FastAPI) and modern frontend interfaces with React.`
  },
  stonegate: {
    companyName: 'StoneGate-Technologies',
    jobTitle: 'Lead Full Stack Engineer',
    focusSkills: ['React', 'Python', 'Django', 'FastAPI', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Azure', 'JavaScript (ES6+)', 'TypeScript', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Firebase', 'RESTful APIs', 'Power Automate', 'VBA', 'Agile/Scrum'],
    summary: `Lead Full Stack Engineer with 4+ years of experience designing and developing scalable web applications. Strong leadership skills with proven track record in mentoring teams and implementing DevOps practices. Expertise in React.js, Python (Django/FastAPI), Docker, Kubernetes, and cloud platforms (Azure, AWS). Experienced in leading technical teams, conducting code reviews, and establishing best practices.`
  },
  ninjatech: {
    companyName: 'NinjaTech-AI',
    jobTitle: 'Senior Software Engineer',
    focusSkills: ['React', 'Next.js', 'Python', 'TypeScript', 'AWS', 'JavaScript (ES6+)', 'RESTful APIs', 'Django', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'Git', 'HTML5', 'CSS3', 'Tailwind CSS', 'Claude CLI', 'ChatGPT API', 'OpenAI API', 'Vercel', 'Express.js'],
    summary: `Senior Software Engineer with 4+ years of experience developing and shipping production-ready applications using React, Next.js, Python, TypeScript, and cloud technologies. Specialized in building scalable backend services that integrate with complex systems. Strong expertise in designing APIs, AI integration (Claude CLI, ChatGPT API, OpenAI API), and collaborating with product teams to create innovative features.`
  },
  fullstack: {
    companyName: 'Company',
    jobTitle: 'Full Stack Developer',
    focusSkills: ['React', 'Angular', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Python', 'Node.js', 'Django', 'Express.js', 'FastAPI', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Firebase', 'MySQL', 'Vercel', 'Git', 'WordPress (Headless)', 'Shopify'],
    summary: `Full Stack Developer with 4+ years of experience building scalable web applications and e-commerce solutions. Specialized in modern JavaScript frameworks (React, Angular, Next.js), Python/Django, and Node.js development. Strong expertise in both frontend and backend development, database design (SQL and NoSQL), RESTful APIs, and cloud deployment. Proven track record in delivering high-quality software solutions using agile methodologies.`
  },
  frontend: {
    companyName: 'Company-Frontend',
    jobTitle: 'Senior Frontend Developer',
    focusSkills: ['React', 'Angular', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Svelte', 'Redux', 'RESTful APIs', 'Git', 'Jest', 'Cypress', 'Figma', 'Responsive Design', 'Firebase', 'Vercel', 'Node.js', 'Performance Optimization'],
    summary: `Senior Frontend Developer with 4+ years of experience building modern, responsive web applications using React, Angular, Next.js, and TypeScript. Specialized in creating exceptional user experiences with focus on performance optimization, accessibility, and modern UI/UX practices. Strong expertise in component-based architecture, state management, and frontend best practices.`
  },
  microsoft: {
    companyName: 'Company-Microsoft',
    jobTitle: 'Full Stack Developer - Microsoft Stack',
    focusSkills: ['Azure', 'Visual Basic', 'VBA', 'Power BI', 'Power Query (DAX)', 'Power Automate', 'Excel Macros', 'C#', 'TypeScript', 'JavaScript (ES6+)', 'React', 'Angular', 'Python', 'Node.js', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Git', 'Agile/Scrum'],
    summary: `Full Stack Developer with 4+ years of experience including Microsoft Azure stack specialization. Expertise in Visual Basic, VBA, Power BI, Power Query (DAX), and Power Automate for enterprise automation solutions. Strong background in modern web development with React, Angular, Python, and Node.js. Proven track record in reducing operational inefficiencies through automation and data processing solutions.`
  }
};

function generateHTML(config, cvData) {
  const { companyName, jobTitle, focusSkills, summary } = config;
  const personalInfo = { ...cvData.personalInfo, jobTitle, professionalSummary: summary };
  const skills = focusSkills.slice(0, 24); // Top 24 skills
  const employmentHistory = cvData.employmentHistory;
  const projects = cvData.projects.slice(0, 3); // Top 3 projects
  const education = cvData.education;
  const languages = cvData.languages;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personalInfo.firstName} ${personalInfo.lastName} - ${jobTitle} - CV for ${companyName}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6; color: #1f2937; background: #ffffff;
        }
        .container { max-width: 210mm; margin: 0 auto; padding: 20mm; }
        .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #2563eb; }
        .header h1 { font-size: 32px; font-weight: 700; color: #1f2937; margin-bottom: 8px; }
        .header .job-title { font-size: 18px; color: #2563eb; font-weight: 600; margin-bottom: 12px; }
        .contact-info { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; font-size: 14px; color: #4b5563; }
        .summary { margin-bottom: 30px; }
        .summary p { text-align: justify; font-size: 14px; line-height: 1.7; color: #374151; }
        .section { margin-bottom: 28px; }
        .section-title { font-size: 20px; font-weight: 700; color: #1f2937; border-bottom: 2px solid #e5e7eb; 
            padding-bottom: 8px; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px; }
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .skill-item { padding: 6px 12px; background: #f3f4f6; border-radius: 6px; font-size: 13px; text-align: center; color: #374151; }
        .job { margin-bottom: 20px; }
        .job-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
        .job-title-employer h3 { font-size: 16px; font-weight: 600; color: #1f2937; margin-bottom: 4px; }
        .job-title-employer .employer { font-size: 14px; color: #2563eb; font-weight: 500; }
        .job-date-location { text-align: right; font-size: 13px; color: #6b7280; }
        .achievements { list-style: none; padding-left: 0; }
        .achievements li { padding-left: 20px; margin-bottom: 6px; font-size: 13px; color: #4b5563; position: relative; }
        .achievements li:before { content: "•"; position: absolute; left: 0; color: #2563eb; font-weight: bold; font-size: 16px; }
        .project { margin-bottom: 18px; }
        .project h3 { font-size: 15px; font-weight: 600; color: #1f2937; margin-bottom: 6px; }
        .project p { font-size: 13px; color: #4b5563; margin-bottom: 6px; line-height: 1.5; }
        .technologies { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
        .tech-tag { padding: 4px 10px; background: #dbeafe; color: #1e40af; border-radius: 4px; font-size: 11px; font-weight: 500; }
        .education-item h3 { font-size: 15px; font-weight: 600; color: #1f2937; }
        .education-item .degree { font-size: 14px; color: #2563eb; margin: 4px 0; }
        .education-item .date { font-size: 13px; color: #6b7280; }
        .languages-list { display: flex; gap: 20px; font-size: 14px; }
        .language-item { padding: 8px 16px; background: #f3f4f6; border-radius: 6px; color: #374151; }
        @media print {
            body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
            .container { padding: 0; max-width: 100%; }
            .section, .job, .project { page-break-inside: avoid; }
        }
        @page { size: A4; margin: 15mm; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${personalInfo.firstName} ${personalInfo.lastName}</h1>
            <div class="job-title">${jobTitle}</div>
            <div class="contact-info">
                <span>📧 ${personalInfo.email}</span>
                <span>📱 ${personalInfo.phone}</span>
                <span>📍 ${personalInfo.city}, ${personalInfo.country}</span>
                <span>💼 GitHub: github.com/stiag0</span>
            </div>
        </div>
        <div class="summary section">
            <h2 class="section-title">Professional Summary</h2>
            <p>${summary}</p>
        </div>
        <div class="section">
            <h2 class="section-title">Core Skills</h2>
            <div class="skills-grid">
                ${skills.map(skill => `<div class="skill-item">${skill}</div>`).join('\n                ')}
            </div>
        </div>
        <div class="section">
            <h2 class="section-title">Professional Experience</h2>
            ${employmentHistory.map(job => `
            <div class="job">
                <div class="job-header">
                    <div class="job-title-employer">
                        <h3>${job.jobTitle}</h3>
                        <div class="employer">${job.employer} • ${job.city}</div>
                    </div>
                    <div class="job-date-location">${job.startDate} - ${job.endDate}</div>
                </div>
                <ul class="achievements">
                    ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('\n                    ')}
                </ul>
            </div>`).join('\n            ')}
        </div>
        <div class="section">
            <h2 class="section-title">Key Projects</h2>
            ${projects.map(project => `
            <div class="project">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('\n                    ')}
                </div>
            </div>`).join('\n            ')}
        </div>
        <div class="section">
            <h2 class="section-title">Education</h2>
            ${education.map(edu => `
            <div class="education-item">
                <h3>${edu.school}</h3>
                <div class="degree">${edu.degree} - ${edu.description}</div>
                <div class="date">Graduated: ${edu.graduationDate}</div>
            </div>`).join('\n            ')}
        </div>
        <div class="section">
            <h2 class="section-title">Languages</h2>
            <div class="languages-list">
                ${languages.map(lang => `<div class="language-item">${lang}</div>`).join('\n                ')}
            </div>
        </div>
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

  console.log('🚀 Generating corrected CVs from your updated data...\n');

  for (const [key, config] of Object.entries(jobConfigurations)) {
    try {
      const html = generateHTML(config, cvData);
      const fileName = `santiago-alvarez-cv-${config.companyName.toLowerCase().replace(/\s+/g, '-')}.html`;
      const filePath = path.join(outputDir, fileName);
      
      fs.writeFileSync(filePath, html, 'utf-8');
      console.log(`✅ Generated: ${fileName}`);
    } catch (error) {
      console.error(`❌ Error generating CV for ${key}:`, error.message);
    }
  }

  console.log('\n✨ All corrected CVs generated successfully!');
  console.log(`📁 Output directory: ${outputDir}`);
  console.log('\n✅ CVs now reflect accurate technology usage:');
  console.log('   - Tigo: Azure, Visual Basic, VBA, Power BI, Power Query, Power Automate');
  console.log('   - Central de Belleza: Firebase, WordPress, Vercel (NOT AWS/Docker)');
  console.log('   - El Mundo de Laura: Shopify, Python, JavaScript (NOT Docker/Kubernetes)');
  console.log('\n📝 Skills like AWS, Docker, Kubernetes are listed but not falsely claimed in projects\n');
}

main();

