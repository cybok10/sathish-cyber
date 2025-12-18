import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, Download, Mail, Terminal, Shield, Cpu, 
  Lock, Code, Database, ShieldCheck, Github, Linkedin, Target 
} from "lucide-react";


const roles = [
  "Certified Penetration Tester",
  "Cybersecurity Researcher",
  "Ethical Hacker",
  "Automation Engineer"
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-secondary/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow delay-1000" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[95%] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-100px)]">
          
          {/* LEFT: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8 order-2 lg:order-1 text-center lg:text-left pl-0 lg:pl-10"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Available for Projects
              </div>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium flex items-center justify-center lg:justify-start gap-3">
                Hello, I'm
              </h2>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="text-foreground">Sathish</span>{" "}
                <span className="text-gradient">M</span>
              </h1>
            </div>

            {/* Highlighted Title */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                 <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <span className="text-2xl md:text-4xl font-bold text-foreground">
                Certified Penetration Tester
              </span>
            </motion.div>

            {/* Typewriter Role */}
            <div className="h-10 md:h-14 flex items-center justify-center lg:justify-start">
              <span className="text-xl md:text-2xl font-mono text-muted-foreground">
                <span className="text-primary mr-3">&gt;</span>
                Specializing in: <span className="text-foreground font-semibold">{displayText}</span>
                <span className="animate-pulse ml-1 text-primary">_</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Securing the digital frontier through offensive security, vulnerability research, and intelligent automation. I turn complex security challenges into robust defense systems.
            </p>

            {/* SOCIAL ICONS (Added Here) */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-2">
              <a 
                href="https://github.com/cybok10" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/amsathish" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 text-muted-foreground hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://tryhackme.com/p/cybok" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/50 text-muted-foreground hover:text-red-500 transition-all duration-300 hover:-translate-y-1"
                aria-label="TryHackMe"
              >
                <Target className="w-6 h-6" />
              </a>
              <a 
                href="mailto:sathish1012cybok@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 text-muted-foreground hover:text-purple-500 transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="h-14 text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Sathish_M_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-3 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 text-lg px-8 border-primary/20 bg-primary/5 text-foreground hover:bg-primary/10 hover:border-primary/40 backdrop-blur-sm transition-all hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Terminal className="mr-3 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Visuals (Your Original Static Design) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center items-center relative"
          >
            <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
              {/* Static Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-100" />
              <div className="absolute inset-12 rounded-full border border-secondary/20 scale-95" />
              <div className="absolute inset-24 rounded-full border border-primary/10 scale-90" />

              {/* Center Avatar */}
              <div className="absolute inset-0 m-auto w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden glass-card z-20 p-3 shadow-2xl shadow-primary/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-background relative">
                   <img 
                    src="/avatar.png" 
                    alt="Sathish M" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-50"></div>
                </div>
              </div>

              {/* Floating Icons */}
              {[
                { Icon: Shield, color: "text-emerald-400", bg: "bg-emerald-400/10", top: "5%", left: "50%" },
                { Icon: Terminal, color: "text-blue-400", bg: "bg-blue-400/10", top: "20%", right: "10%" },
                { Icon: Lock, color: "text-purple-400", bg: "bg-purple-400/10", bottom: "30%", right: "0%" },
                { Icon: Code, color: "text-orange-400", bg: "bg-orange-400/10", bottom: "5%", left: "60%" },
                { Icon: Database, color: "text-cyan-400", bg: "bg-cyan-400/10", bottom: "20%", left: "5%" },
                { Icon: Cpu, color: "text-red-400", bg: "bg-red-400/10", top: "20%", left: "10%" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card flex items-center justify-center ${item.bg} border border-white/10 shadow-lg backdrop-blur-md z-30`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{ 
                    top: item.top, 
                    left: item.left, 
                    right: item.right, 
                    bottom: item.bottom 
                  }}
                >
                  <item.Icon className={`w-8 h-8 ${item.color}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
      </motion.div>

    </section>
  );
}