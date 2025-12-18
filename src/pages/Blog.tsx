import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Search, Tag, Clock, FileText, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Penetration Testing",
    excerpt: "Learn the fundamentals of penetration testing and ethical hacking. A beginner's guide to conducting security assessments.",
    date: "Dec 15, 2025",
    author: "Sathish M",
    category: "Security",
    readTime: "5 min read",
    slug: "getting-started-penetration-testing",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Understanding Network Security Protocols",
    excerpt: "Deep dive into common network security protocols, their vulnerabilities, and best practices for securing your infrastructure.",
    date: "Dec 10, 2025",
    author: "Sathish M",
    category: "Networking",
    readTime: "8 min read",
    slug: "network-security-protocols",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    title: "OWASP Top 10 Security Risks Explained",
    excerpt: "Understand the most critical web application security risks according to OWASP and how to mitigate them.",
    date: "Dec 5, 2025",
    author: "Sathish M",
    category: "Web Security",
    readTime: "10 min read",
    slug: "owasp-top-10",
    difficulty: "Advanced"
  },
  {
    id: 4,
    title: "Malware Analysis 101",
    excerpt: "Introduction to malware analysis techniques, tools, and methodologies for identifying and understanding malicious software.",
    date: "Nov 28, 2025",
    author: "Sathish M",
    category: "Malware",
    readTime: "12 min read",
    slug: "malware-analysis-101",
    difficulty: "Intermediate"
  },
  {
    id: 5,
    title: "Secure Coding Best Practices",
    excerpt: "Essential practices for writing secure code to prevent common vulnerabilities like SQL injection and XSS attacks.",
    date: "Nov 20, 2025",
    author: "Sathish M",
    category: "Development",
    readTime: "7 min read",
    slug: "secure-coding-practices",
    difficulty: "Beginner"
  },
  {
    id: 6,
    title: "Incident Response Framework",
    excerpt: "A comprehensive guide to building an effective incident response plan for your organization.",
    date: "Nov 15, 2025",
    author: "Sathish M",
    category: "Incident Response",
    readTime: "9 min read",
    slug: "incident-response-framework",
    difficulty: "Advanced"
  }
];

const categories = ["All", "Security", "Networking", "Web Security", "Malware", "Development", "Incident Response"];

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15),_transparent_50%)]" />
      
      <Navbar />
      
      <section className="section-padding pt-32 min-h-screen">
        <div className="container-custom relative z-10">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-widest uppercase">Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cyber <span className="text-gradient">Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access the latest security reports, vulnerability analyses, and defensive strategies.
            </p>
          </motion.div>

          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto mb-16 space-y-6">
            
            {/* Search Input */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <Input
                type="text"
                placeholder="Search intelligence database..."
                className="pl-11 h-12 bg-background/50 border-primary/20 focus:border-primary/50 text-lg rounded-xl backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(0,0,0,0.05)] focus:shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>

            {/* Category Chips */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
                      : "bg-background/40 text-muted-foreground border-white/10 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
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
                  <div className="glass-card h-full p-6 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                    
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                    {/* Meta Header */}
                    <div className="flex justify-between items-start mb-6">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {post.category}
                      </Badge>
                      <span className="text-[10px] font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded bg-black/20">
                        {post.difficulty}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Footer Info */}
                    <div className="pt-4 border-t border-white/5 space-y-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </div>
                      </div>

                      <button 
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="w-full py-2.5 rounded-lg bg-primary/5 text-primary text-sm font-semibold border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        Access Report
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/30 transition-all duration-500" />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">No reports found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search query or filters.</p>
            </motion.div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}