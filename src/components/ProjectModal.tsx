import { X, CheckCircle2, Cpu, Activity, Layers, Radio } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c1b1a]/50 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#fdf8f5] border border-[#e6e2de] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e6e2de]">
          <div className="flex items-center gap-2">
            <span className="font-code text-xs text-[#8d483f] font-semibold tracking-wider">
              PROJECT BRIEF // 01
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#d9e7ce] text-[#5b6854] text-[10px] font-semibold">
              CONCEPT & ARCHITECTURE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#f1ede9] text-[#534340] hover:text-[#1c1b1a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="pt-5 space-y-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#1c1b1a] tracking-tight">
              Smart Parking System
            </h3>
            <p className="text-sm text-[#534340] mt-2 leading-relaxed">
              A project exploring smart parking system concepts and practical problem solving.
            </p>
          </div>

          {/* Conceptual Dimensions */}
          <div className="bg-[#f7f3ef] p-5 rounded-xl border border-[#e6e2de] space-y-3">
            <div className="font-semibold text-xs text-[#8d483f] uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Conceptual Dimensions & Logic Flow
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#1c1b1a]">
              <li className="flex items-start gap-2">
                <span className="text-[#8d483f] font-bold">•</span>
                <span>
                  <strong>Sensor & Space Telemetry:</strong> Modeling discrete ultrasonic and infrared proximity triggers mapped across an indexed 2D bay coordinate array.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8d483f] font-bold">•</span>
                <span>
                  <strong>Logic Routing & Optimal Allocation:</strong> Algorithmic routing allocating incoming vehicles to the nearest vacant bay ($O(1)$ lookups with indexed bitmaps).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8d483f] font-bold">•</span>
                <span>
                  <strong>Cross-Disciplinary Integration:</strong> Blending low-level hardware communication logic with human-centric occupancy displays and clear visual hierarchy.
                </span>
              </li>
            </ul>
          </div>

          {/* Architecture Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#f1ede9] border border-[#e6e2de] flex items-start gap-2.5">
              <Cpu className="w-4 h-4 text-[#8d483f] mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-[#1c1b1a] block">Central Controller</span>
                <span className="text-[11px] text-[#534340]">Monitors state bus, handles race conditions</span>
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f1ede9] border border-[#e6e2de] flex items-start gap-2.5">
              <Radio className="w-4 h-4 text-[#56624f] mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-[#1c1b1a] block">Sensor Node Bus</span>
                <span className="text-[11px] text-[#534340]">Low latency state broadcast via central bus</span>
              </div>
            </div>
          </div>

          {/* Academic Note */}
          <div className="flex items-center justify-between pt-2 border-t border-[#e6e2de] text-xs text-[#534340]">
            <span className="flex items-center gap-1 font-code">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#56624f]" /> Status: Architectural Design Stage
            </span>
            <span className="text-[#867370]">REVA University AI & DS</span>
          </div>

          {/* Footer Action */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#f1ede9] text-[#1c1b1a] text-xs font-semibold hover:bg-[#e6e2de] transition-colors"
            >
              Close Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
