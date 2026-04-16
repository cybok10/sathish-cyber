import { 
  Shield, Github, Linkedin, Mail, Heart, Terminal, 
  ChevronUp, Globe, Lock, Cpu, Database, Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/cybok10", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sathish-m-cybok", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sathish1012cybok@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative pt-32 pb-16 border-t border-white/5 bg-[#050508] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom w-full max-w-[1400px] relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand & Mission Segment */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black tracking-tight text-white leading-none">
                  Sathish <span className="text-primary">M.</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mt-1">
                  Security Intellectual
                </span>
              </div>
            </div>
            
            <p className="text-lg text-zinc-400 leading-relaxed max-w-md font-medium">
              Dedicated to securing the digital frontier through relentless innovation, precision offensive research, and robust defense architectures.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Access Segment */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary/80 flex items-center gap-2">
              <div className="w-1 h-3 bg-primary rounded-full" />
              Navigation
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-zinc-500 hover:text-primary transition-colors flex items-center gap-2 group font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* System Environment Segment */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary/80 flex items-center gap-2">
              <div className="w-1 h-3 bg-primary rounded-full" />
              System Environment
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Uptime", value: "99.98%", icon: Activity },
                { label: "Encryption", value: "AES-256", icon: Lock },
                { label: "Nodes", value: "SEC-LOG-01", icon: Cpu },
                { label: "Region", value: "Global", icon: Globe },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <stat.icon className="w-4 h-4 text-primary/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">{stat.label}</span>
                  <span className="text-sm font-mono font-bold text-white">{stat.value}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_10px_30px_rgba(59,130,246,0.2)]"
            >
              Start Mission Protocol
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">
            <p>© {currentYear} SATHISH M. ALL RIGHTS RESERVED.</p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-800" />
            <p className="flex items-center gap-2">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> & Precision
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono text-primary/60">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                CORE_OPERATIONAL
              </span>
              <span className="opacity-20">|</span>
              <span>v.2.4.0-STABLE</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/5 hover:text-white transition-all transition-bounce"
              aria-label="Back to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}