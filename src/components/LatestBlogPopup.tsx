import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Radio, ArrowRight, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LatestBlogPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup automatically after 2.5 seconds
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 max-w-[340px] w-full md:w-auto"
        >
           {/* Cyber UI Container */}
           <div className="relative bg-[#0a0a0f]/90 backdrop-blur-xl border border-primary/30 p-[1px] rounded-xl shadow-[0_0_40px_rgba(var(--primary),0.2)] overflow-hidden group">
              
              {/* Animated Scanline Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 animate-pulse" />

              <div className="relative p-5 rounded-xl bg-black/60">
                
                {/* Header Row */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">Incoming Intel</span>
                  </div>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-zinc-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-1 mb-5">
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Hands-On with Nmap: Network Scanning
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    Master enumeration techniques and understand how attackers see your network.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link to="/blog/hands-on-with-nmap" className="flex-1">
                    <button className="w-full group flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-bold py-2.5 rounded-lg transition-all hover:shadow-[0_0_15px_rgba(var(--primary),0.4)]">
                      <Terminal className="w-3 h-3" />
                      READ PROTOCOL
                    </button>
                  </Link>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="px-3 py-2.5 rounded-lg border border-white/10 text-xs font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    DISMISS
                  </button>
                </div>

              </div>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}