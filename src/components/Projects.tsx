import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Server, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-driven NIDS",
    description: "Intelligent Network Intrusion Detection System using Machine Learning algorithms to detect network anomalies and potential security threats in real-time.",
    icon: Brain,
    tech: ["Python", "Scikit-learn", "Snort", "Pandas", "ML"],
    github: "#",
    demo: "#"
  },
  {
    title: "Centralized Log Monitoring",
    description: "Enterprise-grade log monitoring solution built on Google Cloud Platform with Wazuh SIEM for comprehensive security event management and alerting.",
    icon: Server,
    tech: ["GCP", "Wazuh SIEM", "Elasticsearch", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "WiFi Jammer Project",
    description: "Educational project demonstrating wireless network disruption techniques for understanding WiFi security vulnerabilities and defense mechanisms.",
    icon: Wifi,
    tech: ["Python", "Linux", "Wireless Security", "Scapy"],
    github: "#",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">./</span>Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Innovative security and development projects showcasing expertise in penetration testing, network security, and full-stack development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              
              <div className="glass-card-hover p-8 flex flex-col h-full rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 neon-border group-hover:animate-glow-pulse transition-all"
                  >
                    <project.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-mono">Project</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 font-mono group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary/10 border border-secondary/30 rounded text-secondary font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 hover:border-primary/50 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}