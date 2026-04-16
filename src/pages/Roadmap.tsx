import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import {
  Shield, Globe, Terminal, Cpu, Search, AlertTriangle, Bug, Database,
  Activity, Cloud, Target, Lock, Binary, Code2, Layout, BookOpen,
  ExternalLink, Download, Share2, Mail, Bell, Play, Zap, Star, Link2,
  ChevronRight, Flag, Users, Box, GraduationCap, Youtube, Github,
  Command, Wifi, Key, Server, Laptop, HardDrive, Smartphone,
  Layers, Settings, Info, ArrowDown, ArrowRight, Rocket, Workflow, Brain, FileCode
} from "lucide-react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// --- EXPANDED DATA: ROADMAP STRUCTURE ---
// --- DETAILED ROADMAP DATA STRUCTURE ---
const roadmapData = {
  central: [
    {
      id: "general",
      title: "1. Pre-requisite Knowledge",
      topics: [
        {
          name: "Search Engines (Google Dorking)",
          description: "Advanced techniques to find hidden information using search engine operators. Essential for OSINT and reconnaissance.",
          subtopics: ["Advanced Operators (site:, filetype:, intitle:)", "Google Hacking Database (GHDB)", "Social Media Scraping techniques"],
          resources: [{ name: "GHDB by Exploit-DB", link: "https://www.exploit-db.com/google-hacking-database" }, { name: "OSINT Framework", link: "https://osintframework.com/" }]
        },
        {
          name: "Git & Version Control",
          description: "Mastering Git is crucial for managing pentest reports, scripts, and collaborating on security tools.",
          subtopics: ["Branching & Merging", "Git Hooks for Security", "Gitleaks / Secret Scanning"],
          resources: [{ name: "Missing Semester (Mit)", link: "https://missing.csail.mit.edu/" }]
        },
        {
          name: "Technical Writing & Markdown",
          description: "A security professional is only as good as their report. Learn to document findings clearly.",
          subtopics: ["Markdown Syntax", "Pentesting Report Structures", "Evidence Documentation"],
          resources: [{ name: "TCM Report Template", link: "https://tcm-sec.com/report-writing-for-pentesters/" }]
        }
      ],
    },
    {
      id: "os",
      title: "2. Operating Systems Mastery",
      topics: [
        {
          name: "Windows Environment",
          description: "Understanding Windows internals is key for both attacking and defending corporate environments.",
          subtopics: ["Windows Registry", "Active Directory Concepts", "Access Control Lists (ACLs)", "Processes & Threads"],
          resources: [{ name: "Microsoft Learn", link: "https://docs.microsoft.com/en-us/learn/" }]
        },
        {
          name: "Linux Internals & Kernel",
          description: "Most servers and many security tools run on Linux. Mastering the kernel and CLI is mandatory.",
          subtopics: ["Kernel Modules", "File System Hierarchy", "Permissions (SUID/SGID)", "Systemd & Services"],
          resources: [{ name: "Linux Journey", link: "https://linuxjourney.com/" }]
        },
        {
          name: "Shell Scripting (Bash/PowerShell)",
          description: "Automation of repetitive tasks and building custom exploit scripts.",
          subtopics: ["Looping & Logic", "Piping & Redirection", "Custom Tool Wrappers"],
          resources: [{ name: "Hacker-Arise Bash for Hackers", link: "https://www.hackers-arise.com/linux" }]
        }
      ],
    },
    {
      id: "network",
      title: "3. Networking Intelligence",
      topics: [
        {
          name: "Networking Fundamentals",
          description: "The foundation of all cyber communication. You cannot hack what you don't understand.",
          subtopics: ["OSI & TCP/IP Stack", "DNS / DHCP / ARP", "Subnetting & VLANs"],
          resources: [{ name: "CompTIA Network+", link: "https://www.comptia.org/" }]
        },
        {
          name: "Packet Analysis",
          description: "Decoding what actually travels over the wire.",
          subtopics: ["Wireshark Filters", "Tcpdump Analysis", "Traffic Pattern Detection"],
          resources: [{ name: "Wireshark University", link: "https://www.wireshark.org/training/" }]
        }
      ],
    },
    {
      id: "scripting",
      title: "4. Programming for Security",
      topics: [
        {
          name: "Python for Automation",
          description: "The gold standard for security scripting and tool development.",
          subtopics: ["Requests library", "Scapy for Packet Manipulation", "Exploit Development with Pwntools"],
          resources: [{ name: "Black Hat Python", link: "https://nostarch.com/blackhatpython" }]
        },
        {
          name: "Go/Rust for Modern Tools",
          description: "High performance, memory safe languages used in modern security tools.",
          subtopics: ["Concurrent Scanning", "Cross-compilation", "Custom C2 Development"],
          resources: [{ name: "Offensive Go", link: "https://github.com/v8tix/FFUF" }]
        }
      ],
    },
    {
      id: "web_sec",
      title: "5. Web Application Security",
      topics: [
        {
          name: "OWASP Top 10",
          description: "The must-know vulnerabilities that plague modern web applications.",
          subtopics: ["SQL Injection", "XSS (Cross-Site Scripting)", "Broken Access Control", "SSRF"],
          resources: [{ name: "PortSwigger Academy", link: "https://portswigger.net/web-security" }]
        },
        {
          name: "API & GraphQL Security",
          description: "The modern attack surface for mobile and web apps.",
          subtopics: ["IDOR in APIs", "Query Logic Errors", "JWT Manipulation"],
          resources: [{ name: "API Security.io", link: "https://apisecurity.io" }]
        }
      ],
    },
    {
      id: "security_core",
      title: "7. Security Core Concepts",
      topics: [
        {
          name: "CIA Triad",
          description: "Confidentiality, Integrity, and Availability. The multi-decade foundation of protection.",
          subtopics: ["Risk Assessment", "Control Selection", "Security Policies"],
          resources: [{ name: "NIST Sp 800-53", link: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" }]
        },
        {
          name: "Cryptography & PKI",
          description: "Understanding how to hide and verify information via math.",
          subtopics: ["Hashing vs Encryption", "Symmetric vs Asymmetric", "Public Key Infrastructure (PKI)", "Digital Signatures"],
          resources: [{ name: "Cryptohack", link: "https://cryptohack.org/" }]
        }
      ],
    },
    {
      id: "defensive",
      title: "8. Defensive Security (Blue Team)",
      topics: [
        {
          name: "Security Operations (SOC)",
          description: "Monitoring and responding to threats in real-time.",
          subtopics: ["SIEM (Splunk/ELK)", "Log Analysis", "Alert Triage"],
          resources: [{ name: "LetsDefend", link: "https://letsdefend.io" }]
        },
        {
          name: "Digital Forensics & IR",
          description: "Investigating the 'how' and 'what' after a breach.",
          subtopics: ["Memory Forensics", "Network Forensics", "Artifact Analysis"],
          resources: [{ name: "CyberDefenders", link: "https://cyberdefenders.org" }]
        }
      ],
    },
    {
      id: "cloud",
      title: "9. Cloud Security",
      topics: [
        {
          name: "Cloud Architecture",
          description: "Securing resources in AWS, Azure, and GCP.",
          subtopics: ["IAM Policies", "Shared Responsibility Model", "Cloud Network Security"],
          resources: [{ name: "AWS Security Documentation", link: "https://aws.amazon.com/security/" }]
        },
        {
          name: "Container & K8s Security",
          description: "Securing modern microservices architecture.",
          subtopics: ["Docker Hardening", "Kubernetes RBAC", "Runtime Security"],
          resources: [{ name: "Aqua Security Blog", link: "https://blog.aquasec.com/" }]
        }
      ],
    },
    {
      id: "advanced",
      title: "10. Advanced & Specialist",
      topics: [
        {
          name: "Malware Reverse Engineering",
          description: "Breaking down malicious code to understand its purpose.",
          subtopics: ["Static Analysis", "Dynamic Analysis", "Decompilers (Ghidra/IDA)"],
          resources: [{ name: "Flare-On Challenge", link: "https://flare-on.com" }]
        },
        {
          name: "Red Teaming & Adversary Simulation",
          description: "Mimicking real attackers to test absolute organizational resilience.",
          subtopics: ["C2 Infrastructure", "Evasion Techniques", "Active Directory Exploitation"],
          resources: [{ name: "Red Team Ops (ZeroPointSecurity)", link: "https://training.zeropointsecurity.co.uk/" }]
        }
      ],
    }
  ],
  sidebar: [
    {
      id: "ctfs",
      title: "Interactive Labs & CTFs",
      items: ["HackTheBox (HTB)", "TryHackMe (THM)", "OffSec Proving Grounds", "LetsDefend (Blue Team)", "CyberDefenders", "VulnHub & OverTheWire", "RootMe"],
      position: "left"
    },
    {
      id: "certs",
      title: "Certification Hierarchy",
      groups: [
        { label: "Tier 1: Foundations", items: ["CompTIA Security+", "CompTIA Network+", "ISC2 CC", "eJPTv2"] },
        { label: "Tier 2: Intermediate", items: ["CompTIA CySA+", "BTL1 (Blue Team)", "eCPPT", "Cisco CyberOps"] },
        { label: "Tier 3: Professional", items: ["OSCP (OffSec)", "CPTS / CBBH", "CISSP", "CISM", "CASP+"] },
        { label: "Tier 4: Elite", items: ["OSEP / OSWE / OSED", "CRTO (Red Team Ops)", "GIAC GSE", "CISO Level Certs"] }
      ],
      position: "left"
    },
    {
      id: "toolbox_red",
      title: "Red Team Armory",
      items: ["Nmap / Masscan", "Burp Suite / ZAP", "Metasploit Framework", "Cobalt Strike / Mythic", "BloodHound", "Hashcat / John", "Impacket", "Sliver C2"],
      position: "right"
    },
    {
      id: "toolbox_blue",
      title: "Blue Team Armory",
      items: ["Splunk / Elastic (ELK)", "Wireshark / Zeek", "Snort / Suricata", "Wazuh (SIEM/XDR)", "Velociraptor", "Ghidra / IDA Pro", "YARA Strings", "Autopsy Forensics"],
      position: "right"
    }
  ]
};

// --- RESOURCES EXPANSION (ULTIMATE CYBERSECURITY ARSENAL) ---
const resources = {
  academies: [
    { title: "Coursera", description: "Google, IBM cybersecurity courses and professional certificates.", category: "COURSES", icon: GraduationCap, link: "https://www.coursera.org/courses?query=cybersecurity" },
    { title: "Cybrary", description: "500+ free courses on cyber topics, SOC, and IT administration.", category: "COURSES", icon: GraduationCap, link: "https://www.cybrary.it" },
    { title: "SANS Cyber Aces", description: "The core concepts needed to assess and protect info security systems.", category: "TRAINING", icon: Shield, link: "https://www.sans.org/cyberaces" },
    { title: "Fortinet Training", description: "Network Security Expert (NSE) free rigorous training program.", category: "COURSES", icon: Shield, link: "https://training.fortinet.com" },
    { title: "OpenSecurityTraining", description: "Deep dive x86, malware analysis, and advanced network forensics.", category: "TRAINING", icon: BookOpen, link: "https://opensecuritytraining.info" },
    { title: "Cisco Networking", description: "Industry-recognized tech, networking, and critical security courses.", category: "NETWORKING", icon: Server, link: "https://www.netacad.com" },
    { title: "edX", description: "University-level cybersecurity training from MIT, Harvard, etc.", category: "COURSES", icon: GraduationCap, link: "https://www.edx.org" },
    { title: "Stanford Online", description: "Free premier courses in cryptography, SQL, and IoT security.", category: "COURSES", icon: GraduationCap, link: "https://online.stanford.edu" }
  ],
  laboratories: [
    { title: "TryHackMe", description: "Gamified, highly interactive cyber security training for all levels.", category: "LABS/TRAINING", icon: Terminal, link: "https://tryhackme.com" },
    { title: "Hack The Box", description: "Advanced penetration testing and CTF labs used by professionals.", category: "PENTESTING", icon: Box, link: "https://hackthebox.com" },
    { title: "PortSwigger Academy", description: "The definitive guide and labs for mastering Web Application Security.", category: "WEB SEC", icon: Globe, link: "https://portswigger.net/web-security" },
    { title: "OverTheWire", description: "Learn Linux and security concepts in an addictive wargame format.", category: "WARGAMES", icon: Terminal, link: "https://overthewire.org" },
    { title: "VulnHub", description: "Downloadable vulnerable machines for practical offline training.", category: "PENTESTING", icon: Server, link: "https://www.vulnhub.com" },
    { title: "PicoCTF", description: "Excellent beginner CTF series from Carnegie Mellon University.", category: "CTF", icon: Flag, link: "https://picoctf.org" },
    { title: "Root Me", description: "Train your hacking skills on multiple realistic scenarios & domains.", category: "CTF", icon: Target, link: "https://www.root-me.org" },
    { title: "PentesterLab", description: "Learn web penetration testing effectively, from zero to hero.", category: "WEB SEC", icon: Bug, link: "https://pentesterlab.com" }
  ],
  literature: [
    { title: "Web App Hacker's Handbook", description: "The absolute Bible for web application vulnerabilities & security.", category: "MUST READ", icon: BookOpen, link: "https://owasp.org/" },
    { title: "The Hacker Playbook 3", description: "A highly practical guide to penetration testing and red teaming.", category: "PENTESTING", icon: BookOpen, link: "#" },
    { title: "Practical Malware Analysis", description: "Dissecting malicious software and reverse engineering fundamentals.", category: "MALWARE", icon: BookOpen, link: "#" },
    { title: "Linux Basics for Hackers", description: "Mastering Linux specifically for networking and security ops.", category: "LINUX", icon: BookOpen, link: "#" },
    { title: "NIST Framework", description: "Official Cybersecurity Framework standard guidelines.", category: "GOV DOCS", icon: BookOpen, link: "https://www.nist.gov/cyberframework" },
    { title: "OWASP Testing Guide", description: "Comprehensive methodologies for app security testing.", category: "PDF BOOK", icon: BookOpen, link: "https://owasp.org/www-project-web-security-testing-guide/" }
  ],
  intelligence: [
    { title: "The Hacker News", description: "Leading cybersecurity news source covering the latest major breaches.", category: "NEWS", icon: Bell, link: "https://thehackernews.com" },
    { title: "BleepingComputer", description: "Up-to-the-minute updates on ransomware, zero-days & malware.", category: "NEWS", icon: Shield, link: "https://www.bleepingcomputer.com" },
    { title: "Dark Reading", description: "Comprehensive IT security news and expert editorial analysis.", category: "NEWS", icon: BookOpen, link: "https://www.darkreading.com" },
    { title: "Krebs on Security", description: "In-depth investigative security journalism by Brian Krebs.", category: "INVESTIGATOR", icon: Search, link: "https://krebsonsecurity.com" },
    { title: "r/cybersecurity", description: "The premier Reddit community for real insights and daily advice.", category: "REDDIT", icon: Users, link: "https://reddit.com/r/cybersecurity" },
    { title: "CISA Alerts", description: "Official United States government cyber security advisories.", category: "ALERTS", icon: AlertTriangle, link: "https://www.cisa.gov" }
  ],
  broadcasting: [
    { title: "John Hammond", description: "Incredible CTF walkthroughs, malware analysis, and hacking tools.", category: "YOUTUBE", icon: Youtube, link: "https://youtube.com/c/JohnHammond010" },
    { title: "IppSec", description: "Detailed, methodical Hack The Box machine walkthroughs & logic.", category: "YOUTUBE", icon: Youtube, link: "https://youtube.com/c/ippsec" },
    { title: "NetworkChuck", description: "Highly engaging tech, networking, and exciting hacking content.", category: "YOUTUBE", icon: Youtube, link: "https://youtube.com/c/NetworkChuck" },
    { title: "The Cyber Mentor", description: "Practical ethical hacking courses and professional career advice.", category: "YOUTUBE", icon: Youtube, link: "https://youtube.com/c/TheCyberMentor" },
    { title: "LiveOverflow", description: "Deeply technical videos on CTFs, exploitation, and reverse engineering.", category: "YOUTUBE", icon: Youtube, link: "https://youtube.com/c/LiveOverflow" },
    { title: "David Bombal", description: "Networking, Linux, virtualization, and beginner cybersecurity concepts.", category: "YOUTUBE", icon: Youtube, link: "https://youtube.com/c/DavidBombal" }
  ],
  repositories: [
    { title: "awesome-cybersecurity", description: "A beautifully curated master list of awesome cybersecurity resources.", category: "GITHUB", icon: Github, link: "https://github.com/sbilly/awesome-security" },
    { title: "PayloadsAllTheThings", description: "A massive, legendary collection of web attack payloads.", category: "GITHUB", icon: Github, link: "https://github.com/swisskyrepo/PayloadsAllTheThings" },
    { title: "SecLists", description: "The pen tester's ultimate collection of wordlists for brute-forcing.", category: "GITHUB", icon: Github, link: "https://github.com/danielmiessler/SecLists" },
    { title: "OWASP Cheat Sheets", description: "Actionable defense strategies, hardening guides, and quick fixes.", category: "GITHUB", icon: Github, link: "https://github.com/OWASP/CheatSheetSeries" }
  ],
  bounties: [
    { title: "HackerOne", description: "Connect with real organizations for lucrative bug bounties.", category: "PLATFORM", icon: Bug, link: "https://www.hackerone.com/" },
    { title: "Bugcrowd", description: "Crowdsourced security and exclusive bug bounty elite programs.", category: "PLATFORM", icon: Bug, link: "https://www.bugcrowd.com/" },
    { title: "Intigriti", description: "Europe's leading agile bug bounty platform & community.", category: "PLATFORM", icon: Bug, link: "https://www.intigriti.com/" },
    { title: "Bugcrowd University", description: "Free specific training to become a top, successful bounty hunter.", category: "TRAINING", icon: GraduationCap, link: "https://www.bugcrowd.com/university/" }
  ]
};

const youtubeIntel = [
  {
    category: "Foundations",
    channels: ["NetworkChuck", "David Bombal", "Heath Adams", "Professor Messer", "freeCodeCamp", "Eli the Computer Guy", "Simplilearn", "Intellipaat", "Great Learning", "edureka!"]
  },
  {
    category: "Red Team & Hacking",
    channels: ["IppSec", "John Hammond", "LiveOverflow", "NahamSec", "STÖK", "InsiderPhD", "HackerSploit", "The XSS Rat", "Null Byte", "Zaid Sabih"]
  },
  {
    category: "Blue Team & SOC",
    channels: ["SANS Institute", "Black Hills Information Security", "Gerald Auger", "CISA", "NIST", "Microsoft Security", "IBM Security", "Google Cloud Tech"]
  },
  {
    category: "Malware & RE",
    channels: ["MalwareTech", "OALabs", "Hussein Nasser", "Low Level Learning", "OpenSecurityTraining"]
  },
  {
    category: "Networking",
    channels: ["Jeremy Cioara", "Cisco Networking Academy", "Keith Barker", "PowerCert Animated Videos", "Sunny Classroom"]
  },
  {
    category: "Bug Bounty",
    channels: ["Bugcrowd", "HackerOne", "PortSwigger", "OWASP Foundation", "Jhaddix", "NahamSec Live"]
  },
  {
    category: "Conferences & Research",
    channels: ["DEF CON", "Black Hat", "RSA Conference", "Nullcon", "Security Weekly", "Hak5"]
  }
];

const bestCombo = ["IppSec", "John Hammond", "NahamSec", "HackerSploit", "LiveOverflow"];

const NodeBox = ({ title, color = "yellow", active = false, onClick }: { title: string, color?: string, active?: boolean, onClick?: () => void }) => {
  const bgColor = color === "yellow" ? "bg-[#facc15]" : "bg-white dark:bg-zinc-900";
  const textColor = color === "yellow" ? "text-black" : "text-black dark:text-white";

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative cursor-pointer border-2 border-black p-4 text-center font-black text-xs md:text-sm min-w-[200px]
        shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,0.05)]
        ${bgColor} ${textColor}
        transition-all duration-300 group
      `}
    >
      <div className="flex items-center justify-center gap-2">
        {onClick && <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />}
        {title}
      </div>
    </motion.div>
  );
};

export default function Roadmap() {
  const [activeTab, setActiveTab] = useState("resources");
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleTopicClick = (topic: any) => {
    setSelectedTopic(topic);
    setIsSheetOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#070712] transition-colors duration-500 pb-40">
      <Navbar />

      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-4">

          {/* HEADER SECTION (ROADMAP.SH CLONE STYLE) */}
          <div className="w-full flex justify-center mb-16 px-4">
            <div className="bg-white dark:bg-zinc-900 border-[3px] border-black dark:border-white/10 p-12 md:p-16 rounded-[2rem] shadow-2xl max-w-6xl w-full relative group">
              <div className="absolute top-0 right-0 p-8 flex flex-wrap justify-end gap-3 hidden sm:flex">
                <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-xs font-black border-2 border-black/5 dark:border-white/5 uppercase tracking-widest"><Bell className="w-4 h-4" /> Subscriber Hub</button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground text-xs font-black border-2 border-black/20 uppercase tracking-widest"><Download className="w-4 h-4" /> Download PDF</button>
                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-2 border-black/5 dark:border-white/5"><Share2 className="w-5 h-5" /></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-primary font-black text-xs uppercase tracking-[0.4em]">
                  <div className="w-12 h-1 bg-primary" />
                  Strategic Roadmap
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-black text-black dark:text-white tracking-tighter leading-none italic">
                  Cyber Security <br /><span className="text-primary not-italic">Expert.</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-500 font-bold max-w-3xl leading-relaxed">
                  A comprehensive, community-driven masterplan to navigate the complex cybersecurity landscape in 2026.
                </p>
              </div>

              <div className="mt-16 flex flex-wrap gap-10 border-b-2 border-zinc-100 dark:border-white/5">
                {[
                  { id: 'resources', label: 'Intelligence Hub', icon: BookOpen },
                  { id: 'path', label: 'The Master Path', icon: Workflow },
                  { id: 'ai', label: 'SkillPath AI', icon: Brain }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-6 px-4 font-black text-xs md:text-sm tracking-[0.3em] uppercase transition-all border-b-4 flex items-center gap-3 ${activeTab === tab.id ? 'border-primary text-black dark:text-white' : 'border-transparent text-zinc-400 hover:text-zinc-600'}`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between text-zinc-400 text-[10px] font-black uppercase tracking-widest gap-6">
                <div className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 px-5 py-2 rounded-full">
                  <Users className="w-4 h-4 text-primary" />
                  <span>77,261 Operators Tracking Progress</span>
                </div>
                <button className="bg-black dark:bg-zinc-950 text-white px-10 py-3 rounded-2xl hover:bg-zinc-800 transition-all border-2 border-white/10">Join the Syndicate</button>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} className="w-full">
            {/* HUB TAB - REDESIGNED PREMIUM UI */}
            <TabsContent value="resources" className="mt-0 space-y-32 outline-none">
              <div className="flex flex-col lg:flex-row gap-12 pt-8">

                {/* CATEGORY NAVIGATOR (Sticky Sidebar) */}
                <div className="lg:w-80 space-y-4 hidden lg:block">
                  <div className="sticky top-32 space-y-6">
                    <div className="p-8 bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-[2rem] shadow-xl">
                      <h3 className="text-sm font-black text-black dark:text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-primary" />
                        Classified Hubs
                      </h3>
                      <div className="space-y-2">
                        {Object.keys(resources).map((category) => (
                          <a
                            key={category}
                            href={`#${category}`}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-500 hover:text-primary transition-all group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-primary transition-colors" />
                            <span className="text-xs font-bold capitalize">{category}</span>
                          </a>
                        ))}
                        <a
                          href="#youtube-intel"
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-500 hover:text-primary transition-all group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-primary transition-colors" />
                          <span className="text-xs font-bold capitalize">YouTube Intel</span>
                        </a>
                      </div>
                    </div>

                    <div className="p-8 bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-[2rem] relative overflow-hidden group">
                      <div className="relative z-10">
                        <Zap className="w-8 h-8 text-primary mb-4" />
                        <h4 className="text-sm font-black text-black dark:text-white mb-2 uppercase italic">Tactical Beta</h4>
                        <p className="text-[10px] text-zinc-500 font-bold leading-relaxed">Early access to AI-driven resource matching is now active.</p>
                      </div>
                      <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform">
                        <Brain className="w-24 h-24" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 space-y-32">
                  {/* SKILLPATH AI VISION BOX - REFINED */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-1 px-1 bg-gradient-to-br from-primary via-primary/20 to-transparent rounded-[3rem]"
                  >
                    <div className="p-12 md:p-16 bg-white dark:bg-[#0a0a1a] rounded-[2.9rem] relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                        <Rocket className="w-96 h-96" />
                      </div>

                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-black text-primary uppercase tracking-widest">Neural Link Active</span>
                          </div>
                          <h2 className="text-5xl md:text-7xl font-display font-black text-black dark:text-white italic tracking-tighter leading-none">
                            Resource <br /><span className="text-primary not-italic underline decoration-4 underline-offset-8">Intelligence.</span>
                          </h2>
                          <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic">
                            "SkillPath AI dynamically indexes the global security landscape to provide you with a pre-vetted tactical edge."
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          {[
                            { title: "NLP Diagnostics", icon: Search, desc: "AI-driven profile analysis for tailored content." },
                            { title: "Market-Link Sync", icon: Activity, desc: "Real-time sync with industry requirements." }
                          ].map((feat, i) => (
                            <div key={i} className="p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-[2rem] hover:border-primary/50 transition-colors group">
                              <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                                  <feat.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                  <div className="font-black text-sm text-black dark:text-white uppercase tracking-wider">{feat.title}</div>
                                  <p className="text-xs text-zinc-500 font-medium">{feat.desc}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* RESOURCE SECTIONS */}
                  {Object.entries(resources).map(([domain, items]) => (
                    <div key={domain} id={domain} className="space-y-12 scroll-mt-40">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-white/10">
                        <div className="space-y-2">
                          <div className="text-primary font-black text-[10px] uppercase tracking-[0.5em]">Sector: Alpha-{domain.slice(0, 3)}</div>
                          <h2 className="text-4xl md:text-6xl font-display font-black text-black dark:text-white uppercase tracking-tighter italic">
                            {domain} <span className="text-primary not-italic">.hub</span>
                          </h2>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                          <span>{items.length} Classified Nodes</span>
                          <div className="w-12 h-px bg-zinc-200 dark:bg-white/10" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {items.map((res, i) => (
                          <motion.a
                            key={i}
                            href={res.link}
                            target="_blank"
                            whileHover={{ y: -5 }}
                            className="relative p-6 bg-white dark:bg-[#0d0d1a] border border-black/5 dark:border-white/5 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all group overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />

                            <div className="relative z-10 flex flex-col h-full">
                              <div className="flex items-center justify-between mb-6">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                  <res.icon className="w-5 h-5" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[8px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-primary transition-colors border border-transparent group-hover:border-primary/20">
                                  {res.category}
                                </div>
                              </div>

                              <h3 className="text-lg font-black mb-3 text-black dark:text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
                                {res.title}
                              </h3>

                              <p className="text-zinc-500 dark:text-zinc-400 text-[13px] leading-relaxed font-medium mb-8 flex-1 italic">
                                {res.description}
                              </p>

                              <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-white/5">
                                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em] group-hover:text-black dark:group-hover:text-white transition-colors">Access Intel</span>
                                <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:translate-x-1 transition-all">
                                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black" />
                                </div>
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* MASTER PATH TAB (ROADMAP.SH CLONE STYLE) */}
            <TabsContent value="path" className="mt-0 outline-none">
              <div className="flex flex-col lg:flex-row gap-24 items-start justify-center pt-16">

                {/* LEFT SIDEBARS */}
                <div className="w-full lg:w-[400px] space-y-24">
                  {roadmapData.sidebar.filter(s => s.position === 'left').map(section => (
                    <div key={section.id} className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-display font-black uppercase text-black dark:text-white italic tracking-tighter">{section.title}</h3>
                        <div className="flex-1 h-1 bg-zinc-200 dark:bg-white/10" />
                      </div>
                      <div className="space-y-6">
                        {section.groups ? section.groups.map(group => (
                          <div key={group.label} className="space-y-6">
                            <div className="text-xs font-black text-primary uppercase tracking-[0.4em] pl-2 border-l-4 border-primary">{group.label}</div>
                            <div className="flex flex-col gap-4">
                              {group.items.map(item => <NodeBox key={item} title={item} color="white" />)}
                            </div>
                          </div>
                        )) : section.items?.map(item => <NodeBox key={item} title={item} color="yellow" />)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CENTER PATHWAY */}
                <div className="flex-1 max-w-2xl relative">
                  {/* THE CORE NODE */}
                  <div className="relative flex flex-col items-center mb-32">
                    <motion.div
                      className="p-12 border-[5px] border-black dark:border-white/10 bg-white dark:bg-zinc-950 font-display font-black text-6xl md:text-8xl italic tracking-tighter text-black dark:text-white relative z-10 shadow-[20px_20px_0_0_rgba(0,0,0,1)] dark:shadow-[20px_20px_0_0_rgba(255,255,255,0.05)] text-center leading-none"
                    >
                      CYBER <br />SECURITY.
                    </motion.div>
                    <div className="absolute left-1/2 top-full w-2 h-32 bg-primary -translate-x-1/2" />
                  </div>

                  <div className="space-y-32">
                    {roadmapData.central.map((block, idx) => (
                      <div key={block.id} className="relative flex flex-col items-center">
                        {/* DASHED LINE TO CORE HUB (VIRTUAL) */}
                        <div className="mb-12 px-10 py-3 bg-zinc-900 border-2 border-white/5 rounded-full font-black text-[10px] text-primary uppercase tracking-widest">{block.title} PHASE</div>

                        <div className="flex flex-col gap-6 items-center w-full">
                          {block.topics.map(topic => (
                            <NodeBox
                              key={topic.name}
                              title={topic.name}
                              color="yellow"
                              onClick={() => handleTopicClick(topic)}
                            />
                          ))}
                        </div>

                        {idx < roadmapData.central.length - 1 && (
                          <div className="absolute left-1/2 top-[calc(100%+2rem)] w-2 h-20 bg-primary/20 -translate-x-1/2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT SIDEBARS */}
                <div className="w-full lg:w-[400px] space-y-24">
                  {roadmapData.sidebar.filter(s => s.position === 'right').map(section => (
                    <div key={section.id} className="space-y-10">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-1 bg-zinc-200 dark:bg-white/10" />
                        <h3 className="text-2xl font-display font-black uppercase text-black dark:text-white italic tracking-tighter">{section.title}</h3>
                      </div>
                      <div className="flex flex-col gap-4 items-end">
                        {section.items?.map(item => <NodeBox key={item} title={item} color="white" />)}
                      </div>
                    </div>
                  ))}

                  <div className="p-10 border-2 border-dashed border-zinc-300 dark:border-white/10 rounded-[2rem] text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto"><Info className="w-8 h-8 text-zinc-400" /></div>
                    <div className="text-xs font-black uppercase text-zinc-500 tracking-[0.3em]">Operational Note</div>
                    <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">
                      "This tactical architecture is refreshed bi-weekly using SkillPath AI neural analysis of global job markets."
                    </p>
                  </div>
                </div>

              </div>
            </TabsContent>
          </Tabs>

        </div>
      </main>

      {/* TOPIC DETAIL SHEET */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="right" className="w-full sm:max-w-xl bg-white dark:bg-[#0a0a1a] border-l border-black/10 dark:border-white/10 p-0 overflow-y-auto">
          {selectedTopic && (
            <div className="h-full flex flex-col">
              <div className="p-12 space-y-12">
                <div className="space-y-4">
                  <div className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">Tactical Intelligence Unit</div>
                  <h2 className="text-5xl font-display font-black text-black dark:text-white italic tracking-tighter leading-none">
                    {selectedTopic.name}
                  </h2>
                  <div className="w-20 h-1.5 bg-primary" />
                </div>

                <div className="space-y-6">
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest flex items-center gap-3">
                    <Info className="w-4 h-4" /> Operational Overview
                  </h3>
                  <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic border-l-4 border-zinc-100 dark:border-white/5 pl-8">
                    "{selectedTopic.description}"
                  </p>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest flex items-center gap-3">
                    <Workflow className="w-4 h-4" /> Sub-Sector Breakdown
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedTopic.subtopics.map((sub: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-2xl group hover:border-primary/30 transition-all">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-[10px] font-black group-hover:bg-primary group-hover:text-black transition-colors">{i + 1}</div>
                        <span className="text-sm font-bold text-zinc-600 dark:text-zinc-300">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest flex items-center gap-3">
                    <Link2 className="w-4 h-4" /> Classified Resources
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedTopic.resources.map((res: any, i: number) => (
                      <a
                        key={i}
                        href={res.link}
                        target="_blank"
                        className="flex items-center justify-between p-6 bg-primary/5 dark:bg-primary/5 border border-primary/20 rounded-2xl hover:bg-primary/10 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <ExternalLink className="w-5 h-5 text-primary" />
                          <span className="text-sm font-black text-black dark:text-white uppercase tracking-wider">{res.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto p-12 border-t border-black/5 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/20">
                <Button onClick={() => setIsSheetOpen(false)} className="w-full h-16 bg-black dark:bg-zinc-950 text-white font-black uppercase tracking-[0.2em] rounded-2xl">Confirm Understanding</Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* FOOTER STATS */}
      <div className="border-t-[5px] border-black dark:border-white/10 bg-white dark:bg-zinc-950 py-32 mt-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 items-end">
            <div className="space-y-6">
              <h2 className="text-5xl font-display font-black text-black dark:text-white tracking-tighter italic leading-none">Syndicate <br />Metrics.</h2>
              <p className="text-zinc-500 font-bold max-w-xs">Global impact analysis of SkillPath AI participants.</p>
            </div>
            {[
              { label: "Neural Drift", value: "82.4%", sub: "+4.1% MoM" },
              { label: "Active Nodes", value: "2.1k", sub: "Global Ops" },
              { label: "Path Efficiency", value: "0.98", sub: "Sigma Rating" }
            ].map(stat => (
              <div key={stat.label} className="space-y-2">
                <div className="text-7xl font-black text-primary tracking-tighter leading-none">{stat.value}</div>
                <div className="flex justify-between items-center pr-4">
                  <div className="text-xs font-black uppercase text-zinc-500 tracking-widest">{stat.label}</div>
                  <div className="text-[10px] font-black text-emerald-500/80">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}