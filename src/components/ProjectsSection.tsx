import { useState } from 'react';
import { ArrowRight, Terminal, Sparkles, RefreshCw } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { TerminalModal } from './TerminalModal';

export const ProjectsSection = () => {
  const [project1ModalOpen, setProject1ModalOpen] = useState<boolean>(false);
  const [project2ModalOpen, setProject2ModalOpen] = useState<boolean>(false);

  // Interactive bays state for Project 01: true = occupied, false = vacant
  const [bays, setBays] = useState<{ [key: string]: boolean }>({
    'A-01': true,
    'A-02': false,
    'A-03': false,
    'A-04': true,
  });

  const toggleBay = (id: string) => {
    setBays((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const simulateRandomEvent = () => {
    setBays({
      'A-01': Math.random() > 0.5,
      'A-02': Math.random() > 0.5,
      'A-03': Math.random() > 0.5,
      'A-04': Math.random() > 0.5,
    });
  };

  const occupiedCount = Object.values(bays).filter(Boolean).length;

  return (
    <section id="projects" className="w-full bg-[#f7f3ef] py-16 sm:py-20 lg:py-24 border-y border-[#e6e2de]/60">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="font-code text-xs text-[#8d483f] uppercase tracking-wider font-semibold mb-2">
            03 / Work
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <h2 className="font-display text-3xl sm:text-4xl text-[#1c1b1a] tracking-tight">
              Selected Projects
            </h2>
            <span className="font-code text-xs text-[#534340] tracking-wider">
              ACADEMIC IMPLEMENTATIONS & LOGICAL MODELS
            </span>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* PROJECT 01 (7 Columns) */}
          <div className="lg:col-span-7 bg-[#fdf8f5] rounded-2xl p-6 sm:p-8 border border-[#e6e2de] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Card Top */}
              <div className="flex items-center justify-between pb-4">
                <span className="font-display text-2xl sm:text-3xl text-[#8d483f] font-normal">
                  01
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#f1ede9] text-[#534340] text-[11px] font-medium">
                    Hardware / Logic Exploration
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#d9e7ce] text-[#5b6854] text-[11px] font-medium">
                    Concept & Architecture
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl text-[#1c1b1a] group-hover:text-[#8d483f] transition-colors tracking-tight">
                SMART PARKING SYSTEM
              </h3>

              {/* Description */}
              <p className="text-base text-[#534340] mt-3 leading-relaxed font-normal">
                A project exploring smart parking system concepts and practical problem solving.
              </p>

              {/* Schematic Diagram Interactive Frame */}
              <div className="my-6 p-4 sm:p-5 rounded-xl bg-[#f7f3ef] border border-[#e6e2de] flex flex-col gap-3">
                <div className="flex items-center justify-between text-[#534340] font-code text-xs">
                  <span className="font-medium tracking-tight">SYSTEM ARCHITECTURE TOPOLOGY</span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#56624f]"></span>
                      {4 - occupiedCount} Vacant
                    </span>
                    <button
                      onClick={simulateRandomEvent}
                      title="Simulate Random Sensor Trigger"
                      className="p-1 rounded-md hover:bg-[#e6e2de] text-[#534340] transition-colors"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </button>
                    <span className="text-[#8d483f] font-semibold">STATE // ACTIVE</span>
                  </div>
                </div>

                {/* SVG Visualization of Sensor Array / Grid Topology */}
                <svg
                  className="w-full h-32 select-none"
                  viewBox="0 0 500 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Bay 1 */}
                  <g
                    className="cursor-pointer transition-all hover:opacity-85"
                    onClick={() => toggleBay('A-01')}
                  >
                    <rect
                      x="20"
                      y="20"
                      width="80"
                      height="70"
                      rx="6"
                      fill="#fdf8f5"
                      stroke={bays['A-01'] ? '#8d483f' : '#56624f'}
                      strokeWidth="1.5"
                      strokeDasharray={bays['A-01'] ? '3 3' : undefined}
                    />
                    <text
                      x="35"
                      y="56"
                      fill={bays['A-01'] ? '#8d483f' : '#56624f'}
                      className="font-code text-[11px] font-medium"
                    >
                      BAY A-01
                    </text>
                    <circle
                      cx="60"
                      cy="74"
                      r="4.5"
                      fill={bays['A-01'] ? '#8d483f' : '#56624f'}
                    />
                    <text
                      x="38"
                      y="85"
                      fill="#867370"
                      className="font-code text-[8px]"
                    >
                      {bays['A-01'] ? 'OCCUPIED' : 'AVAILABLE'}
                    </text>
                  </g>

                  {/* Bay 2 */}
                  <g
                    className="cursor-pointer transition-all hover:opacity-85"
                    onClick={() => toggleBay('A-02')}
                  >
                    <rect
                      x="140"
                      y="20"
                      width="80"
                      height="70"
                      rx="6"
                      fill="#fdf8f5"
                      stroke={bays['A-02'] ? '#8d483f' : '#56624f'}
                      strokeWidth="1.5"
                      strokeDasharray={bays['A-02'] ? '3 3' : undefined}
                    />
                    <text
                      x="155"
                      y="56"
                      fill={bays['A-02'] ? '#8d483f' : '#56624f'}
                      className="font-code text-[11px] font-medium"
                    >
                      BAY A-02
                    </text>
                    <circle
                      cx="180"
                      cy="74"
                      r="4.5"
                      fill={bays['A-02'] ? '#8d483f' : '#56624f'}
                    />
                    <text
                      x="158"
                      y="85"
                      fill="#867370"
                      className="font-code text-[8px]"
                    >
                      {bays['A-02'] ? 'OCCUPIED' : 'AVAILABLE'}
                    </text>
                  </g>

                  {/* Bay 3 */}
                  <g
                    className="cursor-pointer transition-all hover:opacity-85"
                    onClick={() => toggleBay('A-03')}
                  >
                    <rect
                      x="260"
                      y="20"
                      width="80"
                      height="70"
                      rx="6"
                      fill="#fdf8f5"
                      stroke={bays['A-03'] ? '#8d483f' : '#56624f'}
                      strokeWidth="1.5"
                      strokeDasharray={bays['A-03'] ? '3 3' : undefined}
                    />
                    <text
                      x="275"
                      y="56"
                      fill={bays['A-03'] ? '#8d483f' : '#56624f'}
                      className="font-code text-[11px] font-medium"
                    >
                      BAY A-03
                    </text>
                    <circle
                      cx="300"
                      cy="74"
                      r="4.5"
                      fill={bays['A-03'] ? '#8d483f' : '#56624f'}
                    />
                    <text
                      x="278"
                      y="85"
                      fill="#867370"
                      className="font-code text-[8px]"
                    >
                      {bays['A-03'] ? 'OCCUPIED' : 'AVAILABLE'}
                    </text>
                  </g>

                  {/* Bay 4 */}
                  <g
                    className="cursor-pointer transition-all hover:opacity-85"
                    onClick={() => toggleBay('A-04')}
                  >
                    <rect
                      x="380"
                      y="20"
                      width="80"
                      height="70"
                      rx="6"
                      fill="#fdf8f5"
                      stroke={bays['A-04'] ? '#8d483f' : '#56624f'}
                      strokeWidth="1.5"
                      strokeDasharray={bays['A-04'] ? '3 3' : undefined}
                    />
                    <text
                      x="395"
                      y="56"
                      fill={bays['A-04'] ? '#8d483f' : '#56624f'}
                      className="font-code text-[11px] font-medium"
                    >
                      BAY A-04
                    </text>
                    <circle
                      cx="420"
                      cy="74"
                      r="4.5"
                      fill={bays['A-04'] ? '#8d483f' : '#56624f'}
                    />
                    <text
                      x="398"
                      y="85"
                      fill="#867370"
                      className="font-code text-[8px]"
                    >
                      {bays['A-04'] ? 'OCCUPIED' : 'AVAILABLE'}
                    </text>
                  </g>

                  {/* Controller Bus line */}
                  <path
                    d="M 60 95 L 60 110 L 420 110 L 420 95"
                    stroke="#867370"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <circle cx="240" cy="110" r="5" fill="#8d483f" />
                  <text
                    x="252"
                    y="114"
                    fill="#534340"
                    className="font-code text-[9px] font-medium"
                  >
                    CENTRAL BUS CONTROLLER (Click bays to toggle)
                  </text>
                </svg>
              </div>
            </div>

            {/* Bottom Action Trigger */}
            <div className="pt-4 border-t border-[#e6e2de] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-code text-xs text-[#534340]">
                Status: Exploratory Phase
              </span>
              <button
                id="btn-architectural-overview"
                onClick={() => setProject1ModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-[#8d483f] text-xs font-semibold hover:underline underline-offset-4 cursor-pointer"
              >
                <span>View Architectural Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* PROJECT 02 (5 Columns) */}
          <div className="lg:col-span-5 bg-[#fdf8f5] rounded-2xl p-6 sm:p-8 border border-[#e6e2de] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Card Top */}
              <div className="flex items-center justify-between pb-4">
                <span className="font-display text-2xl sm:text-3xl text-[#56624f] font-normal">
                  02
                </span>
                <span className="px-3 py-1 rounded-full bg-[#f1ede9] text-[#534340] text-[11px] font-medium">
                  Procedural C System
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl text-[#1c1b1a] group-hover:text-[#8d483f] transition-colors tracking-tight">
                MENU-DRIVEN 2D GRAPHICS EDITOR
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#534340] mt-3 leading-relaxed font-normal">
                Menu driven 2D-Graphics Editor in C using character arrays.
              </p>

              {/* Technical Console Card */}
              <div
                onClick={() => setProject2ModalOpen(true)}
                className="my-5 p-4 rounded-xl bg-[#31302e] text-[#f4f0ec] font-mono text-xs leading-relaxed shadow-sm border border-[#534340] cursor-pointer hover:border-[#8d483f]/60 transition-colors"
                title="Click to launch interactive CLI simulation"
              >
                <div className="flex items-center justify-between pb-2 text-[#ece7e4] border-b border-[#534340]/40 text-[11px]">
                  <span>canvas_buffer.c</span>
                  <span className="text-[#ffb4a9] flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> ASCII RENDER
                  </span>
                </div>
                <div className="pt-3 font-mono text-[#d9e7ce] space-y-1 text-[11px]">
                  <p>char canvas[ROWS][COLS];</p>
                  <p className="text-[#ddd9d6]/70">// Raster line routine</p>
                  <p>void draw_line(int x1, int y1, char ch);</p>
                  <p className="text-[#ffdad5]">== MENU SELECTION: [1] CIRCLE [2] LINE ==</p>
                  <p className="text-[#ddd9d6]/50">&gt; Memory footprint: O(R*C) buffer</p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['C', 'Character Arrays', 'CLI Graphics', 'Procedural Logic'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#f1ede9] text-[11px] font-medium text-[#1c1b1a] border border-[#e6e2de]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-[#e6e2de] flex items-center justify-between">
              <span className="font-code text-xs text-[#534340]">Buffer: Low-Level CLI</span>
              <button
                id="btn-open-terminal-sim"
                onClick={() => setProject2ModalOpen(true)}
                className="inline-flex items-center gap-1 text-xs text-[#8d483f] font-semibold hover:underline"
              >
                <span>Run Interactive Demo</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modals */}
      <ProjectModal
        isOpen={project1ModalOpen}
        onClose={() => setProject1ModalOpen(false)}
      />
      <TerminalModal
        isOpen={project2ModalOpen}
        onClose={() => setProject2ModalOpen(false)}
      />
    </section>
  );
};
