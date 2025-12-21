import { Terminal, CheckCircle2, Flag } from "lucide-react";

export default function Post1() {
  return (
    <>
      <p className="lead text-xl text-zinc-200 mb-8 font-light border-b border-white/10 pb-8">
        I didn’t wake up one day and suddenly decide, “I want to be a cybersecurity expert.”
      </p>
      
      <div className="space-y-6 mb-12">
        <p>Like many students, my journey into cybersecurity started with curiosity — curiosity about how systems work, how attacks happen, and how real-world hacking actually looks beyond movies.</p>
        <p>This blog is about how I entered cybersecurity, what I explored, what I struggled with, and how hands-on practice changed everything for me.</p>
      </div>

      {/* Section 1 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🌱 Where It All Started</h3>
      <p className="mb-4">I am a Computer Science Engineering student, and during my early college days, I was exposed to basic subjects like programming, networking, and operating systems.</p>
      <p className="mb-4">While learning these, one question kept coming to my mind:</p>
      
      <blockquote className="border-l-4 border-primary bg-white/5 p-6 rounded-r-xl italic text-white my-8 not-italic font-bold text-lg">
        “If we can build systems, can someone break them too?”
      </blockquote>
      
      <p className="mb-6">That single question pulled me toward cybersecurity. At first, cybersecurity felt huge and confusing — so many terms like hacking, penetration testing, SOC, malware, vulnerabilities, and exploits. I honestly didn’t know where to begin.</p>

      {/* Section 2 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🔍 From Theory to Curiosity</h3>
      <p className="mb-4">Initially, my understanding of cybersecurity was mostly theoretical:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary text-zinc-300">
        <li>What is hacking?</li>
        <li>What is malware?</li>
        <li>What is a vulnerability?</li>
      </ul>
      <p className="mb-4">But theory alone didn’t excite me much. I wanted to see things in action.</p>
      <p className="text-primary font-semibold text-lg border-l-2 border-primary pl-4 my-6">
        That’s when I realized something important: Cybersecurity is not about memorizing concepts — it’s about doing.
      </p>

      {/* Section 3 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🧪 Entering the Hands-On World</h3>
      <p className="mb-4">My real learning started when I began using hands-on platforms and tools. I started with:</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <li className="bg-white/5 p-3 rounded border border-white/10 flex items-center gap-2 text-sm"><div className="w-2 h-2 bg-primary rounded-full"/> Practicing Linux commands</li>
        <li className="bg-white/5 p-3 rounded border border-white/10 flex items-center gap-2 text-sm"><div className="w-2 h-2 bg-primary rounded-full"/> Learning basic networking concepts</li>
        <li className="bg-white/5 p-3 rounded border border-white/10 flex items-center gap-2 text-sm"><div className="w-2 h-2 bg-primary rounded-full"/> Exploring Nmap for scanning</li>
        <li className="bg-white/5 p-3 rounded border border-white/10 flex items-center gap-2 text-sm"><div className="w-2 h-2 bg-primary rounded-full"/> Understanding vulnerable machines</li>
      </ul>
      <p className="mb-6">The first time I scanned a machine and saw open ports, I felt a different kind of excitement. It was no longer theory — it was real.</p>
      
      <p className="mb-4">Slowly, I moved on to:</p>
      <ul className="space-y-2 mb-6 text-zinc-300">
         <li className="flex items-center gap-2"><Terminal className="w-4 h-4 text-primary"/> Vulnerability scanning</li>
         <li className="flex items-center gap-2"><Terminal className="w-4 h-4 text-primary"/> Exploiting intentionally vulnerable systems</li>
         <li className="flex items-center gap-2"><Terminal className="w-4 h-4 text-primary"/> Understanding how attacks actually work</li>
         <li className="flex items-center gap-2"><Terminal className="w-4 h-4 text-primary"/> Learning why security failures happen</li>
      </ul>

      {/* Section 4 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🛠️ Building Instead of Just Watching</h3>
      <p className="mb-4">Instead of only watching tutorials, I challenged myself to:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary text-zinc-300">
        <li>Build small security tools</li>
        <li>Modify existing scripts</li>
        <li>Experiment with different attack techniques (ethically and legally)</li>
        <li>Break things in controlled lab environments</li>
      </ul>
      <p className="mb-6">This hands-on approach helped me understand how attackers think, how defenders detect attacks, and why logs, monitoring, and alerts matter.</p>

      {/* Section 5 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">📘 Learning Through Platforms & Labs</h3>
      <p className="mb-4">Platforms like practice labs and cybersecurity challenges helped me a lot. They gave me:</p>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">Clear goals</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">Realistic scenarios</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">Confidence to experiment</span>
      </div>
      <p className="mb-6">Each lab taught me something new — sometimes I succeeded, sometimes I failed. But every failure taught me more than success.</p>

      {/* Section 6 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🧠 Lessons I Learned So Far</h3>
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
        <ul className="space-y-4">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"/> <span className="text-zinc-200">You don’t need to know everything to start</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"/> <span className="text-zinc-200">Confusion is part of learning cybersecurity</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"/> <span className="text-zinc-200">Hands-on practice beats theory every time</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"/> <span className="text-zinc-200">Making mistakes is normal — fixing them is learning</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"/> <span className="text-zinc-200">Consistency matters more than speed</span></li>
        </ul>
      </div>

      {/* Section 7 */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🎯 Where I Am Now</h3>
      <p className="mb-4">Today, I’m still learning — and that’s the best part. Cybersecurity is not a destination; it’s a continuous journey.</p>
      <p className="mb-4">Every new tool, every new vulnerability, every new attack teaches something valuable. I’m focusing on:</p>
      <ul className="space-y-2 mb-6 pl-4 border-l-2 border-white/10 text-zinc-300">
        <li>Strengthening my fundamentals</li>
        <li>Building real-world projects</li>
        <li>Understanding both offensive and defensive security</li>
        <li>Improving daily through practice</li>
      </ul>

      {/* Final Thoughts */}
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">🌟 Final Thoughts</h3>
      <p className="mb-6">If you’re a student or beginner reading this and feeling overwhelmed, let me tell you this: <strong className="text-white">Everyone starts somewhere. Curiosity is enough to begin.</strong></p>
      <p className="mb-6">You don’t need expensive tools or expert-level knowledge on day one. Start small. Practice daily. Break things. Fix things. Learn continuously.</p>
      
      <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center">
        <p className="text-primary font-bold italic m-0 text-lg">
          This is just the beginning of my cybersecurity journey — and I’m excited for what’s ahead.
        </p>
      </div>
    </>
  );
}