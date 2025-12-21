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

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  // Use .toLowerCase() and .startsWith() to ensure the check is bulletproof
  const isRoadmapPage = location.pathname.toLowerCase().startsWith("/roadmap");

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <LatestBlogPopup />
      <Chatbot />
      
      {/* If this is the Roadmap page, we hide the entire footer component */}
      {!isRoadmapPage && <Footer />}
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