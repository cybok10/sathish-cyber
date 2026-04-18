import { 
  Shield, Terminal, Globe, Cpu, Book, Youtube, 
  Gamepad, Newspaper, User, MessageSquare, 
  Archive, Lock, Search, Zap, Code, Laptop,
  Activity, Database, Server, Smartphone,
  Network, Bug, Target, HardDrive, Square as Box, Flag, Brain
} from "lucide-react";

export interface Resource {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  type: "Free" | "Paid" | "Freemium";
  link: string;
  icon: any;
  tags: string[];
  trending?: boolean;
}

export const CATEGORIES = [
  { id: "tools", name: "Cybersecurity Tools", icon: Terminal },
  { id: "recon_apis", name: "Live Recon APIs", icon: Search },
  { id: "vuln_databases", name: "Vulnerability Databases", icon: Database },
  { id: "platforms", name: "Learning Platforms", icon: Laptop },
  { id: "ai_cyber", name: "AI in Cybersecurity", icon: Cpu },
  { id: "research_papers", name: "Research & Papers", icon: Book },
  { id: "certifications", name: "Certifications Hub", icon: Shield },
  { id: "github_repos", name: "Top GitHub Repos", icon: Code },
  { id: "bug_bounty", name: "Bug Bounty Platforms", icon: Bug },
  { id: "youtube", name: "YouTube Intel", icon: Youtube },
  { id: "communities", name: "Communities", icon: MessageSquare },
  { id: "wordlists", name: "Wordlists & Payloads", icon: Archive },
];

