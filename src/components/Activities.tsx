import { motion } from "framer-motion";
import { Flag, Users, Code, Trophy, Sparkles, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    title: "Active CTF Player",
    description: "Participating in Capture The Flag competitions on TryHackMe, PicoCTF, and PortSwigger Web Security Academy to sharpen offensive security skills.",
    icon: Flag,
    category: "Competition",
    status: "Active",
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20"
  },
  {
    title: "IIT Madras Python Workshop",
    description: "Attended an intensive hands-on Python programming workshop conducted by IIT Madras, focusing on automation and practical security applications.",
    icon: Code,
    category: "Workshop",
    status: "Completed",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    title: "OWASP Community Meetup",
    description: "Active participant in OWASP community meetups, engaging with security professionals to discuss the latest web vulnerabilities and defense strategies.",
    icon: Users,
    category: "Community",
    status: "Member",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  }
];

export function Activities() {
  return (
    <section id="activities" className="section-padding relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-yellow-500 tracking-widest uppercase">Honors & Ops</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Activities & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div 
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="glass-card h-full p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                
                {/* Background Gradient Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Top Badge */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                    className={`p-4 rounded-2xl ${activity.bg} ${activity.border} border shadow-lg backdrop-blur-sm`}
                  >
                    <activity.icon className={`w-8 h-8 ${activity.color}`} />
                  </motion.div>
                  
                  <Badge variant="outline" className={`${activity.color} ${activity.border} bg-background/50 backdrop-blur-md`}>
                    {activity.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-[calc(100%-80px)]">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {activity.description}
                  </p>

                  {/* Footer Status */}
                  <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <Target className="w-4 h-4 text-primary" />
                      <span>Status</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`relative flex h-2 w-2`}>
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${activity.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${activity.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                      </span>
                      <span className={`text-xs font-bold ${activity.status === 'Active' ? 'text-green-500' : 'text-blue-500'}`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Sparkle */}
                <Sparkles className="absolute top-4 right-4 w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none" />

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}