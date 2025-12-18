import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogArticles: Record<string, any> = {
  "getting-started-penetration-testing": {
    id: 1,
    title: "Getting Started with Penetration Testing",
    category: "Security",
    date: "Dec 15, 2025",
    author: "Sathish M",
    readTime: "5 min read",
    content: `
      <h2>Introduction</h2>
      <p>Penetration testing is a critical component of modern cybersecurity. It involves authorized testing of computer systems to identify vulnerabilities and security weaknesses. In this guide, we'll walk through the fundamentals you need to know to get started.</p>

      <h2>What is Penetration Testing?</h2>
      <p>Penetration testing (pen testing) is a simulated cyber attack against your computer system to check for exploitable vulnerabilities. The goal is to identify security gaps before malicious actors do.</p>

      <h2>Key Phases of Penetration Testing</h2>
      <h3>1. Reconnaissance</h3>
      <p>Gather information about the target system. This includes identifying IP addresses, domain names, mail servers, and other network infrastructure.</p>

      <h3>2. Scanning</h3>
      <p>Use scanning tools to identify open ports, services, and potential vulnerabilities on the target system.</p>

      <h3>3. Enumeration</h3>
      <p>Actively probe systems to gain detailed information about users, shares, printers, and applications.</p>

      <h3>4. Exploitation</h3>
      <p>Attempt to exploit identified vulnerabilities to gain unauthorized access.</p>

      <h3>5. Reporting</h3>
      <p>Document all findings, vulnerabilities discovered, and recommendations for remediation.</p>

      <h2>Essential Tools</h2>
      <ul>
        <li><strong>Nmap:</strong> Network scanner for discovering hosts and services</li>
        <li><strong>Metasploit:</strong> Exploitation framework</li>
        <li><strong>Burp Suite:</strong> Web application security testing</li>
        <li><strong>Wireshark:</strong> Network protocol analyzer</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Always get written authorization before testing</li>
        <li>Define scope and rules of engagement clearly</li>
        <li>Document all activities and findings</li>
        <li>Maintain confidentiality of sensitive information</li>
        <li>Follow ethical guidelines and legal requirements</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Penetration testing is an essential skill in cybersecurity. By understanding these fundamentals, you're taking the first step toward becoming a skilled security professional. Remember to always conduct tests ethically and legally!</p>
    `
  },
  "network-security-protocols": {
    id: 2,
    title: "Understanding Network Security Protocols",
    category: "Networking",
    date: "Dec 10, 2025",
    author: "Sathish M",
    readTime: "8 min read",
    content: `
      <h2>Introduction to Network Security Protocols</h2>
      <p>Network security protocols are crucial for protecting data as it travels across networks. Understanding these protocols is essential for any cybersecurity professional.</p>

      <h2>Common Security Protocols</h2>
      <h3>SSL/TLS</h3>
      <p>Secure Sockets Layer (SSL) and Transport Layer Security (TLS) encrypt data in transit. TLS is the modern successor to SSL and is used by HTTPS.</p>

      <h3>SSH</h3>
      <p>Secure Shell provides encrypted remote access to systems. It's the secure replacement for telnet and is essential for secure administration.</p>

      <h3>VPN</h3>
      <p>Virtual Private Networks create encrypted tunnels for secure data transmission. They're essential for protecting remote connections.</p>

      <h2>Protocol Vulnerabilities</h2>
      <p>Each protocol has potential weaknesses that attackers may exploit. Regular security audits and updates are critical.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Keep protocols updated to the latest versions</li>
        <li>Use strong encryption algorithms</li>
        <li>Implement proper certificate management</li>
        <li>Monitor network traffic for anomalies</li>
      </ul>
    `
  },
  "owasp-top-10": {
    id: 3,
    title: "OWASP Top 10 Security Risks Explained",
    category: "Web Security",
    date: "Dec 5, 2025",
    author: "Sathish M",
    readTime: "10 min read",
    content: `
      <h2>The OWASP Top 10</h2>
      <p>The Open Web Application Security Project (OWASP) Top 10 lists the most critical security risks to web applications.</p>

      <h2>Top Vulnerabilities</h2>
      <h3>1. Injection</h3>
      <p>SQL injection, command injection, and other injection attacks remain a top threat.</p>

      <h3>2. Broken Authentication</h3>
      <p>Weak authentication mechanisms and credential exposure are common vulnerabilities.</p>

      <h3>3. Sensitive Data Exposure</h3>
      <p>Failure to protect sensitive data in transit or at rest poses significant risks.</p>

      <h3>4. XML External Entities (XXE)</h3>
      <p>Processing untrusted XML can lead to serious vulnerabilities.</p>

      <h3>5. Broken Access Control</h3>
      <p>Users can access resources they shouldn't have permission to access.</p>

      <h2>Mitigation Strategies</h2>
      <p>Implement proper input validation, use parameterized queries, enforce strong authentication, and encrypt sensitive data.</p>
    `
  },
  "malware-analysis-101": {
    id: 4,
    title: "Malware Analysis 101",
    category: "Malware",
    date: "Nov 28, 2025",
    author: "Sathish M",
    readTime: "12 min read",
    content: `
      <h2>Introduction to Malware Analysis</h2>
      <p>Malware analysis is the process of studying malicious software to understand its functionality, origin, and potential impact.</p>

      <h2>Types of Malware</h2>
      <ul>
        <li><strong>Viruses:</strong> Self-replicating programs attached to files</li>
        <li><strong>Worms:</strong> Self-replicating without requiring a host</li>
        <li><strong>Trojans:</strong> Programs disguised as legitimate software</li>
        <li><strong>Ransomware:</strong> Encrypts files and demands payment</li>
        <li><strong>Spyware:</strong> Secretly monitors user activity</li>
      </ul>

      <h2>Analysis Approaches</h2>
      <h3>Static Analysis</h3>
      <p>Examine malware without executing it. Analyze file structure, strings, and code.</p>

      <h3>Dynamic Analysis</h3>
      <p>Execute malware in a controlled environment to observe its behavior.</p>

      <h2>Analysis Tools</h2>
      <ul>
        <li>IDA Pro - Disassembler</li>
        <li>Wireshark - Network traffic analysis</li>
        <li>Process Monitor - System activity tracking</li>
        <li>Cuckoo Sandbox - Automated analysis</li>
      </ul>
    `
  },
  "secure-coding-practices": {
    id: 5,
    title: "Secure Coding Best Practices",
    category: "Development",
    date: "Nov 20, 2025",
    author: "Sathish M",
    readTime: "7 min read",
    content: `
      <h2>Writing Secure Code</h2>
      <p>Security should be integrated into the development process from the beginning, not added as an afterthought.</p>

      <h2>Key Principles</h2>
      <h3>Input Validation</h3>
      <p>Always validate and sanitize user input. Never trust data from users.</p>

      <h3>Output Encoding</h3>
      <p>Properly encode output to prevent XSS attacks and injection vulnerabilities.</p>

      <h3>Authentication & Authorization</h3>
      <p>Implement strong authentication mechanisms and enforce proper access controls.</p>

      <h3>Encryption</h3>
      <p>Encrypt sensitive data both in transit and at rest using strong algorithms.</p>

      <h2>Common Vulnerabilities to Avoid</h2>
      <ul>
        <li>SQL Injection</li>
        <li>Cross-Site Scripting (XSS)</li>
        <li>Cross-Site Request Forgery (CSRF)</li>
        <li>Insecure Deserialization</li>
        <li>Using Known Vulnerable Components</li>
      </ul>

      <h2>Security Testing</h2>
      <p>Implement automated security testing in your CI/CD pipeline and conduct regular code reviews.</p>
    `
  },
  "incident-response-framework": {
    id: 6,
    title: "Incident Response Framework",
    category: "Incident Response",
    date: "Nov 15, 2025",
    author: "Sathish M",
    readTime: "9 min read",
    content: `
      <h2>Building an Incident Response Program</h2>
      <p>A well-structured incident response plan is critical for minimizing damage from security incidents.</p>

      <h2>Key Phases</h2>
      <h3>1. Preparation</h3>
      <p>Establish an incident response team, create playbooks, and maintain proper tooling.</p>

      <h3>2. Detection & Analysis</h3>
      <p>Monitor systems for signs of compromise and analyze incidents to determine scope and severity.</p>

      <h3>3. Containment</h3>
      <p>Isolate affected systems to prevent further spread of the incident.</p>

      <h3>4. Eradication</h3>
      <p>Remove the threat from all affected systems and patch vulnerabilities.</p>

      <h3>5. Recovery</h3>
      <p>Restore systems to normal operation and monitor for any signs of re-infection.</p>

      <h3>6. Post-Incident Activities</h3>
      <p>Document lessons learned and update response procedures.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Maintain detailed incident logs</li>
        <li>Conduct regular tabletop exercises</li>
        <li>Update response plans regularly</li>
        <li>Maintain communication throughout the incident</li>
      </ul>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? blogArticles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="section-padding pt-32 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h2>
          <Button onClick={() => navigate("/blog")} className="mt-4">
            Back to Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding bg-gradient-to-br from-background via-card to-background cyber-grid relative pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="container-custom relative z-10 max-w-3xl">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
                {article.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {article.readTime}
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 mb-12"
          />

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert max-w-none"
          >
            <div
              className="text-muted-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: article.content
                  .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-foreground mt-8 mb-4">')
                  .replace(/<h3>/g, '<h3 class="text-2xl font-semibold text-foreground mt-6 mb-3">')
                  .replace(/<p>/g, '<p class="text-base leading-relaxed">')
                  .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2">')
                  .replace(/<li>/g, '<li class="text-base">')
              }}
            />
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-border/30"
          >
            <Button
              onClick={() => navigate("/blog")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
            >
              ← Back to All Articles
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
