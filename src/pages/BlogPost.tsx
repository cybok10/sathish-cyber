import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, Tag, ChevronRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Keep existing blogArticles data object...
// (I will reference the same data object structure as before, just assume it's there or imported)
const blogArticles: Record<string, any> = {
  "getting-started-penetration-testing": {
    id: 1,
    title: "Getting Started with Penetration Testing",
    category: "Security",
    date: "Dec 15, 2025",
    author: "Sathish M",
    readTime: "5 min read",
    content: `
      <h2>Introduction</h2>
      <p>Penetration testing is a critical component of modern cybersecurity. It involves authorized testing of computer systems to identify vulnerabilities and security weaknesses. In this guide, we'll walk through the fundamentals you need to know to get started.</p>
      <h2>What is Penetration Testing?</h2>
      <p>Penetration testing (pen testing) is a simulated cyber attack against your computer system to check for exploitable vulnerabilities. The goal is to identify security gaps before malicious actors do.</p>
      <h2>Key Phases of Penetration Testing</h2>
      <h3>1. Reconnaissance</h3>
      <p>Gather information about the target system. This includes identifying IP addresses, domain names, mail servers, and other network infrastructure.</p>
      <h3>2. Scanning</h3>
      <p>Use scanning tools to identify open ports, services, and potential vulnerabilities on the target system.</p>
      <h3>3. Enumeration</h3>
      <p>Actively probe systems to gain detailed information about users, shares, printers, and applications.</p>
      <h3>4. Exploitation</h3>
      <p>Attempt to exploit identified vulnerabilities to gain unauthorized access.</p>
      <h3>5. Reporting</h3>
      <p>Document all findings, vulnerabilities discovered, and recommendations for remediation.</p>
      <h2>Essential Tools</h2>
      <ul>
        <li><strong>Nmap:</strong> Network scanner for discovering hosts and services</li>
        <li><strong>Metasploit:</strong> Exploitation framework</li>
        <li><strong>Burp Suite:</strong> Web application security testing</li>
        <li><strong>Wireshark:</strong> Network protocol analyzer</li>
      </ul>
      <h2>Conclusion</h2>
      <p>Penetration testing is an essential skill in cybersecurity. By understanding these fundamentals, you're taking the first step toward becoming a skilled security professional.</p>
    `
  },
  "network-security-protocols": {
    id: 2,
    title: "Understanding Network Security Protocols",
    category: "Networking",
    date: "Dec 10, 2025",
    author: "Sathish M",
    readTime: "8 min read",
    content: `<h2>Introduction</h2><p>Network security protocols are crucial for protecting data as it travels across networks...</p>` 
  },
  // ... (Other articles would be here, logic handles missing ones)
  "owasp-top-10": { id: 3, title: "OWASP Top 10 Security Risks", category: "Web Security", date: "Dec 5, 2025", author: "Sathish M", readTime: "10 min read", content: "<p>Content placeholder...</p>" },
  "malware-analysis-101": { id: 4, title: "Malware Analysis 101", category: "Malware", date: "Nov 28, 2025", author: "Sathish M", readTime: "12 min read", content: "<p>Content placeholder...</p>" },
  "secure-coding-practices": { id: 5, title: "Secure Coding Best Practices", category: "Development", date: "Nov 20, 2025", author: "Sathish M", readTime: "7 min read", content: "<p>Content placeholder...</p>" },
  "incident-response-framework": { id: 6, title: "Incident Response Framework", category: "Incident Response", date: "Nov 15, 2025", author: "Sathish M", readTime: "9 min read", content: "<p>Content placeholder...</p>" }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? blogArticles[slug] : null;

  // Reading Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Encrypted File Locked</h2>
            <p className="text-muted-foreground">The article you requested could not be decrypted or does not exist.</p>
            <Button onClick={() => navigate("/blog")} variant="secondary">
              Return to Database
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <section className="pt-32 pb-20 relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

        <div className="container-custom max-w-4xl mx-auto px-4 relative z-10">
          
          {/* Breadcrumb / Back */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-8"
          >
            <button 
              onClick={() => navigate("/blog")}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono">/blog</span>
            </button>
            <span className="text-muted-foreground/30">/</span>
            <span className="text-sm text-muted-foreground/60 truncate max-w-[200px]">{article.slug}</span>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-b border-white/10 pb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-bold bg-primary/10 text-primary rounded border border-primary/20 uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded bg-secondary/5 border border-white/5">
                Public Intel
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-foreground font-medium">{article.author}</p>
                  <p className="text-xs">Security Researcher</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10 hidden md:block" />

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>

              <div className="ml-auto">
                <Button variant="ghost" size="icon" className="hover:text-primary rounded-full">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:list-disc prose-ul:list-outside prose-ul:ml-6 prose-ul:text-muted-foreground prose-ul:mb-6
              prose-li:mb-2 prose-li:marker:text-primary
              prose-strong:text-foreground prose-strong:font-bold
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/80
              "
          >
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </motion.article>

          {/* Footer Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center"
          >
            <Button
              onClick={() => navigate("/blog")}
              variant="outline"
              className="gap-2 border-white/10 hover:bg-white/5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Intel
            </Button>
            
            <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
              Next Report <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}