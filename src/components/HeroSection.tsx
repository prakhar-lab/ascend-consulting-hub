import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle, Database, FileText, Users, MessageSquare, Phone, Globe, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const trustChips = [
    { icon: Shield, label: "Secure-by-design architecture" },
    { icon: Zap, label: "Enterprise integrations" },
    { icon: CheckCircle, label: "Production-ready agents" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-300" />

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="eyebrow">AGENTIC AI FOR ENTERPRISE</span>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Your path to{" "}
              <span className="text-gradient-primary">Agentic AI</span>{" "}
              starts here.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We are a technical consulting group of AI experts building enterprise-grade integrated LLM agents. We use the most relevant and reliable model for your use case and connect it to your existing tech stack (DB, CRM, ERP, messaging), in a secure environment.
            </p>
            
            <p className="text-muted-foreground">
              Empower agents with real-time data. Integrate them flawlessly with your workflows. Step up efficiency across the entire organisation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                asChild
                className="border-border/50 text-foreground hover:bg-secondary/50 text-base px-8"
              >
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              {trustChips.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground"
                >
                  <chip.icon className="h-4 w-4 text-primary" />
                  {chip.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Agent Workflow Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Center node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-2xl card-elevated border border-primary/30 glow-primary-sm flex flex-col items-center justify-center text-center p-4 z-20">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-display font-semibold">Indieverse</span>
                <span className="text-xs text-muted-foreground">Agent Layer</span>
              </div>

              {/* Input nodes (left/top) */}
              <WorkflowNode icon={Database} label="Databases" position="top-8 left-8" delay={0.4} />
              <WorkflowNode icon={FileText} label="Documents" position="top-8 right-8" delay={0.5} />
              <WorkflowNode icon={Users} label="CRM" position="bottom-32 left-0" delay={0.6} />
              <WorkflowNode icon={Globe} label="ERP" position="top-32 left-0" delay={0.7} />

              {/* Output nodes (right/bottom) */}
              <WorkflowNode icon={MessageSquare} label="Slack" position="bottom-8 left-8" delay={0.8} />
              <WorkflowNode icon={Phone} label="Voice" position="bottom-8 right-8" delay={0.9} />
              <WorkflowNode icon={Globe} label="Web App" position="bottom-32 right-0" delay={1.0} />
              <WorkflowNode icon={MessageSquare} label="Teams" position="top-32 right-0" delay={1.1} />

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(250, 89%, 67%)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Simplified connection lines */}
                <circle cx="50%" cy="50%" r="35%" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="50%" cy="50%" r="45%" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="2 6" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border/50 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

function WorkflowNode({
  icon: Icon,
  label,
  position,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  position: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute ${position} w-20 h-20 rounded-xl card-elevated border border-border/50 flex flex-col items-center justify-center gap-1 hover:border-primary/30 transition-colors`}
    >
      <Icon className="h-5 w-5 text-muted-foreground" />
      <span className="text-[10px] text-muted-foreground">{label}</span>
    </motion.div>
  );
}
