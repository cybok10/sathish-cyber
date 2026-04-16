import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Server, Wifi, Terminal, ShieldAlert, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SkillPath AI",
    description: "An intelligent career roadmap and workforce planning platform leveraging Generative AI, Machine Learning, and NLP to provide personalized career guidance and identify skill gaps.",
    icon: Brain,
    tech: ["GenAI", "Machine Learning", "NLP", "Data Analytics"],
    github: "#",
    demo: "#",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    title: "AI-driven NIDS",
    description: "Intelligent Network Intrusion Detection System using Machine Learning algorithms to detect network anomalies and potential security threats in real-time.",
    icon: ShieldAlert,
    tech: ["Python", "Scikit-learn", "Snort", "Pandas", "ML"],
    github: "#",
    demo: "#",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20"
  },
  {
    title: "Centralized Log Monitoring",
    description: "Enterprise-grade log monitoring solution built on Google Cloud Platform with Wazuh SIEM for comprehensive security event management and alerting.",
    icon: Server,
    tech: ["GCP", "Wazuh SIEM", "Elasticsearch", "Docker"],
    github: "#",
    demo: "#",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    title: "WiFi Jammer Project",
    description: "Educational project demonstrating wireless network disruption techniques for understanding WiFi security vulnerabilities and defense mechanisms.",
    icon: Wifi,
    tech: ["Python", "Linux", "Wireless Security", "Scapy"],
    github: "#",
    demo: "#",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
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
              Development Portfolio
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight text-foreground leading-[1.05]">
              Featured <br /> <span className="text-primary italic">Operations.</span>
            </h2>
          </div>
          <p className="xl:w-1/3 text-lg text-muted-foreground font-medium opacity-70 leading-relaxed">
            A showcase of technical implementations and security-focused development projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full group"
            >
              <div className="glass-card flex-1 flex flex-col group border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden">
                {/* Visual Header - Minimal & Technical */}
                <div className="h-64 bg-secondary/30 relative flex items-center justify-center overflow-hidden border-b border-white/5 group-hover:bg-primary/[0.03] transition-colors duration-700">
                  <div className="absolute inset-0 opacity-[0.05] bg-[size:25px_25px] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]" />

                  {/* Minimal Icon Presentation */}
                  <div className="relative z-10 w-28 h-28 rounded-3xl bg-background border border-white/5 flex items-center justify-center shadow-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:-translate-y-2">
                    <project.icon className="w-12 h-12" />
                  </div>

                  {/* Subtle Label Overlay */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-background/50 backdrop-blur-sm border border-white/10 text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Deployment active
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-10 flex flex-col flex-grow space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-display font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack - Refined Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1 rounded-lg bg-secondary text-muted-foreground border-transparent hover:text-primary hover:bg-primary/10 transition-all duration-300 text-[10px] font-black uppercase tracking-widest"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Links - Clean Modern Buttons */}
                  <div className="pt-8 border-t border-white/5 flex items-center gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-black bg-secondary text-foreground rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/5"
                    >
                      <Github className="w-4 h-4" />
                      Archive
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-black bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Console
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}