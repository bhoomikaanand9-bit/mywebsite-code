import { useState } from 'react';
import { Code, BarChart2, Sigma, Info } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
    level?: string;
    tag: string;
  } | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-5 h-5 text-[#8d483f]" />;
      case 'analytics':
        return <BarChart2 className="w-5 h-5 text-[#56624f]" />;
      case 'functions':
        return <Sigma className="w-5 h-5 text-[#7c514b]" />;
      default:
        return <Code className="w-5 h-5 text-[#8d483f]" />;
    }
  };

  return (
    <section id="skills" className="w-full px-5 sm:px-8 lg:px-12 max-w-[1280px] mx-auto py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <div className="flex flex-col mb-12">
        <span className="font-code text-xs text-[#8d483f] uppercase tracking-wider font-semibold mb-2">
          02 / Capabilities
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display text-3xl sm:text-4xl text-[#1c1b1a] tracking-tight">
            Skills & Foundations
          </h2>
          <p className="text-xs sm:text-sm text-[#534340] max-w-md leading-relaxed font-normal">
            A focused overview of core programming languages, analytical toolsets, and mathematical domains. Strictly grounded without arbitrary metric bars.
          </p>
        </div>
      </div>

      {/* 3 Foundation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="bg-[#f7f3ef] rounded-2xl p-6 lg:p-7 border border-[#e6e2de] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-code text-xs font-semibold tracking-wider"
                  style={{ color: cat.accentColor }}
                >
                  {cat.cardNumber}
                </span>
                <div className="p-1.5 rounded-lg bg-[#fdf8f5] shadow-xs">
                  {getIcon(cat.iconName)}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl sm:text-2xl text-[#1c1b1a] mb-2 font-medium">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#534340] mb-6 leading-relaxed">
                {cat.description}
              </p>
            </div>

            {/* Skills List */}
            <div className="space-y-2.5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  onClick={() =>
                    setSelectedSkill({
                      name: skill.name,
                      category: cat.title,
                      level: skill.level,
                      tag: skill.tag,
                    })
                  }
                  className="flex items-center justify-between p-3 rounded-xl bg-[#fdf8f5] border border-[#e6e2de]/80 hover:border-[#8d483f]/40 hover:bg-[#fffdfb] transition-all cursor-pointer group"
                >
                  <span className="text-sm font-medium text-[#1c1b1a] group-hover:text-[#8d483f] transition-colors">
                    {skill.name}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                      cat.id === 'datascience'
                        ? 'bg-[#d9e7ce] text-[#5b6854]'
                        : 'bg-[#f1ede9] text-[#534340] group-hover:bg-[#e6e2de]'
                    }`}
                  >
                    {skill.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Skill Detail Popover / Callout if clicked */}
      {selectedSkill && (
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#f1ede9] border border-[#e6e2de] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#fdf8f5] text-[#8d483f]">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-[#1c1b1a]">
                  {selectedSkill.name}
                </span>
                <span className="text-xs text-[#867370]">in {selectedSkill.category}</span>
                <span className="px-2 py-0.5 rounded-full bg-[#fdf8f5] text-[#534340] text-[10px] font-medium">
                  {selectedSkill.tag}
                </span>
              </div>
              <p className="text-xs text-[#534340] mt-0.5">
                Focus: {selectedSkill.level || 'Foundational coursework & applied implementations.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-xs font-medium text-[#8d483f] hover:underline self-end sm:self-auto"
          >
            Dismiss
          </button>
        </div>
      )}
    </section>
  );
};
