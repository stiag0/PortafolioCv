# Santiago Ramon Alvarez Gomez - Modern CV

A modern, responsive CV/Resume built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**. Inspired by modern design principles and the Vue Resume Template.

## 🚀 Features

### ✨ **Modern Design**
- **Clean & Professional** - Minimalist design with modern aesthetics
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Responsive Layout** - Perfect on desktop, tablet, and mobile
- **Smooth Animations** - Framer Motion powered animations

### 📱 **Adaptive Layout**
- **Desktop**: Fixed sidebar + scrollable main content
- **Mobile**: Tabbed interface with bottom navigation
- **Print-Ready**: Optimized print styles for professional output

### 🎯 **Sections**
- **Hero Section** - Animated introduction with stats cards
- **About Me** - Professional summary and background
- **Experience** - Detailed work history with achievements
- **Skills** - Categorized skills with progress bars
- **Contact** - Contact form and information

### 🛠 **Technical Features**
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Next.js 14** - Latest React framework
- **SEO Optimized** - Proper meta tags and structure

## 🎨 **Design Inspiration**

This CV is inspired by the [Vue Resume Template by Ryan Balieiro](https://github.com/ryanbalieiro/vue-resume-template), featuring:

- **Adaptive Navigation** - Different layouts for desktop and mobile
- **Modern Color Scheme** - Professional blue accent colors
- **Card-Based Design** - Clean information cards
- **Interactive Elements** - Hover effects and transitions
- **Progress Indicators** - Visual skill level representation

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cv-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 **Project Structure**

```
cv-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Main page with responsive layout
│   │   └── globals.css         # Global styles & print styles
│   ├── components/
│   │   ├── cv-hero.tsx         # Hero section with stats
│   │   ├── cv-sidebar.tsx      # Desktop sidebar
│   │   ├── cv-main-content.tsx # About & experience sections
│   │   ├── cv-skills-section.tsx # Skills with progress bars
│   │   ├── cv-contact-section.tsx # Contact form & info
│   │   ├── cv-navigation.tsx   # Mobile navigation
│   │   ├── theme-toggle.tsx    # Dark/light mode toggle
│   │   ├── print-button.tsx    # Print functionality
│   │   └── theme-provider.tsx  # Theme context
│   └── lib/
│       └── data.ts             # CV data (TypeScript interfaces)
├── public/                     # Static assets
└── package.json               # Dependencies & scripts
```

## 🎯 **Customization**

### **Personal Information**
Edit `src/lib/data.ts` to update your personal information:

```typescript
export const cvData: CVData = {
  personalInfo: {
    firstName: 'Your Name',
    lastName: 'Your Last Name',
    jobTitle: 'Your Job Title',
    // ... other fields
  },
  // ... other sections
};
```

### **Styling**
- **Colors**: Modify Tailwind classes in components
- **Layout**: Adjust grid layouts in `page.tsx`
- **Animations**: Customize Framer Motion animations

### **Skills & Progress Bars**
Update skill levels in `cv-skills-section.tsx`:

```typescript
const categorizedSkills: Skill[] = [
  { name: 'React', level: 85, category: 'frontend' },
  // ... add your skills
];
```

## 📱 **Responsive Design**

### **Desktop (lg+)**
- Fixed sidebar with contact info
- Scrollable main content
- Full navigation visible

### **Mobile (< lg)**
- Tabbed bottom navigation
- Single section view
- Optimized touch interactions

## 🖨 **Print Styles**

The CV includes comprehensive print styles:
- **A4 Format** - Optimized for standard paper
- **Clean Layout** - Removes unnecessary elements
- **Proper Spacing** - Ensures content fits on page
- **High Contrast** - Black text on white background

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### **Netlify**
1. Build: `npm run build`
2. Deploy to Netlify

### **Static Export**
```bash
npm run build
npm run export
```

## 🛠 **Technologies Used**

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **next-themes** - Theme management

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🤝 **Contributing**

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using Next.js and inspired by modern CV designs**
