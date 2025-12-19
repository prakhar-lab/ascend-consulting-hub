import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can you deploy in our own cloud or on‑premise?",
    answer: "Yes. We can deploy in your AWS, GCP, or Azure environment, and we can also support private or on‑prem setups depending on security requirements.",
  },
  {
    question: "How do you connect agents to internal enterprise data securely?",
    answer: "We design a permissioned context pipeline that connects to your systems (databases, CRMs, ERPs, documents) and provides the agent only the approved context needed for the task, with logging and monitoring.",
  },
  {
    question: "Which models do you support?",
    answer: "We are model-agnostic. We use the model that best fits your use case for accuracy, latency, and cost—including leading enterprise and open-source options.",
  },
  {
    question: "How do you reduce hallucinations?",
    answer: "We ground responses in your approved sources, constrain tool actions, add guardrails, and implement escalation paths for edge cases.",
  },
  {
    question: "What does the engagement typically look like?",
    answer: "We start with discovery, build an MVP against staging data, then harden and deploy the production system integrated with real data and workflows.",
  },
];

export function FAQSection() {
  // Split FAQs into two columns
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section id="faq" className="section-padding relative bg-secondary/20 border-y border-border/30 overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Common questions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {leftFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem
                  value={`left-${i}`}
                  className="card-elevated border-border/50 px-5 rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="space-y-3">
            {rightFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem
                  value={`right-${i}`}
                  className="card-elevated border-border/50 px-5 rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
