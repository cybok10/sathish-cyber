import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown, Download, Mail, Terminal, Shield, Cpu,
  Lock, Code, Database, ShieldCheck, Github, Linkedin, Target
} from "lucide-react";


const roles = [
  "Certified Penetration Tester",
  "Cybersecurity Researcher",
  "Ethical Hacker",
  "Automation Engineer"
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-32 pb-20">

      {/* Refined Background - Subtle Grid & Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] -ml-20 -mb-20" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">

          {/* LEFT: Expansive Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="xl:col-span-7 flex flex-col space-y-12"
          >
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 text-primary font-black text-xs uppercase tracking-[0.4em]"
              >
                <div className="w-12 h-[2px] bg-primary" />
                Strategic Cybersecurity Operations
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-[4.5rem] md:text-[8rem] font-display font-black tracking-tighter leading-[0.85] text-foreground">
                  Sathish <span className="text-primary italic">M.</span>
                </h1>
                <div className="pt-6">
                  <span className="text-2xl md:text-4xl font-display font-bold text-muted-foreground/60 tracking-tight leading-none">
                    Certified Penetration Tester <br />
                    & Security Researcher
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-secondary/20 w-fit px-5 py-2.5 rounded-2xl border border-white/5 backdrop-blur-sm">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-lg font-mono text-foreground font-bold">
                  root@cybok:~# <span className="text-primary">{displayText}</span>
                  <span className="animate-pulse ml-1 text-primary">_</span>
                </span>
              </div>

              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-medium opacity-70">
                Advanced offensive security specializing in system hardening,
                exploit development, and autonomous defense architectures.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-6 items-center pt-2">
              <button
                className="modern-button h-16 px-10 text-lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Sathish_M_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-3 h-5 w-5" />
                Download Protocol
              </button>
              <button
                className="modern-button-outline h-16 px-10 text-lg border-white/10 hover:bg-white/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Direct Uplink
              </button>
            </div>

            <div className="flex items-center gap-10 pt-10">
              {[
                { Icon: Github, href: "https://github.com/cybok10", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/amsathish", label: "LinkedIn" },
                { Icon: Target, href: "https://tryhackme.com/p/cybok", label: "TryHackMe" },
                { Icon: Mail, href: "mailto:sathish1012cybok@gmail.com", label: "Email" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.Icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Modern Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="xl:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[600px] aspect-square group">
              {/* Refined Image Container */}
              <div className="absolute inset-0 rounded-[4rem] overflow-hidden border border-white/5 bg-secondary/10 shadow-3xl">
                <img
                  src="/avatar.png"
                  alt="Sathish M"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/10" />
              </div>

              {/* Data Overlay Elements */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute top-12 -right-12 glass-card p-6 border-primary/20 animate-float"
              >
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary">Compliance</div>
                    <div className="text-xl font-bold tracking-tight text-foreground">ISO/SEC_V3</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute bottom-24 -left-12 glass-card p-6 border-cyan-500/20 animate-float-delayed"
              >
                <div className="flex items-center gap-4">
                  <Database className="w-8 h-8 text-cyan-500" />
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-cyan-500">Access</div>
                    <div className="text-xl font-bold tracking-tight text-foreground">ENCRYPTED</div>
                  </div>
                </div>
              </motion.div>

              {/* Technical Lines Decor */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-primary/20 rounded-tl-[4rem]" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-primary/20 rounded-br-[4rem]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group flex flex-col items-center gap-3"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-px h-24 bg-gradient-to-b from-primary via-primary/50 to-transparent animate-[scroll-indicator_2s_infinite]" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary transition-opacity group-hover:opacity-100 opacity-40">Scroll</span>
      </div>
    </section>
  );
}