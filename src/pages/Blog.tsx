import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ArrowRight, Calendar, Search, FileText, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// --- IMPORT THE DATA FROM THE NEW FILE ---
import { blogPosts } from "@/data/BlogPosts";

const categories = ["All", "Career", "Ethical Hacking", "Security", "Networking"];

export default function Blog() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-foreground relative overflow-hidden font-sans selection:bg-primary/30">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <Navbar />
      
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container-custom relative z-10 max-w-7xl mx-auto px-4">
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-widest uppercase">Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
              Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Intelligence</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Documenting my journey through the offensive and defensive realms of cybersecurity.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-primary transition-colors" />
              </div>
              <Input
                type="text"
                placeholder="Search intelligence database..."
                className="pl-11 h-14 bg-white/5 border-white/10 focus:border-primary/50 text-lg rounded-xl backdrop-blur-sm transition-all shadow-lg focus:shadow-primary/10 text-white placeholder:text-zinc-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === category
                      ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                      : "bg-white/5 text-zinc-400 border-white/10 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.article
                  layout
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex justify-between items-start mb-6">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                        {post.category}
                      </Badge>
                      <span className="text-[10px] font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded bg-black/40 uppercase tracking-wide">
                        {post.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-white/10 space-y-4 mt-auto">
                      <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                        <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</div>
                        <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</div>
                      </div>
                      <button 
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="w-full py-2.5 rounded-lg bg-white/5 text-white text-sm font-semibold border border-white/10 hover:bg-primary hover:border-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        Access Protocol
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}