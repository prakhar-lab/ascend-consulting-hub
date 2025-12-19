import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your use case.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: "", email: "", company: "", message: "" });
      setErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg max-h-[90vh] overflow-y-auto z-50"
          >
            <div className="card-elevated border border-border/50 p-6 sm:p-8 mx-4 sm:mx-0 rounded-2xl">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="font-display font-bold text-2xl mb-2">
                      Contact Indieverse Labs
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Tell us what you want to build. We'll respond with next steps.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="John Smith"
                        className={errors.fullName ? "border-destructive" : ""}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-destructive">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Acme Corp"
                        className={errors.company ? "border-destructive" : ""}
                      />
                      {errors.company && (
                        <p className="text-xs text-destructive">{errors.company}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Use case</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Describe what you're trying to build..."
                        rows={4}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleClose}
                        className="flex-1"
                      >
                        Close
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 btn-glow bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send →"
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">
                    Thanks — we'll reach out shortly.
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    We received your message. Our team will reach out with next steps.
                  </p>
                  <Button onClick={handleClose} variant="outline">
                    Close
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
