import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Penetration Testing Intern",
    company: "Cyber Nerd",
    period: "Aug 2025 - Oct 2025",
    description: "Ethical Hacking and System Hardening. Conducted vulnerability assessments and penetration testing on web applications.",
    tools: ["Burp Suite", "Nmap", "Metasploit", "OWASP ZAP"]
  },
  {
    title: "Ethical Hacking Intern",
    company: "Internship Studio",
    period: "Jun 2024 - Aug 2024",
    description: "Vulnerability assessments and digital footprinting. Executed penetration tests on controlled environments.",
    tools: ["Kali Linux", "SQLMap", "Wireshark", "Python"]
  },
  {
    title: "Intern",
    company: "The Red Users",
    period: "Nov 2024 - Dec 2024",
    description: "Threat analysis and security research. Assisted in implementing security controls and incident response.",
    tools: ["Wazuh", "Linux", "Security Analysis"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-card/50 cyber-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">$</span> Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-4 ring-4 ring-background shadow-[0_0_15px_hsl(180_100%_50%_/_0.5)]" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card-hover p-5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-xs neon-text font-mono">{exp.period}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary/80 font-medium text-sm mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.tools.slice(0, 3).map((tool) => (
                        <span 
                          key={tool}
                          className="px-2 py-0.5 text-xs bg-primary/10 border border-primary/30 rounded text-primary font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                      {exp.tools.length > 3 && (
                        <span className="px-2 py-0.5 text-xs text-muted-foreground">+{exp.tools.length - 3}</span>
                      )}
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