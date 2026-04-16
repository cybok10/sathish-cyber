import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/NotFound";
import { Chatbot } from "@/components/Chatbot";
import { Footer } from "@/components/Footer";
import { LatestBlogPopup } from "@/components/LatestBlogPopup";
import { CyberBackground, useMousePosition } from "@/components/CyberBackground";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isRoadmapPage = location.pathname.toLowerCase().startsWith("/roadmap");

  useMousePosition();

  return (
    <>
      <CyberBackground />
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <LatestBlogPopup />
      <Chatbot />
      
      <Footer />
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;