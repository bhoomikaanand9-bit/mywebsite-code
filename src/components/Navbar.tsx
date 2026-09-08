import { useState, useEffect } from 'react';
import { User, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar = ({ onOpenContact }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf8f5]/85 backdrop-blur-md border-b border-[#e6e2de]/60 shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-all">
      <div className="h-20 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand & Badge */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-[13px] tracking-wider font-semibold text-[#1c1b1a] uppercase group-hover:text-[#8d483f] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#d9e7ce] text-[#5b6854] text-[11px] font-semibold tracking-wide">
              {PERSONAL_INFO.discipline}
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-1.5 pl-2 border-l border-[#e6e2de]">
            <span className="w-2 h-2 rounded-full bg-[#56624f] animate-pulse"></span>
            <span className="text-[11px] font-medium text-[#534340] tracking-wide">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-[13px] tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#8d483f] font-semibold'
                      : 'text-[#534340] hover:text-[#1c1b1a]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Profile Trigger */}
          <div className="relative">
            <button
              id="profile-button"
              aria-label="Profile Info"
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-8 h-8 rounded-full bg-[#8d483f] flex items-center justify-center text-white hover:bg-[#aa6055] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8d483f]/30"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Profile Dropdown Popover */}
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-72 p-4 bg-[#fdf8f5] rounded-xl shadow-xl border border-[#e6e2de] z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center gap-3 pb-3 border-b border-[#e6e2de]">
                  <div className="w-10 h-10 rounded-full bg-[#8d483f] text-white flex items-center justify-center font-medium text-sm">
                    BA
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1c1b1a]">{PERSONAL_INFO.name}</div>
                    <div className="text-xs text-[#534340]">{PERSONAL_INFO.institution}</div>
                  </div>
                </div>
                <div className="py-2.5 text-xs text-[#534340] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#867370]">Degree:</span>
                    <span className="font-medium text-[#1c1b1a]">B.Tech AI & Data Science</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#867370]">Cohort:</span>
                    <span className="font-medium text-[#1c1b1a]">{PERSONAL_INFO.cohortYear}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#867370]">Location:</span>
                    <span className="font-medium text-[#1c1b1a]">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#e6e2de] flex gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-1.5 px-2 rounded-lg bg-[#f1ede9] hover:bg-[#e6e2de] text-xs text-[#1c1b1a] font-medium transition-colors inline-flex items-center justify-center gap-1"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-1.5 px-2 rounded-lg bg-[#8d483f] hover:bg-[#aa6055] text-xs text-white font-medium transition-colors inline-flex items-center justify-center gap-1"
                  >
                    GitHub <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-[#534340] hover:text-[#1c1b1a] hover:bg-[#f1ede9] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 py-4 bg-[#fdf8f5] border-t border-[#e6e2de] shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 px-2 rounded-md text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-[#ffdad5]/50 text-[#8d483f]'
                    : 'text-[#534340] hover:text-[#1c1b1a]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#e6e2de] flex items-center justify-between text-xs text-[#534340]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#56624f] animate-pulse"></span>
                Open to Opportunities
              </span>
              <span>REVA · 2025</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
