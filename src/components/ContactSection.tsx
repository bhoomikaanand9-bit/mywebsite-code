import { useState, useEffect, MouseEvent } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Handshake, Github, Linkedin, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="w-full px-5 sm:px-8 lg:px-12 max-w-[1280px] mx-auto py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Headline & Dialogue Column (6 cols) */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <span className="font-code text-xs text-[#8d483f] uppercase tracking-wider font-semibold">
            06 / Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1c1b1a] tracking-tight">
            Let's connect.
          </h2>
          <p className="text-base sm:text-lg text-[#534340] max-w-lg leading-relaxed font-normal">
            Always open to learning, building, and connecting with people who share an interest in technology and design.
          </p>

          {/* Academic & Mentorship Collaboration Note */}
          <div className="p-6 rounded-2xl bg-[#f7f3ef] border border-[#e6e2de] shadow-sm">
            <div className="flex items-center gap-2.5 text-[#8d483f] font-display text-lg font-medium">
              <Handshake className="w-5 h-5 text-[#8d483f]" />
              <span>Open to Student Dialogue & Mentorship</span>
            </div>
            <p className="text-xs sm:text-sm text-[#534340] mt-2.5 leading-relaxed font-normal">
              Whether you are discussing algorithmic data problems, collaborative open-source student initiatives, or UI/UX product frameworks, feel free to reach out directly.
            </p>
          </div>
        </div>

        {/* Contact Directory Cards (6 cols) */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          {/* Email Card */}
          <a
            id="contact-email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group p-5 sm:p-6 rounded-2xl bg-[#f7f3ef] border border-[#e6e2de] shadow-sm hover:bg-[#f1ede9] hover:border-[#8d483f]/40 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fdf8f5] border border-[#e6e2de] flex items-center justify-center text-[#8d483f] group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#534340] uppercase tracking-wider">
                  Direct Email
                </span>
                <span className="text-base sm:text-lg font-medium text-[#1c1b1a] group-hover:text-[#8d483f] transition-colors break-all">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={copyEmail}
                title="Copy email address"
                className="p-2 rounded-lg hover:bg-[#e6e2de] text-[#534340] hover:text-[#1c1b1a] transition-colors"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#56624f]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <ArrowUpRight className="w-5 h-5 text-[#867370] group-hover:text-[#8d483f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            id="contact-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group p-5 sm:p-6 rounded-2xl bg-[#f7f3ef] border border-[#e6e2de] shadow-sm hover:bg-[#f1ede9] hover:border-[#56624f]/40 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fdf8f5] border border-[#e6e2de] flex items-center justify-center text-[#56624f] group-hover:scale-105 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#534340] uppercase tracking-wider">
                  Professional Profile
                </span>
                <span className="text-base sm:text-lg font-medium text-[#1c1b1a] group-hover:text-[#8d483f] transition-colors">
                  LinkedIn / {PERSONAL_INFO.handle}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#867370] group-hover:text-[#8d483f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* GitHub Card */}
          <a
            id="contact-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="group p-5 sm:p-6 rounded-2xl bg-[#f7f3ef] border border-[#e6e2de] shadow-sm hover:bg-[#f1ede9] hover:border-[#1c1b1a]/40 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fdf8f5] border border-[#e6e2de] flex items-center justify-center text-[#1c1b1a] group-hover:scale-105 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#534340] uppercase tracking-wider">
                  Code Repositories
                </span>
                <span className="text-base sm:text-lg font-medium text-[#1c1b1a] group-hover:text-[#8d483f] transition-colors">
                  github.com/bhoomikaanand9-bit
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#867370] group-hover:text-[#8d483f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Location & Timezone Stamp */}
          <div className="px-6 py-4 rounded-xl bg-[#fdf8f5] border border-[#e6e2de] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-code text-xs text-[#534340]">
            <span className="font-medium tracking-tight">BASE: {PERSONAL_INFO.location}</span>
            <span className="flex items-center gap-1.5 text-[#867370]">
              <Clock className="w-3.5 h-3.5 text-[#8d483f]" />
              <span>TIMEZONE: {PERSONAL_INFO.timezone}</span>
              {istTime && <span className="font-semibold text-[#1c1b1a] ml-1">({istTime})</span>}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
