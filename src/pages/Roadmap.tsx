import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import {
  Shield, Globe, Terminal, Cpu, Search, AlertTriangle, Bug, Database,
  Activity, Cloud, Target, Lock, Binary, Code2, BookOpen,
  ExternalLink, Zap, Star, ChevronRight, Flag, Users, Box, GraduationCap,
  Command, Wifi, Key, Server, Laptop, HardDrive, Smartphone,
  Layers, Settings, Info, ArrowDown, ArrowRight, Rocket, Workflow, Brain,
  Filter, CheckCircle2, Bookmark, Flame, MoreHorizontal, ChevronDown, ListChecks,
  Compass, BarChart3, Radio, FileText, Bot, Trophy, Award, LayoutGrid, X,
  Copy, Play, Sparkles, Youtube, Newspaper, HelpCircle, ChevronLeft, Eye,
  LockIcon, Network, ShieldCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { resources as ALL_RESOURCES } from "@/data/cyberResources";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// --- Types ---

interface SubTopic {
  id: string;
  title: string;
  description: string;
  briefOverview: string;
  longDescription: string;
  howToLearn: string[];
  whereToLearn: { name: string; link: string; type: string }[];
  concepts: { what: string; why: string };
  resources: string[];
  cheatsheet?: { command: string; desc: string }[];
  labs?: { name: string; link: string; platform: string }[];
}

interface RoadmapNode {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  type: 'foundation' | 'role' | 'cert';
  path?: 'analyst' | 'tester' | 'engineer' | 'ai';
  icon: any;
  progress?: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  subtopics: SubTopic[];
  nextStepId?: string;
}

// --- COMPLETE DATASET (Every Node Fully Detailed) ---

const FOUNDATION_NODES: RoadmapNode[] = [
  {
    id: "cs-basics",
    title: "Computer Science Basics",
    subtitle: "Prerequisite Phase",
    description: "The core architecture of digital systems. Understand the machine before you defend or attack it.",
    type: "foundation",
    icon: Laptop,
    difficulty: "Beginner",
    nextStepId: "pre-security",
    subtopics: [
      {
        id: "binary-logic",
        title: "Binary & Hexadecimal Logic",
        description: "The fundamental language of machine code.",
        briefOverview: "A deep dive into how computers store data and memory addresses at the bit-level.",
        longDescription: "Binary (base-2) and Hexadecimal (base-16) are the languages of CPUs and RAM. In cybersecurity, we use these to analyze how exploits overwrite memory (Buffer Overflows) or to read binary packet data. This foundation is what separates a professional analyst from a beginner.",
        howToLearn: [
          "Study base conversion (Decimal to Binary/Hex).",
          "Learn Bitwise Logic (AND, OR, XOR, NOT).",
          "Practice Hex editing using tools like HxD.",
          "Understand how characters are encoded in ASCII/UTF-8."
        ],
        whereToLearn: [
          { name: "Binary Academy", link: "https://tryhackme.com/room/binaryfoundations", type: "Lab" },
          { name: "Codecademy CS Basics", link: "https://codecademy.com", type: "Course" }
        ],
        concepts: { what: "Raw machine data representation.", why: "Exploits occur at the byte-level, not the high-level code level." },
        resources: ["nvd"],
        cheatsheet: [{ command: "0x41", desc: "Hex value for 'A'" }],
        labs: [{ name: "Binary Found.", link: "https://tryhackme.com/room/binaryfoundations", platform: "TryHackMe" }]
      },
      {
        id: "os-internals",
        title: "OS Internals (Linux/Windows)",
        description: "How Kernels, Processes, and File Systems work.",
        briefOverview: "Understanding the bridge between hardware and application software.",
        longDescription: "You cannot secure or exploit a system if you don't know how it behaves. This phase covers how the Kernel manages memory, how processes execute, and how file permissions prevent unauthorized access on both Windows and Linux environments.",
        howToLearn: [
          "Study the Boot Process (BIOS/UEFI).",
          "Understand Process Management (PIDs, Daemons, Services).",
          "Learn File System Structures (EXT4 vs NTFS).",
          "Study Privilege levels (User Mode vs Kernel Mode)."
        ],
        whereToLearn: [
          { name: "Intro to OS", link: "https://tryhackme.com/room/introtoos", type: "Lab" }
        ],
        concepts: { what: "Operating System architecture.", why: "Malware often hides in kernel-level processes or deep file directories." },
        resources: ["terminal", "laptop"],
        labs: [{ name: "Windows Fund.", link: "https://tryhackme.com/room/windowsfundamentals1", platform: "TryHackMe" }]
      }
    ]
  },
  {
    id: "pre-security",
    title: "Pre Security",
    subtitle: "Entry Vector",
    description: "The path for absolute beginners to gain operational stability before deep-diving into security.",
    type: "foundation",
    icon: Shield,
    difficulty: "Beginner",
    nextStepId: "cyber-foundations",
    subtopics: [
      {
        id: "linux-fund",
        title: "Linux Command Line",
        description: "Becoming fluent in the hacker's primary OS.",
        briefOverview: "Learning to operate, manage, and automate tasks through the Linux terminal.",
        longDescription: "90% of security tools run on Linux. This phase gets you comfortable with the black screen. We cover navigation, file manipulation, and basic bash scripting so you can run tools and analyze data efficiently.",
        howToLearn: [
          "Install Kali or Ubuntu on a VM.",
          "Learn basic navigation: ls, cd, pwd, mkdir.",
          "Understand file editing with Vim or Nano.",
          "Learn network troubleshooting: ip, ping, netstat."
        ],
        whereToLearn: [
          { name: "Linux Journey", link: "https://linuxjourney.com", type: "Article" },
          { name: "THM Linux Basics", link: "https://tryhackme.com/room/linuxfund1", type: "Lab" }
        ],
        concepts: { what: "Terminal fluency.", why: "GUIs are limited; true security power exists in the command line." },
        resources: ["terminal"],
        cheatsheet: [{ command: "chmod +x script.sh", desc: "Make a file executable" }],
        labs: [{ name: "Linux Fund. 2", link: "https://tryhackme.com/room/linuxfund2", platform: "TryHackMe" }]
      }
    ]
  },
  {
    id: "cyber-foundations",
    title: "Cyber Security Foundations",
    subtitle: "Core Frameworks",
    description: "Methodologies and security pillars that drive the entire industry.",
    type: "foundation",
    icon: Target,
    difficulty: "Beginner",
    subtopics: [
      {
        id: "cia-found",
        title: "CIA Triad & Frameworks",
        description: "The three pillars of information security.",
        briefOverview: "Understanding Confidentiality, Integrity, and Availability.",
        longDescription: "The CIA triad is the golden standard. Every breach you hear about is a failure in one of these three. We also cover frameworks like NIST and MITRE ATT&CK which provide a common language for identifying attacker techniques.",
        howToLearn: [
          "Study the NIST Cybersecurity Framework.",
          "Map real world hacks to the CIA triad.",
          "Learn the Cyber Kill Chain and MITRE ATT&CK levels."
        ],
        whereToLearn: [
          { name: "NIST Guidelines", link: "https://nist.gov", type: "Article" }
        ],
        concepts: { what: "Security management theory.", why: "Strategic defense requires mapping technical actions to business risks." },
        resources: ["bookopen"],
        labs: [{ name: "Security Principles", link: "https://tryhackme.com/room/securityprinciples", platform: "TryHackMe" }]
      }
    ]
  }
];

const CAREER_PATHS = {
  tester: {
    title: "Penetration Tester",
    subtitle: "Offensive Operations",
    color: "red",
    nodes: [
      {
        id: "jr-pt",
        title: "Jr Penetration Tester",
        subtitle: "Role-Based Roadmap",
        type: "role",
        icon: Bug,
        progress: 24,
        description: "Mastering the standard offensive methodology: Recon, Exploit, Report.",
        nextStepId: "pt-1",
        difficulty: "Beginner",
        subtopics: [
          {
            id: "recon-phase",
            title: "Phase 1: Recon & Intel Gathering",
            description: "Building the target's digital footprint.",
            briefOverview: "A systematic approach to finding and mapping a target's exposed infrastructure.",
            longDescription: "Recon is the foundation of every successful intrusion. You'll learn the art of 'Shadow Recon'—finding assets without ever alerting the target's monitoring systems. This includes DNS harvesting, employee OSINT, and cloud-bucket discovery.",
            howToLearn: [
              "Master Google Dorking methodologies.",
              "Study DNS record structures (MX, TXT, CNAME).",
              "Use Shodan/Censys for global footprinting.",
              "Learn subdomain enumeration tools (Assetfinder, Subfinder)."
            ],
            whereToLearn: [{ name: "OSINT Framework", link: "https://osintframework.com", type: "Tool" }],
            concepts: { what: "Modern reconnaissance.", why: "A target cannot defend what they don't know is exposed." },
            resources: ["shodan", "securitytrails", "nmap"],
            labs: [{ name: "Passive Recon", link: "https://tryhackme.com/room/passiverecon", platform: "TryHackMe" }]
          },
          {
            id: "exploitation-phase",
            title: "Phase 2: Initial Exploitation",
            description: "Gaining your first shell on the target.",
            briefOverview: "Using vulnerabilities to execute code and establish a remote connection.",
            longDescription: "This phase transitions from theory to action. You'll learn how to take a discovered vulnerability (like a weak service or SQLi) and turn it into a 'Reverse Shell' that gives you remote control. We focus on the Metasploit Framework and manual exploit delivery.",
            howToLearn: [
              "Study Reverse vs. Bind shells.",
              "Master the Metasploit Framework (MSF).",
              "Learn to research and weaponize CVEs.",
              "Understand payload delivery via common protocols."
            ],
            whereToLearn: [{ name: "Metasploit Intro", link: "https://tryhackme.com/room/metasploitintro", type: "Lab" }],
            concepts: { what: "Attack execution.", why: "Exploitation proves the technical risk of a discovered bug." },
            resources: ["metasploit", "exploitdb"],
            labs: [{ name: "Exploitation 101", link: "https://tryhackme.com/room/metasploitintro", platform: "TryHackMe" }]
          },
          {
            id: "privesc-phase",
            title: "Phase 3: Privilege Escalation",
            description: "Moving from user to admin/root.",
            briefOverview: "Finding misconfigurations inside an OS to gain higher-level permissions.",
            longDescription: "Initial access is rarely 'Root'. Pentesters must navigate the internal operating system to find weak file permissions, SUID binaries, or kernel exploits to gain full control. This is the 'Post-Exploitation' bridge.",
            howToLearn: [
              "Learn to use LinPEAS and WinPEAS for automation.",
              "Study SUID/GUID bit exploitation on Linux.",
              "Learn token manipulation and Kerberoasting basics.",
              "Analyze system cron jobs and scheduled tasks."
            ],
            whereToLearn: [{ name: "PrivEsc Guide", link: "https://book.hacktricks.xyz", type: "Wiki" }],
            concepts: { what: "Internal OS exploitation.", why: "Administrative control is required to bypass security logs." },
            resources: ["laptop", "terminal"],
            labs: [{ name: "Linux PrivEsc", link: "https://tryhackme.com/room/linuxprivesc", platform: "TryHackMe" }]
          }
        ]
      },
      {
        id: "pt-1",
        title: "Pen-Tester Level 1 (PT1)",
        subtitle: "Certification Path",
        type: "cert",
        icon: Target,
        description: "Professional grade methodology and active directory mastery.",
        difficulty: "Intermediate",
        nextStepId: "web-fun",
        subtopics: [
          {
            id: "ad-mastery",
            title: "Active Directory Hacking",
            description: "Compromising corporate identity infrastructure.",
            briefOverview: "Exploiting Kerberos, LDAP, and Group Policy in a Windows Domain.",
            longDescription: "Most corporations run on Windows Active Directory. Mastering AD hacking (Pass-the-Hash, Kerberoasting, Bloodhound) is the difference between an amateur and a professional pentester who can take over an entire enterprise.",
            howToLearn: [
              "Study enumeration with PowerView and Bloodhound.",
              "Learn Kerberoasting and AS-REP Roasting.",
              "Understand Silver and Golden Ticket attacks.",
              "Learn LLMNR/NBT-NS Poisoning using Responder."
            ],
            resources: ["responder", "metasploit"],
            cheatsheet: [{ command: "responder -I eth0 -rdv", desc: "Listen for auth challenges" }],
            labs: [{ name: "AD Basics", link: "https://tryhackme.com/room/activedirectorybasics", platform: "TryHackMe" }],
            whereToLearn: [{ name: "AD Pentesting", link: "https://tryhackme.com/room/winad1", type: "Lab" }],
            concepts: { what: "Identity infrastructure attacks.", why: "Active Directory is the 'Keys to the Kingdom' for corporate hacks." }
          },
          {
            id: "post-exploit",
            title: "Post-Exploitation",
            description: "Maintaining access and exfiltrating data.",
            briefOverview: "Techniques for persistence and lateral movement once inside a network.",
            longDescription: "Hacking is not just about the 'in'. It's about staying in. In this phase, you'll learn how to create persistent backdoors and how to move from one PC to another (Lateral Movement) without being caught by EDR systems.",
            howToLearn: [
              "Study persistence via Registry and Services.",
              "Learn data exfiltration over DNS and HTTP.",
              "Understand the 'Living off the Land' (LotL) philosophy.",
              "Study Lateral Movement via PsExec and WMI."
            ],
            resources: ["metasploit", "terminal"],
            labs: [{ name: "Lateral Movement", link: "https://tryhackme.com/room/postexploitation", platform: "TryHackMe" }],
            whereToLearn: [{ name: "Post-Exploit Intro", link: "https://tryhackme.com/room/postexploitationbasics", type: "Lab" }],
            concepts: { what: "Access persistence.", why: "Initial access is fragile; persistence ensures follow-on mission success." }
          }
        ]
      },
      {
        id: "web-fun",
        title: "Web Fundamentals",
        subtitle: "Role Path",
        type: "role",
        icon: Globe,
        progress: 12,
        description: "Advanced web application hacking and secure code analysis.",
        difficulty: "Beginner",
        subtopics: [
          {
            id: "owasp-top-10",
            title: "OWASP Top 10 Mastery",
            description: "The 10 most critical web vulnerabilities.",
            briefOverview: "A deep dive into SQLi, XSS, CSRF, and IDOR.",
            longDescription: "Web applications are the most critical attack surface. You'll learn how to trick websites into leaking data (SQLi), executing malicious scripts (XSS), or bypassing authentication (IDOR).",
            howToLearn: [
              "Master Burp Suite for request interception.",
              "Study SQL syntax for manual injection payloads.",
              "Learn Cross-Site Scripting (XSS) context bypassing.",
              "Understand the 'Broken Access Control' logic errors."
            ],
            resources: ["burpsuite", "sqlmap"],
            labs: [{ name: "Web Fund.", link: "https://tryhackme.com/room/webfundamentals", platform: "TryHackMe" }],
            whereToLearn: [{ name: "PortSwigger Academy", link: "https://portswigger.net", type: "Lab" }],
            concepts: { what: "Web protocol exploitation.", why: "90% of modern hacks begin with a web vulnerability." }
          },
          {
            id: "api-security",
            title: "API Pentesting",
            description: "Attacking modern, headless interfaces.",
            briefOverview: "Testing REST and GraphQL endpoints for authorization leaks.",
            longDescription: "Modern apps are mostly APIs. You'll learn to test these endpoints (Postman/Burp) for 'Mass Assignment' vulnerabilities and lack of rate-limiting, often leading to massive data scrapes.",
            howToLearn: [
              "Study REST vs GraphQL architecture.",
              "Learn API Fuzzing with FFuf or Postman.",
              "Study BOLA (Broken Object Level Authorization).",
              "Understand JWT token manipulation."
            ],
            resources: ["burpsuite", "ffuf"],
            labs: [{ name: "OWASP API Labs", link: "https://tryhackme.com/module/owasp-top-10", platform: "TryHackMe" }],
            whereToLearn: [{ name: "API Security Guide", link: "https://owasp.org", type: "Article" }],
            concepts: { what: "Programmatic interface security.", why: "Hidden APIs are often less secure than the main frontend." }
          }
        ]
      }
    ]
  },
  analyst: {
    title: "Security Analyst",
    subtitle: "Defensive Operations",
    color: "blue",
    nodes: [
      {
        id: "soc-1",
        title: "SOC Level 1",
        subtitle: "Role Path",
        type: "role",
        icon: Activity,
        progress: 75,
        description: "Entry-level monitoring and alert triage.",
        nextStepId: "sa-1",
        difficulty: "Beginner",
        subtopics: [
          {
            id: "log-triage",
            title: "Log Triage & Monitoring",
            description: "Finding the needle in the digital haystack.",
            briefOverview: "Analyzing thousands of events to find one single attacker.",
            longDescription: "Analysts use SIEMs to find anomalies. You'll learn to distinguish between a user mistyping their password and a brute force attack. Speed and accuracy in triage are your main metrics.",
            howToLearn: [
              "Learn SIEM basics (Splunk / ELK).",
              "Study Log formats for Firewalls and Endpoints.",
              "Learn to build dashboards that highlight anomalies."
            ],
            resources: ["siem"],
            labs: [{ name: "SOC Analyst 1", link: "https://tryhackme.com/room/soclevel1", platform: "TryHackMe" }],
            whereToLearn: [{ name: "Splunk Free Labs", link: "https://splunk.com", type: "Course" }],
            concepts: { what: "Security data aggregation.", why: "Visibility is the foundation of defense." }
          },
          {
            id: "phishing-analysis",
            title: "Phishing & Email Defense",
            description: "Combating the #1 attack vector.",
            briefOverview: "Deconstructing malicious emails and protecting the human perimeter.",
            longDescription: "Most enterprise breaches start with a link. You'll learn to analyze email headers, extract malicious URLs from attachments safely (Sandboxing), and report malicious domains to take them down.",
            howToLearn: [
              "Study SMTP protocol and email headers.",
              "Learn to use URL simulators and sandboxes (JoeSandbox).",
              "Study DMARC, SPF, and DKIM bypasses.",
              "Practice email header forensic analysis."
            ],
            resources: ["cyberdefenders"],
            labs: [{ name: "Phishing Analysis", link: "https://tryhackme.com/room/phishinganalysis1", platform: "TryHackMe" }],
            whereToLearn: [{ name: "BlueYard IR", link: "https://cyberdefenders.org", type: "Lab" }],
            concepts: { what: "Human-centric security.", why: "The user is the weakest link; email is the primary bridge." }
          }
        ]
      },
      {
        id: "sa-1",
        title: "Security Analyst (SA1)",
        subtitle: "Certification",
        type: "cert",
        icon: Shield,
        description: "Professional certification for forensic analysts and IR responders.",
        difficulty: "Intermediate",
        nextStepId: "soc-2",
        subtopics: [
          {
            id: "incident-resp",
            title: "Incident Response (IR)",
            description: "Handling a live breach scenario.",
            briefOverview: "How to contain, eradicate, and recover from a cybersecurity incident.",
            longDescription: "When a hack is confirmed, the IR team steps in. You'll learn the 6 steps of incident response: Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned.",
            resources: ["cyberdefenders"],
            labs: [{ name: "IR Intro", link: "https://tryhackme.com/room/incidentresponse", platform: "TryHackMe" }],
            whereToLearn: [{ name: "SANS IR Checklist", link: "https://sans.org", type: "Article" }],
            concepts: { what: "Crisis management in security.", why: "Success is measured by how fast you stop an active bleed." }
          },
          {
            id: "forensics-fund",
            title: "Digital Forensics",
            description: "Analyzing the digital crime scene.",
            briefOverview: "Recovering 'deleted' artifacts and identifying the root cause of an attack.",
            longDescription: "Forensics is 'CSI' for computers. You'll learn to image hard drives, analyze RAM for active malware, and look at the Windows Registry to find evidence of what an attacker did while they were inside.",
            howToLearn: [
              "Learn Disk Imaging (FTK Imager).",
              "Study RAM Analysis (Volatility Framework).",
              "Learn to carve files from raw disk data.",
              "Analyze Chrome/Firefox browser history for exfil."
            ],
            resources: ["cyberdefenders", "laptop"],
            labs: [{ name: "Digital Forensics", link: "https://tryhackme.com/room/introtoforensics", platform: "TryHackMe" }],
            whereToLearn: [{ name: "Forensics Wiki", link: "https://forensicswiki.org", type: "Article" }],
            concepts: { what: "Post-incident proof extraction.", why: "Forensics provides the evidence needed for legal and structural remediation." }
          }
        ]
      },
      {
        id: "soc-2",
        title: "SOC Level 2",
        subtitle: "Path",
        type: "role",
        icon: Activity,
        description: "Advanced detection engineering and threat hunting.",
        difficulty: "Intermediate",
        subtopics: [
          {
            id: "threat-hunting",
            title: "Threat Hunting",
            description: "Proactively seeking hidden adversaries.",
            briefOverview: "Assuming the 'breach' has already happened and hunting for the attacker.",
            longDescription: "Threat hunters don't wait for alerts. They hunt for 'Indicators of Compromise' (IOCs) that security tools missed. You'll learn to look for hidden persistence mechanisms and lateral movement across a network.",
            resources: ["cyberdefenders", "shodan"],
            labs: [{ name: "Threat Hunting", link: "https://tryhackme.com/room/threathunting", platform: "TryHackMe" }],
            whereToLearn: [{ name: "MITRE ATT&CK", link: "https://attack.mitre.org", type: "Wiki" }],
            concepts: { what: "Proactive adversary pursuit.", why: "Static tools fail; human hunters find advanced persistent threats (APTs)." }
          },
          {
            id: "det-eng",
            title: "Detection Engineering",
            description: "Writing the rules that stop hackers.",
            briefOverview: "Designing custom SIEM alerts to catch specific TTPs.",
            longDescription: "Detection Engineering is the 'R&D' of the SOC. You'll learn to take a new exploit (like Log4j) and write a 'Sigma' or 'Snort' rule that identifies that specific behavior in the network traffic.",
            howToLearn: [
              "Learn to write Sigma and YARA rules.",
              "Study Snort/Suricata rule syntax.",
              "Understand 'Alert Fatigue' and how to minimize it.",
              "Perform 'Purple Teaming' to verify rule efficacy."
            ],
            resources: ["snort", "siem"],
            labs: [{ name: "Mastering Suricata", link: "https://tryhackme.com/room/suricata", platform: "TryHackMe" }],
            whereToLearn: [{ name: "Detection Engineering Guide", link: "https://medium.com", type: "Article" }],
            concepts: { what: "Defensive logic development.", why: "Custom rules stop custom attacks that vendors haven't found yet." }
          }
        ]
      }
    ]
  },
  engineer: {
    title: "Security Engineer",
    color: "orange",
    nodes: [
      {
        id: "sec-eng",
        title: "Security Engineer",
        subtitle: "Architecture",
        type: "role",
        icon: Settings,
        progress: 5,
        description: "Building zero-trust infrastructure and secure networks.",
        difficulty: "Intermediate",
        nextStepId: "devsecops",
        subtopics: [
          {
            id: "zero-trust",
            title: "Zero Trust Architecture",
            description: "Never trust, always verify.",
            briefOverview: "A model that assumes the network is compromised and validates every single request.",
            longDescription: "Zero Trust is the modern standard for corporate security. You'll learn to design networks that use 'identity' as the perimeter rather than IPs. Every user, device, and service must be authenticated and authorized before gaining access to resources.",
            howToLearn: [
              "Study the NIST SP 800-207 Zero Trust standard.",
              "Learn to implement Micro-segmentation.",
              "Study Multi-Factor Authentication (MFA) implementation.",
              "Understand Identity and Access Management (IAM) lifecycle."
            ],
            whereToLearn: [{ name: "NIST Zero Trust", link: "https://nist.gov", type: "Article" }],
            concepts: { what: "Modern perimeter-less security.", why: "Legacy 'castle-and-moat' security fails against modern lateral movement." },
            resources: ["siem"],
            labs: [{ name: "Network Security", link: "https://tryhackme.com/room/networksecurity", platform: "TryHackMe" }]
          },
          {
            id: "cloud-sec",
            title: "Cloud Infrastructure Security",
            description: "Hardening AWS, Azure, and GCP.",
            briefOverview: "Securing virtualized environments and serverless architectures.",
            longDescription: "Cloud security is about protecting 'Software-defined' infrastructure. You'll learn how to secure VPCs, S3 buckets, and IAM roles in the big three cloud providers. Misconfigured cloud buckets are one of the leading causes of data breaches today.",
            howToLearn: [
              "Study the AWS Shared Responsibility Model.",
              "Learn to use CloudTrail and GuardDuty for monitoring.",
              "Understand S3 bucket permissions and IAM policies.",
              "Learn to audit cloud environments using ScoutSuite."
            ],
            resources: ["cloud", "laptop"],
            labs: [{ name: "Cloud Fund.", link: "https://tryhackme.com/module/cloud-security", platform: "TryHackMe" }],
            whereToLearn: [{ name: "AWS Security Spec", link: "https://aws.amazon.com", type: "Course" }],
            concepts: { what: "Virtualized asset defense.", why: "The cloud is just someone else's computer—but with vastly complex permissions." }
          }
        ]
      },
      {
        id: "devsecops",
        title: "DevSecOps",
        subtitle: "Role Path",
        type: "role",
        icon: Workflow,
        description: "Securing the modern cloud pipeline.",
        difficulty: "Intermediate",
        subtopics: [
          {
            id: "pipeline-sec",
            title: "CI/CD Pipeline Security",
            description: "Security at the speed of code.",
            briefOverview: "Automating security tests directly into the developer workflow.",
            longDescription: "DevSecOps 'shifts security left'. You'll learn to integrate SAST (Static Analysis), DAST (Dynamic Analysis), and secret-scanning tools directly into GitHub Actions or GitLab CI. This ensures bugs never make it to production.",
            howToLearn: [
              "Build a GitHub Action for automated linting.",
              "Use TruffleHog to scan for leaked secrets.",
              "Implement SonarQube for code quality audits.",
              "Study Software Composition Analysis (SCA)."
            ],
            resources: ["workflow", "code2"],
            labs: [{ name: "DevSecOps Intro", link: "https://tryhackme.com/room/devsecopsintro", platform: "TryHackMe" }],
            whereToLearn: [{ name: "DevSecOps Guide", link: "https://devsecops.org", type: "Article" }],
            concepts: { what: "Continuous security automation.", why: "Manual pen-testing is too slow for 100-deploys-a-day companies." }
          },
          {
            id: "container-hardening",
            title: "Container & K8s Security",
            description: "Hardening Docker and Kubernetes.",
            briefOverview: "Protecting the orchestration layer from container escapes.",
            longDescription: "Containers are the unit of modern deployment. You'll learn to scan Docker images for vulnerabilities and use Kubernetes Network Policies to prevent containers from talking to things they shouldn't.",
            howToLearn: [
              "Study Docker image hardening techniques.",
              "Learn Kubernetes Role-Based Access Control (RBAC).",
              "Use Trivy to scan containers for CVEs.",
              "Understand sidecar security with Istio."
            ],
            resources: ["box", "terminal"],
            labs: [{ name: "Docker Security", link: "https://tryhackme.com/room/dockersecurity", platform: "TryHackMe" }],
            whereToLearn: [{ name: "K8s Hardening", link: "https://kubernetes.io", type: "Article" }],
            concepts: { what: "Microservice isolation.", why: "A single compromised container shouldn't take down the entire cluster." }
          }
        ]
      }
    ]
  },
  ai: {
    title: "AI Security",
    color: "purple",
    nodes: [
      {
        id: "ai-sec",
        title: "AI Security Analyst",
        subtitle: "Specialization",
        type: "role",
        icon: Brain,
        description: "Securing LLMs and detecting AI-driven threats.",
        difficulty: "Advanced",
        subtopics: [
          {
            id: "llm-top-10",
            title: "OWASP LLM Top 10",
            description: "The unique risks of Large Language Models.",
            briefOverview: "A look into Prompt Injection and Training Data Poisoning.",
            longDescription: "AI is a new attack surface. You'll learn how 'Prompt Injection' can force an AI to ignore its safety filters, or how 'Data Poisoning' can make an AI give biased or malicious output.",
            howToLearn: [
              "Study the OWASP Top 10 for LLMs project.",
              "Practice jailbreaking (for educational safety research).",
              "Understand prompt filtering and guardrail systems.",
              "Study PII detection in AI data streams."
            ],
            resources: ["brain", "laptop"],
            labs: [{ name: "AI Security", link: "https://tryhackme.com/room/aisecurity", platform: "TryHackMe" }],
            whereToLearn: [{ name: "LLM Security Guide", link: "https://owasp.org", type: "Article" }],
            concepts: { what: "Artificial Intelligence defense.", why: "As companies automate with AI, the prompt becomes the new SQL injection point." }
          },
          {
            id: "adv-ml",
            title: "Adversarial Machine Learning",
            description: "Attacking and defending ML models.",
            briefOverview: "Techniques to fool computer vision and classification systems.",
            longDescription: "Adversarial ML involves creating inputs that look normal to humans but cause an AI to completely malfunction. (e.g., putting a small sticker on a stop sign that makes a self-driving car think it's a speed limit sign). This is the 'Red Teaming' of AI models.",
            howToLearn: [
              "Study Evasion and Evasion attacks on ML.",
              "Learn about GAN-based attack generators.",
              "Study model 'inversion' and privacy leaks.",
              "Perform research on adversarial stickers and noise."
            ],
            resources: ["brain", "shield"],
            labs: [{ name: "Adversarial ML", link: "https://tryhackme.com/room/aisecurity", platform: "TryHackMe" }],
            whereToLearn: [{ name: "Adversarial Robustness", link: "https://github.com", type: "Wiki" }],
            concepts: { what: "Machine Learning model integrity.", why: "Critical systems (medical, automotive) rely on ML; failure can be fatal." }
          }
        ]
      }
    ]
  }
};

// --- Sub-Components ---

const ProgressCircle = ({ percent, color }: { percent: number; color: string }) => {
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative h-10 w-10 shrink-0">
      <svg className="h-full w-full -rotate-90">
        <circle cx="20" cy="20" r={radius} fill="transparent" stroke="currentColor" strokeWidth="3" className="text-white/5" />
        <circle
          cx="20" cy="20" r={radius} fill="transparent" stroke="currentColor" strokeWidth="3"
          strokeDasharray={circumference} strokeDashoffset={offset}
          className={cn(
            "transition-all duration-1000",
            color === "blue" && "text-blue-500",
            color === "red" && "text-rose-500",
            color === "orange" && "text-orange-500",
            color === "purple" && "text-purple-500",
            color === "green" && "text-emerald-500"
          )}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[8px] font-black">{percent}%</div>
    </div>
  );
};

