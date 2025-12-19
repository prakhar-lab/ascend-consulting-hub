import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "Dealer Voice Assistant at National Scale",
    description: "Voice assistants for dealers nationwide, designed to resolve queries and route exceptions.",
    metrics: "65% faster query resolution (placeholder) • 40% lower call handling time (placeholder) • 3.2× higher dealer satisfaction (placeholder)",
    href: "/case-studies/dealer-voice-assistant",
  },
  {
    title: "Automated Collection Agent",
    description: "Automates payment follow-ups, tracking, and escalations across thousands of vendor transactions.",
    metrics: "55% fewer manual follow-ups (placeholder) • 25% faster collections cycle (placeholder) • 90% fewer missed escalations (placeholder)",
    href: "/case-studies/automated-collection-agent",
  },
  {
    title: "Employee Insights Assistant for Retail Brands",
    description: "Gives teams real-time, data-backed insights inside existing workflows.",
    metrics: "3× faster time-to-insight (placeholder) • 30% fewer reporting requests (placeholder) • 70% weekly active usage (placeholder)",
    href: "/case-studies/employee-insights-assistant",
  },
  {
    title: "Onboarding AI Buddy (4 weeks)",
    description: "Improves onboarding experience and reduces repetitive support questions.",
    metrics: "20% higher activation (placeholder) • 35% fewer onboarding tickets (placeholder) • 2× faster time-to-first-value (placeholder)",
    href: "/case-studies/onboarding-ai-buddy",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Case studies with results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A few examples of what integrated agents can unlock when connected to real systems and real data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <motion.a
              key={i}
              href={study.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-elevated card-hover p-6 space-y-4 block"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {study.description}
              </p>
              
              <div className="flex items-start gap-2 pt-2 border-t border-border/30">
                <TrendingUp className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground/80">
                  {study.metrics}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
