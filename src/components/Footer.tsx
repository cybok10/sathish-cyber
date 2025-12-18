import { Shield, Github, Linkedin, Mail, Heart, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-background pt-16 pb-8 overflow-hidden">
      
      {/* Background Pattern (Hex Grid) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Sathish M
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Securing the digital frontier through offensive security operations and intelligent defense systems.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-500 uppercase tracking-wider">
                System Operational
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" /> Navigation
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Projects', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Socials */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/cybok10" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-white/5 -ml-2">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/sathish-m-cybok" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-white/5 -ml-2">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:sathish1012cybok@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-white/5 -ml-2">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Initiate Protocol</h3>
            <p className="text-xs text-muted-foreground mb-4">
              Ready to secure your infrastructure? Start the conversation today.
            </p>
            <Button 
              className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 shadow-none"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Sathish M. All protocols secured.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Designed with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in the Cyber Grid
          </p>
        </div>
      </div>
    </footer>
  );
}