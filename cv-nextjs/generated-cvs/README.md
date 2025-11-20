# Personalized CV Files

This directory contains HTML versions of your CV, personalized for each job application.

## 📄 Generated CV Files

Each HTML file is tailored to emphasize the skills and experience most relevant to the specific company/position:

1. **santiago-alvarez-cv-agileengine.html** - Python/React Engineer position
2. **santiago-alvarez-cv-agero.html** - Senior Fullstack Engineer (Python, React, AWS)
3. **santiago-alvarez-cv-stonegate-technologies.html** - Lead Engineer (React, Python, DevOps)
4. **santiago-alvarez-cv-ninjatech-ai.html** - Senior Software Engineer (React, Next.js, Python)
5. **santiago-alvarez-cv-company.html** - Generic Full Stack Developer template
6. **santiago-alvarez-cv-company.html** - Frontend-focused Developer template

## 🖨️ How to Convert HTML to PDF

### Method 1: Using Your Browser (Recommended)

1. **Open the HTML file**
   - Double-click the HTML file, or
   - Right-click → Open with → Your preferred browser (Chrome, Edge, Firefox)

2. **Open Print Dialog**
   - Windows: Press `Ctrl + P`
   - Mac: Press `Cmd + P`

3. **Configure Print Settings**
   - **Destination**: Select "Save as PDF" or "Microsoft Print to PDF"
   - **Layout**: Portrait
   - **Paper Size**: A4 (or Letter for US companies)
   - **Margins**: Default or Minimum
   - **Scale**: 100% (adjust if content doesn't fit)
   - **Options**: 
     - ✅ Enable "Background graphics" (important for styling)
     - ✅ Enable "Headers and footers" if you want them

4. **Save the PDF**
   - Click "Save" or "Print"
   - Choose your location
   - Use the filename: `Santiago-Alvarez-CV-[CompanyName].pdf`

### Method 2: Using Chrome DevTools (For Advanced Users)

1. Open the HTML file in Google Chrome
2. Press `F12` to open DevTools
3. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac)
4. Type "PDF" and select "Print to PDF"
5. Configure settings and save

## ✨ Tips for Best Results

### Before Printing:
- **Review Content**: Open the HTML file and verify all information is correct
- **Check Formatting**: Ensure text isn't cut off and spacing looks good
- **Test Print**: Do a test print first to ensure quality

### Print Settings for Professional Results:
- **For US Companies**: Use Letter size (8.5" x 11")
- **For International**: Use A4 size (210mm x 297mm)
- **Margins**: Keep minimum margins for more content space
- **Quality**: Select "High quality" or "Best" if available

### File Naming Convention:
```
Santiago-Alvarez-CV-AgileEngine.pdf
Santiago-Alvarez-CV-Agero.pdf
Santiago-Alvarez-CV-StoneGate.pdf
Santiago-Alvarez-CV-NinjaTech.pdf
```

## 🎯 Customization for Each Job

Each CV version has been tailored with:

1. **Professional Summary**: Rewritten to match job requirements
2. **Skills**: Reordered to show most relevant skills first (limited to top 24)
3. **Experience**: Achievements reordered to highlight relevant work
4. **Projects**: Filtered to show only the most applicable projects
5. **Technologies**: Emphasized to match job description

## 🔄 Regenerating CVs

If you need to update or regenerate the CVs:

1. Navigate to the project directory:
   ```bash
   cd cv-nextjs
   ```

2. Run the generation script:
   ```bash
   npm run generate-cvs
   ```
   or
   ```bash
   npx ts-node scripts/generate-personalized-cv.ts
   ```

## 📝 Editing Job-Specific Data

To customize a CV further:

1. Open the corresponding data file in `src/lib/jobs/`
2. Edit the content (summary, skills, achievements, etc.)
3. Regenerate the CVs using the command above

## 🚀 Quick Start

1. Open `santiago-alvarez-cv-agileengine.html` in your browser
2. Press `Ctrl + P` (Windows) or `Cmd + P` (Mac)
3. Select "Save as PDF"
4. Enable "Background graphics"
5. Save as `Santiago-Alvarez-CV-AgileEngine.pdf`
6. Repeat for other companies!

## 📧 Ready to Apply

Once you have your PDF files:
- Review each one carefully
- Ensure all links and contact information are correct
- Upload to LinkedIn job applications
- Send via email to recruiters
- Keep your online CV (the main website) as a comprehensive portfolio

## 💡 Pro Tips

1. **Always customize**: Never send the same CV to different companies
2. **Check ATS compatibility**: These CVs are designed to be ATS-friendly
3. **Keep it current**: Update dates and information before each application
4. **Proofread**: Always check for typos before sending
5. **File size**: Keep PDFs under 2MB for email compatibility

---

Good luck with your job applications! 🎉

Remember: Tailored CVs significantly increase your chances of getting interviews. Each company sees exactly why you're the perfect fit for their specific role.

