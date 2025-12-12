import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

// --- Premium Schematic Illustrations ---

const IconExecution = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-cyan-400">
    <defs>
      <linearGradient id="chip-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="currentColor" stopOpacity="0.15" />
        <stop offset="1" stopColor="currentColor" stopOpacity="0.0" />
      </linearGradient>
    </defs>
    {/* Outer Grid */}
    <path d="M24 2V6M24 42V46M2 24H6M42 24H46" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round"/>
    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" fill="url(#chip-grad)" />
    {/* Inner Chip Detail */}
    <rect x="18" y="18" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 18V8M24 40V30M18 24H8M40 24H30" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 14L18 18M34 14L30 18M14 34L18 30M34 34L30 30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
    <circle cx="24" cy="24" r="2" fill="currentColor" />
  </svg>
);

const IconLiquidity = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-400">
    <defs>
      <linearGradient id="liquid-grad" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="1" stopColor="currentColor" stopOpacity="0.0" />
      </linearGradient>
    </defs>
    {/* Abstract Flow Lines */}
    <path d="M4 24C4 24 10 14 24 14C38 14 44 24 44 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 32C4 32 10 22 24 22C38 22 44 32 44 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    
    {/* Central Drop/Pool */}
    <path d="M24 38C30.6274 38 36 32.6274 36 26C36 19.3726 24 10 24 10C24 10 12 19.3726 12 26C12 32.6274 17.3726 38 24 38Z" fill="url(#liquid-grad)" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Particles */}
    <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="34" cy="18" r="1.5" fill="currentColor" fillOpacity="0.5" />
    <circle cx="14" cy="18" r="1.5" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

const IconSecurity = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-400">
    <defs>
      <linearGradient id="shield-grad" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="currentColor" stopOpacity="0.15" />
        <stop offset="1" stopColor="currentColor" stopOpacity="0.0" />
      </linearGradient>
    </defs>
    {/* Shield Outline */}
    <path d="M24 4L10 10V22C10 32 16 40 24 44C32 40 38 32 38 22V10L24 4Z" fill="url(#shield-grad)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    
    {/* Lock/Core */}
    <path d="M24 20V16C24 14.8954 24.8954 14 26 14H22C23.1046 14 24 14.8954 24 16V20" stroke="currentColor" strokeWidth="1.5" />
    <rect x="19" y="20" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 23V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Scanners */}
    <path d="M6 22H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M38 22H42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconBridge = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-400">
     {/* Two Chains */}
    <path d="M12 24C12 17.3726 17.3726 12 24 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" opacity="0.5" />
    <path d="M36 24C36 30.6274 30.6274 36 24 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" opacity="0.5" />
    
    {/* Platforms */}
    <rect x="6" y="28" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(-15 12 32)" />
    <rect x="30" y="12" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(-15 36 16)" />
    
    {/* Connection Beam */}
    <path d="M16 26L32 20" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="23" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconFlash = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-400">
    <defs>
        <filter id="glow-flash">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    {/* Background Circle Split */}
    <path d="M24 4C12.9543 4 4 12.9543 4 24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
    <path d="M44 24C44 35.0457 35.0457 44 24 44" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
    
    {/* Bolt */}
    <path d="M26 4L10 26H22L20 44L38 20H26L26 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    
    {/* Motion lines */}
    <path d="M36 12L42 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 38L12 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconAnalytics = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-pink-400">
    {/* Grid Background */}
    <path d="M8 40H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 8V40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 32H40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <path d="M8 24H40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <path d="M8 16H40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    
    {/* Chart Line */}
    <path d="M8 34L16 26L24 30L32 14L40 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Area under curve */}
    <path d="M8 34L16 26L24 30L32 14L40 18V40H8V34Z" fill="currentColor" fillOpacity="0.1" />
    
    {/* Floating Points */}
    <circle cx="32" cy="14" r="2" fill="currentColor" />
  </svg>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Automated Execution",
      desc: "Custodial AI algorithms that execute trades in milliseconds, capturing yield faster than humanly possible.",
      icon: IconExecution,
    },
    {
      title: "Smart Liquidity",
      desc: "Aggregated liquidity across 12+ chains ensuring zero-slippage execution on institutional-grade orders.",
      icon: IconLiquidity,
    },
    {
      title: "Multi-Sig Governance",
      desc: "Manage treasury operations with banking-grade security permissions, time-locks, and automated audit logs.",
      icon: IconSecurity,
    },
     {
      title: "Cross-Chain Bridge",
      desc: "Trustless bridging infrastructure moving assets between Solana, Ethereum, and Arbitrum instantly.",
      icon: IconBridge,
    },
     {
      title: "Flash Loan Arbitrage",
      desc: "Risk-free identification of price inefficiencies across DEXs, executed within a single transaction block.",
      icon: IconFlash,
    },
     {
      title: "Real-Time Analytics",
      desc: "Professional-grade portfolio charting, historical performance exports, and predictive modeling.",
      icon: IconAnalytics,
    }
  ];

  return (
    <section id="ecosystem" className="py-32 px-6 relative overflow-hidden bg-aura-black">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[20%] right-0 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
       
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Centered & Crisp */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-6">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-semibold tracking-tight text-white mb-6">
            Banking intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-600">made effortless.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Streamline capital deployment with protocols designed to simplify and enhance your wealth architecture.
          </p>
        </div>

        {/* Grid - High Contrast Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Advanced Card Component
const FeatureCard: React.FC<{ feature: any }> = ({ feature }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="group relative h-full rounded-2xl bg-[#0A0A0B] overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)' // Subtle top highlight for depth
      }}
    >
      {/* 1. Base Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-white/[0.12] transition-colors" />

      {/* 2. Spotlight Effect (Mouse Follow) */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      {/* 3. Border Glow (Mouse Follow) */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.3), transparent 40%)`,
          maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
          maskClip: 'content-box, border-box',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px'
        }}
      />

      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Icon Container - Floating & Schematic */}
        <div className="relative w-16 h-16 mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <feature.icon />
        </div>

        {/* Text Content */}
        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors">
            {feature.title}
        </h3>
        
        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {feature.desc}
        </p>

        {/* Bottom Action Hint */}
        <div className="mt-auto pt-8 flex items-center text-xs font-semibold text-white/40 group-hover:text-cyan-400 transition-colors uppercase tracking-wider">
            <span>Learn more</span>
            <ArrowUpRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
};

export default Features;