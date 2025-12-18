import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Shield, Terminal, Globe, Server, Lock, 
  Cpu, FileCode, Search, AlertTriangle, 
  Cloud, CheckCircle2, Flag, ChevronRight,
  BookOpen, ExternalLink, Play
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// Comprehensive Roadmap Data
const levels = [
  {
    id: 1,
    title: "IT Fundamentals",
    subtitle: "The Foundation",
    icon: Cpu,
    status: "COMPLETED",
    summary: "Before you can break systems, you must understand how they are built.",
    details: {
      concepts: [
        "Computer Architecture (RAM, CPU, I/O)",
        "Operating Systems (Windows vs Linux)",
        "Virtualization (VMware / VirtualBox)",
        "File Systems (NTFS, EXT4)"
      ],
      tools: ["VirtualBox", "PowerShell", "Command Prompt", "Git"],
      tasks: [
        { title: "Install a Virtual Machine", type: "Lab" },
        { title: "Master basic Linux commands (ls, cd, grep, chmod)", type: "Learn" },
        { title: "Understand binary & hexadecimal basics", type: "Theory" }
      ],
      resources: [
        { name: "Professor Messer A+ Course", url: "#" },
        { name: "Linux Journey", url: "https://linuxjourney.com/" }
      ]
    },
    color: "emerald"
  },
  {
    id: 2,
    title: "Networking",
    subtitle: "The Nervous System",
    icon: Globe,
    status: "COMPLETED",
    summary: "Understanding how data flows is critical for interception and analysis.",
    details: {
      concepts: [
        "OSI Model & TCP/IP Stack",
        "IP Addressing (IPv4/IPv6) & Subnetting",
        "Common Protocols (DNS, HTTP/S, FTP, SSH, DHCP)",
        "Ports & Sockets"
      ],
      tools: ["Wireshark", "Ping / Traceroute", "Netcat", "Cisco Packet Tracer"],
      tasks: [
        { title: "Capture packets with Wireshark", type: "Lab" },
        { title: "Configure a basic home network", type: "Project" },
        { title: "Understand the TCP 3-Way Handshake", type: "Theory" }
      ],
      resources: [
        { name: "Network+ Training", url: "#" },
        { name: "Cisco Networking Academy", url: "#" }
      ]
    },
    color: "emerald"
  },
  {
    id: 3,
    title: "Linux & Scripting",
    subtitle: "The Weaponry",
    icon: FileCode,
    status: "ACTIVE",
    summary: "Automation is the key to scaling your attacks and defense.",
    details: {
      concepts: [
        "Linux File System Hierarchy",
        "Bash Scripting (Loops, Variables, Functions)",
        "Python for Cybersecurity (Requests, Scapy)",
        "Regular Expressions (Regex)"
      ],
      tools: ["Kali Linux", "VS Code", "Vim / Nano", "Bash"],
      tasks: [
        { title: "Write a Bash script to ping a range of IPs", type: "Code" },
        { title: "Write a Python port scanner", type: "Code" },
        { title: "Install and configure Kali Linux", type: "Lab" }
      ],
      resources: [
        { name: "Automate the Boring Stuff with Python", url: "#" },
        { name: "OverTheWire: Bandit Wargame", url: "https://overthewire.org/wargames/bandit/" }
      ]
    },
    color: "blue"
  },
  {
    id: 4,
    title: "Security Core",
    subtitle: "Defensive Theory",
    icon: Shield,
    status: "LOCKED",
    summary: "Learn the rules of engagement, ethics, and defensive principles.",
    details: {
      concepts: [
        "CIA Triad (Confidentiality, Integrity, Availability)",
        "Authentication vs Authorization",
        "Cryptography (Symmetric/Asymmetric, Hashing)",
        "Risk Management & Compliance (GDPR, HIPAA)"
      ],
      tools: ["OpenSSL", "GPG", "LastPass / KeePass"],
      tasks: [
        { title: "Encrypt a file using GPG", type: "Lab" },
        { title: "Generate an SSH Key Pair", type: "Lab" },
        { title: "Read the OWASP Top 10", type: "Read" }
      ],
      resources: [
        { name: "CompTIA Security+", url: "#" },
        { name: "Cybrary Security Fundamentals", url: "#" }
      ]
    },
    color: "slate"
  },
  {
    id: 5,
    title: "Offensive Ops",
    subtitle: "Red Teaming",
    icon: Search,
    status: "LOCKED",
    summary: "The art of exploitation. Simulate attacks to find weaknesses.",
    details: {
      concepts: [
        "Reconnaissance (Passive/Active)",
        "Scanning & Enumeration",
        "Vulnerability Assessment",
        "Exploitation (Buffer Overflows, Web Shells)",
        "Privilege Escalation"
      ],
      tools: ["Nmap", "Metasploit", "Burp Suite", "Hydra", "John the Ripper"],
      tasks: [
        { title: "Complete the 'Pre-Security' path on TryHackMe", type: "Lab" },
        { title: "Hack your first machine on HackTheBox", type: "Lab" },
        { title: "Perform a SQL Injection attack (in a lab)", type: "Lab" }
      ],
      resources: [
        { name: "TryHackMe", url: "https://tryhackme.com" },
        { name: "HackTheBox", url: "https://hackthebox.com" },
        { name: "PortSwigger Academy", url: "#" }
      ]
    },
    color: "slate"
  },
  {
    id: 6,
    title: "Blue Team Ops",
    subtitle: "Incident Response",
    icon: AlertTriangle,
    status: "LOCKED",
    summary: "Detect, analyze, and neutralize active threats.",
    details: {
      concepts: [
        "SIEM (Security Information & Event Management)",
        "IDS / IPS Configuration",
        "Digital Forensics",
        "Malware Analysis Basics",
        "Threat Hunting"
      ],
      tools: ["Splunk", "Wazuh", "Snort", "Autopsy", "YARA"],
      tasks: [
        { title: "Analyze a PCAP file for malware traffic", type: "Lab" },
        { title: "Set up a Wazuh agent", type: "Lab" },
        { title: "Investigate a Windows Event Log", type: "Lab" }
      ],
      resources: [
        { name: "LetsDefend.io", url: "#" },
        { name: "Blue Team Labs Online", url: "#" }
      ]
    },
    color: "slate"
  },
  {
    id: 7,
    title: "Advanced Warfare",
    subtitle: "Specialization",
    icon: Cloud,
    status: "LOCKED",
    summary: "Elite level operations in specialized domains.",
    details: {
      concepts: [
        "Cloud Security (AWS/Azure/GCP)",
        "DevSecOps Pipelines",
        "Zero Trust Architecture",
        "Advanced Persistent Threats (APTs)"
      ],
      tools: ["Docker", "Kubernetes", "Terraform", "CloudWatch"],
      tasks: [
        { title: "Secure an AWS S3 Bucket", type: "Lab" },
        { title: "Audit a Docker Container", type: "Lab" },
        { title: "Obtain CISSP or OSCP Certification", type: "Goal" }
      ],
      resources: [
        { name: "Cloud Security Alliance", url: "#" },
        { name: "OffSec (OSCP)", url: "#" }
      ]
    },
    color: "purple"
  }
];