export const resources: Resource[] = [
  // --- 1. Cybersecurity Tools (Pro Level) ---
  {
    id: "nmap",
    name: "Nmap",
    description: "The gold standard for network discovery and security auditing. Essential for mapping attack surfaces.",
    category: "tools",
    difficulty: "Beginner",
    type: "Free",
    link: "https://nmap.org/",
    icon: Network,
    tags: ["Network", "Scanning", "Recon"],
    trending: true
  },
  {
    id: "ffuf",
    name: "ffuf",
    description: "Fuzz Faster U Fool - A fast web fuzzer written in Go. Used for directory discovery and parameter fuzzing.",
    category: "tools",
    difficulty: "Intermediate",
    type: "Free",
    link: "https://github.com/ffuf/ffuf",
    icon: Zap,
    tags: ["Web", "Fuzzing", "Discovery"]
  },
  {
    id: "httpx",
    name: "httpx",
    description: "A fast and multi-purpose HTTP toolkit that allows running multiple probes using the retryablehttp library.",
    category: "tools",
    difficulty: "Intermediate",
    type: "Free",
    link: "https://github.com/projectdiscovery/httpx",
    icon: Globe,
    tags: ["Web", "Probing", "Recon"]
  },
  {
    id: "sqlmap",
    name: "sqlmap",
    description: "Automatic SQL injection and database takeover tool. Detects and exploits SQL injection flaws.",
    category: "tools",
    difficulty: "Advanced",
    type: "Free",
    link: "https://sqlmap.org/",
    icon: Database,
    tags: ["Web", "Exploitation", "Database"]
  },
  {
    id: "wpscan",
    name: "WPScan",
    description: "A black box WordPress vulnerability scanner that can be used to scan remote WordPress installations and their plugins.",
    category: "tools",
    difficulty: "Beginner",
    type: "Freemium",
    link: "https://wpscan.com/",
    icon: Bug,
    tags: ["Web", "WordPress", "Scanning"]
  },
  {
    id: "dirsearch",
    name: "dirsearch",
    description: "Advanced command-line tool designed to brute force directories and files in webservers, AKA web path scanner.",
    category: "tools",
    difficulty: "Beginner",
    type: "Free",
    link: "https://github.com/maurosoria/dirsearch",
    icon: Search,
    tags: ["Web", "Recon", "Enumeration"]
  },
  {
    id: "aquatone",
    name: "Aquatone",
    description: "A tool for visual inspection of websites across a large number of hosts and is great for gaining an overview of HTTP-based attack surfaces.",
    category: "tools",
    difficulty: "Intermediate",
    type: "Free",
    link: "https://github.com/michenriksen/aquatone",
    icon: Activity,
    tags: ["Web", "Visual", "Recon"]
  },
  {
    id: "masscan",
    name: "Masscan",
    description: "The fastest Internet port scanner. It can scan the entire Internet in under 6 minutes, transmitting 10 million packets per second.",
    category: "tools",
    difficulty: "Advanced",
    type: "Free",
    link: "https://github.com/robertdavidgraham/masscan",
    icon: Network,
    tags: ["Network", "Fast", "Scanning"]
  },
  {
    id: "evilginx2",
    name: "Evilginx2",
    description: "A man-in-the-middle attack framework used for phishing login credentials along with session cookies, which in turn allows bypassing 2FA.",
    category: "tools",
    difficulty: "Advanced",
    type: "Free",
    link: "https://github.com/kgretzky/evilginx2",
    icon: Lock,
    tags: ["Phishing", "MITM", "Educational"],
    trending: true
  },
  {
    id: "responder",
    name: "Responder",
    description: "A LLMNR, NBT-NS and MDNS poisoner, with built-in HTTP/SMB/MSSQL/FTP/LDAP rogue authentication server supporting many relay features.",
    category: "tools",
    difficulty: "Advanced",
    type: "Free",
    link: "https://github.com/lgandikas/Responder",
    icon: Terminal,
    tags: ["Network", "Poisoning", "Relay"]
  },
  {
    id: "burpsuite",
    name: "Burp Suite",
    description: "The primary tool for web application security testing. Intercept, analyze, and attack web traffic.",
    category: "tools",
    difficulty: "Intermediate",
    type: "Freemium",
    link: "https://portswigger.net/burp",
    icon: Bug,
    tags: ["Web", "Proxy", "Vulnerability"],
    trending: true
  },
  {
    id: "metasploit",
    name: "Metasploit",
    description: "The world's most used penetration testing framework. Exploit vulnerabilities across systems.",
    category: "tools",
    difficulty: "Advanced",
    type: "Freemium",
    link: "https://www.metasploit.com/",
    icon: Target,
    tags: ["Exploitation", "Red Team", "Framework"]
  },

  // --- 2. Live Recon APIs ---
  {
    id: "shodan",
    name: "Shodan",
    description: "The world's first search engine for Internet-connected devices. Search for servers, IoT, and vulnerabilities globally.",
    category: "recon_apis",
    difficulty: "Intermediate",
    type: "Freemium",
    link: "https://www.shodan.io/",
    icon: Search,
    tags: ["IoT", "Search", "Recon"],
    trending: true
  },
  {
    id: "censys",
    name: "Censys",
    description: "Provides a complete view of all IPs and domain data on the internet, allowing for deep security analysis.",
    category: "recon_apis",
    difficulty: "Intermediate",
    type: "Freemium",
    link: "https://censys.io/",
    icon: Globe,
    tags: ["Internet", "Inventory", "ASM"]
  },
  {
    id: "virustotal",
    name: "VirusTotal",
    description: "Analyze suspicious files and URLs to detect types of malware, automatically share them with the security community.",
    category: "recon_apis",
    difficulty: "Beginner",
    type: "Freemium",
    link: "https://www.virustotal.com/",
    icon: Shield,
    tags: ["Malware", "Scan", "API"]
  },
  {
    id: "securitytrails",
    name: "SecurityTrails",
    description: "Total visibility over any dynamic infrastructure. Explore the world's largest repository of historical DNS data.",
    category: "recon_apis",
    difficulty: "Intermediate",
    type: "Freemium",
    link: "https://securitytrails.com/",
    icon: Network,
    tags: ["DNS", "History", "Recon"]
  },

  // --- 3. Vulnerability Databases ---
  {
    id: "nvd",
    name: "NVD (National Vulnerability Database)",
    description: "The U.S. government repository of standards-based vulnerability management data.",
    category: "vuln_databases",
    difficulty: "Beginner",
    type: "Free",
    link: "https://nvd.nist.gov/",
    icon: Database,
    tags: ["CVE", "NIST", "Official"]
  },
  {
    id: "exploitdb",
    name: "Exploit Database",
    description: "The ultimate archive of exploits and vulnerable software, a great resource for penetration testers.",
    category: "vuln_databases",
    difficulty: "Intermediate",
    type: "Free",
    link: "https://www.exploit-db.com/",
    icon: Target,
    tags: ["Exploits", "POC", "OffSec"]
  },
  {
    id: "cve",
    name: "CVE (Common Vulnerabilities and Exposures)",
    description: "A list of publicly disclosed cybersecurity vulnerabilities. Each CVE ID represents a specific security flaw.",
    category: "vuln_databases",
    difficulty: "Beginner",
    type: "Free",
    link: "https://cve.mitre.org/",
    icon: Shield,
    tags: ["Standards", "Mitre", "Vulns"]
  },

  // --- 4. Learning Platforms ---
  {
    id: "ine",
    name: "INE Security",
    description: "High-end training for networking and cyber security, including the eLearnSecurity certification paths.",
    category: "platforms",
    difficulty: "Intermediate",
    type: "Paid",
    link: "https://ine.com/learning-paths/cyber-security",
    icon: Laptop,
    tags: ["Training", "Enterprise", "Pro"]
  },
  {
    id: "pentesterlab",
    name: "PentesterLab",
    description: "The best way to learn web penetration testing. Hands-on labs from basic to advanced exploitation.",
    category: "platforms",
    difficulty: "Intermediate",
    type: "Freemium",
    link: "https://pentesterlab.com/",
    icon: Code,
    tags: ["Web", "Labs", "Badges"]
  },
  {
    id: "cyberdefenders",
    name: "CyberDefenders",
    description: "A blue team training platform that provides hands-on labs and CTFs for SOC analysts and incident responders.",
    category: "platforms",
    difficulty: "Intermediate",
    type: "Freemium",
    link: "https://cyberdefenders.org/",
    icon: Shield,
    tags: ["Blue Team", "SOC", "DFIR"]
  },
  {
    id: "tryhackme",
    name: "TryHackMe",
    description: "A hands-on platform for learning cybersecurity through gamified labs and structured paths.",
    category: "platforms",
    difficulty: "Beginner",
    type: "Freemium",
    link: "https://tryhackme.com/",
    icon: Terminal,
    tags: ["Labs", "Beginner Friendly", "Gamified"]
  },

  // --- 5. AI in Cybersecurity (Next Gen) ---
  {
    id: "ai-recon",
    name: "AI-Powered Recon Tools",
    description: "Research and tools utilizing LLMs and ML for automated infrastructure mapping and asset discovery.",
    category: "ai_cyber",
    difficulty: "Advanced",
    type: "Free",
    link: "https://github.com/projectdiscovery/ai-templates",
    icon: Cpu,
    tags: ["AI", "Recon", "Automation"],
    trending: true
  },
  {
    id: "ai-phishing",
    name: "AI Phishing Detection",
    description: "Advanced algorithms for real-time detection of sophisticated AI-generated phishing attempts.",
    category: "ai_cyber",
    difficulty: "Intermediate",
    type: "Free",
    link: "#",
    icon: Activity,
    tags: ["AI", "Defense", "Detection"]
  },
  {
    id: "llm-sec",
    name: "LLM Security Research",
    description: "Exploring vulnerabilities in Large Language Models, including prompt injection and data exfiltration.",
    category: "ai_cyber",
    difficulty: "Advanced",
    type: "Free",
    link: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    icon: Brain,
    tags: ["LLM", "Research", "Security"]
  },

  // --- 6. Research & Papers ---
  {
    id: "arxiv",
    name: "arXiv (Computer Science)",
    description: "Open-access archive for 2 million scholarly articles in the fields of physics, mathematics, and computer science.",
    category: "research_papers",
    difficulty: "Advanced",
    type: "Free",
    link: "https://arxiv.org/list/cs.CR/recent",
    icon: Book,
    tags: ["Academia", "Papers", "Research"]
  },
  {
    id: "scholar",
    name: "Google Scholar",
    description: "Provides a simple way to broadly search for scholarly literature across many disciplines and sources.",
    category: "research_papers",
    difficulty: "Advanced",
    type: "Free",
    link: "https://scholar.google.com/scholar?q=cybersecurity+research",
    icon: Search,
    tags: ["Search", "Articles", "Citations"]
  },

  // --- 7. Certifications Hub ---
  {
    id: "oscp",
    name: "OSCP (Offensive Security Certified Professional)",
    description: "The premium certification for penetration testers. 24-hour hands-on exam that tests real-world skills.",
    category: "certifications",
    difficulty: "Advanced",
    type: "Paid",
    link: "https://www.offsec.com/courses/pen-200/",
    icon: Shield,
    tags: ["OffSec", "Elite", "Hands-on"]
  },
  {
    id: "ceh",
    name: "CEH (Certified Ethical Hacker)",
    description: "One of the most well-known cybersecurity certifications globally, focusing on tools and methodologies.",
    category: "certifications",
    difficulty: "Intermediate",
    type: "Paid",
    link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
    icon: Shield,
    tags: ["EC-Council", "Foundational", "Standard"]
  },
  {
    id: "security-plus",
    name: "Security+",
    description: "The global benchmark for best practices in IT network and operational security.",
    category: "certifications",
    difficulty: "Beginner",
    type: "Paid",
    link: "https://www.comptia.org/certifications/security",
    icon: Shield,
    tags: ["CompTIA", "Entry-Level", "Baseline"]
  },
  {
    id: "ejpt",
    name: "eJPT (eLearnSecurity Junior Penetration Tester)",
    description: "Great starting point for practical penetration testing. Covers networking, web apps, and system exploitation.",
    category: "certifications",
    difficulty: "Beginner",
    type: "Paid",
    link: "https://ine.com/certifications/ejpt",
    icon: Shield,
    tags: ["INE", "Practical", "Beginner"]
  },

  // --- 8. Top GitHub Repos ---
  {
    id: "payloadsallthethings",
    name: "PayloadAllTheThings",
    description: "A huge collection of web attack payloads and cheat sheets for various vulnerability types.",
    category: "github_repos",
    difficulty: "Intermediate",
    type: "Free",
    link: "https://github.com/swisskyrepo/PayloadsAllTheThings",
    icon: Code,
    tags: ["Payloads", "Web", "Cheat Sheets"],
    trending: true
  },
  {
    id: "seclists",
    name: "SecLists",
    description: "The security tester's companion. A collection of multiple types of lists used during security assessments.",
    category: "github_repos",
    difficulty: "Beginner",
    type: "Free",
    link: "https://github.com/danielmiessler/SecLists",
    icon: Archive,
    tags: ["Wordlists", "Bruteforce", "Fuzzing"]
  },
  {
    id: "awesome-hacking",
    name: "Awesome Hacking Lists",
    description: "A collection of awesome lists for hackers, penetration testers and security researchers.",
    category: "github_repos",
    difficulty: "Beginner",
    type: "Free",
    link: "https://github.com/carpedm20/awesome-hacking",
    icon: Youtube,
    tags: ["Curated", "Lists", "Knowledge"]
  },

  // --- 9. Bug Bounty Platforms ---
  {
    id: "hackerone",
    name: "HackerOne",
    description: "The world's largest community of hackers. Connect with companies to find vulnerabilities and earn bounties.",
    category: "bug_bounty",
    difficulty: "Intermediate",
    type: "Free",
    link: "https://www.hackerone.com/",
    icon: Bug,
    tags: ["Bounty", "Platform", "Community"],
    trending: true
  },
  {
    id: "bugcrowd",
    name: "Bugcrowd",
    description: "Crowdsourced security platform that connects organizations with a global crowd of security researchers.",
    category: "bug_bounty",
    difficulty: "Intermediate",
    type: "Free",
    link: "https://www.bugcrowd.com/",
    icon: Bug,
    tags: ["Bounty", "Triage", "Platform"]
  },

  // --- 10. YouTube Intel ---
  {
    id: "networkchuck",
    name: "NetworkChuck",
    description: "Engaging and beginner-friendly videos on networking and cybersecurity.",
    category: "youtube",
    difficulty: "Beginner",
    type: "Free",
    link: "https://www.youtube.com/@NetworkChuck",
    icon: Youtube,
    tags: ["Networking", "Beginner", "Entertaining"]
  },
  {
    id: "tcm",
    name: "The Cyber Mentor",
    description: "Practical hacking training and career advice for aspiring security professionals.",
    category: "youtube",
    difficulty: "Beginner",
    type: "Free",
    link: "https://www.youtube.com/@TheCyberMentor",
    icon: Youtube,
    tags: ["Hacking", "Career", "Training"]
  },
  {
    id: "johnhammond",
    name: "John Hammond",
    description: "CTF walkthroughs, malware analysis, and in-depth exploration of hacking techniques.",
    category: "youtube",
    difficulty: "Intermediate",
    type: "Free",
    link: "https://www.youtube.com/@JohnHammond010",
    icon: Youtube,
    tags: ["CTF", "Malware", "Walkthroughs"]
  },
  {
    id: "liveoverflow",
    name: "LiveOverflow",
    description: "Deep dive into cybersecurity topics, CTFs, and low-level software exploitation.",
    category: "youtube",
    difficulty: "Advanced",
    type: "Free",
    link: "https://www.youtube.com/@LiveOverflow",
    icon: Youtube,
    tags: ["Low Level", "Exploitation", "CTF"]
  },
  {
    id: "ippsec",
    name: "IppSec",
    description: "Methodical walkthroughs of Hack The Box machines and retired CTF boxes.",
    category: "youtube",
    difficulty: "Advanced",
    type: "Free",
    link: "https://www.youtube.com/@ippsec",
    icon: Youtube,
    tags: ["HTB", "Walkthroughs", "Advanced"]
  },

  // --- 11. Communities ---
  {
    id: "r-netsec",
    name: "Reddit (r/netsec)",
    description: "Technical information security discussion. High-quality research and vulnerability disclosures.",
    category: "communities",
    difficulty: "Advanced",
    type: "Free",
    link: "https://www.reddit.com/r/netsec/",
    icon: MessageSquare,
    tags: ["Reddit", "Technical", "Discussion"]
  },
  {
    id: "r-hacking",
    name: "Reddit (r/hacking)",
    description: "Community for hackers to share knowledge, ask questions, and discuss security issues.",
    category: "communities",
    difficulty: "Beginner",
    type: "Free",
    link: "https://www.reddit.com/r/hacking/",
    icon: MessageSquare,
    tags: ["Reddit", "Learning", "Discussion"]
  }
];


