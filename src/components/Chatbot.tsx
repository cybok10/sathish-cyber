import { useState, useRef, useEffect, useMemo } from "react";
import { MessageSquare, X, Send, Shield, Terminal, Lock, Activity, Server, Search, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ============================== EXTENDED KNOWLEDGE MAPPING ============================== */

const KNOWLEDGE_GRAPH = [
  {
    category: "IDENTITY",
    keywords: ["who", "about", "sathish", "profile", "identity", "background", "bio", "experience"],
    response: "SUBJECT: Sathish M. ROLE: Certified Penetration Tester & Security Analyst. EXPERTISE: Offensive Security, Vulnerability Research, and Red Team Operations. Currently focused on cloud-native security and adversary simulation.",
    suggestions: ["View Technical Stack", "Download Resume"]
  },
  {
    category: "ARSENAL",
    keywords: ["skills", "stack", "tools", "tech", "languages", "programming", "python", "java", "kali", "nmap", "burp"],
    response: "TECHNICAL ARSENAL LOADED:\n\n• OFFENSIVE: Metasploit, Burp Suite Pro, Nmap, Wireshark, SQLMap\n• DEVELOPMENT: Python (Automation), Java (Spring Boot), Bash Scripting, React\n• DEFENSIVE: Wazuh SIEM, Wireshark, Linux Hardening, API Security Assessments.",
    suggestions: ["Recent Projects", "Security Certs"]
  },
  {
    category: "OPERATIONS",
    keywords: ["project", "work", "portfolio", "build", "developed", "experience", "mission", "report"],
    response: "MISSION REPORTS (ACTIVE): \n1. PHISH-PRO: Advanced phishing simulation framework.\n2. AGRI-SEC: IoT security layer for smart farming.\n3. CLOUD-SOC: SIEM deployment using Wazuh on GCP.\n4. AUTO-SCAN: Custom vulnerability scanner using Python/Bash.",
    suggestions: ["Contact for Collaboration", "Identity Bio"]
  },
  {
    category: "METHODOLOGY",
    keywords: ["how", "process", "method", "way", "approach", "pentest", "vulnerability"],
    response: "SECURITY METHODOLOGY:\n1. RECONNAISSANCE: Passive/Active data gathering.\n2. ENUMERATION: Identifying attack vectors.\n3. EXPLOITATION: Controlled access gain.\n4. REMEDIATION: Providing strategic defense patches.",
    suggestions: ["Technical Stack", "Contact"]
  },
  {
    category: "COMMS",
    keywords: ["hire", "contact", "email", "reach", "message", "call", "location", "connect"],
    response: "SECURE COMMUNICATION ESTABLISHED:\n• EMAIL: sathish1012cybok@gmail.com\n• LOCATION: Chennai, India (Available for Global Remote Operations)\n• STATUS: Open for Security Consultations and Roles.",
    suggestions: ["Download Resume", "Main Menu"]
  }
];

/* ============================== COMPONENT LOGIC ============================== */

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Cybok_OS Intelligence v3.0.0 Online. Secure link active.", timestamp: Date.now() }
  ]);
  
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Scoring Engine to detect intent from multi-word questions
  const analyzeInput = (text: string) => {
    const raw = text.toLowerCase();
    let topMatch = null;
    let highScore = 0;

    KNOWLEDGE_GRAPH.forEach(node => {
      let score = 0;
      node.keywords.forEach(key => {
        if (raw.includes(key)) score += 2; // Exact keyword match
      });
      if (score > highScore) {
        highScore = score;
        topMatch = node;
      }
    });

    return topMatch || { 
      response: "Instruction unclear. Please use technical keywords (e.g., 'Skills', 'Methodology', 'Contact') or check the system menu.", 
      suggestions: ["Identity Bio", "Technical Stack", "Contact"] 
    };
  };

  const executeCommand = (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), sender: "user", text, timestamp: Date.now() }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const match = analyzeInput(text);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: "bot", 
        text: match.response, 
        suggestions: match.suggestions,
        timestamp: Date.now() 
      }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[1000]">
        <Button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`h-14 w-14 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 border-0 ${isOpen ? "bg-red-500/80 rotate-90" : "bg-primary shadow-primary/40"}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 animate-pulse" />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="fixed bottom-24 right-6 w-[380px] md:w-[440px] h-[600px] bg-[#050508]/95 border border-primary/20 rounded-3xl shadow-2xl z-[1000] flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Tactical Header */}
            <header className="p-5 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                   <div className="absolute inset-0 bg-primary/20 blur-md rounded-full animate-pulse" />
                   <div className="relative p-2 rounded-xl bg-primary/10 border border-primary/40">
                    <Activity className="w-4 h-4 text-primary" />
                   </div>
                </div>
                <div>
                  <h3 className="text-white text-xs font-black font-mono tracking-widest uppercase italic">Cybok Core Intelligence</h3>
                  <div className="flex items-center gap-2">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[9px] text-emerald-500 font-mono tracking-widest">ENCRYPTED_SESSION_STABLE</span>
                  </div>
                </div>
              </div>
              <Server className="w-3.5 h-3.5 text-slate-600" />
            </header>

            {/* Scrolling Chat Interface */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05)_0%,transparent_70%)]">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[88%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-lg ${
                    m.sender === "user" 
                    ? "bg-primary text-white rounded-tr-none border border-white/10" 
                    : "bg-white/5 border border-white/10 text-slate-300 rounded-tl-none font-mono"
                  }`}>
                    {m.sender === "bot" && <div className="text-[10px] text-primary/60 mb-2 border-b border-white/5 pb-1">INTERNAL_INTEL_LOG</div>}
                    <p className="whitespace-pre-wrap">{m.text}</p>
                    
                    {/* Dynamic Suggestions */}
                    {m.suggestions && (
                      <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-white/5">
                        {m.suggestions.map((s) => (
                          <button 
                            key={s} 
                            onClick={() => executeCommand(s)}
                            className="text-[10px] px-3 py-1.5 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/20 hover:border-primary transition-all text-primary font-bold tracking-tighter"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 items-center ml-2 text-primary">
                  <span className="text-[10px] font-mono animate-pulse uppercase tracking-widest">Parsing Command...</span>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Terminal Command Input */}
            <footer className="p-4 bg-white/5 border-t border-white/10">
              <div className="flex gap-2 p-1 bg-black/40 rounded-xl border border-white/10 focus-within:border-primary/50 transition-colors">
                <div className="flex items-center pl-3">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                </div>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && executeCommand(input)}
                  className="bg-transparent border-none text-white text-xs h-10 focus-visible:ring-0 placeholder:text-slate-600"
                  placeholder="Execute query (e.g., 'What are your skills?')..."
                />
                <Button 
                  onClick={() => executeCommand(input)} 
                  size="icon" 
                  className="h-10 w-10 shrink-0 bg-primary hover:bg-primary/90 rounded-lg shadow-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}