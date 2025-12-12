import React, { useEffect, useState } from 'react';
import Button from './ui/Button';
import { ArrowUpRight, CheckCircle2, Globe } from 'lucide-react';

// --- Custom Schematic Icons ---

const IconSettlement = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-400">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <path d="M21 10L23 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M1 14L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconCustody = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-cyan-400">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

const Infrastructure: React.FC = () => {
  // Simulate live price movement
  const [price, setPrice] = useState(64230.50);
  const [graphPoints, setGraphPoints] = useState<number[]>([50, 60, 55, 70, 65, 80, 75, 90, 85, 95]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate price
      const change = (Math.random() - 0.45) * 50;
      setPrice(p => p + change);

      // Update graph
      setGraphPoints(prev => {
        const newPoint = prev[prev.length - 1] + (Math.random() - 0.45) * 20;
        const clamped = Math.max(10, Math.min(90, newPoint));
        return [...prev.slice(1), clamped];
      });

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate SVG path from points
  const pointsString = graphPoints.map((p, i) => `${i * 35 + 5},${100 - p}`).join(' L ');
  const areaPath = `${pointsString} L 320,100 L 5,100 Z`;

  return (
    <section className="py-32 px-6 bg-aura-black relative border-t border-white/5 overflow-hidden">
      
      {/* Background Decor - Deep Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-cyan-900/10 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-blue-900/5 to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        
        {/* Left Column: Text & Features */}
        <div className="flex flex-col gap-10">
          
          {/* Header Block */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm text-[10px] font-bold tracking-widest text-cyan-400 mb-6 uppercase">
                <Globe size={12} className="animate-pulse" />
                Global Liquidity Layer
            </div>
            
            <h2 className="text-4xl md:text-6xl font-sans font-semibold text-white leading-[1.1] mb-6">
              Liquidate & Exchange <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400">Instantly.</span>
            </h2>
            
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
              Direct market access with deep institutional liquidity. 
              Our engine intelligently routes through 40+ exchanges to guarantee zero slippage and T+0 settlement.
            </p>
          </div>
          
          {/* Advanced Feature Modules */}
          <div className="grid gap-4">
            
            {/* Module 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#08080A] border border-white/5 p-1 transition-all hover:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex items-center gap-6 p-5 rounded-xl bg-aura-black/50 backdrop-blur-sm">
                 <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                    <div className="w-6 h-6"><IconSettlement /></div>
                 </div>
                 <div>
                   <h4 className="text-white font-medium mb-1 tracking-tight flex items-center gap-2">
                      Real-time Settlement
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono">L2 ROLLUP</span>
                   </h4>
                   <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors">
                      Funds settle instantly. No T+2 delays.
                   </p>
                 </div>
              </div>
            </div>
            
            {/* Module 2 */}
             <div className="group relative overflow-hidden rounded-2xl bg-[#08080A] border border-white/5 p-1 transition-all hover:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex items-center gap-6 p-5 rounded-xl bg-aura-black/50 backdrop-blur-sm">
                 <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <div className="w-6 h-6"><IconCustody /></div>
                 </div>
                 <div>
                   <h4 className="text-white font-medium mb-1 tracking-tight flex items-center gap-2">
                      Universal Custody
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-mono">MPC VAULT</span>
                   </h4>
                   <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors">
                      Institutional-grade security for all digital assets.
                   </p>
                 </div>
              </div>
            </div>

          </div>

          <div className="flex items-center gap-4 mt-2">
            <Button variant="primary" className="!rounded-full !px-8">Initialize Vault</Button>
            <Button variant="ghost" className="!rounded-full group">
                Documentation 
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Column: High-Fidelity Interface Mockup */}
        <div className="relative">
          {/* Ambient Glows around the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-2xl opacity-40" />
          
          <div className="relative bg-[#050505] border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl overflow-hidden ring-1 ring-white/5">
             
             {/* Glossy Reflection overlay */}
             <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

             {/* Terminal Header */}
             <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                   <h3 className="text-lg font-medium text-white flex items-center gap-3">
                     BTC / USD 
                     <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-900 px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        +2.42%
                     </span>
                   </h3>
                   <div className="flex items-center gap-2 mt-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
                       <p className="text-[10px] text-gray-500 font-mono tracking-wider">LIVE FEED ACTIVE</p>
                   </div>
                </div>
                {/* Menu Dots */}
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-white/20"></div>
                    <div className="w-1 h-1 rounded-full bg-white/20"></div>
                    <div className="w-1 h-1 rounded-full bg-white/20"></div>
                </div>
             </div>

             {/* Live Chart Area */}
             <div className="h-40 w-full mb-8 relative overflow-hidden rounded-xl bg-[#0A0A0B] border border-white/5 shadow-inner">
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                <svg className="w-full h-full relative z-10" viewBox="0 0 320 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(6, 182, 212, 0.2)" />
                      <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
                    </linearGradient>
                  </defs>
                  <path d={`M ${pointsString}`} fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-1000 ease-linear" />
                  <path d={areaPath} fill="url(#chartGradient)" stroke="none" className="transition-all duration-1000 ease-linear" />
                </svg>
                
                {/* Dynamic Crosshair */}
                <div className="absolute top-0 bottom-0 w-[1px] bg-cyan-500/30 left-[70%] z-20">
                     <div className="absolute top-2 left-1 text-[9px] font-mono text-cyan-400 bg-black/80 px-1 rounded border border-cyan-900">
                        ${price.toLocaleString(undefined, {maximumFractionDigits: 0})}
                     </div>
                </div>
             </div>

             {/* Swap UI */}
             <div className="space-y-3 relative z-10">
               
               {/* Input 1 */}
               <div className="group bg-black/60 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/20">
                  <div className="flex justify-between text-[10px] uppercase text-gray-500 font-mono mb-2 tracking-wider">
                     <span>Sell</span>
                     <span>Bal: $142,030.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-2xl text-white font-mono tracking-tight font-light">15,000.00</span>
                     <div className="flex items-center gap-2 bg-[#1A1A1D] px-2 py-1.5 rounded-lg border border-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-black">$</div>
                        <span className="text-sm font-medium text-white">USD</span>
                     </div>
                  </div>
               </div>

                {/* Swap Arrow - Floating */}
               <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-[#0A0A0B] p-1 rounded-full border border-white/10 shadow-xl">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 p-2 rounded-full text-cyan-400 hover:text-white hover:scale-110 transition-all cursor-pointer border border-white/5">
                         <ArrowUpRight className="rotate-180 w-4 h-4" />
                      </div>
                  </div>
               </div>

               {/* Input 2 */}
               <div className="bg-black/60 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex justify-between text-[10px] uppercase text-gray-500 font-mono mb-2 tracking-wider">
                     <span>Buy</span>
                     <span className="text-cyan-400">Rate: 1 BTC ≈ ${price.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-2xl text-cyan-50 font-mono tracking-tight font-light">{(15000 / price).toFixed(6)}</span>
                     <div className="flex items-center gap-2 bg-[#1A1A1D] px-2 py-1.5 rounded-lg border border-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                        <div className="w-5 h-5 rounded-full bg-[#F7931A] flex items-center justify-center text-[10px] font-bold text-white">B</div>
                        <span className="text-sm font-medium text-white">BTC</span>
                     </div>
                  </div>
               </div>
             </div>

             <Button className="w-full mt-6 !rounded-xl !py-4 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] !text-sm tracking-wide">
                Confirm Transaction
             </Button>

             <div className="mt-5 flex items-center justify-center gap-2 text-[9px] text-gray-600 font-mono uppercase tracking-widest opacity-60">
                <CheckCircle2 size={10} className="text-emerald-500" />
                <span>Encrypted • 12ms Latency</span>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;