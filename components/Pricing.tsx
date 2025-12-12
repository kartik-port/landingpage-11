import React from 'react';
import Button from './ui/Button';
import { Check, Sparkles, Zap, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Observer",
      price: "$0",
      period: "/month",
      desc: "Essential tools for passive monitoring.",
      badge: "Free Forever",
      badgeIcon: Zap,
      features: [
        "Real-time Portfolio Tracking",
        "5 Active Price Alerts",
        "Basic Market Analytics",
        "1 Connected Wallet",
        "Community Support"
      ],
      cta: "Start Free",
      variant: "secondary",
      glow: false
    },
    {
      name: "Architect",
      price: "$49",
      period: "/month",
      desc: "Advanced execution for serious traders.",
      badge: "Most Popular",
      badgeIcon: Sparkles,
      features: [
        "AI Yield Optimization",
        "Unlimited Price Alerts",
        "MEV Protection",
        "Unlimited Wallets",
        "Priority Execution Node",
        "Tax Export Tools"
      ],
      cta: "Get Started",
      variant: "primary",
      glow: true
    },
    {
      name: "Sovereign",
      price: "Custom",
      period: "",
      desc: "Infrastructure for institutions & whales.",
      badge: "Enterprise",
      badgeIcon: Shield,
      features: [
        "Dedicated RPC Nodes",
        "White-glove Onboarding",
        "API Access (Read/Write)",
        "Custom Smart Contracts",
        "24/7 Dedicated Support",
        "Governance Voting Power"
      ],
      cta: "Contact Sales",
      variant: "secondary",
      glow: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 relative bg-aura-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-semibold text-white mb-6">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Value.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
            Choose the interface level that matches your capital complexity. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`
                relative p-8 rounded-3xl border transition-all duration-300 group
                ${tier.glow 
                  ? 'bg-gradient-to-b from-[#111113] to-[#08080A] border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.1)] hover:shadow-[0_0_60px_rgba(6,182,212,0.15)] transform md:-translate-y-4' 
                  : 'bg-[#0A0A0B] border-white/5 hover:border-white/10'}
              `}
            >
              {/* Badge */}
              <div className={`absolute -top-3 left-8 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1 border ${tier.glow ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black border-transparent' : 'bg-white/10 text-gray-300 border-white/5'}`}>
                   <tier.badgeIcon size={10} /> {tier.badge}
              </div>

              {/* Card Header */}
              <div className="mb-8 mt-2">
                <h3 className={`text-lg font-medium mb-2 ${tier.glow ? 'text-cyan-400' : 'text-gray-200'}`}>
                    {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-semibold text-white tracking-tight">{tier.price}</span>
                    <span className="text-sm text-gray-500">{tier.period}</span>
                </div>
                <p className="text-sm text-gray-400 font-light">{tier.desc}</p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/5 mb-8" />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${tier.glow ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-gray-400'}`}>
                        <Check size={10} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant={tier.variant as any} 
                className={`w-full ${!tier.glow && '!bg-white/5 hover:!bg-white/10 !border-white/5'}`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;