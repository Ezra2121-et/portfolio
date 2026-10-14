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
    title: 'AI-Based Career Guide',
    kind: 'Capstone · Full-stack Web Platform',
    year: '2026',
    status: 'Capstone',
    description:
      'Web platform for skill-gap analysis, resume building and mock interviews, built as my Computer Science capstone project.',
    stack: ['TypeScript', 'PostgreSQL', 'Prisma ORM', 'Gemini AI'],
    href: '/work/ai-career-guide',
    source: '',
    demo: ''
  },
  {
    number: '02',
    title: 'PortSwigger API Testing Report',
    kind: 'Web Security · Lab Write-up',
    year: '2026',
    status: 'Completed',
    description:
      'Hands-on exploitation of hidden endpoints and mass assignment vulnerabilities in PortSwigger API testing labs, documented as a written report.',
    stack: ['Web Security', 'API Testing', 'OWASP'],
    href: '/work/portswigger-api-testing',
    source: '',
    demo: ''
  },
  {
    number: '03',
    title: 'HAWI E-commerce Website',
    kind: 'Web Design · E-commerce',
    year: '2026',
    status: 'In progress',
    description:
      'A premium editorial online store for a new Ethiopian perfume and fashion brand.',
    stack: ['Web Design', 'E-commerce'],
    href: '/work/hawi-ecommerce',
    source: '',
    demo: ''
  },
  {
    number: '04',
    title: 'Cyber Incident Reporting Assistant',
    kind: 'INSA Bootcamp · Project Concept',
    year: '2026',
    status: 'Concept',
    description:
      'A project concept explored at the INSA Cybersecurity Summer Bootcamp for the Ethiopian context: automated incident reporting and tamper-evident digital evidence.',
    stack: ['Python', 'Next.js', 'PostgreSQL'],
    href: '/work/cyber-incident-reporting-assistant',
    source: '',
    demo: ''
  },
  {
    number: '05',
    title: 'Personal Portfolio',
    kind: 'Web · Astro Site',
    year: '2026',
    status: 'Live',
    description:
      'This site: a fast, multi-page portfolio with project write-ups, essays and a light/dark toggle.',
    stack: ['Astro', 'Vercel'],
    href: 'https://github.com/Ezra2121-et/portfolio',
    source: 'https://github.com/Ezra2121-et/portfolio',
    demo: ''
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
  'Python', 'TypeScript', 'Linux', 'Bash', 'PostgreSQL', 'FastAPI', 'Prisma', 'Wireshark', 'Nmap', 'Cisco Packet Tracer'
];

export const currently = [
  'CCNA preparation with Packet Tracer',
  'Preparing for ISC2 Certified in Cybersecurity (CC)',
  'Fedora Linux daily driver · Wireshark, Nmap, Bash',
  'PortSwigger web & API security labs',
  'Technical writing & documentation'
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
      'Working through CCNA preparation with Packet Tracer; preparing for ISC2 Certified in Cybersecurity (CC).',
      'Run Fedora Linux as my daily driver and practice with Wireshark, Nmap and Bash.'
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
