import { motion } from "framer-motion";
import { Lock, GitBranch, AlertTriangle } from "lucide-react";

const problemCards = [
  {
    icon: Lock,
    title: "Security & governance constraints",
    text: "Enterprises need access control, auditability, and strict data boundaries—before AI can touch sensitive systems.",
  },
  {
    icon: GitBranch,
    title: "Fragmented data & workflows",
    text: "Business context lives across CRMs, ERPs, databases, documents, and chat tools. AI fails when it can't reliably access the right source.",
  },
  {
    icon: AlertTriangle,
    title: "Reliability issues at scale",
    text: "Accuracy, latency, and edge cases matter. Production agents need guardrails, escalation paths, and continuous monitoring.",
  },
];

export function ChallengeSection() {
  return (
    <section id="challenge" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Is AI living up to the promise for enterprises?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For large enterprises, AI often becomes a black box with safety, consistency, and reliability issues. Without company-level context—policies, permissions, technical architecture, and real data—LLMs remain limited to generic answers. Startups can move faster with relaxed security and smaller data footprints. Enterprises can't.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problemCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated card-hover p-6 space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <card.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-lg">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
