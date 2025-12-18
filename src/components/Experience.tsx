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
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          
          {/* Central Gradient Spine (Desktop) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node (Center) */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-2 border-primary z-20 shadow-[0_0_10px_hsl(var(--primary))]">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" />
                </div>

                {/* Spacer for Desktop Layout Balance */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className={`md:w-1/2 pl-6 md:pl-0 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}>
                  <div className="glass-card p-6 md:p-8 relative group hover:border-primary/30 transition-colors">
                    
                    {/* Decorative Corner Accent */}
                    <div className={`absolute top-0 w-20 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent ${
                       index % 2 === 0 ? 'left-0' : 'right-0'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-secondary" />
                      <span className="font-medium text-foreground">{exp.company}</span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <Badge 
                          key={tool} 
                          variant="secondary" 
                          className="bg-secondary/5 text-secondary border-secondary/20 hover:bg-secondary/10 transition-colors"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}