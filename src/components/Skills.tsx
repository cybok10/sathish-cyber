import { motion } from "framer-motion";
import { 
  Shield, Cloud, Zap, Target, 
  Box, Skull, ExternalLink, 
  Terminal, Cpu
} from "lucide-react";

const skillCategories = [
  {
    id: "offensive",
    title: "Offensive Operations",
    subtitle: "Red Team & Exploitation",
    icon: Shield,
    color: "from-red-500 to-orange-600",
    shadow: "shadow-red-500/20",
    border: "group-hover:border-red-500/50",
    iconColor: "text-red-400",
    skills: [
      "Penetration Testing", "Metasploit", "Burp Suite Pro", 
      "Nmap Scanning", "Wireshark", "SQL Injection", 
      "XSS Payloads", "Privilege Escalation", "Social Engineering"
    ]
  },
  {
    id: "coding",
    title: "Programming & Scripting",
    subtitle: "Automation & Backend",
    icon: Terminal,
    color: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20",
    border: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
    skills: [
      "Python (Automation)", "Bash Scripting", "Java (Spring Boot)", 
      "C / C++", "JavaScript", "Tool Development", 
      "Regex", "PowerShell", "Git Version Control"
    ]
  },
  {
    id: "cloud",
    title: "Cloud & App Security",
    subtitle: "Container & API Defense",
    icon: Cloud,
    color: "from-blue-500 to-cyan-600",
    shadow: "shadow-blue-500/20",
    border: "group-hover:border-blue-500/50",
    iconColor: "text-blue-400",
    skills: [
      "Cloud Pentesting", "API Pentesting", "Docker Security", 
      "Container Breakouts", "AWS Security Basics", "Postman", 
      "Microservices Security", "CI/CD Pipeline Security", "Linux Admin"
    ]
  }
];

const platforms = [
  {
    name: "TryHackMe",
    stat: "Top 1% Rank",
    url: "https://tryhackme.com/p/cybok",
    icon: Target,
    accent: "text-red-500",
    bg: "hover:bg-red-500/10",
    border: "hover:border-red-500/50"
  },
  {
    name: "HackTheBox",
    stat: "Hacker Rank",
    url: "https://app.hackthebox.com/profile/cybok10",
    icon: Box,
    accent: "text-emerald-500",
    bg: "hover:bg-emerald-500/10",
    border: "hover:border-emerald-500/50"
  },
  {
    name: "Kali Linux",
    stat: "Daily Driver",
    url: "https://www.kali.org/",
    icon: Skull,
    accent: "text-blue-500",
    bg: "hover:bg-blue-500/10",
    border: "hover:border-blue-500/50"
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden pb-40">
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] -z-10" />

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cpu className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase">System Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deployed tools and methodologies for offensive operations, secure coding, and cloud infrastructure assessments.
          </p>
        </motion.div>

        {/* 1. High-Tech Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`
                group relative overflow-hidden rounded-2xl bg-background/40 backdrop-blur-xl 
                border border-white/10 ${cat.border} transition-all duration-500 
                hover:-translate-y-2 hover:shadow-2xl ${cat.shadow}
              `}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color}`} />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{cat.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {cat.subtitle}
                    </p>
                  </div>
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${cat.iconColor}`}>
                    <cat.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="
                        relative px-3 py-1.5 text-xs font-medium text-muted-foreground 
                        rounded-md bg-white/5 border border-white/5
                        hover:text-foreground hover:border-white/20 hover:bg-white/10 
                        transition-all duration-300 cursor-default
                      "
                    >
                      <span className="flex items-center gap-1.5">
                        <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${cat.color}`} />
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* 2. Training Platforms Section - FIXED MARGINS & OVERLAP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mt-32 z-20"
        >
          {/* Section Divider / Title */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden="true">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#0a0a0f] px-6 text-[10px] font-mono text-muted-foreground uppercase tracking-[0.4em]">
                Live Training Nodes
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {platforms.map((platform) => (
              <a 
                key={platform.name}
                href={platform.url}
                target="_blank" 
                rel="noreferrer"
                className={`
                  group flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.03] 
                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer
                  ${platform.border} ${platform.bg} backdrop-blur-md
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg bg-background border border-white/10 ${platform.accent} group-hover:scale-110 transition-transform`}>
                    <platform.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{platform.name}</div>
                    <div className={`text-[10px] font-mono ${platform.accent} uppercase tracking-tight`}>
                      {platform.stat}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}