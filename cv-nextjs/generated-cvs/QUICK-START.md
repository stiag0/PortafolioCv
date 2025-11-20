# Quick Start Guide: Converting Your CVs to PDF

## 🎯 Goal
Convert your personalized HTML CV files into professional PDF documents ready for job applications.

---

## ⚡ Quick Steps (2 Minutes Per CV)

### 1. Open the HTML File
- Navigate to: `cv-nextjs/generated-cvs/`
- Double-click on the CV file you want to convert
  - Example: `santiago-alvarez-cv-agileengine.html`
- Your default browser will open the file

### 2. Print to PDF
**Windows:**
1. Press `Ctrl + P`
2. In "Destination", select **"Save as PDF"** or **"Microsoft Print to PDF"**
3. Click **"More settings"**
4. Check ✅ **"Background graphics"** (IMPORTANT!)
5. Set margins to **"Default"** or **"Minimum"**
6. Click **"Save"**
7. Name the file: `Santiago-Alvarez-CV-AgileEngine.pdf`
8. Choose save location
9. Click **"Save"**

**Mac:**
1. Press `Cmd + P`
2. Click **"PDF"** button (bottom left)
3. Select **"Save as PDF"**
4. Name the file: `Santiago-Alvarez-CV-AgileEngine.pdf`
5. Choose save location
6. Click **"Save"**

### 3. Verify the PDF
- Open the saved PDF
- Check that all sections are visible
- Ensure colors and formatting are preserved
- Verify nothing is cut off

### 4. Repeat for Other Companies
Repeat steps 1-3 for each company you're applying to.

---

## 📋 File Naming Convention

Use this format for consistency:
```
Santiago-Alvarez-CV-[CompanyName].pdf
```

**Examples:**
- `Santiago-Alvarez-CV-AgileEngine.pdf`
- `Santiago-Alvarez-CV-Agero.pdf`
- `Santiago-Alvarez-CV-StoneGate.pdf`
- `Santiago-Alvarez-CV-NinjaTech.pdf`

---

## ⚙️ Recommended Browser Settings

### Google Chrome / Microsoft Edge (Recommended)
```
Destination: Save as PDF
Layout: Portrait
Paper Size: A4 (or Letter for US)
Pages: All
Margins: Default
Scale: 100%
Options:
  ✅ Background graphics
  ❌ Headers and footers (optional)
```

### Firefox
```
Destination: Save to PDF
Page Size: A4
Orientation: Portrait
Scale: 100%
Options:
  ✅ Print backgrounds
```

### Safari (Mac)
```
PDF: Save as PDF
Paper Size: A4 or US Letter
Scale: 100%
```

---

## 🎨 Quality Settings

For best results:
- **Resolution:** Use default (usually 300 DPI)
- **Color:** Full color
- **Background Graphics:** **Always enable!** (preserves styling)
- **Scale:** 100% (don't shrink to fit)
- **Margins:** Default or Minimum

---

## 🔍 Troubleshooting

### Problem: Colors are missing
**Solution:** Enable "Background graphics" or "Print backgrounds" in print settings

### Problem: Content is cut off
**Solution:** 
- Change margins to "Minimum"
- Try scale: 95% or 90%
- Check that paper size is A4 or Letter

### Problem: File is too large
**Solution:** 
- PDFs should be 200-500KB
- If larger, try printing from a different browser
- Chrome and Edge typically produce smaller files

### Problem: Text looks blurry
**Solution:**
- Ensure scale is set to 100%
- Use Chrome or Edge for best quality
- Don't zoom in the browser before printing

---

## 📱 Mobile Alternative

If you need to generate PDFs on mobile:
1. Open the HTML file in mobile browser
2. Tap the share icon
3. Select "Print"
4. Choose "Save as PDF"
5. Save to your device

---

## ☁️ Cloud Storage Recommendation

Save your PDFs to cloud storage for easy access:
- **Google Drive:** Easy sharing with recruiters
- **OneDrive:** Good for Windows users
- **Dropbox:** Cross-platform compatibility

Create a folder structure:
```
Job Applications 2025/
├── CVs/
│   ├── Santiago-Alvarez-CV-AgileEngine.pdf
│   ├── Santiago-Alvarez-CV-Agero.pdf
│   └── ...
├── Cover Letters/
└── Application Tracking.xlsx
```

---

## ✅ Final Checklist

Before sending each CV:
- [ ] PDF file size is under 2MB
- [ ] All sections are visible
- [ ] Contact information is correct
- [ ] No text is cut off
- [ ] Colors and formatting preserved
- [ ] File name follows convention
- [ ] Saved in accessible location

---

## 🚀 You're Ready!

That's it! You now have professional, tailored PDF CVs ready for your job applications.

**Time Investment:**
- First CV: ~5 minutes (learning the process)
- Additional CVs: ~2 minutes each
- Total: ~15 minutes for all 6 CVs

**Expected Results:**
- Professional-looking PDFs
- ATS-compatible format
- Tailored content for each position
- Higher chance of getting interviews

---

## 💼 Next Steps After PDF Generation

1. **Review Each PDF:** Open and carefully review before sending
2. **Prepare Cover Letters:** Write tailored cover letters for each position
3. **Update LinkedIn:** Ensure your profile matches your CVs
4. **Apply Strategically:** Apply to 2-3 positions per day for best results
5. **Track Applications:** Use a spreadsheet to track where you've applied

---

**Good luck with your applications!** 🎉

If you need to regenerate CVs with updated information, run:
```bash
cd cv-nextjs
npm run generate-cvs
```

