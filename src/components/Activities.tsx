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
    <section id="activities" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom relative z-10 w-full">

        <div className="flex flex-col xl:flex-row justify-between gap-16 items-end mb-24 border-b border-white/5 pb-16">
          <div className="xl:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black text-xs uppercase tracking-[0.4em] flex items-center gap-4"
            >
              <div className="w-12 h-[2px] bg-primary" />
              Community & Growth
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight text-foreground leading-[1.05]">
              Beyond <br /> <span className="text-primary italic">Security.</span>
            </h2>
          </div>
          <p className="xl:w-1/3 text-lg text-muted-foreground font-medium opacity-70 leading-relaxed">
            Active engagement in the global security community and continuous technical evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full group"
            >
              <div className="glass-card p-10 flex flex-col h-full group border-white/5 hover:border-primary/20 transition-all duration-500">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                    <activity.icon className="w-8 h-8" />
                  </div>
                  <Badge variant="outline" className="px-3 py-1 rounded-lg bg-background border-white/10 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    {activity.category}
                  </Badge>
                </div>

                <div className="space-y-4 mb-10">
                  <h3 className="text-2xl font-display font-black text-foreground leading-tight group-hover:text-primary transition-colors tracking-tight">
                    {activity.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                    {activity.description}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.2em] opacity-40">
                    <Target className="w-3.5 h-3.5" />
                    Status
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${activity.status === 'Active' ? 'bg-primary' : 'bg-muted-foreground/50'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${activity.status === 'Active' ? 'bg-primary' : 'bg-muted-foreground'}`}></span>
                    </span>
                    <span className={`text-xs font-black uppercase tracking-widest ${activity.status === 'Active' ? 'text-primary' : 'text-muted-foreground/60'}`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}