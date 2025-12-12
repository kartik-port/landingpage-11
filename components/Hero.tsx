import React, { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import { ArrowRight, Activity, Zap, Shield, Cpu, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Simulated live metrics
  const [apy, setApy] = useState(12.42);
  const [tvl, setTvl] = useState(4283);
  
  // Particle Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Mouse interaction
    let mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      baseY: number;

      constructor(reset = false) {
        this.x = reset ? -50 : Math.random() * width;
        // Tighter vertical spread for a more defined "stream" look
        const verticalSpread = height * 0.4; 
        this.baseY = height / 2 + (Math.random() - 0.5) * verticalSpread;
        this.y = this.baseY;
        
        // Fast, premium movement speed
        this.vx = Math.random() * 2.0 + 2.0; 
        
        this.vy = 0;
        // Slightly larger, more elegant particles
        this.size = Math.random() * 2.5 + 1.0; 
        this.life = Math.random() * 100;
        this.maxLife = 100 + Math.random() * 150;
        
        // Stardust Palette: More coherent Blue/Cyan mix
        const isCyan = Math.random() > 0.5;
        const r = isCyan ? 6 : 59;
        const g = isCyan ? 182 : 130;
        const b = isCyan ? 212 : 246;
        const a = Math.random() * 0.5 + 0.2; 
        this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
      }

      update() {
        this.x += this.vx;
        this.life++;

        // Smoother, longer sine waves
        const wave = Math.sin(this.x * 0.002 + this.life * 0.005) * 40;
        this.y = this.baseY + wave;

        // Mouse interaction (repel)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 250) {
            const force = (250 - distance) / 250;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 4;
            this.baseY -= Math.sin(angle) * force * 4;
        }

        // Reset if off screen
        if (this.x > width + 50 || this.life > this.maxLife) {
           this.x = -50;
           this.baseY = height / 2 + (Math.random() - 0.5) * (height * 0.4);
           this.life = 0;
           this.vx = Math.random() * 2.0 + 2.0;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle glow to larger particles
        if (this.size > 2.5) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
        } else {
            ctx.shadowBlur = 0;
        }
      }
    }

    const init = () => {
      particles = [];
      // Reduced count for "Advanced/Minimal" look
      const particleCount = width < 768 ? 60 : 150; 
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      // Clear with slight trail
      ctx.fillStyle = 'rgba(3, 3, 4, 0.3)'; 
      ctx.fillRect(0, 0, width, height);
      
      // Screen blending for light interaction
      ctx.globalCompositeOperation = 'screen';

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      ctx.globalCompositeOperation = 'source-over';
      // Reset shadow for next frame performance
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setApy(prev => +(prev + (Math.random() * 0.04 - 0.02)).toFixed(2));
      setTvl(prev => Math.floor(prev + Math.random() * 10 - 2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden bg-aura-black">
      
      {/* 1. Stardust Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-100"
      />
      
      {/* 2. Top Vignette/Gradient to blend header */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-aura-black via-aura-black/90 to-transparent z-10 pointer-events-none" />
      
      {/* 3. Horizontal Guide Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-20 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-10 text-center lg:text-left">
          
          {/* Eyebrow */}
          <div className={`flex items-center justify-center lg:justify-start gap-2 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="pl-1 pr-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              System v2.4 Live
            </div>
          </div>

          {/* Headline */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-semibold tracking-tight transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="font-serif italic text-gray-400 font-light">Architect</span> your <br />
            <span className="text-white drop-shadow-2xl">wealth</span> with <br />
            absolute <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 animate-pulse-slow">precision.</span>
          </h1>

          {/* Subheadline */}
          <p className={`text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Advanced financial protocols merged with intuitive design. 
            We provide the infrastructure to accelerate your economic legacy through 
            AI-driven yield optimization.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button variant="primary" icon={<ChevronRight size={14} />} className="!rounded-full !px-8">
              Initialize Protocol
            </Button>
            <Button variant="secondary" icon={<Zap size={14} />} className="!rounded-full !px-8">
              View Ecosystem
            </Button>
          </div>

          {/* Mini Data Points */}
          <div className={`pt-8 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-xs font-mono text-gray-500 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm">
              <Activity size={14} className="text-cyan-500" />
              <span>LATENCY: <span className="text-gray-300">12ms</span></span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm">
              <Shield size={14} className="text-cyan-500" />
              <span>AUDIT: <span className="text-gray-300">100%</span></span>
            </div>
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm">
              <Cpu size={14} className="text-cyan-500" />
              <span>AI AGENTS: <span className="text-gray-300">ACTIVE</span></span>
            </div>
          </div>
        </div>

        {/* Visual/Graphic - Floating HUD */}
        <div className={`lg:col-span-5 relative transition-all duration-1000 delay-700 perspective-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative w-full aspect-square max-w-[500px] mx-auto animate-[float_6s_ease-in-out_infinite]">
            
            {/* Center Core */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-48 h-48 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center relative shadow-[0_0_80px_rgba(6,182,212,0.15)] group cursor-pointer overflow-hidden">
                 
                 {/* Internal reflection */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-50" />
                 
                 {/* Inner Digital Elements */}
                 <div className="flex flex-col items-center gap-1 z-20">
                     <span className="text-[10px] text-cyan-500 font-mono tracking-widest">NET APY</span>
                     <span className="text-5xl font-light text-white tracking-tighter">{apy}<span className="text-lg text-gray-500">%</span></span>
                     <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-2 opacity-50" />
                 </div>

                 {/* Rotating Rings - Made thinner for elegance */}
                 <div className="absolute inset-[2px] rounded-full border border-cyan-500/20 border-t-transparent border-l-transparent animate-[spin_4s_linear_infinite]" />
                 <div className="absolute inset-[10px] rounded-full border border-white/10 border-b-transparent animate-[spin_8s_linear_infinite_reverse]" />
              </div>
            </div>

            {/* Orbiting Satellite Data Points */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-auto h-auto">
                    <div className="bg-black/80 border border-cyan-900/50 px-2 py-1 rounded text-[8px] text-cyan-400 font-mono backdrop-blur rotate-[0deg]">
                        ETH-USDC
                    </div>
                 </div>
            </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-cyan-900/10 rounded-full animate-[spin_25s_linear_infinite_reverse] pointer-events-none">
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-3 h-3 bg-cyan-950 border border-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4]"></div>
            </div>

            {/* Floating Live Cards - Updated glass style */}
            <div className="absolute top-[0%] right-[0%] animate-[float_5s_ease-in-out_infinite_reverse]">
               <div className="glass-panel px-4 py-3 rounded-2xl border border-white/5 flex flex-col gap-1 min-w-[140px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-gray-400 font-mono uppercase tracking-wider">Total Volume</span>
                    <Activity size={10} className="text-cyan-400" />
                  </div>
                  <div className="text-xl font-medium text-white tracking-tight">$42.8B</div>
               </div>
            </div>

             <div className="absolute bottom-[10%] left-[-5%] animate-[float_7s_ease-in-out_infinite] delay-1000">
               <div className="glass-panel px-4 py-3 rounded-2xl border border-white/5 flex flex-col gap-1 min-w-[140px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-gray-400 font-mono uppercase tracking-wider">Active Vaults</span>
                    <Shield size={10} className="text-indigo-400" />
                  </div>
                  <div className="text-xl font-medium text-white tracking-tight">8,932</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;