import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, Calendar, Bookmark, Fingerprint, Lock, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Certified Penetration Testing",
    issuer: "RedTeam Hacker Academy",
    date: "2025_EXP",
    id: "CPT-2025-X82",
    status: "Ongoing",
    level: "Lv 4"
  },
  {
    title: "Advanced Ethical Hacking",
    issuer: "GUVI",
    date: "OCT_2025",
    id: "AEH-8821-V2",
    status: "Completed",
    level: "Lv 3"
  },
  {
    title: "Cybersecurity & Hacking",
    issuer: "Internship Studio",
    date: "AUG_2024",
    id: "CSEH-24-01",
    status: "Completed",
    level: "Lv 3"
  },
  {
    title: "Wireshark & Metasploit",
    issuer: "Infosys Springboard",
    date: "DEC_2024",
    id: "INF-WM-992",
    status: "Completed",
    level: "Lv 2"
  },
  {
    title: "C & C++ Programming",
    issuer: "TCEDS",
    date: "SEP_2022",
    id: "TCEDS-DEV-22",
    status: "Completed",
    level: "Lv 2"
  },
  {
    title: "Linux & Network Security",
    issuer: "Udemy",
    date: "FY_2024",
    id: "UDMY-SEC-24",
    status: "Completed",
    level: "Lv 1"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-black pb-40">
      
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
         <Shield className="w-[800px] h-[800px] text-primary" />
      </div>

      <div className="container-custom relative z-10 w-full">

        <div className="flex flex-col xl:flex-row justify-between gap-20 items-end mb-32">
          <div className="xl:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black text-xs uppercase tracking-[0.5em] flex items-center gap-5"
            >
              <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg">Sector 04</div>
              Operational Clearances
            </motion.div>
            <h2 className="text-6xl md:text-[7rem] font-display font-black tracking-tighter text-white leading-[0.9] italic">
               SECURED <span className="text-primary not-italic">INTEL.</span>
            </h2>
          </div>
          <div className="xl:w-1/3 text-xl text-zinc-500 font-medium leading-relaxed italic">
            "Authenticated validation of technical capacity and authorized operational access."
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full rounded-[2.5rem] bg-[#070715] border border-white/5 p-12 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
               {/* Background Watermark Icon */}
               <Fingerprint className="absolute -bottom-10 -right-10 w-48 h-48 text-primary opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />

               <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/20 text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <Lock className="w-3 h-3" />
                    {cert.level} ACCESS
                  </div>
               </div>

               <div className="space-y-4 mb-12 relative z-10">
                  <h3 className="text-3xl font-display font-black text-white leading-[1.1] group-hover:text-primary transition-colors tracking-tighter italic">
                    {cert.title}
                  </h3>
                  <div className="text-zinc-500 font-bold text-sm tracking-tight flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-primary opacity-50" />
                    {cert.issuer}
                  </div>
               </div>

               <div className="mt-auto pt-10 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div className="space-y-2">
                    <div className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-black">VALIDATION_ID</div>
                    <div className="text-xs font-mono font-bold text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase">{cert.id}</div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                     <div className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-black mb-1">AUTH_DATE</div>
                     <span className="text-xs font-black text-white italic">{cert.date}</span>
                  </div>
               </div>

               {/* Verification Stamp Overlay */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-all duration-700 pointer-events-none scale-150 rotate-12">
                  <div className="px-8 py-4 border-8 border-primary rounded-3xl text-9xl font-display font-black text-primary">SECURED</div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}