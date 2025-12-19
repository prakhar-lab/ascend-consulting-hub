import { motion } from "framer-motion";
import { Search, Wrench, Rocket } from "lucide-react";

const phases = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Discovery",
    description: "We understand your business problem and technical architecture. We design a custom solution including the data integration plan (DB, ERP, CRM, RAG service, etc.) and the interface (web app, mobile app, MS Teams bot, voice call, etc.).",
    deliverables: ["Problem analysis", "Architecture design", "Integration plan"],
  },
  {
    icon: Wrench,
    phase: "Phase 2",
    title: "MVP (Beta)",
    description: "Using staging/testing datasets, we build a fully functional beta for QA. We leverage Indieverse Labs' library of reusable components and years of AI development experience to build high-quality systems at speed.",
    deliverables: ["Functional beta", "QA testing", "Iteration cycles"],
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    title: "Production Ready + Go Live",
    description: "Once the MVP is tested and approved, we connect real company data—structured databases and unstructured documents—using MCP and RAG frameworks with your choice of model. We deploy on your secure cloud infrastructure before going live with monitoring.",
    deliverables: ["Data integration", "Secure deployment", "Live monitoring"],
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding relative bg-secondary/20 border-y border-border/30 overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our process: from discovery to go-live
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We start with your business problem and architecture, then build an MVP, harden it for production, and deploy in your environment.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-border via-primary/30 to-border" />

          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="hidden lg:flex absolute top-[88px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary glow-primary-sm z-10" />

                <div className="card-elevated p-6 space-y-4 h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <phase.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <span className="eyebrow text-xs">{phase.phase}</span>
                      <h3 className="font-display font-semibold text-xl">{phase.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-xs text-muted-foreground/70 mb-2">Deliverables:</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((d, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
