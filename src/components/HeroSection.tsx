import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>('theta');
  const [lambdaVal, setLambdaVal] = useState<number>(0.984);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className="w-full px-5 sm:px-8 lg:px-12 max-w-[1280px] mx-auto py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1ede9] text-[#534340] shadow-sm border border-[#e6e2de]">
            <span className="w-2 h-2 rounded-full bg-[#8d483f] animate-pulse"></span>
            <span className="text-[12px] sm:text-[13px] font-medium tracking-wide">
              {PERSONAL_INFO.role}
            </span>
          </div>

          {/* Editorial Display Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-[#1c1b1a]">
            {PERSONAL_INFO.headline.line1}
            <br />
            <span className="italic font-normal text-[#8d483f]">
              {PERSONAL_INFO.headline.line2}
            </span>
            <br />
            {PERSONAL_INFO.headline.line3}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#534340] max-w-xl leading-relaxed font-normal">
            {PERSONAL_INFO.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              id="cta-view-projects"
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#8d483f] text-white text-[13px] font-medium hover:bg-[#aa6055] transition-all shadow-sm hover:shadow active:scale-[0.99] gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              id="cta-lets-connect"
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f1ede9] text-[#1c1b1a] text-[13px] font-medium hover:bg-[#ece7e4] transition-all shadow-sm active:scale-[0.99]"
            >
              Let's Connect
            </a>
          </div>

          {/* Metric / Context Strip */}
          <div className="pt-6 flex items-center gap-6 sm:gap-10 text-[#534340] border-t border-[#e6e2de]/70 w-full max-w-lg">
            <div className="flex flex-col">
              <span className="font-display text-2xl text-[#1c1b1a] font-normal">
                {PERSONAL_INFO.cohortYear}
              </span>
              <span className="text-[11px] text-[#534340] uppercase tracking-wider font-medium">
                Cohort · REVA
              </span>
            </div>
            <div className="w-px h-8 bg-[#e6e2de]"></div>
            <div className="flex flex-col">
              <span className="font-display text-2xl text-[#1c1b1a] font-normal">Core</span>
              <span className="text-[11px] text-[#534340] uppercase tracking-wider font-medium">
                {PERSONAL_INFO.coreSkills}
              </span>
            </div>
            <div className="w-px h-8 bg-[#e6e2de]"></div>
            <div className="flex flex-col">
              <span className="font-display text-2xl text-[#1c1b1a] font-normal">Cross-Field</span>
              <span className="text-[11px] text-[#534340] uppercase tracking-wider font-medium">
                {PERSONAL_INFO.crossField}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Editorial Generative / Algorithmic Graphic Exhibit (5 Cols) */}
        <div className="lg:col-span-5 w-full">
          <div
            className="relative bg-[#f7f3ef] rounded-2xl p-6 shadow-sm border border-[#e6e2de] overflow-hidden flex flex-col justify-between aspect-square select-none group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Technical Monogram Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#e6e2de]/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#56624f]"></span>
                <span className="font-code text-xs text-[#534340] font-medium tracking-tight">
                  EXHIBIT // 001.GRAPH
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-code text-xs text-[#867370] tracking-wider">
                <span>REVA · CS-AI</span>
              </div>
            </div>

            {/* Generative Algorithmic Coordinates SVG */}
            <div className="relative w-full h-full my-auto flex items-center justify-center py-2">
              <svg
                className="w-full h-full max-h-[300px]"
                viewBox="0 0 340 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Grid */}
                <defs>
                  <pattern
                    id="editorialGridHero"
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 30 0 L 0 0 0 30"
                      fill="none"
                      stroke="#e6e2de"
                      strokeWidth="0.75"
                    />
                  </pattern>
                </defs>
                <rect width="340" height="300" fill="url(#editorialGridHero)" />

                {/* Cartesian Axis Lines */}
                <line
                  x1="20"
                  y1="260"
                  x2="320"
                  y2="260"
                  stroke="#d9c1be"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <line
                  x1="40"
                  y1="30"
                  x2="40"
                  y2="270"
                  stroke="#d9c1be"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />

                {/* Algorithmic Primary Terracotta Curve */}
                <path
                  d="M 40 230 C 90 220, 120 160, 160 140 C 200 120, 240 190, 300 70"
                  fill="none"
                  stroke="#8d483f"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Secondary Sage Dotted Curve */}
                <path
                  d="M 40 250 C 110 240, 150 200, 200 170 C 250 140, 270 110, 310 90"
                  fill="none"
                  stroke="#56624f"
                  strokeWidth="1.75"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                />

                {/* Interactive Data Node 1: θ: [160, 140] */}
                <g
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => setActiveNode('theta')}
                >
                  <circle
                    cx="160"
                    cy="140"
                    r={activeNode === 'theta' ? '7' : '5'}
                    fill="#fdf8f5"
                    stroke="#8d483f"
                    strokeWidth="2.5"
                  />
                  {activeNode === 'theta' && (
                    <circle
                      cx="160"
                      cy="140"
                      r="12"
                      fill="none"
                      stroke="#8d483f"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      className="animate-spin"
                    />
                  )}
                </g>

                {/* Interactive Data Node 2: λ_opt */}
                <g
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => {
                    setActiveNode('lambda');
                    setLambdaVal((prev) => (prev >= 0.999 ? 0.984 : +(prev + 0.003).toFixed(3)));
                  }}
                >
                  <circle
                    cx="200"
                    cy="170"
                    r={activeNode === 'lambda' ? '6' : '4.5'}
                    fill="#fdf8f5"
                    stroke="#56624f"
                    strokeWidth="2"
                  />
                </g>

                {/* Node 3: Convergence Point */}
                <g
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => setActiveNode('convergence')}
                >
                  <circle
                    cx="300"
                    cy="70"
                    r={activeNode === 'convergence' ? '8' : '6'}
                    fill="#8d483f"
                  />
                  <circle
                    cx="300"
                    cy="70"
                    r="10"
                    fill="none"
                    stroke="#8d483f"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                </g>

                {/* Coordinate Callouts */}
                <g className="font-code text-[10px]">
                  <text
                    x="172"
                    y="136"
                    fill="#8d483f"
                    fontWeight={activeNode === 'theta' ? '600' : '400'}
                  >
                    θ: [160, 140]
                  </text>
                  <text
                    x="212"
                    y="180"
                    fill="#56624f"
                    fontWeight={activeNode === 'lambda' ? '600' : '400'}
                  >
                    λ_opt: {lambdaVal}
                  </text>
                  <text
                    x="238"
                    y="65"
                    fill="#1c1b1a"
                    fontWeight={activeNode === 'convergence' ? '600' : '500'}
                  >
                    Convergence
                  </text>
                </g>

                {/* Design Matrix Overlay Card */}
                <g className="transition-all">
                  <rect
                    x="180"
                    y="195"
                    width="132"
                    height="62"
                    rx="8"
                    fill="#fdf8f5"
                    stroke="#e6e2de"
                    strokeWidth="1"
                    className="shadow-sm"
                  />
                  <text x="192" y="215" fill="#534340" className="font-code text-[10px] tracking-wider">
                    SYSTEM // HEURISTIC
                  </text>
                  <line
                    x1="192"
                    y1="223"
                    x2="300"
                    y2="223"
                    stroke="#e6e2de"
                    strokeWidth="1"
                  />
                  <text
                    x="192"
                    y="241"
                    fill="#8d483f"
                    className="font-code text-[11px] font-semibold"
                  >
                    f(x) → 2D Array
                  </text>
                </g>
              </svg>
            </div>

            {/* Bottom Telemetry Card Footnote */}
            <div className="pt-2 border-t border-[#e6e2de]/60 flex items-center justify-between font-code text-[11px] text-[#534340]">
              <span className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8d483f]"></span>
                MODEL: EMPIRICAL
              </span>
              <span className="text-[#867370]">DATA RIGOR + DESIGN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
