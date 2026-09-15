import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Terminal, ShieldCheck, Database, Github, Linkedin, Target, Cpu, Lock, Network } from "lucide-react";

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
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    if (!modelRef.current) return;

    const viewer = document.createElement("model-viewer");
    viewer.setAttribute("src", "https://modelviewer.dev/shared-assets/models/Astronaut.glb");
    viewer.setAttribute("alt", "Interactive 3D astronaut representing a futuristic cybersecurity operator");
    viewer.setAttribute("camera-controls", "");
    viewer.setAttribute("auto-rotate", "");
    viewer.setAttribute("rotation-per-second", "18deg");
    viewer.setAttribute("shadow-intensity", "1.2");
    viewer.setAttribute("exposure", "1.1");
    viewer.setAttribute("environment-image", "https://modelviewer.dev/shared-assets/environments/moon_1k.hdr");
    viewer.style.width = "100%";
    viewer.style.height = "100%";
    viewer.style.background = "transparent";
    viewer.style.setProperty("--poster-color", "transparent");

    modelRef.current.replaceChildren(viewer);
    return () => modelRef.current?.replaceChildren();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] -mr-40 -mt-40 animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -ml-20 -mb-20 animate-pulse-soft" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="xl:col-span-7 flex flex-col space-y-12">
            <div className="space-y-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 text-primary font-black text-xs uppercase tracking-[0.4em]">
                <div className="w-12 h-[2px] bg-primary shadow-[0_0_18px_rgba(var(--primary-rgb),.8)]" />
                Strategic Cybersecurity Operations
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-[4.5rem] md:text-[8rem] font-black tracking-tighter leading-[0.85] text-foreground">
                  Sathish <span className="text-gradient italic">M.</span>
                </h1>
                <div className="pt-6">
                  <span className="text-2xl md:text-4xl font-bold text-muted-foreground/70 tracking-tight leading-none">
                    Certified Penetration Tester <br />& Security Researcher
                  </span>
                </div>
              </div>

              <div className="glass-card w-fit px-5 py-3 flex items-center gap-4">
                <Terminal className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-lg font-mono text-foreground font-bold">root@cybok:~# <span className="text-primary">{displayText}</span><span className="animate-pulse ml-1 text-primary">_</span></span>
              </div>

              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-medium">
                Advanced offensive security specializing in system hardening, exploit development, and autonomous defense architectures.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center pt-2">
              <button className="modern-button h-16 px-10 text-lg" onClick={() => { const link = document.createElement('a'); link.href = '/resume.pdf'; link.download = 'Sathish_M_Resume.pdf'; link.click(); }}>
                <Download className="mr-3 h-5 w-5" /> Download Protocol
              </button>
              <button className="modern-button-outline h-16 px-10 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Direct Uplink</button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              {[
                { Icon: Github, href: "https://github.com/cybok10", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/amsathish", label: "LinkedIn" },
                { Icon: Target, href: "https://tryhackme.com/p/cybok", label: "TryHackMe" },
                { Icon: Mail, href: "mailto:sathish1012cybok@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass-card !rounded-2xl p-3 text-muted-foreground hover:text-primary hover:-translate-y-1">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .2 }} className="xl:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[600px] aspect-square">
              <div className="absolute inset-0 rounded-full border border-primary/20 shadow-[0_0_120px_rgba(var(--primary-rgb),.16)] animate-[spin_28s_linear_infinite]" />
              <div className="absolute inset-[9%] rounded-full border border-dashed border-accent/25 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-[18%] rounded-full bg-primary/5 blur-2xl" />

              <div className="absolute inset-[5%] rounded-[3rem] glass-card overflow-hidden border-primary/20">
                <div ref={modelRef} className="absolute inset-0 z-10" />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_35%,rgba(var(--primary-rgb),.08)_75%,transparent)]" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 via-transparent to-primary/10" />
              </div>

              {[{ Icon: ShieldCheck, label: 'SECURE', pos: 'top-6 -right-4', delay: 0 }, { Icon: Cpu, label: 'AI CORE', pos: 'bottom-16 -left-8', delay: .4 }, { Icon: Lock, label: 'E2EE', pos: 'top-1/2 -right-12', delay: .8 }, { Icon: Network, label: 'NET OPS', pos: 'bottom-4 right-10', delay: 1.1 }].map(({ Icon, label, pos, delay }) => (
                <motion.div key={label} initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay }} whileHover={{ scale: 1.08, rotate: 3 }} className={`absolute ${pos} z-20 glass-card !rounded-2xl px-4 py-3 flex items-center gap-2 border-primary/25 animate-float`}>
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-[10px] font-black tracking-[.2em]">{label}</span>
                </motion.div>
              ))}

              <div className="absolute -top-8 -left-8 w-32 h-32 border-l-2 border-t-2 border-primary/30 rounded-tl-[3rem]" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-r-2 border-b-2 border-accent/30 rounded-br-[3rem]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group flex flex-col items-center gap-3" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-px h-24 bg-gradient-to-b from-primary via-primary/50 to-transparent animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary opacity-50 group-hover:opacity-100">Scroll</span>
      </div>
    </section>
  );
}
