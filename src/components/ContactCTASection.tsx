import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ContactCTASectionProps {
  onOpenContact: () => void;
}

const checklist = [
  "Your systems (CRM/ERP/DB)",
  "Your workflows",
  "Your security constraints",
  "Your success metrics",
];

export function ContactCTASection({ onOpenContact }: ContactCTASectionProps) {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Ready to build enterprise-grade{" "}
            <span className="text-gradient-primary">Agentic AI</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Tell us your workflows and systems. We'll propose a secure, practical path to a production-ready agent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={onOpenContact}
              className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
            >
              Book Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onOpenContact}
              className="border-border/50 text-foreground hover:bg-secondary/50 text-base px-8"
            >
              Contact Us
            </Button>
          </div>

          {/* What to bring checklist */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-elevated p-6 max-w-md mx-auto"
          >
            <p className="text-sm font-medium text-foreground mb-4">What to bring:</p>
            <div className="grid grid-cols-2 gap-3">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
