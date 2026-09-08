import { useState } from 'react';
import { X, Play, RotateCcw, Terminal, FileCode, Check } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal = ({ isOpen, onClose }: TerminalModalProps) => {
  const [activeTab, setActiveTab] = useState<'simulation' | 'source'>('simulation');
  const [selectedShape, setSelectedShape] = useState<'circle' | 'line' | 'rect' | 'none'>('circle');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  // Simple 14x28 character canvas generator
  const renderCanvas = () => {
    const rows = 12;
    const cols = 28;
    const grid: string[][] = Array.from({ length: rows }, () => Array(cols).fill('.'));

    if (selectedShape === 'circle') {
      const cy = 5;
      const cx = 13;
      const r = 4;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const dx = (x - cx) * 0.6; // adjust aspect ratio
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - r) < 0.6) {
            grid[y][x] = '#';
          }
        }
      }
    } else if (selectedShape === 'line') {
      for (let i = 0; i < 10; i++) {
        if (i + 1 < rows && i * 2 + 4 < cols) {
          grid[i + 1][i * 2 + 4] = '*';
        }
      }
    } else if (selectedShape === 'rect') {
      for (let y = 2; y <= 9; y++) {
        for (let x = 5; x <= 22; x++) {
          if (y === 2 || y === 9 || x === 5 || x === 22) {
            grid[y][x] = '+';
          }
        }
      }
    }

    return grid.map((row) => row.join(' ')).join('\n');
  };

  const sampleCCode = `/*
 * 2D Graphics Editor using 2D Character Array Buffer
 * Course: Procedural Programming in C / REVA University
 * Author: Bhoomika Anand
 */

#include <stdio.h>
#include <math.h>

#define ROWS 16
#define COLS 32

char canvas[ROWS][COLS];

void clear_canvas() {
    for (int r = 0; r < ROWS; r++) {
        for (int c = 0; c < COLS; c++) {
            canvas[r][c] = ' ';
        }
    }
}

void print_canvas() {
    for (int c = 0; c < COLS + 2; c++) printf("-");
    printf("\\n");
    for (int r = 0; r < ROWS; r++) {
        printf("|");
        for (int c = 0; c < COLS; c++) {
            putchar(canvas[r][c]);
        }
        printf("|\\n");
    }
    for (int c = 0; c < COLS + 2; c++) printf("-");
    printf("\\n");
}

void draw_line(int x1, int y1, int x2, int y2, char ch) {
    int dx = abs(x2 - x1), sx = x1 < x2 ? 1 : -1;
    int dy = -abs(y2 - y1), sy = y1 < y2 ? 1 : -1;
    int err = dx + dy, e2;

    while (1) {
        if (y1 >= 0 && y1 < ROWS && x1 >= 0 && x1 < COLS) {
            canvas[y1][x1] = ch;
        }
        if (x1 == x2 && y1 == y2) break;
        e2 = 2 * err;
        if (e2 >= dy) { err += dy; x1 += sx; }
        if (e2 <= dx) { err += dx; y1 += sy; }
    }
}

int main() {
    int choice;
    clear_canvas();
    printf("=== MENU-DRIVEN 2D GRAPHICS EDITOR ===\\n");
    printf("[1] Draw Circle  [2] Draw Line  [3] Clear  [4] Exit\\n");
    // Interactive loop execution...
    return 0;
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c1b1a]/50 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#fdf8f5] border border-[#e6e2de] rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e6e2de]">
          <div className="flex items-center gap-2">
            <span className="font-code text-xs text-[#56624f] font-semibold tracking-wider">
              PROJECT // 02
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#f1ede9] text-[#534340] text-[10px] font-semibold">
              PROCEDURAL C SYSTEM
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#f1ede9] text-[#534340] hover:text-[#1c1b1a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 pt-4">
          <button
            onClick={() => setActiveTab('simulation')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'simulation'
                ? 'bg-[#8d483f] text-white'
                : 'bg-[#f1ede9] text-[#534340] hover:bg-[#e6e2de]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" /> Interactive CLI Simulation
          </button>
          <button
            onClick={() => setActiveTab('source')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'source'
                ? 'bg-[#8d483f] text-white'
                : 'bg-[#f1ede9] text-[#534340] hover:bg-[#e6e2de]'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" /> Source Code (C)
          </button>
        </div>

        {/* Tab Content */}
        <div className="pt-4">
          {activeTab === 'simulation' ? (
            <div className="space-y-4">
              <p className="text-xs text-[#534340]">
                Choose an operation from the CLI menu to rasterize into the 2D character buffer:
              </p>

              {/* Controls */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedShape('circle')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedShape === 'circle'
                      ? 'bg-[#31302e] text-[#f1b9b1] ring-1 ring-[#8d483f]'
                      : 'bg-[#f1ede9] text-[#1c1b1a] hover:bg-[#e6e2de]'
                  }`}
                >
                  [1] Circle (#)
                </button>
                <button
                  onClick={() => setSelectedShape('line')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedShape === 'line'
                      ? 'bg-[#31302e] text-[#bdcbb3] ring-1 ring-[#56624f]'
                      : 'bg-[#f1ede9] text-[#1c1b1a] hover:bg-[#e6e2de]'
                  }`}
                >
                  [2] Line (*)
                </button>
                <button
                  onClick={() => setSelectedShape('rect')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedShape === 'rect'
                      ? 'bg-[#31302e] text-white ring-1 ring-[#867370]'
                      : 'bg-[#f1ede9] text-[#1c1b1a] hover:bg-[#e6e2de]'
                  }`}
                >
                  [3] Rectangle (+)
                </button>
                <button
                  onClick={() => setSelectedShape('none')}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#f1ede9] text-[#867370] hover:bg-[#e6e2de] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Clear Buffer
                </button>
              </div>

              {/* Terminal Frame */}
              <div className="rounded-xl bg-[#1c1b1a] text-[#f4f0ec] p-4 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-[#534340]/50 text-[11px] text-[#867370]">
                  <span>stdout // buffer_render()</span>
                  <span className="text-[#bdcbb3]">BUFFER: 12x28 char[][]</span>
                </div>
                <pre className="pt-3 leading-tight tracking-wider text-[#bdcbb3] overflow-x-auto select-none">
                  {renderCanvas()}
                </pre>
                <div className="pt-3 mt-2 border-t border-[#534340]/40 flex justify-between text-[10px] text-[#867370]">
                  <span>Memory complexity: O(R * C)</span>
                  <span>Direct character buffer output</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#534340] font-mono">canvas_buffer.c</span>
                <button
                  onClick={handleCopy}
                  className="text-xs text-[#8d483f] hover:underline flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#56624f]" /> Copied to clipboard
                    </>
                  ) : (
                    'Copy C Source'
                  )}
                </button>
              </div>
              <div className="rounded-xl bg-[#1c1b1a] text-[#f4f0ec] p-4 font-mono text-[11px] leading-relaxed max-h-72 overflow-y-auto shadow-inner">
                <pre>{sampleCCode}</pre>
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="flex justify-end pt-4 mt-2 border-t border-[#e6e2de]">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#f1ede9] text-[#1c1b1a] text-xs font-semibold hover:bg-[#e6e2de] transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
