import { Terminal, Search, AlertTriangle, CheckCircle2, Network, Shield } from "lucide-react";

export default function Post3() {
  return (
    <>
      <p className="lead text-xl text-zinc-200 mb-8 font-light border-b border-white/10 pb-8">
        When I first entered cybersecurity, one thing became very clear to me: <strong className="text-white">You can’t secure what you don’t understand.</strong>
      </p>
      
      <div className="space-y-6 mb-12">
        <p>That’s when I was introduced to network scanning, and more specifically, <strong>Nmap</strong>. This tool completely changed how I understood networks, systems, and real-world security.</p>
        <p>This blog is about how I learned Nmap as a beginner, what confused me at first, and what I eventually understood through hands-on practice.</p>
      </div>

      {/* Section 1 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🌱 What Is Network Scanning?</h3>
      <p className="mb-4">Before using any hacking tool, I asked myself: <em className="text-zinc-400">"What is network scanning actually doing?"</em></p>
      
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
        <p className="mb-4 font-semibold text-white">Network scanning is simply the process of:</p>
        <ul className="space-y-2">
          <li className="flex gap-2 items-center text-zinc-300"><Search className="w-4 h-4 text-primary" /> Finding which systems are alive</li>
          <li className="flex gap-2 items-center text-zinc-300"><Search className="w-4 h-4 text-primary" /> Checking which ports are open</li>
          <li className="flex gap-2 items-center text-zinc-300"><Search className="w-4 h-4 text-primary" /> Identifying which services are running</li>
        </ul>
      </div>
      
      <p className="mb-6">Think of it like knocking on doors in a building to check which doors are open and what’s inside each room. That’s exactly what Nmap helps us do.</p>

      {/* Section 2 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🚀 My First Time Using Nmap</h3>
      <p className="mb-4">The first time I ran an Nmap command, I honestly didn’t understand most of the output. I saw lists of IP addresses, port numbers, service names, and states like <em>open</em>, <em>closed</em>, and <em>filtered</em>.</p>
      <p className="mb-4">At first, it looked confusing. But slowly, line by line, it started to make sense.</p>
      
      <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-xl italic text-zinc-200 my-8">
        "Tools don’t become powerful until you understand their output."
      </blockquote>

      {/* Section 3 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🔓 Understanding Ports Changed Everything</h3>
      <p className="mb-4">Learning about ports was a big turning point for me. I understood that:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary text-zinc-300">
        <li>Every open port is a possible entry point</li>
        <li>Services running on ports can have misconfigurations</li>
        <li>Old service versions may contain known vulnerabilities</li>
      </ul>
      <p className="mb-6">Seeing services like Web (80/443), FTP (21), and SSH (22) appear in my scans helped me connect networking theory with real systems.</p>

      {/* Section 4 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🧪 From Scanning to Enumeration</h3>
      <p className="mb-4">Once I got comfortable with basic scans, I moved to enumeration. Enumeration means collecting deeper information, finding service versions, and identifying operating systems.</p>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <Terminal className="w-8 h-8 text-green-400 mt-1" />
          <div>
             <h4 className="text-white font-bold text-lg mb-1">Critical Lesson</h4>
             <p className="text-zinc-400 text-sm leading-relaxed">
               Good attacks start with good information gathering. Without enumeration, any attack is just guessing.
             </p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">❌ Mistakes I Made</h3>
      <div className="border border-red-500/20 bg-red-500/5 rounded-xl p-6 mb-8">
        <ul className="space-y-3">
          <li className="flex gap-3 items-center text-zinc-300"><AlertTriangle className="w-4 h-4 text-red-400" /> Running commands without understanding them</li>
          <li className="flex gap-3 items-center text-zinc-300"><AlertTriangle className="w-4 h-4 text-red-400" /> Copy-pasting scans from the internet</li>
          <li className="flex gap-3 items-center text-zinc-300"><AlertTriangle className="w-4 h-4 text-red-400" /> Ignoring the output details</li>
          <li className="flex gap-3 items-center text-zinc-300"><AlertTriangle className="w-4 h-4 text-red-400" /> Scanning too fast without learning fundamentals</li>
        </ul>
      </div>
      <p className="mb-6">Once I slowed down and focused on <em>why</em> a scan works, my understanding improved a lot.</p>

      {/* Section 6 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🧠 What Nmap Really Taught Me</h3>
      <p className="mb-4">Nmap didn’t just teach me scanning. It taught me how attackers think logically. I learned:</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><Network className="w-5 h-5 text-blue-400"/> How attackers discover targets</li>
        <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><Shield className="w-5 h-5 text-blue-400"/> Why exposed services are dangerous</li>
        <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><Search className="w-5 h-5 text-blue-400"/> How system visibility increases risk</li>
        <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><Terminal className="w-5 h-5 text-blue-400"/> Why defenders must monitor ports</li>
      </ul>

      {/* Final Thoughts */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🌟 Final Thoughts</h3>
      <p className="mb-6">If you’re new to cybersecurity, let me say this clearly: <strong>Nmap is not just a tool — it’s a mindset.</strong></p>
      <p className="mb-6">It trains you to observe, analyze, and understand systems before acting. You don’t need to master it in one day. Start simple. Read the output. Practice regularly.</p>
    </>
  );
}