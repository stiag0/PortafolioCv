const fs = require('fs');
const path = require('path');

// Import job-specific data
const jobDataFiles = [
  'agileengine-data',
  'agero-data',
  'stonegate-data',
  'ninjatech-data',
  'fullstack-generic-data',
  'frontend-focused-data'
];

interface PersonalInfo {
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

interface Employment {
  jobTitle: string;
  startDate: string;
  endDate: string;
  employer: string;
  city: string;
  achievements: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Education {
  school: string;
  degree: string;
  graduationDate: string;
  description: string;
}

interface JobData {
  personalInfo: PersonalInfo;
  skills: string[];
  employmentHistory: Employment[];
  projects: Project[];
  companyName: string;
}

// Shared education and languages (same for all)
const education: Education[] = [
  {
    school: 'Universidad EAFIT',
    degree: 'Bachelor in Software Engineering',
    graduationDate: '2024',
    description: 'Software Engineering'
  }
];

const languages = ['Spanish (Native)', 'English (Professional)'];

function generateHTML(jobData: JobData): string {
  const { personalInfo, skills, employmentHistory, projects, companyName } = jobData;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personalInfo.firstName} ${personalInfo.lastName} - ${personalInfo.jobTitle} - CV for ${companyName}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: #ffffff;
        }

        .container {
            max-width: 210mm;
            margin: 0 auto;
            padding: 20mm;
        }

