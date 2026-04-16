import { motion } from "framer-motion";
import { Mail, User, GraduationCap, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Dhanalakshmi Srinivasan Engineering College , Perambalur",
    details: "Focusing on Distributed Systems, Cloud Architecture, and Security.",
    year: "2022 — 2026",
    cgpa: "8.65"
  }
];

export function About() {
  return (
    <section id="about" className="section-padding overflow-hidden relative bg-background">
      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col xl:flex-row justify-between gap-16 items-start">           {/* LEFT: Intro Header */}
          <div className="xl:w-1/3 flex flex-col space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight text-foreground leading-[1.05]">
              Strategic <br />
              <span className="text-primary italic">Intelligence.</span>
            </h2>
            <div className="w-20 h-2 bg-primary" />
            <p className="text-lg text-muted-foreground font-medium max-w-sm leading-relaxed">
              Bridging the gap between complex security architectures and actionable offensive operations.
            </p>
          </div>

          {/* RIGHT: Detailed Bio & Info */}
          <div className="xl:w-2/3 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-12 space-y-12"
            >
              <div className="glass-card p-12 group">
                <div className="flex items-center gap-6 mb-12 border-b border-white/5 pb-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                    <User className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-display font-black tracking-tight">Biography</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                    I am a results-driven <span className="text-foreground font-bold">Cybersecurity Analyst</span> with a strong focus on offensive security and real-world attack simulation. My work centers on identifying vulnerabilities, analyzing attack surfaces, and strengthening systems against evolving cyber threats.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                    I specialize in <span className="text-foreground font-bold">Penetration Testing</span>, <span className="text-foreground font-bold">Web Application Security</span>, and <span className="text-foreground font-bold">AI-powered Security Solutions</span>. I have built and implemented tools such as vulnerability scanners, phishing simulation platforms, and AI-based intrusion detection systems to enhance proactive defense strategies.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-12">
                  {['Pentesting', 'SecOps', 'Python', 'Exploit Dev', 'Cloud Security', 'Threat Hunting'].map((tag) => (
                    <Badge key={tag} className="px-5 py-2.5 rounded-xl bg-secondary/50 text-foreground border-border font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm cursor-default text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a
                  href="mailto:sathish1012cybok@gmail.com"
                  className="glass-card p-10 group flex items-start gap-6 hover:border-primary/30"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">Primary Uplink</h4>
                    <p className="text-lg font-bold text-foreground">sathish1012cybok@gmail.com</p>
                  </div>
                </a>

                <div className="glass-card p-10 group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">Location Intel</h4>
                    <p className="text-lg font-bold text-foreground">Viluppuram, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Education Highlight - Modern Layout */}
        <div className="mt-32 border-t border-white/5 pt-20">
          <div className="flex items-center gap-6 mb-16">
            <GraduationCap className="w-12 h-12 text-primary" />
            <h3 className="text-3xl md:text-5xl font-display font-black tracking-tight">Academic Foundations</h3>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
            {education.map((edu, index) => (
              <div key={index} className="xl:col-span-12">
                <div className="glass-card p-10 flex flex-col md:flex-row gap-10 items-center justify-between group">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                      <span className="px-5 py-2 rounded-lg bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">{edu.year}</span>
                      <span className="text-muted-foreground font-mono text-xs">CGPA: {edu.cgpa}</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-display font-black text-foreground group-hover:text-primary transition-colors">{edu.degree}</h4>
                    <p className="text-lg text-muted-foreground font-medium">{edu.institution}</p>
                    <p className="text-base text-muted-foreground opacity-60 mt-2 max-w-xl leading-relaxed">{edu.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}