// --- Phase Deep-Dive Logic ---

const PhaseDeepDive = ({ subtopic, isOpen, onOpenChange }: { subtopic: SubTopic | null; isOpen: boolean; onOpenChange: (open: boolean) => void }) => {
  if (!subtopic) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl bg-[#010206]/98 border-white/10 backdrop-blur-3xl p-0 overflow-hidden selection:bg-primary/30 selection:text-primary max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div className="relative pb-24 min-h-[600px]">
          {/* Scanline HUD effect */}
          <motion.div
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-0 w-full h-[1px] bg-primary/20 pointer-events-none z-20"
          />

          {/* Mobile-friendly banner */}
          <div className="h-40 bg-gradient-to-b from-primary/5 to-transparent p-10 flex flex-col justify-end gap-2">
            <div className="flex items-center gap-3">
              <Badge className="bg-primary text-black font-black text-[9px] px-3 uppercase tracking-tighter">PHASE_INTEL</Badge>
              <span className="text-[9px] font-mono text-primary/40">VECTOR_REF: {subtopic.id}</span>
            </div>
            <DialogTitle className="text-3xl font-black italic text-white tracking-tighter uppercase">{subtopic.title}</DialogTitle>
          </div>

          <Tabs defaultValue="briefing" className="w-full">
            <div className="px-10 border-b border-white/5">
              <TabsList className="bg-transparent border-none p-0 h-12 gap-8">
                <TabsTrigger value="briefing" className="bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:text-primary text-zinc-500 font-black uppercase text-[10px] tracking-widest p-0 relative transition-all group">
                  <Shield size={14} className="mr-2" /> Mission Briefing
                  <div className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-primary transition-all group-data-[state=active]:w-full" />
                </TabsTrigger>
                <TabsTrigger value="resources" className="bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:text-primary text-zinc-500 font-black uppercase text-[10px] tracking-widest p-0 relative transition-all group">
                  <Zap size={14} className="mr-2" /> Learning Resources
                  <div className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-primary transition-all group-data-[state=active]:w-full" />
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TAB 1: MISSION BRIEFING */}
            <TabsContent value="briefing" className="p-10 m-0 outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-12">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase text-primary tracking-[0.4em] flex items-center gap-2">
                      <Zap size={14} /> Brief Analysis
                    </h4>
                    <p className="text-lg text-white font-medium italic border-l-2 border-primary/30 pl-6 leading-relaxed">
                      "{subtopic.briefOverview}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.4em] flex items-center gap-2">
                      <FileText size={14} /> Intelligence Depth
                    </h4>
                    <p className="text-sm text-zinc-400 font-medium leading-relaxed text-justify px-2">
                      {subtopic.longDescription}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase text-emerald-500 tracking-[0.4em] flex items-center gap-2">
                      <Workflow size={14} /> Strategic Learning Vector
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {subtopic.howToLearn.map((step, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex gap-4">
                          <span className="text-lg font-black text-emerald-500/20 italic">{i + 1}</span>
                          <span className="text-[11px] text-zinc-400 font-medium italic">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-12 pl-10 border-l border-white/5 hidden lg:block">
                  <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/10 space-y-2">
                    <h5 className="text-[9px] font-black text-amber-500 uppercase flex items-center gap-2"><Target size={12} /> Operational Goal</h5>
                    <p className="text-[11px] text-zinc-400 italic">"{subtopic.concepts.why}"</p>
                  </div>
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 space-y-4">
                    <h5 className="text-[9px] font-black text-primary uppercase flex items-center gap-2"><Info size={12} /> Level Data</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-zinc-500">Risk Assessment</span>
                        <span className="text-primary font-black">CRITICAL</span>
                      </div>
                      <div className="flex justify-between text-[10px]">
                        <span className="text-zinc-500">Intel Clearance</span>
                        <span className="text-primary font-black">LEVEL_1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* TAB 2: LEARNING RESOURCES */}
            <TabsContent value="resources" className="p-10 m-0 outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* The Field Armory */}
                <div className="space-y-8">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-black italic text-white tracking-tighter uppercase">Field Armory</h4>
                    <p className="text-[9px] font-black uppercase text-rose-500 tracking-widest">Required Operational Tools</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {subtopic.resources.map(id => {
                      const res = ALL_RESOURCES.find(r => r.id === id);
                      if (!res) return null;
                      return (
                        <a key={id} href={res.link} target="_blank" className="flex items-center gap-5 p-4 rounded-2xl bg-[#0b0c14] border border-white/5 hover:border-primary transition-all group">
                          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black shadow-inner">
                            <res.icon size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-black text-white italic group-hover:text-primary uppercase">{res.name}</span>
                            <span className="text-[9px] text-zinc-600 font-medium">Professional Tooling Vector</span>
                          </div>
                          <ExternalLink size={12} className="ml-auto text-zinc-800" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Intelligence Sources */}
                <div className="space-y-8">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-black italic text-white tracking-tighter uppercase">Intel Sources</h4>
                    <p className="text-[9px] font-black uppercase text-blue-500 tracking-widest">Courses & Documentation</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {subtopic.whereToLearn.map((source, i) => (
                      <a key={i} href={source.link} target="_blank" className="flex items-center justify-between p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="h-8 w-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <BookOpen size={16} />
                          </div>
                          <div>
                            <span className="text-[11px] font-black text-zinc-300 italic uppercase">{source.name}</span>
                            <div className="text-[8px] text-zinc-600 font-bold uppercase mt-0.5 tracking-tighter">Verified Intelligence Entry</div>
                          </div>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-500 border-none text-[8px] uppercase tracking-tighter font-black">{source.type}</Badge>
                      </a>
                    ))}
                    {subtopic.labs?.map((lab, i) => (
                      <a key={i} href={lab.link} target="_blank" className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="h-8 w-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <Target size={16} />
                          </div>
                          <div>
                            <span className="text-[11px] font-black text-zinc-300 italic uppercase">{lab.name}</span>
                            <div className="text-[8px] text-zinc-600 font-bold uppercase mt-0.5 tracking-tighter">Live Practice Combat Sandbox</div>
                          </div>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-500 border-none text-[8px] uppercase tracking-tighter font-black">{lab.platform}</Badge>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Footer CTA */}
          <div className="absolute bottom-6 right-10">
            <Button onClick={() => onOpenChange(false)} className="h-12 px-10 rounded-xl bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-primary transition-all">
              Acknowledge & Sync Intelligence
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// --- View Components ---

const TacticalBriefing = ({ node, isOpen, onOpenChange, onSubTopicClick }: {
  node: RoadmapNode | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubTopicClick: (sub: SubTopic) => void;
}) => {
  if (!node) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-xl bg-[#020308]/95 border-l border-white/10 backdrop-blur-2xl p-0 overflow-y-auto selection:bg-primary/30 selection:text-primary custom-scrollbar">
        <div className="relative min-h-screen pb-40">
          {/* Header */}
          <div className="p-10 border-b border-white/5 bg-gradient-to-b from-primary/5 to-transparent">
            <div className="flex items-center justify-between mb-10">
              <Badge variant="outline" className="border-primary/20 text-primary text-[10px] uppercase font-black tracking-widest px-4 py-1">Tactical Briefing</Badge>
              <button onClick={() => onOpenChange(false)} className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white"><X size={18} /></button>
            </div>

            <div className="flex items-center gap-8 mb-8">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-2xl">
                <node.icon size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-black italic text-white uppercase leading-none tracking-tighter">{node.title}</h2>
                <p className="text-xs text-zinc-500 italic font-medium mt-1">{node.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 font-medium italic border-l-2 border-primary/20 pl-6 leading-relaxed">"{node.description}"</p>
          </div>

          {/* Phases */}
          <div className="p-10 space-y-16">
            {node.subtopics.length > 0 ? (
              node.subtopics.map((sub, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={sub.id}
                  onClick={() => onSubTopicClick(sub)}
                  className="space-y-6 group/phase cursor-pointer relative"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-primary text-black flex items-center justify-center font-black italic shadow-lg shadow-primary/20">{idx + 1}</div>
                      <h3 className="text-xl font-black text-white italic group-hover/phase:text-primary transition-colors tracking-tighter">{sub.title}</h3>
                    </div>
                    <ArrowRight size={14} className="text-zinc-800 group-hover/phase:text-primary group-hover/phase:translate-x-1 transition-all" />
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-relaxed font-bold uppercase tracking-wider pl-14">Brief: {sub.description}</p>

                  <div className="pl-14 pt-4 flex items-center gap-4">
                    <div className="h-[2px] flex-1 bg-white/5" />
                    <span className="text-[8px] font-black text-zinc-700 tracking-[0.4em] uppercase group-hover/phase:text-primary">Deep Scan Req.</span>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="p-12 text-center space-y-4 border-2 border-dashed border-white/5 rounded-3xl opacity-40">
                <Lock size={40} className="mx-auto text-zinc-500" />
                <p className="text-[10px] font-black uppercase text-zinc-500">Deployment Underway</p>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const RoadmapCard = ({ node, color, isSelected, onClick, isCompleted, onEnterTactical }: {
  node: RoadmapNode;
  color: string;
  isSelected: boolean;
  onClick: () => void;
  isCompleted: boolean;
  onEnterTactical: (node: RoadmapNode) => void;
}) => {
  const Icon = node.icon;

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={cn(
        "relative w-full p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer group",
        isSelected
          ? `bg-${color}-500/10 border-${color}-500 shadow-[0_0_30px_rgba(var(--${color}-500),0.1)]`
          : "bg-[#0b0c14] border-white/5 hover:border-white/20"
      )}
    >
      <div className="flex items-center gap-5">
        <div className={cn(
          "h-14 w-14 rounded-2xl flex items-center justify-center transition-all",
          isCompleted ? "bg-emerald-500 text-black shadow-lg" : `bg-${color}-500/10 text-${color}-500 border border-${color}-500/20`
        )}>
          <Icon size={28} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-md font-black text-white italic truncate uppercase tracking-tighter">{node.title}</h4>
          <div className="flex items-center gap-3 mt-1">
            <Badge className={cn("text-[8px] border-none px-2 h-4 uppercase font-black", node.type === 'cert' ? "bg-primary text-black" : "bg-white/5 text-zinc-500")}>
              {node.subtitle}
            </Badge>
            {node.progress !== undefined && <ProgressCircle percent={node.progress} color={color} />}
          </div>
        </div>
        {isCompleted ? <CheckCircle2 size={24} className="text-emerald-500" /> : <ChevronDown size={18} className={cn("text-zinc-800 transition-transform", isSelected && "rotate-180 text-primary")} />}
      </div>

      <AnimatePresence>
        {isSelected && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pt-8 space-y-6">
              <p className="text-xs text-zinc-500 italic font-medium leading-relaxed text-justify px-2">"{node.description}"</p>

              <div className="space-y-3">
                {node.subtopics.slice(0, 2).map(sub => (
                  <div key={sub.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                    <Zap size={10} className="text-primary" />
                    <span className="text-[10px] font-black text-zinc-400 uppercase italic truncate">{sub.title}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={(e) => { e.stopPropagation(); onEnterTactical(node); }}
                className="w-full h-12 bg-primary text-black font-black uppercase tracking-widest text-[10px] hover:bg-white rounded-xl shadow-lg"
              >
                Launch Tactical Path <Rocket size={14} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main Page ---

export default function Roadmap() {
  const [selectedId, setSelectedId] = useState<string | null>("cs-basics");
  const [activeTacticalNode, setActiveTacticalNode] = useState<RoadmapNode | null>(null);
  const [activeSubTopic, setActiveSubTopic] = useState<SubTopic | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const s = localStorage.getItem("cyber-roadmap-progress-v5");
    if (s) setCompleted(JSON.parse(s));
  }, []);

  const currentProgress = Math.round((completed.length / 20) * 100);

  return (
    <div className="min-h-screen bg-[#010103] text-zinc-100 selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,153,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#00ff99 1px, transparent 1px), linear-gradient(90deg, #00ff99 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <main className="pt-40 pb-60">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="mb-40 text-center space-y-6">
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter italic text-white leading-none uppercase">
              Tactical <br /><span className="text-primary not-italic">Engine.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-zinc-500 text-xl italic font-medium leading-relaxed">
              Every node is now a fully functional learning module. Drill down for extreme detailed intel and resources.
            </p>
          </header>

          <div className="relative">
            {/* Foundation Path */}
            <div className="flex flex-col items-center space-y-24 mb-32 relative">
              {FOUNDATION_NODES.map((node, i) => (
                <div key={node.id} className="w-full max-w-lg relative flex flex-col items-center">
                  {i !== 0 && <div className="absolute top-[-96px] w-[2px] h-24 bg-zinc-800" />}
                  <RoadmapCard
                    node={node}
                    color="green"
                    isSelected={selectedId === node.id}
                    onClick={() => setSelectedId(selectedId === node.id ? null : node.id)}
                    onEnterTactical={setActiveTacticalNode}
                    isCompleted={completed.includes(node.id)}
                  />
                </div>
              ))}
              <div className="w-[1px] h-32 bg-zinc-800" />
            </div>

            {/* Career Branching */}
            <div className="relative">
              <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-zinc-800" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12">
                {Object.values(CAREER_PATHS).map((path, idx) => (
                  <div key={idx} className="space-y-12 flex flex-col items-center relative">
                    <div className="absolute top-[-48px] w-[2px] h-12 bg-zinc-800" />
                    <div className="text-center space-y-2 mb-12 h-20">
                      <h3 className="text-2xl font-black italic text-white tracking-widest uppercase">{path.title}</h3>
                      <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">{path.subtitle}</p>
                    </div>
                    <div className="w-full space-y-10 relative">
                      {path.nodes.map((node, i) => (
                        <div key={node.id} className="relative flex flex-col items-center">
                          {i !== 0 && <div className="absolute top-[-40px] w-[2px] h-10 bg-zinc-800" />}
                          <RoadmapCard
                            node={node as any}
                            color={path.color}
                            isSelected={selectedId === node.id}
                            onClick={() => setSelectedId(selectedId === node.id ? null : node.id)}
                            onEnterTactical={setActiveTacticalNode}
                            isCompleted={completed.includes(node.id)}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-800 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating HUD */}
      <div className="fixed left-12 bottom-12 hidden lg:block z-50">
        <div className="p-8 rounded-[2.5rem] bg-[#0a0a1a]/90 border-2 border-white/5 backdrop-blur-3xl space-y-6">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-3xl bg-primary text-black flex items-center justify-center text-xl font-black italic">{currentProgress}%</div>
            <div>
              <div className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Neural Integrity</div>
              <div className="text-[10px] font-bold text-zinc-600 uppercase">Sector: {activeTacticalNode?.title || "Scanning..."}</div>
            </div>
          </div>
          <div className="space-y-2">
            {["CS_CORE", "PRE_BASE", "OFFENSIVE", "DEFENSIVE", "ENGINEER", "AI_SEC"].map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <div className={cn("h-1.5 w-1.5 rounded-full", i < (currentProgress / 16) ? "bg-primary shadow-[0_0_8px_rgba(0,255,153,1)]" : "bg-white/10")} />
                <span className={cn("text-[9px] font-black tracking-widest uppercase", i < (currentProgress / 16) ? "text-white" : "text-zinc-800")}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TacticalBriefing
        node={activeTacticalNode}
        isOpen={activeTacticalNode !== null}
        onOpenChange={(open) => !open && setActiveTacticalNode(null)}
        onSubTopicClick={setActiveSubTopic}
      />

      <PhaseDeepDive
        subtopic={activeSubTopic}
        isOpen={activeSubTopic !== null}
        onOpenChange={(open) => !open && setActiveSubTopic(null)}
      />
    </div>
  );
}