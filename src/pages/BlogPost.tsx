import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Calendar, Clock, ArrowLeft, ChevronRight, 
  Share2
} from "lucide-react";
import { motion } from "framer-motion";

// Import the registry
import { blogPosts } from "@/data/BlogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];
  const nextPost = blogPosts[postIndex + 1];

  useEffect(() => {
    if (!post) navigate("/blog"); 
    window.scrollTo(0, 0); 
  }, [post, navigate, slug]);

  if (!post) return null;

  // Render the specific component for this post
  const PostContent = post.component;

  const sidebarNews = [
    { title: "AI-Driven SOC Agents: The Future of Defense?", date: "2 hours ago" },
    { title: "Critical Zero-Day found in Apache Struts", date: "5 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-foreground font-sans selection:bg-primary/30">
      <Navbar />

      <div className="pt-32 pb-20 min-h-screen">
        <div className="container-custom mx-auto px-4 max-w-7xl">
          
          {/* Header Navigation */}
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
            <Link to="/blog">
              <Button variant="ghost" className="text-zinc-400 hover:text-white pl-0 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
                Back to Intel
              </Button>
            </Link>
            <div className="flex items-center gap-4 text-zinc-500 text-sm font-mono">
               <span>/ PROTOCOLS</span>
               <span>/ {post.category.toUpperCase()}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* === MAIN CONTENT === */}
            <div className="lg:col-span-8">
              
              {/* Meta Data */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">{post.author.charAt(0)}</div>
                    <span className="text-white">{post.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</div>
                  <span>•</span>
                  <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</div>
                </div>
              </div>

              {/* Image Section - FIXED */}
              <div className="mb-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={post.image} // <--- THIS IS THE FIX (Uses data from blogPosts.tsx)
                  alt={post.title} 
                  className="w-full h-auto object-cover opacity-80"
                />
              </div>

              {/* Body Content */}
              <div className="flex gap-0 md:gap-8 items-start">
                <div className="hidden md:flex flex-col gap-4 sticky top-32 text-zinc-500 shrink-0">
                  <p className="text-[10px] uppercase tracking-widest font-bold rotate-90 origin-left translate-x-3 translate-y-2 mb-8">Share</p>
                  <Button size="icon" variant="outline" className="rounded-full w-10 h-10 border-white/10 hover:text-primary hover:border-primary hover:bg-primary/10"><Share2 className="w-4 h-4" /></Button>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="prose prose-invert prose-lg max-w-none text-zinc-300 prose-headings:text-white prose-a:text-primary"
                >
                  {/* THIS RENDERS THE COMPONENT FROM STEP 2 or 3 */}
                  <PostContent />
                </motion.div>
              </div>

              {/* Next Post Logic */}
              {nextPost && (
                <div className="mt-16 pt-8 border-t border-white/10">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Up Next</p>
                  <Link to={`/blog/${nextPost.slug}`} className="group block">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl group-hover:bg-white/10 transition-colors flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{nextPost.title}</h4>
                        <p className="text-zinc-500 text-sm mt-1">{nextPost.readTime} • {nextPost.difficulty}</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* === SIDEBAR === */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Live Threat Intel
                </h3>
                <ul className="space-y-4">
                  {sidebarNews.map((news, i) => (
                    <li key={i} className="flex gap-3 group cursor-pointer">
                      <div className="w-16 h-16 bg-zinc-800 rounded-lg shrink-0 overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-black opacity-50" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 group-hover:text-primary transition-colors leading-snug mb-1">{news.title}</h4>
                        <span className="text-xs text-zinc-500">{news.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}