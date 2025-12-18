import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";

interface HackerTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function HackerText({ text, className = "", speed = 30 }: HackerTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current as NodeJS.Timeout);
    
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      iteration += 1 / 3;
    }, speed);
  };

  // Run on mount
  useEffect(() => {
    startScramble();
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  return (
    <motion.span 
      className={`inline-block font-mono ${className}`}
      onMouseEnter={startScramble} // Re-scramble on hover
    >
      {displayText}
    </motion.span>
  );
}