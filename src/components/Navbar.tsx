import { useState, useEffect } from "react";
import { Shield, Menu, X, Moon, Sun, Map, Zap, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

// Removed "Blog" from here to handle it separately
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

  const isHomePage = location.pathname === "/";

  // Helper to render the correct link type
  const renderNavLink = (link: typeof navLinks[0], isMobile = false) => {
    const baseClasses = isMobile 
      ? "flex items-center justify-between px-4 py-3 text-foreground hover:bg-foreground/5 rounded-xl transition-colors w-full"
      : "px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-all rounded-full hover:bg-foreground/5";

    // 1. If it's a specific Route, use standard Link
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

    // 2. If we are NOT on Home, and it's an anchor (#about), link to /#about
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

    // 3. If we ARE on Home, use scroll behavior
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
          w-full max-w-7xl rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isScrolled 
            ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg py-2" 
            : "bg-background/40 backdrop-blur-md border border-white/5 py-4"
          }
        `}
      >
        <div className="px-6 md:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link 
              to="/"
              className="flex items-center gap-3 group"
              onClick={(e) => { 
                if(isHomePage) { 
                  e.preventDefault(); 
                  handleNavClick("#home"); 
                } 
              }}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Sathish <span className="text-primary">M</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-background/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-border">
            {navLinks.map((link) => renderNavLink(link, false))}

            {/* Special BLOG Link with "Intelligence" Style */}
            <Link 
              to="/blog"
              className={`relative ml-2 px-4 py-2 text-sm font-bold transition-all rounded-full flex items-center gap-2 group
                ${location.pathname.startsWith('/blog') 
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.4)]" 
                  : "text-primary bg-primary/10 hover:bg-primary/20"
                }
              `}
            >
              <span>Blog</span>
              {/* Pulsing Dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full hover:bg-foreground/10 text-foreground"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <div className="h-6 w-px bg-border" />

            {/* Roadmap Button */}
            <Link to="/roadmap">
              <Button
                size="sm"
                className="gap-2 rounded-full px-5 h-10 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all border-none"
              >
                <Map className="w-4 h-4" />
                Roadmap
              </Button>
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-card border border-border shadow-2xl animate-in slide-in-from-top-2 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => renderNavLink(link, true))}
              
              {/* Mobile Blog Link */}
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-bold text-primary bg-primary/10 border border-primary/20 rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Access Intelligence Logs
                </span>
                <Zap className="w-4 h-4 animate-pulse" />
              </Link>

              <div className="h-px bg-border my-2" />

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