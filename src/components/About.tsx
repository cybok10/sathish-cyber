import { motion } from "framer-motion";
import { MapPin, Mail, Phone, User, GraduationCap, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "B.E. CSE",
    institution: "Dhanalakshmi Srinivasan Engineering College",
    details: "CGPA: 9.3 (Autonomous), 2022 - Present",
    year: "2022-Present"
  },
  {
    degree: "HSC",
    institution: "St. Joseph's Matric. Hr. Sec. School",
    details: "Grade: 89%, 2020 - 2022",
    year: "2020-2022"
  }
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About</span> <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Bio & Personal Info (Span 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Bio Card */}
            <div className="glass-card p-8 h-full relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <User className="w-32 h-32 text-primary" />
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Who I Am</h3>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10">
                I am a passionate Computer Science student with a strong foundation in Python development 
                and cybersecurity fundamentals. Hands-on experience in scripting, automation, secure coding 
                practices, and vulnerability assessment.
              </p>

              {/* Tech Stack Pills (Visual decoration) */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {['Python', 'Cybersecurity', 'Automation', 'React'].map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <a 
                href="mailto:sathish1012cybok@gmail.com"
                className="glass-card p-6 flex items-start gap-4 hover:border-primary/40 transition-all cursor-pointer group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="text-sm font-semibold text-foreground truncate max-w-[150px] sm:max-w-full">sathish1012cybok@gmail.com</p>
                </div>
              </a>

              <div className="glass-card p-6 flex items-start gap-4 hover:border-primary/40 transition-all group">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-sm font-semibold text-foreground">+91 95971 24881</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4 hover:border-primary/40 transition-all sm:col-span-2 group">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm font-semibold text-foreground">Viluppuram, Tamil Nadu, India</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Education Timeline (Span 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-12 relative pl-2">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.2) }}
                    viewport={{ once: true }}
                    className="relative pl-8 group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-background bg-primary z-10 group-hover:scale-125 transition-transform duration-300" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <Badge variant="outline" className="w-fit mt-1 sm:mt-0 text-[10px] border-primary/20 bg-primary/5">
                        {edu.year || "2020 - Present"}
                      </Badge>
                    </div>
                    
                    <p className="text-base font-medium text-muted-foreground mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground/80 bg-white/5 p-3 rounded-lg border border-white/5 inline-block">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}