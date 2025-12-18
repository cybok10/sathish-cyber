import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Server, Wifi, Terminal, ShieldAlert, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI-driven NIDS",
    description: "Intelligent Network Intrusion Detection System using Machine Learning algorithms to detect network anomalies and potential security threats in real-time.",
    icon: Brain,
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
    <section id="projects" className="section-padding relative overflow-hidden">
      
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
            Featured <span className="text-gradient">Operations</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
             Advanced security systems and automation tools built for defense and analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="glass-card h-full flex flex-col overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                
                {/* Mock Terminal Header (Visual Interest) */}
                <div className="h-32 bg-black/40 border-b border-white/5 p-4 flex flex-col justify-between relative overflow-hidden group-hover:bg-black/60 transition-colors">
                  
                  {/* Window Controls */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>

                  {/* Icon & Status */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className={`p-2 rounded-lg ${project.bg} ${project.border} border`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                       <Activity className="w-3 h-3 animate-pulse text-primary" />
                       Running
                    </div>
                  </div>

                  {/* Code Grid Background Pattern */}
                  <div className="absolute inset-0 opacity-10" 
                       style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                  />
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-primary/5 text-primary/90 border-primary/10 hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 gap-2 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 shadow-none"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
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