import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Search, Filter, Bookmark, Star, Zap, 
  ArrowRight, Terminal as TerminalIcon, 
  ChevronRight, Brain, History, ExternalLink,
  Shield, Laptop, Book, Globe, Youtube, 
  Gamepad, Newspaper, User, MessageSquare, 
  Archive, Lock, Code, Network, Bug, Target, Activity,
  Cpu, Database, Flame, Share2, Info, Menu, X, Plus,
  Send, Bot, List, Workflow, Layers, Map as MapIcon,
  Bell, Settings, Command, Binary, FileText
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resources, CATEGORIES, Resource } from "@/data/cyberResources";
import { cn } from "@/lib/utils";

// --- Advanced UI Components ---

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-[#020205] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, y: Math.random() * 100 + "%", x: Math.random() * 100 + "%" }}
            animate={{ 
              y: [null, Math.random() * 100 + "%"],
              x: [null, Math.random() * 100 + "%"],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020205]/50 to-[#020205]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,153,0.05)_0%,transparent_70%)]" />
    </div>
  );
};

const CyberBorder = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("relative group p-[1px] overflow-hidden rounded-2xl", className)}>
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
    <div className="relative bg-[#0a0a1a]/80 backdrop-blur-xl rounded-2xl overflow-hidden h-full">
      {children}
    </div>
    <div className="absolute top-0 right-0 w-20 h-[1px] bg-gradient-to-l from-primary to-transparent" />
    <div className="absolute bottom-0 left-0 w-20 h-[1px] bg-gradient-to-r from-primary to-transparent" />
  </div>
);

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: "GREETINGS_OPERATOR. I am Cypher-LLM. How can I assist your operation today?"}
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setChat(prev => [...prev, {role: 'user', text: message}]);
    
    // Simulate thinking
    setTimeout(() => {
      let response = "INTERPRETING_QUERY... Accessing Syndicate Archives.";
      if (message.toLowerCase().includes("web")) {
        response = "RECOMMENDATION: Based on #web targets, I suggest utilizing Burp Suite + ffuf for parameter fuzzing, followed by sqlmap for database extraction.";
      } else if (message.toLowerCase().includes("cert")) {
        response = "OSCP is currently the highest-rated practical certification for offsec roles. Security+ is recommended for baseline clearance.";
      }
      setChat(prev => [...prev, {role: 'bot', text: response}]);
    }, 1000);
    setMessage("");
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[60]">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="h-16 w-16 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.4)] relative"
        >
          <Bot size={32} />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full border-2 border-primary" 
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 w-96 h-[500px] z-[60]"
          >
            <CyberBorder className="h-full border border-primary/20">
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest text-primary">Cypher-Assistant v2.0</span>
                  </div>
                  <button onClick={() => setIsOpen(false)}><X size={16} className="text-zinc-500" /></button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-hide">
                  {chat.map((c, i) => (
                    <div key={i} className={cn(
                      "p-3 rounded-lg text-xs leading-relaxed max-w-[85%]",
                      c.role === 'user' ? "bg-primary/10 text-primary self-end ml-auto" : "bg-white/5 text-zinc-300"
                    )}>
                      {c.text}
                    </div>
                  ))}
                </div>

                <div className="relative mt-auto">
                  <Input 
                    placeholder="Enter command or query..."
                    className="bg-white/5 border-primary/20 pr-10 text-xs placeholder:text-zinc-600 focus:border-primary transition-all"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </CyberBorder>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const TagIntelligence = ({ activeTags, onToggleTag }: { activeTags: string[]; onToggleTag: (tag: string) => void }) => {
  const tags = ["#redteam", "#blueteam", "#web", "#network", "#forensics", "#ai", "#cloud", "#mobile"];
  
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onToggleTag(tag.replace('#', ''))}
          className={cn(
            "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border",
            activeTags.includes(tag.replace('#', '')) 
              ? "bg-primary text-black border-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]" 
              : "bg-white/5 text-zinc-500 border-white/5 hover:border-primary/50 hover:text-primary"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

// --- Main Components ---

const ResourceCard = ({ 
  resource, 
  onBookmark, 
  isBookmarked 
}: { 
  resource: Resource; 
  onBookmark: (id: string) => void;
  isBookmarked: boolean;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
    >
      <CyberBorder className="group h-full relative border border-white/5">
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-black group-hover:rotate-12">
                <resource.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                  {resource.name}
                </h3>
                <p className="text-[10px] text-primary/50 font-black uppercase tracking-[0.2em]">{resource.category.replace('_', ' ')}</p>
              </div>
            </div>
            <button 
              onClick={() => onBookmark(resource.id)}
              className={cn(
                "h-10 w-10 flex items-center justify-center rounded-full transition-all border border-transparent hover:bg-white/10",
                isBookmarked ? "text-yellow-500 bg-yellow-500/10" : "text-zinc-500"
              )}
            >
              <Bookmark size={18} fill={isBookmarked ? "currentColor" : "none"} />
            </button>
          </div>

          <p className="mb-8 text-sm text-zinc-400 leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
            "{resource.description}"
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="outline" className={cn(
              "text-[9px] font-black uppercase border-primary/20",
              resource.difficulty === "Beginner" && "text-emerald-400 bg-emerald-400/5",
              resource.difficulty === "Intermediate" && "text-amber-400 bg-amber-400/5",
              resource.difficulty === "Advanced" && "text-rose-400 bg-rose-400/5"
            )}>
              {resource.difficulty}
            </Badge>
            <Badge variant="secondary" className="text-[9px] font-black uppercase bg-white/5 text-zinc-300">
              {resource.type}
            </Badge>
            {resource.trending && (
              <Badge className="text-[9px] font-black uppercase bg-primary/20 text-primary border-primary/20">
                <Zap size={10} className="mr-1 fill-current animate-pulse" /> Trending
              </Badge>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
            <div className="flex gap-2">
              {resource.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[9px] text-zinc-600 font-mono font-bold hover:text-primary transition-colors cursor-default tracking-tighter">#{tag}</span>
              ))}
            </div>
            <a 
              href={resource.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors group/link"
            >
              Access Intel <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </CyberBorder>
    </motion.div>
  );
};

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDifficulty, setActiveDifficulty] = useState("all");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'hub' | 'workflow' | 'map'>('hub');

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const saved = localStorage.getItem("cyber_bench_bookmarks");
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  const toggleBookmark = (id: string) => {
    const newBookmarks = bookmarks.includes(id) 
      ? bookmarks.filter(b => b !== id)
      : [...bookmarks, id];
    setBookmarks(newBookmarks);
    localStorage.setItem("cyber_bench_bookmarks", JSON.stringify(newBookmarks));
  };

  const toggleTag = (tag: string) => {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const filteredResources = useMemo(() => {
    return resources.filter(res => {
      const matchesSearch = 
        res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = activeCategory === "all" || res.category === activeCategory;
      const matchesDifficulty = activeDifficulty === "all" || (res.difficulty as string) === activeDifficulty;
      const matchesTags = activeTags.length === 0 || activeTags.some(t => res.tags.some(rt => rt.toLowerCase().includes(t)));

      return matchesSearch && matchesCategory && matchesDifficulty && matchesTags;
    });
  }, [searchQuery, activeCategory, activeDifficulty, activeTags]);

  return (
    <div className="min-h-screen bg-[#020205] text-white selection:bg-primary selection:text-black font-sans relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <AIAssistant />

      <main ref={containerRef} className="container mx-auto px-4 pt-40 pb-40">
        
        {/* Futuristic Header */}
        <div className="mb-24 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-2 mb-12"
          >
            <Shield size={16} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">
              Syndicate Core Archives v4.6
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter italic mb-8 relative inline-block">
            <span className="relative z-10">Cyber Intelligence</span>
            <span className="block text-primary not-italic">Vault.</span>
            <motion.div 
              className="absolute -inset-4 bg-primary/5 blur-[80px] -z-10 rounded-full"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </h1>
          
          <p className="max-w-3xl mx-auto text-zinc-500 text-xl italic font-medium leading-relaxed">
            "The global standard for professional cybersecurity intelligence. Access vetted tools, advanced research, and real-world attack vectors."
          </p>

          <div className="mt-16 flex justify-center gap-8">
            {[
              { id: 'hub', label: 'Archival Hub', icon: Database },
              { id: 'workflow', label: 'Attack Builder', icon: Workflow },
              { id: 'map', label: 'Infrastructure Map', icon: MapIcon }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2",
                  activeTab === tab.id 
                    ? "bg-primary text-black border-primary shadow-[0_10px_30px_rgba(var(--primary),0.2)]" 
                    : "bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10"
                )}
              >
                <tab.icon size={18} /> {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'hub' ? (
          <div className="space-y-12">
            {/* Command Bar */}
            <div className="sticky top-28 z-50 flex flex-col xl:flex-row gap-6 bg-[#020205]/80 backdrop-blur-2xl p-6 rounded-3xl border border-white/5 shadow-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
                <Input 
                  placeholder="EXEC_SCAN: Search tools, CVEs, GitHub repos, or research papers..."
                  className="h-16 border-2 border-primary/20 bg-primary/5 pl-16 rounded-2xl focus:ring-4 focus:ring-primary/10 text-white placeholder:text-zinc-600 font-bold uppercase tracking-widest text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-16 items-center gap-2 bg-white/5 rounded-2xl p-2 border border-white/5">
                  {["all", "Beginner", "Intermediate", "Advanced"].map(diff => (
                    <button
                      key={diff}
                      onClick={() => setActiveDifficulty(diff)}
                      className={cn(
                        "h-full px-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                        activeDifficulty === diff ? "bg-primary text-black" : "text-zinc-500 hover:text-white"
                      )}
                    >
                      {diff}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => alert("Daily Feed: Shodan detected 14k new industrial controllers online...")}
                  className="h-16 flex items-center gap-3 px-6 rounded-2xl bg-white/5 border border-white/5 text-zinc-400 hover:text-primary transition-all"
                >
                  <Bell size={20} className="animate-bounce" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest">Daily Ticker</span>
                    <span className="text-[9px] text-zinc-600 font-bold">LATEST_VULNS + NEWS</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16">
              {/* Intelligent Sidebar */}
              <aside className="lg:w-80 space-y-12">
                <div>
                  <h3 className="mb-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                    <List size={16} className="text-primary" /> Sector Archives
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => setActiveCategory("all")}
                      className={cn(
                        "flex items-center justify-between px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all",
                        activeCategory === "all" ? "bg-primary/20 text-primary border border-primary/20 shadow-lg" : "text-zinc-500 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span className="flex items-center gap-3"><TerminalIcon size={16} /> All Sectors</span>
                      <span className="opacity-40 text-[9px]">{resources.length}</span>
                    </button>
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                          "flex items-center justify-between px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all",
                          activeCategory === cat.id ? "bg-primary/20 text-primary border border-primary/20" : "text-zinc-500 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <span className="flex items-center gap-3"><cat.icon size={16} /> {cat.name}</span>
                        <span className="opacity-40 text-[9px]">{resources.filter(r => r.category === cat.id).length}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                    <Layers size={16} className="text-secondary" /> Tag Intelligence
                  </h3>
                  <TagIntelligence activeTags={activeTags} onToggleTag={toggleTag} />
                </div>

                <CyberBorder className="p-8 bg-black/40">
                  <Flame className="mb-4 text-orange-500" size={32} />
                  <h4 className="mb-2 text-sm font-black uppercase italic tracking-widest">Gamification Active</h4>
                  <p className="text-[10px] leading-relaxed text-zinc-500 font-bold">
                    EXPLORATION_XP: <span className="text-orange-500">74%</span> to next level.
                    Search 5 more #ai resources to unlock the 'Neural Hunter' badge.
                  </p>
                  <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "74%" }}
                      className="h-full bg-orange-500" 
                    />
                  </div>
                </CyberBorder>
              </aside>

              {/* Resource Vault */}
              <div className="flex-1">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                       <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                       <span className="text-[10px] font-black text-primary uppercase tracking-widest">System Online</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-black italic uppercase tracking-tighter">
                      {activeCategory === "all" ? "Strategic Archives" : CATEGORIES.find(c => c.id === activeCategory)?.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                    <span>{filteredResources.length} Classified Nodes</span>
                    <div className="h-px w-20 bg-white/5" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {filteredResources.map((res) => (
                      <ResourceCard 
                        key={res.id} 
                        resource={res} 
                        onBookmark={toggleBookmark}
                        isBookmarked={bookmarks.includes(res.id)}
                      />
                    ))}
                  </AnimatePresence>
                </div>

                {filteredResources.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-40 text-center">
                    <div className="mb-12 rounded-[3rem] bg-white/5 border border-white/5 p-12">
                      <Search size={80} className="text-zinc-800" />
                    </div>
                    <h3 className="text-3xl font-black mb-4 italic uppercase outline-text">NO_NODES_LOCATED</h3>
                    <p className="text-zinc-600 font-bold italic max-w-sm mb-12 uppercase tracking-widest text-xs">"The archives are silent. Adjust your spectral signature or clearing level."</p>
                    <Button 
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("all");
                        setActiveDifficulty("all");
                        setActiveTags([]);
                      }}
                      className="h-16 px-12 rounded-2xl bg-primary text-black font-black uppercase tracking-[0.2em]"
                    >
                      Reset All Protocols
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : activeTab === 'workflow' ? (
          <div className="py-20 text-center">
            <CyberBorder className="p-20 max-w-4xl mx-auto border-2 border-primary/20">
              <Workflow size={80} className="mx-auto text-primary mb-12 animate-pulse" />
              <h2 className="text-5xl font-display font-black italic uppercase mb-6 tracking-tighter">Attack Workflow <span className="text-primary not-italic">Builder.</span></h2>
              <p className="text-zinc-500 text-lg mb-12 font-medium italic">"Construct complex operation chains. Select your recon node, scanning protocol, and exploit phase to generate tactical commands."</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                {[
                  { title: "Stage 01: Recon", tools: ["subfinder", "amass", "shodan"], color: "blue" },
                  { title: "Stage 02: Analysis", tools: ["httpx", "ffuf", "nuclei"], color: "primary" },
                  { title: "Stage 03: Exploit", tools: ["sqlmap", "metasploit", "evilginx"], color: "red" }
                ].map((stage, i) => (
                  <div key={i} className="space-y-4">
                    <div className="text-[10px] font-black uppercase text-zinc-600 tracking-widest">{stage.title}</div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                      {stage.tools.map(tool => (
                        <div key={tool} className="flex items-center justify-between text-xs font-bold text-zinc-400">
                          {tool} <Plus size={12} className="cursor-pointer hover:text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-zinc-950 rounded-2xl border border-white/10 font-mono text-xs text-left text-zinc-500 overflow-hidden relative">
                 <div className="flex items-center gap-2 mb-4 text-primary opacity-50"><Code size={14} /> CHAIN_OUTPUT:</div>
                 <code>$ subfinder -d target.com | httpx -sc -td | nuclei -t vulnerabilities/</code>
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
              </div>
              
              <Badge className="mt-12 bg-primary/20 text-primary border-primary/20 px-4 py-2 uppercase font-black text-[10px] tracking-widest">Advanced Feature: Locked for Junior Members</Badge>
            </CyberBorder>
          </div>
        ) : (
          <div className="py-20 text-center">
             <CyberBorder className="p-20 max-w-6xl mx-auto border-2 border-secondary/20">
              <MapIcon size={80} className="mx-auto text-secondary mb-12" />
              <h2 className="text-5xl font-display font-black italic uppercase mb-6 tracking-tighter">Visual Attack <span className="text-secondary not-italic">Mapper.</span></h2>
              <p className="text-zinc-500 text-lg mb-16 font-medium italic">"Visualize the global infrastructure and identify weak points in real-time."</p>
              
              <div className="aspect-video bg-zinc-900/50 rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                   transition={{ repeat: Infinity, duration: 10 }}
                   className="relative z-10 p-12 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
                 >
                   <Settings size={64} className="text-zinc-700 animate-spin-slow" />
                 </motion.div>
                 <div className="absolute bottom-8 left-8 flex gap-4">
                    {[1, 2, 3, 4].map(i => <div key={i} className="h-10 w-10 bg-white/5 border border-white/5 rounded-lg animate-pulse" />)}
                 </div>
              </div>
              <Badge className="mt-12 bg-secondary/20 text-secondary border-secondary/20 px-4 py-2 uppercase font-black text-[10px] tracking-widest">Experimental Feature: Integrating Real-Time APIs</Badge>
            </CyberBorder>
          </div>
        )}

      </main>

      {/* Decorative Overlays */}
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none -z-20" />
      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none" />
    </div>
  );
}
