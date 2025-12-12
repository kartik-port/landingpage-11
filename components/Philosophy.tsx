import React from 'react';
import Button from './ui/Button';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Headline Side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              The modern investor doesn't fit in a <span className="italic text-cyan-400">single market</span> — they stake, they hedge, they compound smart.
            </h2>
            <p className="mt-8 text-xl text-gray-400 font-light max-w-lg">
              This protocol was made for them. We built the aggregation layer that the decentralized economy was missing.
            </p>
          </div>

          {/* Testimonial Card Side */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative bg-aura-dark border border-white/10 rounded-2xl p-8 overflow-hidden">
                {/* Background noise texture simulation */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
                
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                     {/* Real User Image */}
                     <div className="w-16 h-16 rounded-xl border border-white/10 relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                        <img 
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80" 
                          alt="User Portrait" 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />
                     </div>
                     <div className="text-4xl text-white/10 font-serif">"</div>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    I used to track my positions in one terminal, my yield in another, and my risk nowhere. 
                    <strong className="text-white font-normal"> Aura keeps it simple</strong> — I see the full liquidity picture without the cognitive load.
                  </p>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-cyan-500 font-mono mb-1">PORTFOLIO VOLUME</div>
                      <div className="text-sm text-white">UP 17% SINCE INCEPTION</div>
                    </div>
                    <Button variant="secondary" className="!text-xs !py-2">
                        Read Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;