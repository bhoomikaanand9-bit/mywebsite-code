import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection = () => {
  const getTimelineIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-[#3a0905]" />;
      case 1:
        return <BookOpen className="w-5 h-5 text-[#1c1b1a]" />;
      case 2:
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#1c1b1a]" />;
    }
  };

  return (
    <section id="education" className="w-full px-5 sm:px-8 lg:px-12 max-w-[1280px] mx-auto py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Section Header Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <span className="font-code text-xs text-[#8d483f] uppercase tracking-wider font-semibold mb-2">
            04 / Background
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1c1b1a] tracking-tight">
            Academic Journey
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-[#8d483f]"></div>
          <p className="text-sm text-[#534340] mt-4 max-w-xs leading-relaxed font-normal">
            Chronological record of formal educational training across secondary and higher academic institutions.
          </p>
        </div>

        {/* Vertical Timeline (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-6 sm:space-y-8">
          {EDUCATION.map((item, index) => {
            const isLast = index === EDUCATION.length - 1;
            return (
              <div key={item.id} className="flex gap-4 sm:gap-6 items-start group">
                {/* Timeline Icon & Vertical Bar */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xs border border-[#e6e2de] transition-transform group-hover:scale-105 ${
                      item.isCurrent ? 'bg-[#ffdad5]' : 'bg-[#ece7e4]'
                    }`}
                  >
                    {getTimelineIcon(index)}
                  </div>
                  {!isLast && (
                    <div className="w-px h-24 sm:h-28 bg-[#e6e2de] mt-2"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-[#f7f3ef] rounded-2xl p-6 border border-[#e6e2de] shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`font-code text-xs font-semibold ${
                        item.isCurrent ? 'text-[#8d483f]' : 'text-[#534340]'
                      }`}
                    >
                      {item.period}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                        item.isCurrent
                          ? 'bg-[#d9e7ce] text-[#5b6854]'
                          : 'bg-[#f1ede9] text-[#534340]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-[#1c1b1a] font-normal">
                    {item.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-[#534340] mt-1 font-medium">
                    {item.institution}
                  </p>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-[#534340] mt-3 pt-3 border-t border-[#e6e2de]/80 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.affiliation && (
                    <p className="text-xs text-[#867370] mt-2 font-mono">
                      {item.affiliation}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
