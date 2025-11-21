import fs from 'fs';
import path from 'path';
import { cvData } from '../src/lib/data';

// Minimalist CV generator - ATS-friendly, plain text focused
// Reads from the main data.ts file structure

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
    ${projects ? projects.map(project => `
    <div class="project">
        <div class="project-name">${project.name}</div>
        <div class="project-description">${project.description}</div>
        <div class="project-tech">Technologies: ${project.technologies.join(', ')}</div>
    </div>
    `).join('\n    ') : ''}
    
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

    console.log('🚀 Generating minimalist ATS-friendly CV (from central data)...\n');

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
    } catch (error: any) {
        console.error(`❌ Error generating minimalist CV:`, error.message);
    }
}

main();
