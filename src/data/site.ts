export const site = {
  name: 'Yosef Getnet',
  alias: 'Jossy',
  title: 'IT Support · Networking · Cybersecurity',
  intro:
    'I am a 2026 Computer Science graduate from the University of Gondar, building a career in IT support, network operations and security operations. I am hands-on with Linux, Cisco networking, Python and web security labs, and I bring a full-stack background: during my internship I led a 9-member team. I learn fast, document what I do, and turn messy problems into reliable, working solutions.',
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
  }
];

export const writing = [
  {
    title: 'Notes from Learning Linux',
    date: '2026-08-30',
    category: 'notes',
    tags: ['linux', 'systems', 'documentation'],
    href: '/writing/notes-from-learning-linux'
  },
  {
    title: 'What I Want My Portfolio to Say Without Saying It',
    date: '2026-08-29',
    category: 'writeup',
    tags: ['research', 'methodology'],
    href: '/writing/what-i-want-my-portfolio-to-say'
  },
  {
    title: 'Learning Networking by Building Things',
    date: '2026-08-24',
    category: 'notes',
    tags: ['networking', 'infrastructure', 'hands-on'],
    href: '/writing/learning-networking-by-building'
  },
  {
    title: 'Why I Keep Coming Back to Systems',
    date: '2026-08-18',
    category: 'writeup',
    tags: ['systems', 'engineering', 'practice'],
    href: '/writing/why-i-keep-coming-back-to-systems'
  },
  {
    title: 'A Practical Way to Think About Cybersecurity',
    date: '2026-08-11',
    category: 'case-study',
    tags: ['security', 'threat-analysis', 'methodology'],
    href: '/writing/practical-cybersecurity'
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
    period: 'Jun 2025 – Aug 2025',
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
      'Completed PortSwigger API testing labs (hidden endpoints, mass assignment) and wrote up the findings.',
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
