export const site = {
  name: 'Yosef Getnet',
  alias: 'Jossy',
  title: 'IT Support · Networking · Cybersecurity',
  intro:
    'I graduated in Computer Science from the University of Gondar in 2026. I am looking for entry-level IT support, networking and cybersecurity roles. I use Linux, Cisco Packet Tracer, Python and security labs to build my skills. During my AMECO internship, I led a team of nine on a visitor management system.',
  email: 'johustler21@gmail.com',
  location: 'Addis Ababa, Ethiopia',
  timezone: 'EAT (UTC +3)',
  status: 'Open to work · IT Support / NOC / SOC',
  socials: {
    github: 'https://github.com/Ezra2121-et',
    linkedin: 'https://www.linkedin.com/in/yosef-getnet/',
    twitter: 'https://x.com/yosef_getnet',
    discord: 'https://discord.com/users/1408145527916200047',
    telegram: 'https://t.me/CTC_1440_26'
  },
  resume: '/resume.pdf'
};

export const projects = [
  {
    number: '01',
    title: 'EthioNet Pulse',
    kind: 'Network Monitoring · Reliability Platform',
    year: '2026',
    status: 'Functional prototype',
    description:
      'A self-hosted connectivity monitor that records target reachability, latency, packet loss, outage history and HTTP service health, with diagnostics and reliability reports.',
    stack: ['Python', 'FastAPI', 'SQLite', 'APScheduler'],
    href: '/work/ethionet-pulse',
    source: 'https://github.com/Ezra2121-et/ethionet-pulse',
    demo: ''
  },
  {
    number: '02',
    title: 'AMECO Visitor Management System',
    kind: 'Internship · Full-stack application',
    year: '2025',
    status: 'Internship project',
    description:
      'A role-based visitor management system built during my AMECO internship. I led a 9-member team working on visitor workflows, user management, reporting and audit logs.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    href: '/work/ameco-visitor-system',
    source: 'https://github.com/Ezra2121-et/AMECO-Visitor-System-Full-MERN-app',
    demo: ''
  },
  {
    number: '03',
    title: 'AI-Based Career Guide',
    kind: 'Computer Science Capstone · Career platform',
    year: '2026',
    status: 'Prototype',
    description:
      'A career-support platform with job exploration, skill-gap analysis, resume workflows, learning paths and AI-assisted interview practice.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Gemini API'],
    href: '/work/ai-career-guide',
    source: 'https://github.com/Ezra2121-et/career-guide-ai',
    demo: 'https://career-guide-ai-nine.vercel.app'
  },
  {
    number: '04',
    title: 'Governance Policy Management System',
    kind: 'Backend Engineering · Distributed systems',
    year: '2026',
    status: 'Backend project',
    description:
      'A Java microservices system for policy approval and traceable audit events, using gateway security, service discovery, Kafka, gRPC and a compensating approval workflow.',
    stack: ['Java 21', 'Spring Boot', 'Kafka', 'gRPC', 'PostgreSQL'],
    href: '/work/governance-policy-system',
    source: 'https://github.com/Ezra2121-et/governance-policy-system',
    demo: ''
  },
  {
    number: '05',
    title: 'FocusPulse: Personal Productivity Coach',
    kind: 'Productivity · Full-stack application',
    year: '2026',
    status: 'Prototype',
    description:
      'A task and focus dashboard with task prioritisation, a Kanban workflow, Pomodoro sessions, productivity analytics, exports and optional AI suggestions.',
    stack: ['React', 'TypeScript', 'TanStack Start', 'Supabase', 'Tailwind CSS'],
    href: '/work/pulse-priority-coach',
    source: 'https://github.com/Ezra2121-et/pulse-priority-coach',
    demo: ''
  }
];

export const stack = [
  'Python', 'TypeScript', 'Linux', 'Bash', 'FastAPI', 'PostgreSQL', 'SQLite',
  'React', 'Node.js', 'MongoDB', 'Prisma', 'Wireshark', 'Nmap', 'Cisco Packet Tracer'
];

export const currently = [
  'Building EthioNet Pulse: connectivity checks, outage history and reliability reporting',
  'CCNA preparation with Cisco Packet Tracer',
  'TryHackMe free-room roadmap after completing Pentesting Fundamentals',
  'Omarchy Linux daily driver · Wireshark, Nmap and Bash',
  'Preparing for ISC2 Certified in Cybersecurity (CC)'
];

export const experience = [
  {
    role: 'Full-Stack Developer Intern',
    org: 'Amhara Media Corporation (AMECO), Bahir Dar',
    period: 'Jun 2025 - Aug 2025',
    points: [
      'Led a 9-member team building a full-stack Visitor Management System from planning to delivery.',
      'Designed and optimized database queries for media content and user data.',
      'Integrated backend services with the frontend and coordinated work across the team.'
    ]
  },
  {
    role: 'Cybersecurity Trainee',
    org: 'INSA Cybersecurity Summer Bootcamp',
    period: 'Summer 2026',
    points: [
      'Trained in networking, Linux and security operations fundamentals through an intensive bootcamp.',
      'Explored project concepts for the Ethiopian context, including automated incident reporting and tamper-evident digital evidence.'
    ]
  },
  {
    role: 'Self-Directed IT & Security Labs',
    org: 'Independent',
    period: 'Ongoing',
    points: [
      'Completed TryHackMe Pentesting Fundamentals and continued along its free-room learning path.',
      'Working through CCNA preparation with Packet Tracer and preparing for ISC2 Certified in Cybersecurity (CC).',
      'Run Omarchy Linux as my daily driver and practice with Wireshark, Nmap and Bash.'
    ]
  }
];

export const certifications = [
  ['Cisco Networking Academy', 'Introduction to Cybersecurity, Python Essentials 1 & 2, Network Basics'],
  ['ISC2', 'Certified in Cybersecurity (CC): in progress'],
  ['INSA', 'Cybersecurity Summer Bootcamp, 2026'],
  ['University of Gondar', 'CEED Employability and Entrepreneurship Skills Training, Jun 2026'],
  ['Other', 'Udacity Programming Fundamentals, IBM SkillsBuild Prompt Engineering, freeCodeCamp Responsive Web Design']
];
