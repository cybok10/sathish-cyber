import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Lock, Signal, Terminal, Loader2, Wifi, Radio, Zap, ShieldCheck } from "lucide-react";
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
    const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE";

    try {
      const emailPromise = fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          sender: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          payload: formData.message,
          _subject: `[SECURE_INTEL] New Mission Brief from ${formData.name}`
        })
      });

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

      const [emailRes] = await Promise.all([emailPromise, telegramPromise]);

      if (emailRes.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Secure Channel Established: Mission Brief Transmitted.");
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
    <section id="contact" className="section-padding relative overflow-hidden bg-black pb-80">
      
      {/* Background Matrix-like Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(90deg, var(--primary) 1px, transparent 1px), linear-gradient(180deg, var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-custom relative z-10 w-full">

        <div className="flex flex-col xl:flex-row justify-between gap-20 items-end mb-32">
          <div className="xl:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black text-xs uppercase tracking-[0.5em] flex items-center gap-5"
            >
              <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg">Sector 05</div>
              Secure Communications
            </motion.div>
            <h2 className="text-6xl md:text-[7rem] font-display font-black tracking-tighter text-white leading-[0.9] italic">
               SECURE <span className="text-primary not-italic">UPLINK.</span>
            </h2>
          </div>
          <div className="xl:w-1/3 text-xl text-zinc-500 font-medium leading-relaxed italic">
            "Establishing point-to-point encrypted tunnels for strategic operational discussions."
          </div>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
 
          {/* Left: Tactical Nodes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-5 space-y-16"
          >
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-display font-black text-white italic tracking-tighter">FREQUENCY NODES</h3>
              <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                Direct integration paths for <span className="text-white font-black italic">high-priority mission briefings</span> or tactical research collaboration.
              </p>
            </div>
 
            <div className="space-y-6">
              {[
                { icon: Mail, label: "COMM_ARRAY_01", value: "sathish1012cybok@gmail.com", href: "mailto:sathish1012cybok@gmail.com", color: "text-primary" },
                { icon: Phone, label: "VOICE_LINK_22", value: "+91 95971 24881", href: "tel:+919597124881", color: "text-blue-400" },
                { icon: MapPin, label: "GEO_BASE_LOC", value: "Tamil Nadu, India", href: "#", color: "text-zinc-500" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group relative flex items-center gap-8 p-10 bg-zinc-950/50 border border-white/5 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 overflow-hidden"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center ${item.color} group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-2xl`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-2 italic">{item.label}</h4>
                    <p className="text-lg md:text-xl font-black text-white group-hover:text-primary transition-colors tracking-tight break-all">{item.value}</p>
                  </div>
                  
                  {/* Subtle Scan Line */}
                  <div className="absolute top-0 right-0 w-2 h-full bg-primary/5 group-hover:bg-primary/20 transition-all" />
                </a>
              ))}
            </div>
            
            <div className="p-10 bg-primary/5 border border-primary/20 rounded-[2.5rem] flex items-center gap-8">
               <Radio className="w-12 h-12 text-primary animate-pulse" />
               <div className="space-y-1">
                  <div className="text-[10px] font-black text-primary uppercase tracking-widest">Signal Status</div>
                  <div className="text-xl font-black text-white italic uppercase tracking-tighter">Hardened Channel Active</div>
               </div>
            </div>
          </motion.div>

          {/* Right: Terminal Uplink Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="relative p-12 bg-[#0a0a1a] border border-white/10 rounded-[3.5rem] overflow-hidden group">
               {/* Terminal Top Bar */}
               <div className="absolute top-0 inset-x-0 h-14 bg-zinc-900/80 border-b border-white/10 flex items-center px-8 justify-between">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/30" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                     <div className="w-3 h-3 rounded-full bg-green-500/30" />
                  </div>
                  <div className="text-[10px] font-mono font-black text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                     <Terminal className="w-4 h-4 text-primary" />
                     SECURE_UPSTREAM_PROT_V4.3
                  </div>
               </div>

               <form onSubmit={handleSubmit} className="space-y-10 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 ml-2 italic">Agent_ID</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="ENTER IDENTITY..."
                      className="bg-zinc-950/50 border-white/5 focus:border-primary/50 focus:bg-zinc-900/50 h-20 rounded-2xl px-8 text-xl font-black text-white placeholder:text-zinc-800 placeholder:italic transition-all shadow-inner"
                      required
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 ml-2 italic">Uplink_Node</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ADDR@NODE.COM"
                      className="bg-zinc-950/50 border-white/5 focus:border-primary/50 focus:bg-zinc-900/50 h-20 rounded-2xl px-8 text-xl font-black text-white placeholder:text-zinc-800 placeholder:italic transition-all shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 ml-2 italic">Brief_Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="CLASSIFIED_SUBJECT"
                    className="bg-zinc-950/50 border-white/5 focus:border-primary/50 focus:bg-zinc-900/50 h-20 rounded-2xl px-8 text-xl font-black text-white placeholder:text-zinc-800 placeholder:italic transition-all shadow-inner"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 ml-2 italic">Encrypted_Payload</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="INPUT ENCRYPTED MESSAGE DATA HERE..."
                    className="bg-zinc-950/50 border-white/5 focus:border-primary/50 focus:bg-zinc-900/50 min-h-[250px] rounded-[2.5rem] px-8 py-8 text-xl font-black text-white placeholder:text-zinc-800 placeholder:italic transition-all resize-none shadow-inner"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-24 bg-primary text-black text-xl font-black uppercase tracking-[0.3em] rounded-3xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.4)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-6 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  {loading ? (
                    <>
                      <Loader2 className="w-10 h-10 animate-spin" />
                      SYNCHRONIZING...
                    </>
                  ) : (
                    <>
                      <Send className="w-8 h-8 transform group-hover:rotate-12 transition-transform" />
                      TRANSMIT MISSION BRIEF
                    </>
                  )}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 bg-primary/5 border border-primary/20 rounded-[2.5rem] flex items-center justify-center gap-8 text-primary"
                  >
                    <ShieldCheck className="w-10 h-10" />
                    <div className="text-xl font-black tracking-tighter uppercase italic">
                       Authentication Confirmed - Payload Transmitted
                    </div>
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