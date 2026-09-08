import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f7f3ef] border-t border-[#e6e2de] shadow-[0_-1px_8px_rgba(0,0,0,0.02)] mt-16 sm:mt-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-1">
          <span className="font-display text-2xl text-[#1c1b1a] font-normal">
            {PERSONAL_INFO.name}
          </span>
          <p className="text-xs sm:text-sm text-[#534340]">
            {PERSONAL_INFO.role}
          </p>
          <span className="text-[11px] text-[#867370] mt-1 font-mono">
            Cross-Disciplinary AI & Product Design Portfolio
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs sm:text-sm text-[#534340] hover:text-[#8d483f] transition-colors underline decoration-[#d9c1be] underline-offset-4"
            >
              {PERSONAL_INFO.email}
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm text-[#534340] hover:text-[#8d483f] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm text-[#534340] hover:text-[#8d483f] transition-colors"
            >
              GitHub
            </a>
          </div>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="w-8 h-8 rounded-full bg-[#fdf8f5] border border-[#e6e2de] flex items-center justify-center text-[#534340] hover:text-[#8d483f] hover:border-[#8d483f]/40 transition-all shadow-xs"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#534340] border-t border-[#e6e2de]/60 pt-6">
        <span className="font-code text-xs">
          © 2025 {PERSONAL_INFO.name}. All rights reserved.
        </span>
        <span className="text-[11px] text-[#867370] font-serif italic">
          Crafted with Literary & Algorithmic Rigor
        </span>
      </div>
    </footer>
  );
};
