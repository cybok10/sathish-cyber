import { motion } from "framer-motion";

const skills = [
  "Penetration Testing",
  "Vulnerability Assessment",
  "Metasploit",
  "Burp Suite Pro",
  "Nmap",
  "Wireshark",
  "OWASP Top 10",
  "Python",
  "Core Java",
  "C/C++",
  "Bash Scripting",
  "HTML/CSS",
  "JavaScript",
  "SQL"
];

export function Skills() {

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">{"{"}</span> Technical Skills <span className="text-primary">{"}"}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden bg-primary/5 border-primary/20 hover:border-primary/50 hover:bg-primary/10"
            >
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-primary/20 -z-10" />
              
              <div className="relative z-10 text-center">
                <p className="font-semibold text-sm md:text-base text-primary group-hover:text-primary">
                  {skill}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}