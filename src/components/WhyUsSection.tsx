import { motion } from "framer-motion";
import { Shield, Plug, Target, Headphones } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Enterprise-grade security mindset",
    text: "We design governance, permissions, and auditability into the system from day one.",
  },
  {
    icon: Plug,
    title: "Integration-first engineering",
    text: "Agents are only useful when they connect to real data and execute inside real workflows.",
  },
  {
    icon: Target,
    title: "Model-agnostic, outcome-driven",
    text: "We choose the most reliable model and architecture for your use case, cost, and risk profile.",
  },
  {
    icon: Headphones,
    title: "Build, deploy, and support",
    text: "We deliver production systems and stay accountable after launch.",
  },
];

const industries = ["Manufacturing", "Retail", "Finance", "Healthcare", "Technology", "Government"];

export function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
              Why Indieverse Labs
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Indieverse Labs, we work at the forefront of AI, data science, and custom LLM systems to solve enterprise problems across manufacturing, retail, finance, healthcare, and technology. We've also worked with government, law enforcement, and defence agencies, so we understand security, governance, and compliance requirements that cannot be compromised.
            </p>
            
            {/* Industry chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {industries.map((industry, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-muted-foreground"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column - pillar cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated card-hover p-5 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm">{pillar.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
