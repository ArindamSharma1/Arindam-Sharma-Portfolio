import {
    Code2,
    Database,
    Server,
    Wrench,
    Zap,
    Layers,
    Package,
    Settings,
    Shield,
    Lock,
    Activity,
    Github,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Terminal,
    Cpu,
    Globe,
    Layout,
    Smartphone
} from 'lucide-react';

export const SOCIALS = [
    { icon: Github, href: 'https://github.com/ArindamSharma1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/arindam-sharma-ab4712251', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sharmaarindam091@gmail.com', label: 'Email' },
];

export const HERO_STATS = [
    { end: 4, label: 'Years of Building' },
    { end: 7, label: 'Projects Shipped' },
    { end: 1, label: 'Patent Filed' },
];

export const PROJECTS = [
    {
        title: 'FolioGauge',
        context: 'SaaS Tool',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        tech: ['React', 'FastAPI', 'Supabase', 'PostgreSQL'],
        description:
            'Many devs dont have a proper way to evaluate their portfolio UI/UX. So I built a SaaS tool that automatically evaluates performance and content using rule-based scoring.',
        outcome: 'Gives actionable metrics for developers to improve their professional presence.',
        demo: 'https://folio-gauge.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/FolioGauge',
    },
    {
        title: 'TGE Store',
        context: 'E-commerce Platform',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2340&auto=format&fit=crop',
        tech: ['Next.js', 'Shopify API', 'Docker', 'JWT'],
        description:
            'An e-commerce fashion store built directly on Shopify API . Non techincal managers can manage products direclty from Shopify UI instead of keeping a backend engineer to update the backend to manage products',
        outcome: 'Eliminated the need for creating full backend and work directly on shopify front for non techincal users and product management',
        demo: 'https://tge-store.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/TGE_Store',
    },
    {
        title: 'Multi-Language Cloud LMS',
        context: 'Multi Language Cloud Moodle',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2148&auto=format&fit=crop',
        tech: ['Moodle', 'MySQL', 'Cloud Deployment'],
        description:
            'Reducing the friction and language barriers for students in online learning. Deployed a multi-language Moodle. Selected for Patent filling',
        outcome: 'Won 1st Prize at university hackathon; selected for patent filing.',
        demo: 'https://learn-vista-xi.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/learn-vista',
    },
    {
        title: 'SOC Automation Lab',
        context: 'Home Security Lab',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop',
        tech: ['Wazuh', 'ELK Stack', 'Python', 'Linux'],
        description:
            'Raw logs from multiple endpoints were inconsistent and difficult to track. Wrote Python scripts to normalize log formats and centralized them in a SIEM for real-time alert triage.',
        outcome: 'Reduced incident response time by providing a single pane of glass for all endpoint events.',
        repo: 'https://github.com/ArindamSharma1',
    },
    {
        title: 'Network Security Lab',
        context: 'Cisco Environment',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
        tech: ['Cisco Packet Tracer', 'VLANs', 'ACLs', 'TCP/IP'],
        description:
            'Identified ACL misconfigurations that allowed unintended traffic between departments. Designed a segmented network topology with VLANs and strict ACLs to isolate sensitive zones.',
        outcome: 'Verified network segmentation by simulating and blocking lateral movement attempts.',
    },
    {
        title: 'Secure Steganography System',
        context: 'Cryptography Project',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2340&auto=format&fit=crop',
        tech: ['Python', 'LSB Techniques', 'Encryption'],
        description:
            'Standard data transmission was vulnerable to interception. Built a system to hide encrypted data within image pixels using Least Significant Bit techniques.',
        outcome: 'Ensured data confidentiality even if the carrier file is intercepted.',
        repo: 'https://github.com/sanidhyathakur/secure_stego',
    },
    {
        title: 'Trading Bot',
        context: 'CLI Tool',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop',
        tech: ['Python', 'httpx', 'Binance API'],
        description:
            'Manual trading execution on testnets was slow and prone to human error. Developed a CLI tool for automated trade execution and portfolio monitoring on Binance Testnet.',
        outcome: 'Enabled consistent execution of trading strategies without manual intervention.',
        repo: 'https://github.com/ArindamSharma1',
    },
];

export const EXPERIENCES = [
    {
        company: 'ApexPlanet Technologies',
        role: 'Web Developer Intern',
        duration: 'June 2025 - July 2025',
        description: 'Reviewed legacy API endpoints and found missing authentication checks. Implemented JWT-based auth and structured input validation to close those security gaps.',
        skills: ['JWT', 'Input Validation', 'API Security', 'Node.js'],
    },
    {
        company: 'Technical Club JUIT',
        role: 'Backend Developer',
        duration: '2022 - 2024',
        description: 'Identified lack of role separation in the club portal. Designed and implemented RBAC from scratch and secured session handling before production launch.',
        skills: ['RBAC', 'Session Security', 'Backend Dev', 'Express'],
    },
    {
        company: 'Freelance',
        role: 'Full Stack & Security',
        duration: '2022 - 2025',
        description: 'Executed various projects on Upwork and Fiverr focusing on building secure web applications and automating repetitive technical tasks.',
        skills: ['Full Stack', 'Security Audits', 'Automation'],
    },
];

export const SKILL_CATEGORIES = [
    {
        name: 'Cyber Security',
        techs: [
            { name: 'Wazuh', icon: Shield },
            { name: 'ELK Stack', icon: Database },
            { name: 'Burp Suite', icon: Lock },
            { name: 'Nmap', icon: Globe },
            { name: 'OWASP Top 10', icon: Shield },
            { name: 'IDS/IPS', icon: Server },
            { name: 'Nessus', icon: Activity },
            { name: 'Metasploit', icon: Terminal },
        ],
    },
    {
        name: 'Full Stack Development',
        techs: [
            { name: 'Python', icon: Terminal },
            { name: 'TypeScript & JavaScript', icon: Code2 },
            { name: 'Node.js', icon: Server },
            { name: 'Express.Js', icon: Lock },
            { name: 'Next.js', icon: Layers },
            { name: 'FastAPI', icon: Zap },
            { name: 'React', icon: Layout },
            { name: 'REST APIs', icon: Settings },
        ],
    },
    {
        name: 'DevOps & Tools',
        techs: [
            { name: 'Docker', icon: Package },
            { name: 'Docker Compose', icon: Package },
            { name: 'GitHub Actions', icon: Activity },
            { name: 'Git', icon: Code2 },
            { name: 'Linux', icon: Settings },
            { name: 'Vercel', icon: Globe },
        ],
    },
];

export const CONTACT_INFO = {
    email: 'sharmaarindam091@gmail.com',
    phone: '+91 85807 05992',
    github: 'github.com/ArindamSharma1',
    linkedin: 'linkedin.com/in/arindam-sharma-ab4712251',
    location: 'Solan, India',
};
