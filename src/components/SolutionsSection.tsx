import { motion } from "framer-motion";
import { Phone, Eye, BarChart3, FileText, Network, MessageSquare, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Phone,
    title: "Voice Agents (Inbound & Outbound)",
    oneLiner: "Run call workflows end-to-end: answer questions, capture intent, update systems, and escalate when needed.",
    integrations: "Telephony • CRM • Ticketing • Payments",
    href: "/solutions/voice-agents",
  },
  {
    icon: Eye,
    title: "Multimodal Assistants",
    oneLiner: "Understand text, images, and documents to support richer workflows and faster decisions.",
    integrations: "Docs • Knowledge base • Internal tools",
    href: "/solutions/multimodal-assistants",
  },
  {
    icon: BarChart3,
    title: "Data Analytics Assistant",
    oneLiner: "Ask questions in natural language and get reliable answers grounded in your data sources.",
    integrations: "Warehouse • BI • Databases",
    href: "/solutions/data-analytics-assistant",
  },
  {
    icon: FileText,
    title: "Document Workflow Agent",
    oneLiner: "Turn policies, legal documents, and operational manuals into structured, actionable workflows.",
    integrations: "Docs • RAG • Approvals",
    href: "/solutions/document-workflow-agent",
  },
  {
    icon: Network,
    title: "Hybrid Multi‑Agent Systems",
    oneLiner: "Orchestrate multiple specialist agents with guardrails for complex processes.",
    integrations: "Tools • APIs • Internal services",
    href: "/solutions/multi-agent-systems",
  },
  {
    icon: MessageSquare,
    title: "NLP Automation",
    oneLiner: "Sentiment, classification, extraction, and summarization—productionized for scale.",
    integrations: "Support • Reviews • Email • Chat",
    href: "/solutions/nlp-automation",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Solutions we build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each solution is built around your systems, your security requirements, and your workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.a
              key={i}
              href={solution.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-elevated card-hover p-6 space-y-4 block"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {solution.oneLiner}
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {solution.integrations}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
