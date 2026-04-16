import React from "react";
import { Database, Globe, Server, Wifi, Lock, Cpu } from "lucide-react";

export interface AttackStep {
  id: number;
  phase: string; // e.g., "Reconnaissance", "Exploitation"
  title: string;
  description: string;
  command?: string; // Optional command block
  image?: string; // Optional placeholder for screenshots
  insight: string; // "Why I did this"
}

export interface Simulation {
  id: number;
  slug: string;
  title: string;
  category: "Web Security" | "Network Pentest" | "System Escalation" | "Active Directory";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  targetType: "CTF Challenge" | "Vulnerable Lab" | "Bug Bounty POC";
  tools: string[];
  overview: string;
  icon: React.ElementType;
  steps: AttackStep[];
  takeaways: string[];
}

export const attackSimulations: Simulation[] = [
  {
    id: 1,
    slug: "sql-injection-authentication-bypass",
    title: "SQL Injection: Auth Bypass & Data Exfiltration",
    category: "Web Security",
    difficulty: "Intermediate",
    targetType: "Vulnerable Lab",
    tools: ["Burp Suite", "SQLmap", "Python", "Firefox"],
    icon: Database,
    overview: "In this engagement, I targeted a legacy login portal on a vulnerable financial application. The goal was to bypass authentication mechanisms and exfiltrate simulated user credentials from the backend database without triggering WAF rules.",
    steps: [
      {
        id: 1,
        phase: "Reconnaissance",
        title: "Identifying Entry Points",
        description: "I started by mapping the application inputs. The login form at `/login.php` accepted a username and password. I intercepted the request using Burp Suite Proxy to analyze the parameters.",
        command: "POST /login.php HTTP/1.1\nHost: target-lab.local\nContent-Type: application/x-www-form-urlencoded\n\nusername=admin&password=password123",
        insight: "Always check how data is transmitted. URL-encoded parameters are prime targets for injection testing."
      },
      {
        id: 2,
        phase: "Vulnerability Identification",
        title: "Error-Based Testing",
        description: "I injected a single quote (') into the username field. The application returned a '500 Internal Server Error' with a raw SQL syntax warning exposed in the response body.",
        command: "username=admin'&password=123\n\nResponse:\nError: You have an error in your SQL syntax; check the manual...",
        insight: "The server error confirms that the input is being concatenated directly into the database query without sanitization."
      },
      {
        id: 3,
        phase: "Exploitation",
        title: "Boolean-Based Bypass",
        description: "Since I knew the query structure, I crafted a payload to make the SQL statement always evaluate to TRUE. I injected a tautology payload into the username field.",
        command: "username=' OR '1'='1' -- -",
        insight: "The payload closes the username string, injects 'OR 1=1' (which is always true), and comments out the password check using '-- -'."
      },
      {
        id: 4,
        phase: "Post-Exploitation",
        title: "Automated Dumping with SQLmap",
        description: "Having confirmed the vulnerability, I used SQLmap to automate the schema enumeration and dump the 'users' table hashes.",
        command: "sqlmap -u 'http://target-lab.local/login.php' --data='username=admin&password=123' --dbs --batch",
        insight: "Manual exploitation proves the flaw; automation scales the impact. Always verify manual findings before running noisy tools."
      }
    ],
    takeaways: [
      "Input Validation: The root cause was a lack of prepared statements.",
      "Error Handling: Detailed verbose errors gave away the database type (MySQL).",
      "Impact: Full administrative access and total data compromise."
    ]
  },
  // Placeholder for future simulations
  {
    id: 2,
    slug: "linux-privilege-escalation",
    title: "Linux PrivEsc: SUID & Cron Jobs",
    category: "System Escalation",
    difficulty: "Advanced",
    targetType: "CTF Challenge",
    tools: ["LinPEAS", "GTFOBins", "Bash"],
    icon: Server,
    overview: "Starting with a low-privilege shell, I enumerated the system to identify misconfigured SUID binaries and writable cron jobs to escalate privileges to root.",
    steps: [],
    takeaways: ["Always check SUID bits.", "Writable paths in cron are critical flaws."]
  },
  {
    id: 3,
    slug: "xss-stored-attack",
    title: "Stored XSS: Session Hijacking",
    category: "Web Security",
    difficulty: "Beginner",
    targetType: "Bug Bounty POC",
    tools: ["Burp Suite", "Netcat", "JavaScript"],
    icon: Globe,
    overview: "Demonstrating how a simple comment section vulnerability can lead to full account takeover via cookie stealing.",
    steps: [],
    takeaways: ["Sanitize output, not just input.", "HttpOnly flags on cookies prevent theft."]
  }
];