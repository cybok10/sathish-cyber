import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Penetration Testing",
    excerpt: "Learn the fundamentals of penetration testing and ethical hacking. A beginner's guide to conducting security assessments.",
    date: "Dec 15, 2025",
    author: "Sathish M",
    category: "Security",
    readTime: "5 min read",
    slug: "getting-started-penetration-testing"
  },
  {
    id: 2,
    title: "Understanding Network Security Protocols",
    excerpt: "Deep dive into common network security protocols, their vulnerabilities, and best practices for securing your infrastructure.",
    date: "Dec 10, 2025",
    author: "Sathish M",
    category: "Networking",
    readTime: "8 min read",
    slug: "network-security-protocols"
  },
  {
    id: 3,
    title: "OWASP Top 10 Security Risks Explained",
    excerpt: "Understand the most critical web application security risks according to OWASP and how to mitigate them.",
    date: "Dec 5, 2025",
    author: "Sathish M",
    category: "Web Security",
    readTime: "10 min read",
    slug: "owasp-top-10"
  },
  {
    id: 4,
    title: "Malware Analysis 101",
    excerpt: "Introduction to malware analysis techniques, tools, and methodologies for identifying and understanding malicious software.",
    date: "Nov 28, 2025",
    author: "Sathish M",
    category: "Malware",
    readTime: "12 min read",
    slug: "malware-analysis-101"
  },
  {
    id: 5,
    title: "Secure Coding Best Practices",
    excerpt: "Essential practices for writing secure code to prevent common vulnerabilities like SQL injection and XSS attacks.",
    date: "Nov 20, 2025",
    author: "Sathish M",
    category: "Development",
    readTime: "7 min read",
    slug: "secure-coding-practices"
  },
  {
    id: 6,
    title: "Incident Response Framework",
    excerpt: "A comprehensive guide to building an effective incident response plan for your organization.",
    date: "Nov 15, 2025",
    author: "Sathish M",
    category: "Incident Response",
    readTime: "9 min read",
    slug: "incident-response-framework"
  }
];

export default function Blog() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="section-padding bg-gradient-to-br from-background via-card to-background cyber-grid relative pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="container-custom relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Security Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and deep dives into cybersecurity, penetration testing, and secure development practices.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card p-6 rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(180_100%_50%_/_0.1)] flex flex-col h-full"
              >
                {/* Category Badge */}
                <div className="inline-flex w-fit mb-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="space-y-3 pt-4 border-t border-border/20">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <span className="text-xs text-primary font-medium">{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <button 
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all text-sm font-medium group-hover:gap-3"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground text-sm">
              More articles coming soon... Stay tuned for in-depth security guides and tutorials!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
