import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              © 2025 <span className="text-foreground font-medium">Sathish M</span> — Cybersecurity Portfolio
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Built with passion for security
          </p>
        </div>
      </div>
    </footer>
  );
}
