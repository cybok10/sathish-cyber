import { useState, useEffect } from "react";
import { Shield, Menu, X, Moon, Sun, Map, Zap, Terminal, Sword, Activity, Archive } from "lucide-react"; // Added Sword, Activity, Archive
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    handleNavClick(`#${id}`);
  };

  const isHomePage = location.pathname === "/";

  const renderNavLink = (link: typeof navLinks[0], isMobile = false) => {
    const baseClasses = isMobile
      ? "flex items-center justify-between px-4 py-3 text-foreground hover:bg-foreground/5 rounded-xl transition-colors w-full"
      : "px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-all rounded-full hover:bg-foreground/5";

    if (link.href.startsWith("/")) {
      return (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className={baseClasses}
        >
          {link.label}
        </Link>
      );
    }

    if (!isHomePage) {
      return (
        <Link
          key={link.href}
          to={`/${link.href}`}
          onClick={() => setIsMobileMenuOpen(false)}
          className={baseClasses}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        key={link.href}
        href={link.href}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(link.href);
        }}
        className={baseClasses}
      >
        {link.label}
      </a>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          w-full max-w-[1600px] rounded-3xl transition-all duration-500 ease-out
          ${isScrolled
            ? "bg-background/60 backdrop-blur-xl border border-white/5 shadow-2xl py-2"
            : "bg-transparent py-6"
          }
        `}
      >
        <div className="px-8 md:px-12 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-5 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary transition-all duration-500 shadow-xl group-hover:bg-primary group-hover:text-primary-foreground transform group-hover:scale-105">
              <Shield className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-black tracking-tight group-hover:text-primary transition-colors">
                SATHISH <span className="text-primary italic">M.</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground leading-none opacity-50">Operational Intel</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {[
              { name: "About", to: "about" },
              { name: "Skills", to: "skills" },
              { name: "Experience", to: "experience" },
              { name: "Projects", to: "projects" },
              { name: "Certifications", to: "certifications" },
              { name: "Contact", to: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.to)}
                className="relative px-5 py-2 text-sm font-black text-muted-foreground hover:text-foreground transition-all group tracking-tight"
              >
                {item.name}
                <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}

            <div className="w-[1px] h-6 bg-white/5 mx-4" />

            <Link
              to="/attack-lab"
              className={`relative px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all rounded-xl flex items-center gap-2 group
                ${location.pathname.startsWith('/attack-lab')
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5 border border-transparent hover:border-white/5"
                }
              `}
            >
              <Sword className="w-4 h-4" />
              <span>Lab</span>
            </Link>

            <Link
              to="/blog"
              className={`relative px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all rounded-xl flex items-center gap-2 group
                ${location.pathname.startsWith('/blog')
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5 border border-transparent hover:border-white/5"
                }
              `}
            >
              <Activity className="w-4 h-4" />
              <span>Blog</span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all border border-white/5 shadow-inner"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link to="/resources">
              <button className={`h-14 px-8 text-xs font-black uppercase tracking-widest rounded-2xl transition-all mr-2
                ${location.pathname === '/resources'
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20"
                  : "bg-secondary text-primary hover:bg-primary hover:text-primary-foreground border border-white/5"
                }
              `}>
                Archives
              </button>
            </Link>

            <Link to="/roadmap">
              <button className={`h-14 px-8 text-xs font-black uppercase tracking-widest rounded-2xl transition-all
                ${location.pathname === '/roadmap'
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20"
                  : "bg-secondary text-primary hover:bg-primary hover:text-primary-foreground border border-white/5"
                }
              `}>
                Roadmap
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-foreground"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-foreground/5 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-card border border-border shadow-2xl animate-in slide-in-from-top-2 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => renderNavLink(link, true))}

              {/* Mobile Attack Lab */}
              <Link
                to="/attack-lab"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-bold text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <Sword className="w-4 h-4" /> Attack Lab
                </span>
              </Link>

              {/* Mobile Blog */}
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-bold text-primary bg-primary/10 border border-primary/20 rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Intelligence Logs
                </span>
                <Zap className="w-4 h-4 animate-pulse" />
              </Link>

              <div className="h-px bg-border my-2" />

              <Link
                to="/resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 text-primary-foreground font-bold bg-secondary text-primary rounded-xl mb-2"
              >
                <Archive size={16} />
                Cyber Archives
              </Link>

              <Link
                to="/roadmap"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 text-primary-foreground font-bold bg-primary rounded-xl"
              >
                <Map className="w-4 h-4" />
                Career Roadmap
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}