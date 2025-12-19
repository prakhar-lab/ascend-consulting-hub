import { motion } from "framer-motion";
import { Shield, Cloud, Database, Cpu } from "lucide-react";

const proofPoints = [
  { icon: Shield, text: "Government & high-stakes domain experience" },
  { icon: Cloud, text: "Private cloud / on‑prem deployment options" },
  { icon: Database, text: "Real-time context via RAG + MCP pipelines" },
  { icon: Cpu, text: "Model-agnostic: OpenAI, Gemini, Claude, open-source" },
];

export function TrustBar() {
  return (
    <section id="trust" className="relative py-12 border-y border-border/30 bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm text-muted-foreground font-medium">
            Built for enterprise reality — not demos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {proofPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-tight">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
