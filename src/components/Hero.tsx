import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const roles = [
  "Cybersecurity Researcher",
  "Ethical Hacker",
  "Penetration Tester",
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid pt-16 md:pt-0">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(180_100%_50%_/_0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(270_60%_60%_/_0.06),_transparent_50%)]" />
      
      {/* Floating particles effect */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary/50 rounded-full animate-pulse animation-delay-200" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse animation-delay-400" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[calc(100vh-120px)]">
            {/* Left: Text Content */}
            <motion.div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
              {/* Greeting */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="text-3xl">👋</span>
                <span className="text-lg text-muted-foreground font-medium">Hi, I'm Sathish M</span>
              </motion.div>

              {/* Name */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-mono leading-tight"
              >
                <span className="text-foreground">Sathish</span>{" "}
                <span className="gradient-text">M</span>
              </motion.h1>

              {/* Static Role */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium"
              >
                Certified Penetration Tester | Ethical Hacker
              </motion.p>

              {/* Typewriter Effect */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-12 flex items-center"
              >
                <span className="text-lg md:text-xl neon-text font-mono bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {">"} {displayText}
                  <span className="animate-pulse ml-1 text-primary">_</span>
                </span>
              </motion.div>

              {/* Tagline */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
              >
                Securing the digital world through offensive security and intelligent automation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-8"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:shadow-[0_0_40px_hsl(180_100%_50%_/_0.6)] font-semibold px-8 transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Sathish_M_Resume.pdf';
                    link.click();
                  }}
                >
                  Download Resume ↓
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary/90 font-semibold px-8 transition-all duration-300 hover:scale-105 transform"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me →
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Hero Image with Tech Icons Orbiting */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center order-1 md:order-2"
            >
              <div className="hero-image-container relative w-96 h-96 flex items-center justify-center">
                {/* Purple gradient background glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/40 via-primary/30 to-secondary/20 blur-3xl animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl animate-pulse animation-delay-300" />
                
                {/* Main avatar circle with purple gradient border */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-secondary via-primary to-secondary shadow-2xl neon-border"
                  style={{
                    borderImage: 'linear-gradient(135deg, hsl(270 60% 50%), hsl(180 100% 50%), hsl(270 60% 50%)) 1'
                  }}
                >
                  <img 
                    src="https://via.placeholder.com/300/1a1a2e/00ffff?text=Sathish+M" 
                    alt="Sathish M" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Tech Icons Orbiting - 9 positions */}
                {/* Icon 1 - Top */}
                <motion.div 
                  className="icon icon-1 absolute w-14 h-14 rounded-lg glass-card bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(120_100%_50%_/_0.6)]"
                  style={{ top: '-10px', left: '50%', transform: 'translateX(-50%)' }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">🔐</span>
                </motion.div>

                {/* Icon 2 - Top Right */}
                <motion.div 
                  className="icon icon-2 absolute w-14 h-14 rounded-lg glass-card bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(210_100%_50%_/_0.6)]"
                  style={{ top: '30px', right: '-10px' }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  animate={{ x: [0, 5, 0], y: [0, -3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }}
                >
                  <span className="text-2xl">⚙️</span>
                </motion.div>

                {/* Icon 3 - Right */}
                <motion.div 
                  className="icon icon-3 absolute w-14 h-14 rounded-lg glass-card bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/30 p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(180_100%_50%_/_0.6)]"
                  style={{ top: '50%', right: '-10px', transform: 'translateY(-50%)' }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
                >
                  <span className="text-2xl">🐍</span>
                </motion.div>

                {/* Icon 4 - Bottom Right */}
                <motion.div 
                  className="icon icon-4 absolute w-14 h-14 rounded-lg glass-card bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(270_100%_50%_/_0.6)]"
                  style={{ bottom: '30px', right: '-10px' }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  animate={{ x: [0, 5, 0], y: [0, 3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
                >
                  <span className="text-2xl">🎨</span>
                </motion.div>

                {/* Icon 5 - Bottom */}
                <motion.div 
                  className="icon icon-5 absolute w-14 h-14 rounded-lg glass-card bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(30_100%_50%_/_0.6)]"
                  style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)' }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                >
                  <span className="text-2xl">📱</span>
                </motion.div>

                {/* Icon 6 - Bottom Left */}
                <motion.div 
                  className="icon icon-6 absolute w-14 h-14 rounded-lg glass-card bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(0_100%_50%_/_0.6)]"
                  style={{ bottom: '30px', left: '-10px' }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  animate={{ x: [-5, 0, -5], y: [0, 3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
                >
                  <span className="text-2xl">🛡️</span>
                </motion.div>

                {/* Icon 7 - Left */}
                <motion.div 
                  className="icon icon-7 absolute w-14 h-14 rounded-lg glass-card bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(45_100%_50%_/_0.6)]"
                  style={{ top: '50%', left: '-10px', transform: 'translateY(-50%)' }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  animate={{ x: [-5, 0, -5] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>

                {/* Icon 8 - Top Left */}
                <motion.div 
                  className="icon icon-8 absolute w-14 h-14 rounded-lg glass-card bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-500/30 p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(340_100%_50%_/_0.6)]"
                  style={{ top: '30px', left: '-10px' }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  animate={{ x: [-5, 0, -5], y: [0, -3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }}
                >
                  <span className="text-2xl">🔧</span>
                </motion.div>

                {/* Icon 9 - Center Top (Badge) */}
                <motion.div 
                  className="icon icon-9 absolute w-16 h-16 rounded-lg glass-card bg-gradient-to-br from-primary/30 to-secondary/20 border-2 border-primary/50 p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(180_100%_50%_/_0.6)]"
                  style={{ top: '10px', right: '30px' }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: 0.8 }}
                >
                  <span className="text-2xl">🎯</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary/50 hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}