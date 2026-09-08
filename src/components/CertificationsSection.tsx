import { useState } from 'react';
import { Terminal, Lightbulb, CheckCircle2, Award, X, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const CertificationsSection = () => {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  const getIcon = (issuer: string) => {
    if (issuer.includes('IBM')) {
      return <Terminal className="w-5 h-5 text-[#8d483f]" />;
    }
    return <Lightbulb className="w-5 h-5 text-[#56624f]" />;
  };

  return (
    <section id="certifications" className="w-full bg-[#f7f3ef] py-16 sm:py-20 lg:py-24 border-y border-[#e6e2de]/60">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="font-code text-xs text-[#8d483f] uppercase tracking-wider font-semibold mb-2">
            05 / Accreditations
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <h2 className="font-display text-3xl sm:text-4xl text-[#1c1b1a] tracking-tight">
              Certifications
            </h2>
            <span className="font-code text-xs text-[#534340] tracking-wider">
              VERIFIED KNOWLEDGE & CAPSTONE PROGRAMS
            </span>
          </div>
        </div>

        {/* 2 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CERTIFICATIONS.map((cert) => {
            const isIBM = cert.issuer.includes('IBM');
            return (
              <div
                key={cert.id}
                onClick={() => setActiveCert(cert)}
                className="bg-[#fdf8f5] rounded-2xl p-6 sm:p-8 border border-[#e6e2de] shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group hover:border-[#8d483f]/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f1ede9] border border-[#e6e2de] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(cert.issuer)}
                    </div>
                    <span
                      className={`font-code text-xs font-semibold tracking-wider ${
                        isIBM ? 'text-[#8d483f]' : 'text-[#56624f]'
                      }`}
                    >
                      ISSUER: {cert.issuer}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#534340] uppercase tracking-wider block">
                    {cert.type}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#1c1b1a] mt-1 group-hover:text-[#8d483f] transition-colors font-normal">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[#534340] mt-3 leading-relaxed font-normal">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e6e2de] flex flex-wrap items-center justify-between gap-2">
                  <span className="font-code text-xs text-[#534340]">
                    Domain: {cert.domain.split(' ')[0]}
                  </span>
                  <span className="text-xs text-[#56624f] flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#56624f]" /> {cert.badgeText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certification Details Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c1b1a]/50 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative bg-[#fdf8f5] border border-[#e6e2de] rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#e6e2de]">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#8d483f]" />
                <span className="font-code text-xs font-semibold text-[#8d483f]">
                  CREDENTIAL VERIFICATION
                </span>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1.5 rounded-full hover:bg-[#f1ede9] text-[#534340]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-4 space-y-4">
              <span className="text-xs font-semibold text-[#867370] uppercase">
                {activeCert.issuer} · {activeCert.type}
              </span>
              <h3 className="font-display text-2xl text-[#1c1b1a]">
                {activeCert.title}
              </h3>
              <p className="text-sm text-[#534340] leading-relaxed">
                {activeCert.description}
              </p>

              <div className="p-4 rounded-xl bg-[#f7f3ef] border border-[#e6e2de]">
                <span className="text-xs font-semibold text-[#1c1b1a] block mb-2">
                  Competencies Verified:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#fdf8f5] text-xs text-[#534340] border border-[#e6e2de]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#e6e2de] text-xs">
                <span className="text-[#56624f] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Authenticated Academic Credential
                </span>
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 rounded-lg bg-[#f1ede9] text-[#1c1b1a] hover:bg-[#e6e2de] font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
