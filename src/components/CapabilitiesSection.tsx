import { motion } from "framer-motion";
import { Cpu, GitBranch, Plug, Cloud, Shield, Zap } from "lucide-react";

const categories = [
  { icon: Cpu, label: "Models", items: ["GPT-4", "Gemini", "Claude", "Llama", "Mistral"] },
  { icon: GitBranch, label: "Agent Frameworks & RAG", items: ["LangChain", "LlamaIndex", "AutoGen", "MCP"] },
  { icon: Plug, label: "Enterprise Integrations", items: ["Salesforce", "SAP", "Microsoft 365", "Slack"] },
  { icon: Cloud, label: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Kubernetes"] },
];

const securityBadges = [
  "RBAC / SSO-ready",
  "Encryption in transit & at rest",
  "Audit logs & monitoring",
  "Private cloud / on‑prem options",
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-padding relative bg-secondary/20 border-y border-border/30 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Technical capabilities (built to integrate)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're model-agnostic and integration-first. We choose the right model and architecture for your security, accuracy, latency, and cost requirements.
          </p>
        </motion.div>

        {/* Capabilities web */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated card-hover p-5 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-3">{cat.label}</h3>
                <div className="flex flex-wrap justify-center gap-1">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl card-elevated border border-primary/30 glow-primary-sm flex-col items-center justify-center text-center p-4 z-20"
          >
            <Zap className="h-6 w-6 text-primary mb-2" />
            <span className="text-xs font-display font-semibold">Indieverse</span>
            <span className="text-[10px] text-muted-foreground">Agent Layer</span>
          </motion.div>
        </div>

        {/* Security badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {securityBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-muted-foreground"
            >
              <Shield className="h-4 w-4 text-primary" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