        /* Header Section */
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #2563eb;
        }

        .header h1 {
            font-size: 32px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 8px;
        }

        .header .job-title {
            font-size: 18px;
            color: #2563eb;
            font-weight: 600;
            margin-bottom: 12px;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 14px;
            color: #4b5563;
        }

        .contact-info span {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        /* Professional Summary */
        .summary {
            margin-bottom: 30px;
        }

        .summary p {
            text-align: justify;
            font-size: 14px;
            line-height: 1.7;
            color: #374151;
        }

        /* Section Headers */
        .section {
            margin-bottom: 28px;
        }

        .section-title {
            font-size: 20px;
            font-weight: 700;
            color: #1f2937;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 8px;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* Skills Section */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }

        .skill-item {
            padding: 6px 12px;
            background: #f3f4f6;
            border-radius: 6px;
            font-size: 13px;
            text-align: center;
            color: #374151;
        }

        /* Employment History */
        .job {
            margin-bottom: 20px;
        }

        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 8px;
        }

        .job-title-employer {
            flex: 1;
        }

        .job-title-employer h3 {
            font-size: 16px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 4px;
        }

        .job-title-employer .employer {
            font-size: 14px;
            color: #2563eb;
            font-weight: 500;
        }

        .job-date-location {
            text-align: right;
            font-size: 13px;
            color: #6b7280;
        }

        .achievements {
            list-style: none;
            padding-left: 0;
        }

        .achievements li {
            padding-left: 20px;
            margin-bottom: 6px;
            font-size: 13px;
            color: #4b5563;
            position: relative;
        }

        .achievements li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #2563eb;
            font-weight: bold;
            font-size: 16px;
        }

        /* Projects Section */
        .project {
            margin-bottom: 18px;
        }

        .project h3 {
            font-size: 15px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 6px;
        }

        .project p {
            font-size: 13px;
            color: #4b5563;
            margin-bottom: 6px;
            line-height: 1.5;
        }

        .technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 8px;
        }

        .tech-tag {
            padding: 4px 10px;
            background: #dbeafe;
            color: #1e40af;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 500;
        }

        /* Education Section */
        .education-item {
            margin-bottom: 12px;
        }

        .education-item h3 {
            font-size: 15px;
            font-weight: 600;
            color: #1f2937;
        }

        .education-item .degree {
            font-size: 14px;
            color: #2563eb;
            margin: 4px 0;
        }

        .education-item .date {
            font-size: 13px;
            color: #6b7280;
        }

        /* Languages Section */
        .languages-list {
            display: flex;
            gap: 20px;
            font-size: 14px;
        }

        .language-item {
            padding: 8px 16px;
            background: #f3f4f6;
            border-radius: 6px;
            color: #374151;
        }

        /* Print Styles */
        @media print {
            body {
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
            }

            .container {
                padding: 0;
                max-width: 100%;
            }

            .section {
                page-break-inside: avoid;
            }

            .job, .project {
                page-break-inside: avoid;
            }
        }

        @page {
            size: A4;
            margin: 15mm;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>${personalInfo.firstName} ${personalInfo.lastName}</h1>
            <div class="job-title">${personalInfo.jobTitle}</div>
            <div class="contact-info">
                <span>📧 ${personalInfo.email}</span>
                <span>📱 ${personalInfo.phone}</span>
                <span>📍 ${personalInfo.city}, ${personalInfo.country}</span>
                <span>💼 GitHub: github.com/stiag0</span>
            </div>
        </div>

        <!-- Professional Summary -->
        <div class="summary section">
            <h2 class="section-title">Professional Summary</h2>
            <p>${personalInfo.professionalSummary}</p>
        </div>

        <!-- Skills -->
        <div class="section">
            <h2 class="section-title">Core Skills</h2>
            <div class="skills-grid">
                ${skills.slice(0, 24).map(skill => `<div class="skill-item">${skill}</div>`).join('\n                ')}
            </div>
        </div>

        <!-- Employment History -->
        <div class="section">
            <h2 class="section-title">Professional Experience</h2>
            ${employmentHistory.map(job => `
            <div class="job">
                <div class="job-header">
                    <div class="job-title-employer">
                        <h3>${job.jobTitle}</h3>
                        <div class="employer">${job.employer} • ${job.city}</div>
                    </div>
                    <div class="job-date-location">
                        ${job.startDate} - ${job.endDate}
                    </div>
                </div>
                <ul class="achievements">
                    ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('\n                    ')}
                </ul>
            </div>
            `).join('\n            ')}
        </div>

        <!-- Projects -->
        <div class="section">
            <h2 class="section-title">Key Projects</h2>
            ${projects.map(project => `
            <div class="project">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('\n                    ')}
                </div>
            </div>
            `).join('\n            ')}
        </div>

        <!-- Education -->
        <div class="section">
            <h2 class="section-title">Education</h2>
            ${education.map(edu => `
            <div class="education-item">
                <h3>${edu.school}</h3>
                <div class="degree">${edu.degree} - ${edu.description}</div>
                <div class="date">Graduated: ${edu.graduationDate}</div>
            </div>
            `).join('\n            ')}
        </div>

        <!-- Languages -->
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

async function main() {
  const outputDir = path.join(__dirname, '..', 'generated-cvs');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 Starting CV generation...\n');

  for (const jobFile of jobDataFiles) {
    try {
      // Dynamically require the job data (compile TypeScript to JavaScript first)
      const jobDataModule = require(`../src/lib/jobs/${jobFile}.ts`);
      const jobData = jobDataModule[Object.keys(jobDataModule).find(k => k.includes('Data')) as string];
      const companyName = jobDataModule.companyName;

      // Generate HTML
      const html = generateHTML({
        ...jobData,
        companyName
      });

      // Write to file
      const fileName = `santiago-alvarez-cv-${companyName.toLowerCase().replace(/\s+/g, '-')}.html`;
      const filePath = path.join(outputDir, fileName);
      
      fs.writeFileSync(filePath, html, 'utf-8');
      console.log(`✅ Generated: ${fileName}`);
    } catch (error) {
      console.error(`❌ Error generating CV for ${jobFile}:`, error);
    }
  }

  console.log('\n✨ All CVs generated successfully!');
  console.log(`📁 Output directory: ${outputDir}`);
  console.log('\n📝 Next steps:');
  console.log('1. Open each HTML file in your browser');
  console.log('2. Press Ctrl+P (or Cmd+P on Mac)');
  console.log('3. Select "Save as PDF"');
  console.log('4. Adjust settings if needed (margins, background graphics)');
  console.log('5. Save with the company name\n');
}

main().catch(console.error);