export default function Roadmap() {
  const [selectedLevel, setSelectedLevel] = useState<typeof levels[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-foreground relative overflow-hidden font-sans selection:bg-primary/30">
      <Navbar />
      
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.03),transparent_70%)]" />
        <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <section className="relative z-10 pt-32 pb-20">
        <div className="container-custom max-w-5xl mx-auto">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(var(--primary),0.3)] animate-pulse">
              <Terminal className="w-4 h-4" />
              Mission Progression
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
              Cyber <span className="text-primary">Roadmap</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a mission node to access detailed intelligence, training modules, and field objectives.
            </p>
          </motion.div>

          {/* Game Map Container */}
          <div className="relative w-full max-w-3xl mx-auto min-h-[800px]">
            
            {/* SVG Connector Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" style={{ filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.3))' }}>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="40%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>
              <path 
                d="M 150 100 Q 400 100 650 250 T 150 400 T 650 550 T 150 700 T 400 850" 
                fill="none" 
                stroke="url(#pathGradient)" 
                strokeWidth="4" 
                strokeDasharray="10 5"
                strokeLinecap="round"
                className="opacity-50"
              />
            </svg>

            {/* Level Nodes */}
            <div className="relative z-10 space-y-16 md:space-y-0">
              
              {levels.map((level, index) => {
                const positions = [
                  "md:top-[50px] md:left-[100px]",
                  "md:top-[200px] md:left-[600px]",
                  "md:top-[350px] md:left-[100px]",
                  "md:top-[500px] md:left-[600px]",
                  "md:top-[650px] md:left-[100px]",
                  "md:top-[800px] md:left-[500px]",
                  "md:top-[900px] md:left-[350px]",
                ];

                const isCompleted = level.status === "COMPLETED";
                const isActive = level.status === "ACTIVE";
                const isLocked = level.status === "LOCKED";

                return (
                  <motion.div
                    key={level.id}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    className={`relative md:absolute ${positions[index]} flex flex-col items-center group w-full md:w-auto cursor-pointer`}
                    onClick={() => setSelectedLevel(level)}
                  >
                    {/* Level Orb */}
                    <div className={`
                      relative w-24 h-24 rounded-full flex items-center justify-center border-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 z-20 hover:scale-110
                      ${isCompleted ? 'bg-background border-emerald-500 shadow-emerald-500/30' : ''}
                      ${isActive ? 'bg-background border-blue-500 shadow-blue-500/50 scale-110' : ''}
                      ${isLocked ? 'bg-muted/10 border-muted-foreground/30 grayscale opacity-70' : ''}
                    `}>
                      <level.icon className={`
                        w-10 h-10 transition-colors duration-300
                        ${isCompleted ? 'text-emerald-500' : ''}
                        ${isActive ? 'text-blue-500 animate-pulse' : ''}
                        ${isLocked ? 'text-muted-foreground/50' : ''}
                      `} />

                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-full border border-blue-500 animate-ping opacity-20" />
                          <div className="absolute -inset-4 rounded-full border border-blue-500/30 animate-pulse" />
                        </>
                      )}

                      {/* Number Badge */}
                      <div className={`
                        absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2
                        ${isCompleted ? 'bg-emerald-500 border-emerald-600 text-black' : ''}
                        ${isActive ? 'bg-blue-500 border-blue-600 text-white' : ''}
                        ${isLocked ? 'bg-muted border-muted-foreground text-muted-foreground' : ''}
                      `}>
                        {level.id}
                      </div>
                    </div>

                    {/* Label */}
                    <div className={`
                      mt-4 text-center transition-all duration-300
                      ${isActive ? 'opacity-100 scale-110' : 'opacity-80 group-hover:opacity-100 group-hover:scale-105'}
                      ${isLocked ? 'opacity-50' : ''}
                    `}>
                      <h3 className={`text-xl font-bold ${isCompleted ? 'text-emerald-400' : isActive ? 'text-blue-400' : 'text-muted-foreground'}`}>
                        {level.title}
                      </h3>
                      <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                        {level.subtitle}
                      </p>
                      <span className="text-[10px] text-primary/80 mt-1 block group-hover:underline">
                        Click for Intel
                      </span>
                    </div>

                  </motion.div>
                );
              })}

              {/* Final Flag */}
              <motion.div 
                className="relative md:absolute md:top-[980px] md:left-[350px] w-full flex justify-center pt-12 md:pt-0"
              >
                <div className="flex flex-col items-center opacity-80">
                  <Flag className="w-12 h-12 text-yellow-500 mb-2 animate-bounce" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Sheet */}
      <Sheet open={!!selectedLevel} onOpenChange={() => setSelectedLevel(null)}>
        <SheetContent className="w-[400px] sm:w-[540px] border-l border-primary/20 bg-background/95 backdrop-blur-xl overflow-y-auto">
          {selectedLevel && (
            <>
              <SheetHeader className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className={`
                    ${selectedLevel.status === 'COMPLETED' ? 'border-emerald-500 text-emerald-500' : ''}
                    ${selectedLevel.status === 'ACTIVE' ? 'border-blue-500 text-blue-500' : ''}
                    ${selectedLevel.status === 'LOCKED' ? 'border-muted text-muted-foreground' : ''}
                  `}>
                    STATUS: {selectedLevel.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">ID: SEC-LVL-{selectedLevel.id}00</span>
                </div>
                <SheetTitle className="text-3xl font-bold flex items-center gap-3">
                  <selectedLevel.icon className="w-8 h-8 text-primary" />
                  {selectedLevel.title}
                </SheetTitle>
                <SheetDescription className="text-base text-muted-foreground/90">
                  {selectedLevel.summary}
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-8">
                
                {/* 1. Concepts */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Intel / Concepts
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedLevel.details.concepts.map((concept, i) => (
                      <div key={i} className="p-3 rounded-lg bg-secondary/5 border border-white/5 text-sm flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {concept}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Tools */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4" /> Required Arsenal
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLevel.details.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/5 text-primary border-primary/10">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 3. Tasks */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Mission Objectives
                  </h4>
                  <div className="space-y-3">
                    {selectedLevel.details.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors group">
                        <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center 
                          ${selectedLevel.status === 'COMPLETED' ? 'border-emerald-500 text-emerald-500' : 'border-muted-foreground/30 text-transparent'}
                        `}>
                          {selectedLevel.status === 'COMPLETED' && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{task.title}</p>
                          <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-white/5 mt-1 inline-block">
                            {task.type}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Resources */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Data Uplinks
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedLevel.details.resources.map((res, i) => (
                      <a 
                        key={i} 
                        href={res.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
                      >
                        <span className="text-sm font-medium text-primary">{res.name}</span>
                        <ExternalLink className="w-3 h-3 text-primary/50" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Play className="w-4 h-4 mr-2" /> Start Training
                </Button>
              </div>

            </>
          )}
        </SheetContent>
      </Sheet>
      
      <Footer />
    </div>
  );
}