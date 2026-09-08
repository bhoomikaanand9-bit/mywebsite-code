import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdf8f5] text-[#1c1b1a] flex flex-col font-sans selection:bg-[#ffdad5] selection:text-[#3a0905]">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pt-20">
        {/* Hero Section with Exhibit 001.Graph */}
        <HeroSection />

        {/* 01 / Context & Mindset: About Me */}
        <AboutSection />

        {/* 02 / Capabilities: Skills & Foundations */}
        <SkillsSection />

        {/* 03 / Work: Selected Projects with Interactive Schematics */}
        <ProjectsSection />

        {/* 04 / Background: Academic Journey */}
        <EducationSection />

        {/* 05 / Accreditations: Certifications */}
        <CertificationsSection />

        {/* 06 / Get In Touch: Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
