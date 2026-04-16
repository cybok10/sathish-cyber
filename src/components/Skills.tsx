import { motion } from "framer-motion";
import {
  Shield, Cloud, Zap, Target,
  Box, Skull, ExternalLink,
  Terminal, Cpu, Activity, Info
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    id: "offensive",
    title: "Offensive Operations",
    subtitle: "Red Team & Exploitation",
    icon: Shield,
    skills: [
      { name: "Penetration Testing", level: 95 },
      { name: "Metasploit", level: 90 },
      { name: "Burp Suite Pro", level: 85 },
      { name: "Nmap Scanning", level: 95 },
      { name: "Exploit Dev", level: 75 },
      { name: "Social Engineering", level: 80 }
    ]
  },
  {
    id: "coding",
    title: "Programming / Dev",
    subtitle: "Automation & Tooling",
    icon: Terminal,
    skills: [
      { name: "Python", level: 92 },
      { name: "Bash / Zsh", level: 95 },
      { name: "Java (Spring)", level: 80 },
      { name: "Rust / Go", level: 70 },
      { name: "JavaScript", level: 88 },
      { name: "Tool Automation", level: 90 }
    ]
  },
  {
    id: "cloud",
    title: "Infrastucture",
    subtitle: "Cloud & Network Security",
    icon: Cloud,
    skills: [
      { name: "AWS Security", level: 85 },
      { name: "Docker Hardening", level: 90 },
      { name: "Kubernetes Sec", level: 75 },
      { name: "API Security", level: 88 },
      { name: "Linux Admin", level: 95 },
      { name: "CI/CD Security", level: 82 }
    ]
  }
];

const platforms = [
  {
    name: "TryHackMe",
    stat: "Global Top 1%",
    url: "https://tryhackme.com/p/cybok",
    icon: Target,
    accent: "text-red-500",
  },
  {
    name: "HackTheBox",
    stat: "Hacker Tier",
    url: "https://app.hackthebox.com/profile/cybok10",
    icon: Box,
    accent: "text-emerald-500",
  },
  {
    name: "Kali Linux",
    stat: "Level: Advanced",
    url: "https://www.kali.org/",
    icon: Skull,
    accent: "text-blue-500",
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-black pb-40">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-1/2 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container-custom relative z-10 w-full">

        <div className="flex flex-col xl:flex-row justify-between gap-16 items-end mb-32">
          <div className="xl:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black text-xs uppercase tracking-[0.5em] flex items-center gap-5"
            >
              <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg">Sector 02</div>
              Technical Arsenal
            </motion.div>
            <h2 className="text-6xl md:text-[7rem] font-display font-black tracking-tighter text-white leading-[0.9] italic">
               SKILL <span className="text-primary not-italic">INTELLIGENCE.</span>
            </h2>
          </div>
          <div className="xl:w-1/3 space-y-6">
            <p className="text-xl text-zinc-500 font-medium leading-relaxed italic">
              "A specialized architecture designed for low-latency exploitation and robust system isolation."
            </p>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary opacity-50">
               <Activity className="w-4 h-4" /> Neural Link Active
            </div>
          </div>
        </div>
  
        {/* 1. Technical Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative p-12 bg-[#0a0a1a] border border-white/5 rounded-[3rem] hover:border-primary/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700" />
              
              <div className="relative z-10 space-y-12">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-black group-hover:border-black transition-all duration-500 shadow-2xl">
                    <cat.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-black text-white tracking-tight leading-none mb-2">{cat.title}</h3>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">
                      {cat.subtitle}
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                        <span className="text-zinc-400 group-hover:text-white transition-colors">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden p-[2px]">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Label */}
              <div className="absolute bottom-6 right-10 text-[8px] font-black text-zinc-800 uppercase tracking-[0.5em] origin-right -rotate-90">
                Unit_Protocol_0{i+1}
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* 2. Operational Platforms */}
        <div className="mt-40 pt-24 border-t border-white/5">
          <div className="flex items-center justify-between mb-20">
             <div className="space-y-3">
               <h3 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter italic">LIVE COMMANDS</h3>
               <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">Operational Validation Nodes</p>
             </div>
             <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-primary to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className="group relative p-10 bg-[#070715] border border-white/5 rounded-[2.5rem] flex items-center justify-between hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                <div className="flex items-center gap-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center ${platform.accent} group-hover:bg-primary group-hover:text-black transition-all duration-500`}>
                    <platform.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-black text-white tracking-tight mb-1">{platform.name}</h4>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary italic opacity-70 group-hover:opacity-100 transition-opacity">
                      {platform.stat}
                    </span>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-600 group-hover:text-primary group-hover:border-primary group-hover:bg-black transition-all duration-500 relative z-10">
                  <ExternalLink className="w-6 h-6" />
                </div>
                
                {/* Hover Reveal Grid */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"
                     style={{ backgroundImage: 'linear-gradient(90deg, var(--primary) 1px, transparent 1px), linear-gradient(180deg, var(--primary) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}