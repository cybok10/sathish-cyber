import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Certified Penetration Testing",
    issuer: "RedTeam Hacker Academy",
    date: "Ongoing"
  },
  {
    title: "Advanced Ethical Hacking",
    issuer: "GUVI",
    date: "Oct 2025"
  },
  {
    title: "Cybersecurity and Ethical Hacking",
    issuer: "Internship Studio",
    date: "Aug 2024"
  },
  {
    title: "Wireshark & Metasploit",
    issuer: "Infosys Springboard",
    date: "Dec 2024"
  },
  {
    title: "Diploma in C & C++ Programming",
    issuer: "TCEDS",
    date: "Sep 2022"
  },
  {
    title: "Linux, Network Security, Nmap",
    issuer: "Udemy",
    date: "2024"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-background via-card/20 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">📜</span> Certifications
          </h2>
          <p className="text-muted-foreground text-lg">Professional Credentials & Qualifications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              
              <div className="glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.15)]">
                {/* Date Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 px-4 py-1.5 rounded-full text-xs font-bold text-primary group-hover:scale-110 transition-transform">
                  {cert.date}
                </div>

                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 w-fit mb-6"
                >
                  <Award className="w-7 h-7 text-secondary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-3 text-muted-foreground text-sm flex-grow">
                  <div className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                  <span className="group-hover:text-foreground transition-colors">{cert.issuer}</span>
                </div>
                
                {/* Divider and status */}
                <div className="mt-6 pt-6 border-t border-border/30">
                  <motion.div 
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary text-xs font-semibold flex items-center gap-1"
                  >
                    ✓ Verified <span>→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}