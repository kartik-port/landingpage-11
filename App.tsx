import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import Infrastructure from './components/Infrastructure';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-aura-black text-white selection:bg-cyan-500/30 font-sans">
      <div className="bg-noise" />
      
      {/* Subtle ambient lighting for lower sections only, keeping Hero pitch black for particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-indigo-900/05 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-cyan-900/05 rounded-full blur-[120px] mix-blend-screen" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SocialProof />
          <Philosophy />
          <Features />
          <Infrastructure />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;