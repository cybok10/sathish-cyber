import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, BookOpen, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LatestBlogPopup() {
  const [isVisible, setIsVisible] = useState(false);

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed bottom-6 left-6 z-[9990] flex items-end"
      >
        <div className="relative group">
          
          {/* Close Button (Hover to see) */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-background border border-border rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg"
          >
            <X className="w-3 h-3 text-muted-foreground" />
          </button>

          {/* Card Content */}
          <Link to="/blog">
            <div className="
              flex items-center gap-4 p-4 pr-6
              bg-background/80 backdrop-blur-xl 
              border border-primary/20 
              rounded-2xl shadow-2xl shadow-primary/10
              hover:bg-background/90 hover:scale-105 hover:border-primary/50
              transition-all duration-300 cursor-pointer
            ">
              {/* Animated Icon Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-md opacity-20 animate-pulse" />
                <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  New Intelligence
                </span>
                <span className="text-sm font-bold text-foreground flex items-center gap-1">
                  Read Latest Blog
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-primary" />
                </span>
              </div>
            </div>
          </Link>
          
        </div>
      </motion.div>
    </AnimatePresence>
  );
}