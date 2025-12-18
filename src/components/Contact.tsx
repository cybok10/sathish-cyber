import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Lock, Signal, Terminal, Loader2 } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; 

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // --- CONFIGURATION ---
    const FORMSPREE_ID = "mvzpoglg";
    const TELEGRAM_TOKEN = "8515022244:AAGOMDnENoSgIiUGq7ZfRhPLsEWyBv1m7Mw";
    const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE"; // Get this from @userinfobot on Telegram

    try {
      // 1. Send Email via Formspree (Background)
      const emailPromise = fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          sender_identity: formData.name,
          reply_path: formData.email,
          subject_header: formData.subject,
          payload: formData.message,
          _subject: `[SECURE_INTEL] New Mission Brief from ${formData.name}`
        })
      });

      // 2. Send Telegram Notification (Background)
      const telegramText = 
        `🚀 *NEW MISSION BRIEF*\n\n` +
        `👤 *Agent:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📂 *Subject:* ${formData.subject}\n` +
        `📝 *Brief:* ${formData.message}`;

      const telegramPromise = fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramText,
          parse_mode: "Markdown"
        })
      });

      // Execute both background tasks simultaneously
      const [emailRes] = await Promise.all([emailPromise, telegramPromise]);

      if (emailRes.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Secure Channel Established: Mission Brief Transmitted.");
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Transmission Failed");
      }
    } catch (error) {
      toast.error("Connection Failed: Security protocol blocked the signal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-primary/5 via-transparent to-transparent -z-10" />

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Signal className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary tracking-widest uppercase">Secure Channel Open</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Initialize <span className="text-gradient">Communication</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary" />
              
              <h3 className="text-2xl font-bold mb-6">Contact Intel</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Available for freelance contracts, security audits, and collaborative research projects. Telegram and Email uplinks are active.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Primary Uplink", value: "sathish1012cybok@gmail.com", href: "mailto:sathish1012cybok@gmail.com" },
                  { icon: Phone, label: "Direct Line", value: "+91 9597 124881", href: "tel:+919597124881" },
                  { icon: MapPin, label: "Operations Base", value: "Viluppuram, Tamil Nadu, India", href: "#" }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/40 border border-white/5 hover:border-primary/30 hover:bg-background/60 transition-all group/item"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover/item:scale-110 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="font-semibold text-foreground group-hover/item:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Secure Form Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-1 relative">
              <div className="bg-black/40 px-4 py-2 flex items-center justify-between rounded-t-xl border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  <Lock className="w-3 h-3" />
                  Encrypted_v3_TG
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5 bg-background/40 rounded-b-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider ml-1">Identity</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Codename"
                      className="bg-black/20 border-white/10 focus:border-primary/50 h-11"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider ml-1">Return Path</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@secure.net"
                      className="bg-black/20 border-white/10 focus:border-primary/50 h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider ml-1">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Op: Collaboration"
                    className="bg-black/20 border-white/10 focus:border-primary/50 h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider ml-1">Briefing</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter mission briefing details..."
                    className="bg-black/20 border-white/10 focus:border-primary/50 min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/50 transition-all group font-bold uppercase tracking-widest"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SYNCHRONIZING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      INITIATE TRANSMISSION
                    </span>
                  )}
                </Button>

                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-2 text-emerald-500 text-sm font-mono"
                  >
                    <Signal className="w-4 h-4 animate-pulse" />
                    SIGNAL RECEIVED: TG UPLINK STABLE.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}