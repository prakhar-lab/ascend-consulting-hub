import { motion } from "framer-motion";
import { Brain, Shield, Workflow } from "lucide-react";

const steps = [
  { icon: Brain, label: "Better models" },
  { icon: Shield, label: "Better enterprise controls" },
  { icon: Workflow, label: "Real-time context pipeline" },
];

export function WhyNowSection() {
  return (
    <section id="why-now" className="py-16 relative bg-secondary/20 border-y border-border/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
            Agentic AI is a step function — and the timing is finally right.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Improvements in model quality and speed have made enterprise-scale integrations practical, with fewer hallucinations and better consistency. Open-source models and enterprise offerings now support stronger controls and private hosting. The missing piece is a secure pipeline that delivers real-time, permissioned company context—this is where we come in.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center"
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-sm">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-border to-primary/30" />
              )}
              {i < steps.length - 1 && (
                <div className="md:hidden h-8 w-0.5 bg-gradient-to-b from-border to-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
