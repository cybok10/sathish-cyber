import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { 
  Shield, Terminal, Globe, Monitor, FileCode, Search, AlertTriangle, 
  Cloud, CheckCircle2, Flag, ChevronRight, BookOpen, ExternalLink, Play, 
  Radio, Database, Workflow, Bug, Target, Lock, Cpu
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// --- COMPREHENSIVE 20-LEVEL DATA (ALL COMPLETED) ---
const levels = [
  { id: 1, title: "IT Fundamentals", subtitle: "Architecture", icon: Cpu, status: "COMPLETED", summary: "Master computer architecture, OS basics, and filesystems.", details: { concepts: ["RAM/CPU Architecture", "Kernel vs User Space", "NTFS/EXT4 Filesystems"], tools: ["VirtualBox", "PowerShell"], tasks: [{ title: "Build a Custom VM", type: "Lab" }], resources: [{ name: "Professor Messer A+", url: "#" }] }, category: "FOUNDATION" },
  { id: 2, title: "Networking Basics", subtitle: "Data Flow", icon: Globe, status: "COMPLETED", summary: "Understand TCP/IP, OSI Model, and Subnetting.", details: { concepts: ["OSI 7 Layers", "Subnet Masking", "IPv4/IPv6"], tools: ["Wireshark", "Packet Tracer"], tasks: [{ title: "Capture TCP Handshake", type: "Lab" }], resources: [{ name: "CompTIA Network+", url: "#" }] }, category: "FOUNDATION" },
  { id: 3, title: "Linux Mastery", subtitle: "Kernel Ops", icon: Terminal, status: "COMPLETED", summary: "Master the command line, permissions, and file structures.", details: { concepts: ["Sudoers & Permissions", "SSH Configuration", "Bash Scripting"], tools: ["Ubuntu", "Kali", "Tmux"], tasks: [{ title: "Permission Escalation Lab", type: "Lab" }], resources: [{ name: "Linux Journey", url: "https://linuxjourney.com/" }] }, category: "FOUNDATION" },
  { id: 4, title: "Windows Internals", subtitle: "OS Logic", icon: Monitor, status: "COMPLETED", summary: "Deep dive into Registry, Active Directory, and Win-API.", details: { concepts: ["Registry Keys", "Active Directory Tree", "Group Policy"], tools: ["Sysinternals", "AD Explorer"], tasks: [{ title: "Analyze Registry Changes", type: "Lab" }], resources: [{ name: "Microsoft Learn AD", url: "#" }] }, category: "FOUNDATION" },
  { id: 5, title: "Scripting Basics", subtitle: "Automation", icon: FileCode, status: "COMPLETED", summary: "Automate security tasks using Bash and Python.", details: { concepts: ["Python Requests", "Scapy Packet Manipulation", "Variables & Loops"], tools: ["Python 3", "VS Code"], tasks: [{ title: "Build a Port Scanner", type: "Code" }], resources: [{ name: "Automate Boring Stuff", url: "#" }] }, category: "FOUNDATION" },
  { id: 6, title: "Adv. Networking", subtitle: "Infrastructure", icon: Radio, status: "COMPLETED", summary: "Routing, Switching, DNS, DHCP, and Firewalls.", details: { concepts: ["BGP/OSPF Routing", "NAT/PAT", "VLAN Segmentation"], tools: ["GNS3", "pfSense"], tasks: [{ title: "Setup a Firewall Rulebase", type: "Lab" }], resources: [{ name: "Cisco DevNet", url: "#" }] }, category: "DEFENSE" },
  { id: 7, title: "Security Core", subtitle: "Blueprints", icon: Shield, status: "COMPLETED", summary: "The CIA Triad, Risk Management, and Compliance.", details: { concepts: ["CIA Triad", "NIST Framework", "ISO 27001"], tools: ["OpenSSL", "KeePass"], tasks: [{ title: "Risk Assessment Report", type: "Theory" }], resources: [{ name: "CompTIA Security+", url: "#" }] }, category: "DEFENSE" },
  { id: 8, title: "Web Tech", subtitle: "The Matrix", icon: Globe, status: "COMPLETED", summary: "HTTP/HTTPS protocols, cookies, sessions, and APIs.", details: { concepts: ["HTTP Headers", "REST APIs", "CORS/SOP"], tools: ["Postman", "DevTools"], tasks: [{ title: "Intercept API Traffic", type: "Lab" }], resources: [{ name: "MDN Web Docs", url: "#" }] }, category: "DEFENSE" },
  { id: 9, title: "Web App Security", subtitle: "OWASP Top 10", icon: Lock, status: "COMPLETED", summary: "Authentication, Authorization, and Input Validation.", details: { concepts: ["OWASP Top 10", "JWT Security", "OAuth Flows"], tools: ["Burp Suite", "OWASP ZAP"], tasks: [{ title: "Analyze Broken Auth", type: "Lab" }], resources: [{ name: "PortSwigger Academy", url: "#" }] }, category: "DEFENSE" },
  { id: 10, title: "Recon & OSINT", subtitle: "Intel Gathering", icon: Search, status: "COMPLETED", summary: "Information gathering, Google Dorking, and OSINT tools.", details: { concepts: ["Passive Recon", "DNS Enumeration", "Metadata Analysis"], tools: ["Maltego", "theHarvester", "Shodan"], tasks: [{ title: "Trace a Target Domain", type: "OSINT" }], resources: [{ name: "IntelTechniques", url: "#" }] }, category: "OFFENSE" },
  { id: 11, title: "Vuln Assessment", subtitle: "Scanning", icon: AlertTriangle, status: "COMPLETED", summary: "Scanning techniques, CVE, CVSS, and Nessus.", details: { concepts: ["CVSS Scoring", "False Positives", "CVE Research"], tools: ["Nessus", "OpenVAS"], tasks: [{ title: "Full Network Scan", type: "Lab" }], resources: [{ name: "NIST NVD", url: "#" }] }, category: "OFFENSE" },
  { id: 12, title: "Network Attacks", subtitle: "Interception", icon: Radio, status: "COMPLETED", summary: "MITM attacks, DNS Spoofing, and ARP Poisoning.", details: { concepts: ["ARP Poisoning", "SSL Stripping", "Packet Injection"], tools: ["Ettercap", "Bettercap"], tasks: [{ title: "Perform an ARP Spoof", type: "Lab" }], resources: [{ name: "Hackers-Arise", url: "#" }] }, category: "OFFENSE" },
  { id: 13, title: "Exploitation", subtitle: "Breaching", icon: Database, status: "COMPLETED", summary: "Metasploit Framework, payloads, and shells.", details: { concepts: ["Staged vs Non-staged Payloads", "Reverse Shells", "MSFvenom"], tools: ["Metasploit", "Netcat"], tasks: [{ title: "Exploit a Win7 Lab", type: "Lab" }], resources: [{ name: "Metasploit Unleashed", url: "#" }] }, category: "OFFENSE" },
  { id: 14, title: "Web Exploitation", subtitle: "Injection", icon: Bug, status: "COMPLETED", summary: "SQL Injection, XSS, CSRF, and File Inclusion.", details: { concepts: ["Union-based SQLi", "Stored XSS", "LFI/RFI"], tools: ["sqlmap", "Burp Intruder"], tasks: [{ title: "Bypass Login with SQLi", type: "Lab" }], resources: [{ name: "TryHackMe Web", url: "#" }] }, category: "OFFENSE" },
  { id: 15, title: "PrivEsc", subtitle: "God Mode", icon: Workflow, status: "COMPLETED", summary: "Escalate from standard user to Root/System.", details: { concepts: ["SUID Bit Exploits", "Kernel Exploits", "Token Manipulation"], tools: ["LinPeas", "WinPeas"], tasks: [{ title: "Escalate Linux Standard", type: "Lab" }], resources: [{ name: "HackTricks", url: "#" }] }, category: "OFFENSE" },
  { id: 16, title: "Wireless Security", subtitle: "Airborne", icon: Radio, status: "COMPLETED", summary: "Wi-Fi protocols, Handshake attacks, and Evil Twin.", details: { concepts: ["WPA2/WPA3 Cracking", "WPS Pin Attacks", "PMKID"], tools: ["Aircrack-ng", "Wifite"], tasks: [{ title: "Crack WPA2 Handshake", type: "Lab" }], resources: [{ name: "Pentester Academy", url: "#" }] }, category: "ADVANCED" },
  { id: 17, title: "Malware Analysis", subtitle: "Viruses", icon: AlertTriangle, status: "COMPLETED", summary: "Static and Dynamic analysis of malicious code.", details: { concepts: ["PE Header Analysis", "Sandboxing", "Obfuscation"], tools: ["Ghidra", "Cuckoo Sandbox"], tasks: [{ title: "Analyze a Ransomware Sample", type: "Lab" }], resources: [{ name: "Practical Malware Analysis", url: "#" }] }, category: "ADVANCED" },
  { id: 18, title: "Blue Team Ops", subtitle: "Defense", icon: Shield, status: "COMPLETED", summary: "SIEM basics, log analysis, and incident response.", details: { concepts: ["Log Aggregation", "Triage", "Digital Forensics"], tools: ["Splunk", "ELK Stack"], tasks: [{ title: "Build a SOC Dashboard", type: "Lab" }], resources: [{ name: "LetsDefend", url: "#" }] }, category: "ADVANCED" },
  { id: 19, title: "Red Teaming", subtitle: "War Games", icon: Target, status: "COMPLETED", summary: "Attack chains, lateral movement, and C2 infrastructure.", details: { concepts: ["MITRE ATT&CK Framework", "C2 Servers", "Persistence"], tools: ["Sliver", "Cobalt Strike"], tasks: [{ title: "Simulate an APT Chain", type: "RedTeam" }], resources: [{ name: "RedTeam Ops", url: "#" }] }, category: "ADVANCED" },
  { id: 20, title: "Cloud & Zero Trust", subtitle: "Elite Level", icon: Cloud, status: "COMPLETED", summary: "Cloud security, Zero Trust, and Bug Bounty.", details: { concepts: ["AWS/Azure IAM", "Zero Trust Policy", "Vulnerability Disclosure"], tools: ["Terraform", "Docker"], tasks: [{ title: "Secure a Kubernetes Cluster", type: "Lab" }], resources: [{ name: "Cloud Security Alliance", url: "#" }] }, category: "ADVANCED" },
];

export default function Roadmap() {
  const [selectedLevel, setSelectedLevel] = useState<typeof levels[0] | null>(null);

  // Helper to get color styles based on category to match the image
  const getNodeStyles = (category: string, status: string) => {
    // Base styles mimicking the flowchart nodes
    const base = "border-2 shadow-[0_4px_0_rgba(0,0,0,0.3)] transition-all duration-200";
    
    // NOTE: Since all statuses are COMPLETED, this LOCKED check will simply be skipped,
    // allowing the colors below to show for every node.
    if (status === "LOCKED") return `${base} bg-zinc-800 border-zinc-700 text-zinc-500 grayscale opacity-70`;

    switch(category) {
      case "FOUNDATION": return `${base} bg-amber-400 border-amber-500 text-zinc-900 hover:bg-amber-300`; // Yellow nodes
      case "DEFENSE": return `${base} bg-rose-400 border-rose-500 text-white hover:bg-rose-300`; // Pink nodes
      case "OFFENSE": return `${base} bg-cyan-400 border-cyan-500 text-zinc-900 hover:bg-cyan-300`; // Blue nodes
      case "ADVANCED": return `${base} bg-indigo-500 border-indigo-600 text-white hover:bg-indigo-400`; // Purple nodes
      default: return `${base} bg-white border-zinc-200 text-zinc-900`;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a20] text-foreground relative overflow-hidden font-sans pb-32">
      <Navbar />
      
      {/* Deep Blue Background */}
      <div className="fixed inset-0 z-0 bg-[#0a0a20]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <section className="relative z-10 pt-32">
        <div className="container-custom max-w-6xl mx-auto">
          
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <Badge variant="outline" className="mb-4 border-amber-400/50 text-amber-400 uppercase tracking-widest bg-amber-400/10">
              Structured Learning Path
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
              Cybersecurity <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400">Roadmap</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Follow the tactical flowchart from IT Fundamentals to Elite Cloud Security Operations.
            </p>
          </motion.div>

          {/* Flowchart Layout */}
          <div className="relative w-full flex flex-col items-center">
            
            {/* Central Connector Line (Circuit Style) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-zinc-700/50 -translate-x-1/2 hidden md:block"></div>

            <div className="w-full space-y-16 relative">
              {levels.map((level, index) => {
                const styles = getNodeStyles(level.category, level.status);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    
                    {/* Connector Arm (Horizontal) */}
                    <div className={`hidden md:block absolute top-1/2 w-1/2 h-1 bg-zinc-700/50 -z-10 ${isEven ? 'right-1/2 origin-right' : 'left-1/2 origin-left'}`} />
                    
                    {/* Text Label Side */}
                    <div className={`flex-1 hidden md:flex flex-col justify-center px-8 ${isEven ? 'items-end text-right' : 'items-start text-left'}`}>
                       <h3 className="text-xl font-bold text-white mb-1">{level.category} PHASE</h3>
                       <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Level {String(level.id).padStart(2, '0')}</p>
                    </div>

                    {/* The Node (Flowchart Pill) */}
                    <div className="relative z-10 flex-shrink-0 mx-auto md:mx-0">
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedLevel(level)}
                        className={`
                          w-[280px] md:w-[320px] p-1 rounded-2xl cursor-pointer group
                          ${level.status === "ACTIVE" ? 'ring-4 ring-white/20' : ''}
                        `}
                      >
                        <div className={`
                          ${styles} rounded-xl p-5 flex items-center gap-4 relative overflow-hidden
                        `}>
                          {/* Inner Shine */}
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                          <div className="p-3 rounded-lg bg-black/10 backdrop-blur-sm">
                            <level.icon className="w-6 h-6" />
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-bold text-lg leading-tight">{level.title}</h4>
                            <p className="text-xs font-mono opacity-80 uppercase mt-1 tracking-wider">{level.subtitle}</p>
                          </div>

                          {/* Since all are completed, this checkmark will appear on all nodes */}
                          {level.status === "COMPLETED" && <CheckCircle2 className="w-5 h-5 opacity-70" />}
                          {level.status === "LOCKED" && <Lock className="w-4 h-4 opacity-50" />}
                        </div>
                      </motion.div>
                    </div>

                    {/* Empty Side for Layout Balance */}
                    <div className="flex-1 hidden md:block" />

                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Completion Flag */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500/20 border-2 border-indigo-500 mb-6 animate-bounce">
          <Flag className="w-8 h-8 text-indigo-400" />
        </div>
        <h2 className="text-2xl font-bold text-white">Roadmap Complete</h2>
        <p className="text-zinc-500">Ready for Advanced Specialization</p>
      </div>

      {/* Details Sheet - Updated Style */}
      <Sheet open={!!selectedLevel} onOpenChange={() => setSelectedLevel(null)}>
        <SheetContent className="w-[400px] sm:w-[540px] border-l border-white/10 bg-[#0f0f2a] text-white overflow-y-auto">
          {selectedLevel && (
            <>
              <SheetHeader className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={`
                     ${selectedLevel.category === 'FOUNDATION' ? 'bg-amber-400 text-black' : ''}
                     ${selectedLevel.category === 'DEFENSE' ? 'bg-rose-400 text-white' : ''}
                     ${selectedLevel.category === 'OFFENSE' ? 'bg-cyan-400 text-black' : ''}
                     ${selectedLevel.category === 'ADVANCED' ? 'bg-indigo-500 text-white' : ''}
                  `}>
                    {selectedLevel.category}
                  </Badge>
                  <span className="text-xs text-zinc-400 font-mono">ID: {selectedLevel.id}</span>
                </div>
                <SheetTitle className="text-3xl font-bold flex items-center gap-3 text-white">
                  {selectedLevel.title}
                </SheetTitle>
                <SheetDescription className="text-zinc-400 text-base">
                  {selectedLevel.summary}
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-8">
                {/* 1. Concepts */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Core Concepts
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedLevel.details.concepts.map((c, i) => (
                      <div key={i} className="p-3 rounded bg-white/5 border border-white/5 text-sm text-zinc-300">
                        {c}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Arsenal */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4" /> Toolset
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLevel.details.tools.map((t, i) => (
                      <Badge key={i} variant="secondary" className="bg-white/10 text-white border-white/10 hover:bg-white/20">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 3. Objectives */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Objectives</h4>
                  <div className="space-y-2">
                    {selectedLevel.details.tasks.map((task, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded border border-white/10 bg-black/20 text-sm text-zinc-300">
                        <CheckCircle2 className={`w-4 h-4 ${selectedLevel.status === 'COMPLETED' ? 'text-emerald-500' : 'text-zinc-700'}`} />
                        {task.title}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-white text-black hover:bg-zinc-200 mt-4 font-bold h-12">
                  <Play className="w-4 h-4 mr-2" /> 
                  {selectedLevel.status === 'LOCKED' ? 'UNLOCK MODULE' : 'ACCESS MODULE'}
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}