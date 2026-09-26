export const SOCIALS = [
    { href: 'https://github.com/ArindamSharma1', label: 'GitHub' },
    { href: 'https://linkedin.com/in/arindam-sharma-ab4712251', label: 'LinkedIn' },
    { href: 'mailto:sharmaarindam091@gmail.com', label: 'Email' },
];

export const RESUME_URL = '/projects/Arindam_Sharma_Resume_C.pdf';

export const TAGS = ['Security', 'Full-stack', 'Automation'] as const;
export type Tag = (typeof TAGS)[number];

export interface Project {
    title: string;
    context: string;
    image?: string;
    tags: Tag[];
    tech: string[];
    summary: string;
    result: string;
    demo?: string;
    repo?: string;
}

export const PROJECTS: Project[] = [
    {
        title: 'FolioGauge',
        context: 'SaaS tool',
        image: '/projects/Folio-Gauge.png',
        tags: ['Full-stack'],
        tech: ['React', 'FastAPI', 'Supabase', 'PostgreSQL'],
        summary: 'Scores a developer portfolio on performance and content.',
        result: 'Gives developers metrics they can act on.',
        demo: 'https://folio-gauge.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/FolioGauge',
    },
    {
        title: 'TGE Store',
        context: 'E-commerce',
        image: '/projects/tge-store.png',
        tags: ['Full-stack'],
        tech: ['Next.js', 'Shopify API', 'Docker', 'JWT'],
        summary: 'Fashion store built on the Shopify API.',
        result: 'Managers update products in Shopify, with no custom backend.',
        demo: 'https://tge-store.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/TGE_Store',
    },
    {
        title: 'Multi-Language Cloud LMS',
        context: 'Cloud Moodle',
        image: '/projects/learn-vista.png',
        tags: ['Full-stack'],
        tech: ['Moodle', 'MySQL', 'Cloud Deployment'],
        summary: 'Moodle in multiple languages, so language is not a barrier to learning.',
        result: '1st prize at the university hackathon. Selected for patent filing.',
        demo: 'https://learn-vista-xi.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/learn-vista',
    },
    {
        title: 'SOC Automation Lab',
        context: 'Home security lab',
        tags: ['Security', 'Automation'],
        tech: ['Wazuh', 'ELK Stack', 'Python', 'Linux'],
        summary: 'Python normalizes logs from many endpoints into one SIEM.',
        result: 'One view for alert triage, so incidents get handled faster.',
        repo: 'https://github.com/ArindamSharma1',
    },
    {
        title: 'Network Security Lab',
        context: 'Cisco environment',
        tags: ['Security'],
        tech: ['Cisco Packet Tracer', 'VLANs', 'ACLs', 'TCP/IP'],
        summary: 'Segmented network with VLANs and strict ACLs.',
        result: 'Simulated lateral movement is blocked between zones.',
    },
    {
        title: 'Secure Steganography',
        context: 'Cryptography project',
        tags: ['Security'],
        tech: ['Python', 'LSB Techniques', 'Encryption'],
        summary: 'Hides encrypted data inside image pixels.',
        result: 'Data stays confidential even if the image is intercepted.',
        repo: 'https://github.com/sanidhyathakur/secure_stego',
    },
    {
        title: 'Trading Bot',
        context: 'CLI tool',
        tags: ['Automation'],
        tech: ['Python', 'httpx', 'Binance API'],
        summary: 'CLI that runs trades and monitors the portfolio on Binance Testnet.',
        result: 'Strategies run without manual execution.',
        repo: 'https://github.com/ArindamSharma1',
    },
];

/** Projects that use a given tool, matched case-insensitively. */
export const projectsUsing = (tech: string) =>
    PROJECTS.filter((p) => p.tech.some((t) => t.toLowerCase() === tech.toLowerCase()));

export const EXPERIENCES = [
    {
        company: 'DeepKlarity',
        role: 'AI SDE 1',
        duration: 'May 2026 - Present',
        highlight: 'Building AI-driven applications.',
        description: 'Working as an AI Software Development Engineer, building and helping with complex applications.',
        skills: ['REST APIs', 'MySQL', 'Python', 'Node.js'],
    },
    {
        company: 'ApexPlanet Technologies',
        role: 'Web Developer Intern',
        duration: 'Jun - Jul 2025',
        highlight: 'Closed API auth gaps with JWT and input validation.',
        description: 'Reviewed legacy API endpoints and found missing authentication checks. Implemented JWT-based auth and structured input validation to close those security gaps.',
        skills: ['JWT', 'Input Validation', 'API Security', 'Node.js'],
    },
    {
        company: 'Technical Club JUIT',
        role: 'Backend Developer',
        duration: '2022 - 2024',
        highlight: 'Built RBAC and secure sessions for the club portal.',
        description: 'Identified lack of role separation in the club portal. Designed and implemented RBAC from scratch and secured session handling before production launch.',
        skills: ['RBAC', 'Session Security', 'Backend Dev', 'Express'],
    },
    {
        company: 'Freelance',
        role: 'Full Stack & Security',
        duration: '2022 - 2025',
        highlight: 'Secure web apps and automation for Upwork and Fiverr clients.',
        description: 'Executed various projects on Upwork and Fiverr focusing on building secure web applications and automating repetitive technical tasks.',
        skills: ['Full Stack', 'Security Audits', 'Automation'],
    },
];

export interface Certification {
    name: string;
    issuer: string;
    /** ISO date (YYYY-MM-DD). The list is sorted newest first when rendered. */
    date: string;
    /** Public verification link. */
    url: string;
}

// To add a certification, append an entry here. The section sorts and collapses the list itself.
export const CERTIFICATIONS: Certification[] = [
    {
        name: 'Introduction to Model Context Protocol',
        issuer: 'Anthropic Education',
        date: '2026-06-09',
        url: 'https://verify.skilljar.com/c/zqz2u2ygxfzq',
    },
    {
        name: 'Introduction to agent skills',
        issuer: 'Anthropic Education',
        date: '2026-06-09',
        url: 'https://verify.skilljar.com/c/zr9kbojrgu2b',
    },
    {
        name: 'Claude Code in Action',
        issuer: 'Anthropic Education',
        date: '2026-06-08',
        url: 'https://verify.skilljar.com/c/obkg47huqx4m',
    },
    {
        name: 'Building with the Claude API',
        issuer: 'Anthropic Education',
        date: '2026-06-05',
        url: 'https://verify.skilljar.com/c/a5hfnsmapkv6',
    },
];

export const SKILL_CATEGORIES = [
    {
        name: 'Cyber security',
        techs: ['Wazuh', 'ELK Stack', 'Burp Suite', 'Nmap', 'OWASP Top 10', 'IDS/IPS', 'Nessus', 'Metasploit'],
    },
    {
        name: 'Full-stack',
        techs: ['Python', 'TypeScript & JavaScript', 'Node.js', 'Express.js', 'Next.js', 'FastAPI', 'React', 'REST APIs'],
    },
    {
        name: 'DevOps and tools',
        techs: ['Docker', 'Docker Compose', 'GitHub Actions', 'Git', 'Linux', 'Vercel'],
    },
];

export const CONTACT_INFO = {
    email: 'sharmaarindam091@gmail.com',
    phone: '+91 85807 05992',
    phoneHref: 'tel:+918580705992',
    location: 'Solan, India',
    timeZone: 'Asia/Kolkata',
};
