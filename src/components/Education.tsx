import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "Dhanalakshmi Srinivasan Engineering College",
    period: "2022 - Present",
    score: "CGPA: 9.3",
    type: "Autonomous",
    highlight: true
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "St. Joseph's Matric. Hr. Sec. School",
    period: "2020 - 2022",
    score: "Grade: 89%",
    highlight: false
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "St. Joseph's Matric. Hr. Sec. School",
    period: "2018 - 2020",
    score: "Grade: 70%",
    highlight: false
  }
];

export function Education() {
  return (
    <section id="education" className="section-padding bg-gradient-to-br from-background via-card to-background cyber-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Education Path
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30" />

            {/* Education Items */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-8 top-1 w-6 h-6 bg-primary rounded-full border-4 border-background" />

                  {/* Content */}
                  <div className="pl-4">
                    {/* Degree */}
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-sm text-primary font-medium mb-2">
                      {edu.institution}
                    </p>

                    {/* Period and Score */}
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>
                      <div className={`inline-flex w-fit px-2 py-1 rounded-full text-xs font-medium ${
                        edu.highlight
                          ? 'bg-primary/20 text-primary border border-primary/40'
                          : 'text-muted-foreground'
                      }`}>
                        {edu.score}
                        {edu.type && ` (${edu.type})`}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
