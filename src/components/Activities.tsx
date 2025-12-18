import { motion } from "framer-motion";
import { Flag, Users, Code } from "lucide-react";

const activities = [
  {
    title: "Active CTF Player",
    description: "Participating in Capture The Flag competitions on TryHackMe, PicoCTF, and PortSwigger Web Security Academy.",
    icon: Flag
  },
  {
    title: "IIT Madras Python Workshop",
    description: "Attended hands-on Python programming workshop conducted by IIT Madras focusing on practical applications.",
    icon: Code
  },
  {
    title: "OWASP Community Meetup",
    description: "Participated in OWASP community meetups, staying updated with latest web security trends and best practices.",
    icon: Users
  }
];

export function Activities() {
  return (
    <section id="activities" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-background to-card/20">
      {/* Background effects */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-secondary/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">@</span> Activities & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Active participation in cybersecurity communities and continuous learning through competitions and workshops</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 w-full">
          {activities.map((activity, index) => (
            <motion.div 
              key={activity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              
              <div className="glass-card-hover p-8 text-center h-full rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:animate-glow-pulse transition-all neon-border"
                >
                  <activity.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-mono group-hover:text-primary transition-colors">{activity.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{activity.description}</p>
                
                <div className="pt-6 border-t border-border/30 flex items-center justify-center">
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary text-sm font-semibold flex items-center gap-1"
                  >
                    Learn more <span>→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}