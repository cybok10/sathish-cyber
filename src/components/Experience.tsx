import { motion } from "framer-motion";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Penetration Testing Intern",
    company: "Cyber Nerd",
    period: "Aug 2025 - Oct 2025",
    description: "Ethical Hacking and System Hardening. Conducted vulnerability assessments and penetration testing on web applications to identify critical security flaws.",
    tools: ["Burp Suite", "Nmap", "Metasploit", "OWASP ZAP"]
  },
  {
    title: "Ethical Hacking Intern",
    company: "Internship Studio",
    period: "Jun 2024 - Aug 2024",
    description: "Vulnerability assessments and digital footprinting. Executed penetration tests on controlled environments, documenting findings and remediation strategies.",
    tools: ["Kali Linux", "SQLMap", "Wireshark", "Python"]
  },
  {
    title: "Security Intern",
    company: "The Red Users",
    period: "Nov 2024 - Dec 2024",
    description: "Threat analysis and security research. Assisted in implementing security controls and incident response protocols for simulated attack vectors.",
    tools: ["Wazuh", "Linux", "Security Analysis"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom relative z-10 w-full">

        <div className="flex flex-col xl:flex-row justify-between gap-16 items-end mb-24 border-b border-white/5 pb-16">
          <div className="xl:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black text-xs uppercase tracking-[0.4em] flex items-center gap-4"
            >
              <div className="w-12 h-[2px] bg-primary" />
              Operational History
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight text-foreground leading-[1.05]">
              Strategic <br /> <span className="text-primary italic">Milestones.</span>
            </h2>
          </div>
          <p className="xl:w-1/3 text-lg text-muted-foreground font-medium opacity-70 leading-relaxed">
            A track record of identifying vulnerabilities and architecturing secure infrastructure in active environments.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Spine - Clean & Minimal */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 md:-translate-x-px" />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-10 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] z-20" />

                {/* Content Area */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'}`}>
                  <div className="glass-card p-10 group border-white/5 hover:border-primary/20 transition-all duration-500">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="px-4 py-1.5 rounded-lg bg-secondary text-primary text-xs font-black uppercase tracking-widest border border-white/5">
                          {exp.period}
                        </span>
                        <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs opacity-50">
                          <Briefcase className="w-3 h-3" />
                          EXP_{index + 1}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-display font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-bold text-foreground/60 italic tracking-tight">
                          {exp.company}
                        </p>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                        {exp.tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="secondary"
                            className="px-4 py-1.5 rounded-xl bg-primary/5 text-muted-foreground border-transparent hover:text-primary hover:bg-primary/10 transition-all duration-300 text-[10px] font-black uppercase tracking-widest"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty Spacer for desktop staggered layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}