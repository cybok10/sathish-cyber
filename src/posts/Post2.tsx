import { Terminal, Shield, AlertTriangle, CheckCircle2, Search, Server, Bug, Lock, XCircle } from "lucide-react";

export default function Post2() {
  return (
    <>
      <p className="lead text-xl text-zinc-200 mb-8 font-light border-b border-white/10 pb-8">
        When I first heard the term “ethical hacking,” I imagined something very complex — black screens, fast typing, and advanced skills that only experts could understand.
      </p>
      
      <div className="space-y-6 mb-12">
        <p>But once I actually started learning it, I realized something surprising: <strong className="text-white">Ethical hacking is not magic — it’s a skill built step by step.</strong></p>
        <p>In this blog, I want to share how I got started with ethical hacking, the tools I used, and the lessons I learned as a beginner.</p>
      </div>

      {/* Section 1 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🌱 My First Step into Ethical Hacking</h3>
      <p className="mb-4">As a Computer Science student, I already knew a bit about programming and networking. But ethical hacking felt like a different world.</p>
      <p className="mb-4">So instead of trying to learn everything at once, I asked myself one simple question:</p>
      
      <blockquote className="border-l-4 border-primary bg-white/5 p-6 rounded-r-xl italic text-white my-8 not-italic font-bold text-lg">
        “What does a beginner ethical hacker actually do first?”
      </blockquote>

      <p className="mb-6">The answer was clear: <strong>Understand systems before attacking them.</strong></p>

      {/* Section 2 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🐧 Learning the Basics: Linux & Networking</h3>
      <p className="mb-4">Before touching any hacking tools, I focused on foundations:</p>
      <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
            <Terminal className="w-5 h-5 text-primary mt-0.5" /> 
            <span className="text-zinc-300">Basic Linux commands</span>
          </li>
          <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
            <Server className="w-5 h-5 text-primary mt-0.5" /> 
            <span className="text-zinc-300">File systems and permissions</span>
          </li>
          <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
            <Search className="w-5 h-5 text-primary mt-0.5" /> 
            <span className="text-zinc-300">IP addresses, ports, and protocols</span>
          </li>
      </ul>
      <p className="mb-6">At first, Linux felt uncomfortable. But slowly, typing commands became natural — and I understood why most hacking tools run on Linux.</p>

      {/* Section 3 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🔍 My First Tool: Network Scanning</h3>
      <p className="mb-4">The first real hacking-related tool I used was a network scanner. When I scanned a machine and saw open ports, running services, and version information, it felt like opening a hidden door.</p>
      
      <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p className="text-primary font-bold m-0 text-lg mb-2">Key Lesson:</p>
        <p className="text-zinc-200 m-0 leading-relaxed">
          Information gathering is the foundation of ethical hacking. No attack happens without knowing the target.
        </p>
      </div>

      {/* Section 4 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🧪 Practicing on Vulnerable Machines</h3>
      <p className="mb-4">Instead of attacking real systems (which is illegal), I practiced on:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary text-zinc-300">
        <li>Intentionally vulnerable machines</li>
        <li>Lab environments</li>
        <li>Practice platforms</li>
      </ul>
      <p className="mb-6">These environments allowed me to make mistakes safely and try exploits without fear. Sometimes attacks worked. Sometimes nothing happened. Both outcomes taught me something.</p>

      {/* Section 5 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🛠️ Tools I Explored as a Beginner</h3>
      <p className="mb-6">Here are some categories of tools I explored during my early learning phase:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
            <Search className="w-6 h-6 text-blue-400 mb-3" />
            <strong className="text-white block mb-1">Scanning</strong>
            <span className="text-xs text-zinc-400">To discover systems and services (e.g., Nmap)</span>
          </div>
          <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
            <Terminal className="w-6 h-6 text-green-400 mb-3" />
            <strong className="text-white block mb-1">Enumeration</strong>
            <span className="text-xs text-zinc-400">To gather deeper info (e.g., SMBClient)</span>
          </div>
          <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
            <Bug className="w-6 h-6 text-red-400 mb-3" />
            <strong className="text-white block mb-1">Exploitation</strong>
            <span className="text-xs text-zinc-400">Frameworks like Metasploit</span>
          </div>
          <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
            <Lock className="w-6 h-6 text-yellow-400 mb-3" />
            <strong className="text-white block mb-1">Password Tools</strong>
            <span className="text-xs text-zinc-400">Understanding weak credentials (e.g., Hydra)</span>
          </div>
      </div>
      <p className="mb-6">I didn’t master them instantly. I learned them one tool at a time, focusing on <em>why</em> they exist, not just how to use them.</p>

      {/* Section 6 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🧠 What Ethical Hacking Taught Me</h3>
      <p className="mb-6">It changed how I look at technology. Now, when I see an application or system, I naturally think: <strong>“How could this fail? How can this be secured better?”</strong></p>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"/> <span className="text-zinc-300">How attackers think</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"/> <span className="text-zinc-300">Why misconfigurations are dangerous</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"/> <span className="text-zinc-300">How small mistakes lead to big breaches</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"/> <span className="text-zinc-300">Why defense is just as important as offense</span></li>
        </ul>
      </div>

      {/* Section 7 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">❌ Mistakes I Made</h3>
      <div className="border border-red-500/20 bg-red-500/5 rounded-xl p-6 mb-8">
        <p className="text-red-400 font-bold mb-4 uppercase text-xs tracking-widest">Avoid These Traps</p>
        <ul className="space-y-3">
          <li className="flex gap-3 items-center text-zinc-300"><XCircle className="w-4 h-4 text-red-500" /> Trying to learn too many tools at once</li>
          <li className="flex gap-3 items-center text-zinc-300"><XCircle className="w-4 h-4 text-red-500" /> Focusing on exploits without understanding basics</li>
          <li className="flex gap-3 items-center text-zinc-300"><XCircle className="w-4 h-4 text-red-500" /> Comparing myself with experts</li>
          <li className="flex gap-3 items-center text-zinc-300"><XCircle className="w-4 h-4 text-red-500" /> Expecting fast results</li>
        </ul>
      </div>

      {/* Conclusion */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🌟 Final Words for Beginners</h3>
      <p className="mb-6">If you’re new to ethical hacking and feeling overwhelmed, remember this: <strong>Every expert was once a beginner who didn’t quit.</strong></p>
      <p className="mb-6">You don’t need expensive tools or deep knowledge on day one. Start with curiosity. Practice ethically. Learn daily.</p>
      
      <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center">
        <p className="text-primary font-bold italic m-0 text-lg">
          This is just the start of the journey.
        </p>
      </div>
    </>
  );
}