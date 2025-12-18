import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Certified Penetration Testing",
    issuer: "RedTeam Hacker Academy",
    date: "Ongoing",
    id: "CPT-2025-X82",
    status: "In Progress"
  },
  {
    title: "Advanced Ethical Hacking",
    issuer: "GUVI",
    date: "Oct 2025",
    id: "AEH-8821-V2",
    status: "Completed"
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    issuer: "Internship Studio",
    date: "Aug 2024",
    id: "CSEH-2024-001",
    status: "Completed"
  },
  {
    title: "Wireshark & Metasploit",
    issuer: "Infosys Springboard",
    date: "Dec 2024",
    id: "INF-WM-992",
    status: "Completed"
  },
  {
    title: "Diploma in C & C++ Programming",
    issuer: "TCEDS",
    date: "Sep 2022",
    id: "TCEDS-DEV-22",
    status: "Completed"
  },
  {
    title: "Linux, Network Security, Nmap",
    issuer: "Udemy",
    date: "2024",
    id: "UDMY-SEC-24",
    status: "Completed"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

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
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Authorized credentials and technical qualifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Card */}
              <div className="glass-card p-1 h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-background/40 h-full rounded-xl p-6 relative overflow-hidden flex flex-col">
                  
                  {/* Top Decoration Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                  {/* Header: Icon & Date */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-primary shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="border-white/10 bg-white/5 text-xs font-mono">
                      {cert.date}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="mb-6 flex-grow">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <ShieldCheck className="w-4 h-4 text-secondary/70" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Footer: ID & Verified Status */}
                  <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Credential ID</span>
                      <span className="text-xs font-mono text-primary/80">{cert.id}</span>
                    </div>
                    
                    {cert.status === "Ongoing" ? (
                       <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] font-medium text-yellow-500">
                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                         In Progress
                       </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-500">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}