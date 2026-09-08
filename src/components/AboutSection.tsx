import { ABOUT_PARAGRAPHS, PRINCIPLES } from '../data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-[#f7f3ef] py-16 sm:py-20 lg:py-24 border-y border-[#e6e2de]/60">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Section Header Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="font-code text-xs text-[#8d483f] uppercase tracking-wider font-semibold mb-2">
              01 / Context & Mindset
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1c1b1a] tracking-tight">
              About Me
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-[#8d483f]"></div>
            <p className="text-sm text-[#534340] mt-4 max-w-xs leading-relaxed font-normal">
              A deliberate perspective on engineering, data interpretation, and human factors in software systems.
            </p>
          </div>

          {/* Narrative & Principles Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <p className="font-display text-xl sm:text-2xl text-[#1c1b1a] leading-snug font-normal">
              I am Bhoomika Anand, an undergraduate student pursuing my{' '}
              <span className="text-[#8d483f] italic font-normal">
                B.Tech in Artificial Intelligence and Data Science
              </span>{' '}
              at REVA University.
            </p>

            <div className="space-y-4 text-[#534340] text-base sm:text-lg leading-relaxed font-normal">
              <p>{ABOUT_PARAGRAPHS[1]}</p>
              <p>{ABOUT_PARAGRAPHS[2]}</p>
            </div>

            {/* Academic Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.number}
                  className="p-5 rounded-xl bg-[#fdf8f5] border border-[#e6e2de] shadow-sm flex flex-col gap-2 hover:border-[#8d483f]/30 transition-colors"
                >
                  <div
                    className={`w-7 h-7 rounded-full ${principle.tagBg} flex items-center justify-center ${principle.tagText} font-code text-xs font-bold`}
                  >
                    {principle.number}
                  </div>
                  <h3 className="font-display text-lg text-[#1c1b1a] pt-1 font-medium">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#534340] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
