import Post1 from "@/posts/Post1";
import Post2 from "@/posts/Post2";
import Post3 from "@/posts/Post3";

export const blogPosts = [
  {
    id: 1,
    title: "My Journey into Cybersecurity: From Curiosity to Hands-On Practice",
    excerpt: "I didn’t wake up one day and suddenly decide I want to be a cybersecurity expert. It started with curiosity about how systems work...",
    date: "Dec 21, 2025",
    author: "Sathish M",
    category: "Career",
    readTime: "5 min read",
    slug: "my-journey-into-cybersecurity",
    difficulty: "Beginner",
    // Image: Cyber Lock / Technology (Blue Tones)
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
    component: Post1
  },
  {
    id: 2,
    title: "Getting Started with Ethical Hacking: Tools I Used and What I Learned",
    excerpt: "Ethical hacking is not magic — it’s a skill built step by step. Here is how I got started, the tools I used, and the lessons I learned as a beginner.",
    date: "Dec 28, 2025",
    author: "Sathish M",
    category: "Ethical Hacking",
    readTime: "7 min read",
    slug: "getting-started-ethical-hacking",
    difficulty: "Beginner",
    // Image: Matrix / Binary Code / Glitch (Green Tones)
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    component: Post2
  },
  {
    id: 3,
    title: "Hands-On with Nmap: How I Learned Network Scanning and Enumeration",
    excerpt: "Nmap changed how I understood networks. Here is how I learned network scanning, what confused me, and what I eventually understood through practice.",
    date: "Jan 04, 2026",
    author: "Sathish M",
    category: "Networking",
    readTime: "6 min read",
    slug: "hands-on-with-nmap",
    difficulty: "Beginner",
    // Image: Server Rack / Physical Networking (Orange/Dark Tones)
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=2070&auto=format&fit=crop",
    component: Post3
  }
];