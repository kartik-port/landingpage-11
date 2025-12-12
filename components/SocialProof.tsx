import React from 'react';
import { Hexagon, Triangle, Circle, Square, Box, Diamond, CloudLightning, Command } from 'lucide-react';

const SocialProof: React.FC = () => {
  const logos = [
    { name: "ANTHROPIC", icon: Hexagon },
    { name: "AIRBRAKE", icon: Triangle },
    { name: "AMPLITUDE", icon: Circle },
    { name: "LINEAR", icon: Square },
    { name: "RAYCAST", icon: Box },
    { name: "VERCEL", icon: Diamond },
    { name: "SUPABASE", icon: CloudLightning },
    { name: "OPENAI", icon: Command },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-aura-black relative">
        {/* Side Masks for fade effect */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-aura-black to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-aura-black to-transparent z-20 pointer-events-none" />
        
        <div className="flex items-center gap-20 animate-marquee whitespace-nowrap min-w-max">
            {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                <div key={idx} className="flex items-center gap-3 opacity-30 hover:opacity-80 transition-opacity grayscale cursor-pointer group">
                    <logo.icon className="w-5 h-5 text-white" />
                    <span className="font-bold tracking-[0.2em] text-xs font-mono text-white">{logo.name}</span>
                </div>
            ))}
        </div>
        
        <div className="absolute -bottom-3 right-10 text-[10px] bg-aura-black px-2 text-gray-700 font-mono hidden md:block z-30 border border-white/5 rounded">
            TRUSTED BY INDUSTRY LEADERS
        </div>
    </section>
  );
};

export default SocialProof;