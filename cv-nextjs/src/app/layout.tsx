import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Ramon Alvarez Gomez - Full Stack Developer",
  description: "Full Stack Developer with 2+ years of experience in web, mobile and game development. Skilled in Python, Django, JavaScript, TypeScript, React, Angular, Vue, and more.",
  keywords: ["Full Stack Developer", "Santiago Alvarez", "Web Developer", "React", "Angular", "Vue", "Python", "Django"],
  authors: [{ name: "Santiago Ramon Alvarez Gomez" }],
  openGraph: {
    title: "Santiago Ramon Alvarez Gomez - Full Stack Developer",
    description: "Full Stack Developer with 2+ years of experience in web, mobile and game development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
