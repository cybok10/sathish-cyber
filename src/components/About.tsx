import { motion } from "framer-motion";
import { MapPin, Mail, Phone, User, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E. CSE",
    institution: "Dhanalakshmi Srinivasan Engineering College",
    details: "CGPA: 9.3 (Autonomous), 2022 - Present"
  },
  {
    degree: "HSC",
    institution: "St. Joseph's Matric. Hr. Sec. School",
    details: "Grade: 89%, 2020 - 2022"
  }
];

export function About() {
  return (
    <section id="about" className="section-padding bg-card/50 cyber-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">{"<"}</span>About Me<span className="text-primary">{" />"}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* About Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 neon-border">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground font-mono">Who I Am</h3>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am a passionate Computer Science student with a strong foundation in Python development 
              and cybersecurity fundamentals. Hands-on experience in scripting, automation, secure coding 
              practices, and vulnerability assessment.
            </p>

            <div className="space-y-3">
              <a 
                href="mailto:sathish1012cybok@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-all group"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">sathish1012cybok@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91 95971 24881</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Viluppuram, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/30">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground font-mono">Education</h3>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-primary rounded-full" />
                  <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary/80 font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mt-1">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}