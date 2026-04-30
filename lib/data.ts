// ─── PORTFOLIO CONTENT ───────────────────────────────────────────────────────
// Edit this file to update all portfolio content in one place.

export const siteConfig = {
  name: 'Jeisson Daniel Rodríguez Novoa',
  title: 'Aeronautical Engineer · QA Auditor · Data Analyst',
  email: 'jeissondrn37@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jeissonrodr%C3%ADguez-novoa',
  github: 'https://github.com/Jei55on',
  location: 'Bogotá, Colombia',
  bio: `Aeronautical Engineer with complementary training in software development and data analysis,
  focused on applying technology to improve processes and support informed decision-making
  in complex operational environments like aviation.
  I combine technical rigor with analytical capability to build solutions that strengthen
  operational safety and organizational efficiency.`,
  heroTagline: 'Building safer, smarter aviation operations through data and quality assurance.',
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: 'data' | 'automation' | 'aviation';
  link?: string;
  github?: string;
  featured?: boolean;
  metrics?: string;
};

export const projects: Project[] = [
  {
    title: 'Aviation Incident Pattern Analysis',
    description:
      'End-to-end Power BI dashboard analyzing 5+ years of incident reports to identify risk patterns and support proactive safety interventions. Reduced mean-time-to-detect anomalies by 40%.',
    tags: ['Power BI', 'Python', 'SQL', 'DAX', 'Aviation Safety'],
    category: 'aviation',
    featured: true,
    metrics: '40% faster anomaly detection',
  },
  {
    title: 'Quality Audit Automation Suite',
    description:
      'Power Automate + Python pipeline that automated 80% of recurring quality audit workflows, cutting manual processing time from 3 days to 4 hours per audit cycle.',
    tags: ['Power Automate', 'Python', 'SharePoint', 'Power BI'],
    category: 'automation',
    featured: true,
    metrics: '80% workflow automation',
  },
  {
    title: 'Predictive Maintenance Dashboard',
    description:
      'Machine-learning-assisted KNIME pipeline that forecasts component failure probability using sensor telemetry, enabling condition-based maintenance decisions.',
    tags: ['KNIME', 'Python', 'scikit-learn', 'SQL', 'Power BI'],
    category: 'data',
    featured: true,
    metrics: '25% cost reduction',
  },
  {
    title: 'Flight Operations KPI Tracker',
    description:
      'Real-time KPI monitoring solution connecting operational databases to interactive Power BI reports consumed by C-level stakeholders on a daily basis.',
    tags: ['Power BI', 'SQL', 'DAX', 'Azure'],
    category: 'data',
    metrics: 'Used by C-level daily',
  },
  {
    title: 'Regulatory Compliance Reporter',
    description:
      'Automated document-generation pipeline that compiles audit evidence from SharePoint, formats it to EASA/ICAO templates, and delivers reports via email with zero manual effort.',
    tags: ['Power Automate', 'Python', 'SharePoint', 'EASA', 'ICAO'],
    category: 'aviation',
    metrics: '0 manual effort per report',
  },
  {
    title: 'Crew Scheduling Optimizer',
    description:
      'Linear-programming model (PuLP) that optimizes crew pairings subject to duty-time limitations and regulatory constraints, reducing scheduling cost by 15%.',
    tags: ['Python', 'PuLP', 'Operations Research', 'Excel'],
    category: 'automation',
    metrics: '15% cost savings',
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: 'Aerolínea SATENA',
    role: 'Quality Assurance Auditor',
    period: 'Jul 2025 – Present',
    location: 'Bogotá, Colombia',
    current: true,
    description: [
      'Lead internal and external operational safety and quality audits aligned with aviation regulations, corporate procedures, and international standards.',
      'Support strategic decision-making by strengthening risk management and ensuring process reliability across the operation.',
      'Actively contributing to the airline\'s IOSA certification process, driving continuous improvement and operational sustainability.',
    ],
    tags: ['QA Auditing', 'IOSA', 'SMS', 'Risk Management', 'ICAO'],
  },
  {
    company: 'Aerolínea SATENA',
    role: 'Flight Data Analyst',
    period: 'Aug 2023 – Jul 2025',
    location: 'Bogotá, Colombia',
    description: [
      'Performed exploratory data analysis on flight operational data to identify safety trends and anomalies.',
      'Identified operational trends and deviations through systematic FDM/FOQA data processing.',
      'Automated recurring data workflows, reducing manual processing time and improving reporting consistency.',
    ],
    tags: ['FDM', 'FOQA', 'Python', 'Power BI', 'Data Analysis', 'KNIME'],
  },
  {
    company: 'OWO Tech',
    role: 'IT Support Analyst',
    period: 'Mar 2023 – Aug 2023',
    location: 'Bogotá, Colombia',
    description: [
      'Managed IT service operations with focus on technical support and incident resolution.',
      'Administered SAC/MDA software and generated operational data reports for decision-making.',
    ],
    tags: ['IT Support', 'SAC/MDA', 'Data Reporting'],
  },
  {
    company: 'Red Comercial de Juegos y Servicios de Colombia',
    role: 'Systems Assistant',
    period: 'Oct 2022 – Mar 2023',
    location: 'Bogotá, Colombia',
    description: [
      'Managed Microsoft SQL Server 2012 and MySQL databases using DML and DDL statements for data operations.',
      'Provided IT support and help desk services, handling data management and system maintenance tasks.',
    ],
    tags: ['SQL Server', 'MySQL', 'DML/DDL', 'IT Support'],
  },
  {
    company: 'Vertical Group',
    role: 'Engineering Intern',
    period: 'Dec 2021 – May 2022',
    location: 'Bogotá, Colombia',
    description: [
      'Developed and implemented a Flight Operational Quality Assurance (FOQA) program from the ground up.',
      'Supported operational documentation management and authored audit plans, checklists, and scheduling reports.',
    ],
    tags: ['FOQA', 'Aviation Safety', 'Quality Assurance', 'Documentation'],
  },
  {
    company: 'Escuela de Aviación del Ejército',
    role: 'Research Assistant',
    period: 'Jul 2020 – Nov 2021',
    location: 'Bogotá, Colombia',
    description: [
      'Generated new knowledge through software development applied to aerospace research projects.',
      'Implemented agile methodologies for innovation initiatives and contributed to CAD and CFD design work.',
    ],
    tags: ['Research', 'Software Development', 'CFD', 'CAD', 'Agile'],
  },
];

export type SkillItem = {
  name: string;
  bullets: [string, string];
  tags: string[];
  projectLink?: string;
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: string;
  skills: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'data',
    label: 'Data & Analytics',
    icon: '📊',
    skills: [
      {
        name: 'Power BI / DAX',
        bullets: [
          'Built flight data dashboards at SATENA to monitor operational safety KPIs and detect deviations in real time.',
          'Designed multi-table data models with DAX measures that support audit trend analysis and regulatory reporting.',
        ],
        tags: ['Data Modeling', 'Dashboards', 'FDM'],
      },
      {
        name: 'Python — pandas · NumPy · matplotlib',
        bullets: [
          'Automated FDM/FOQA data pipelines consolidating multi-source flight records into structured analytical datasets.',
          'Applied statistical analysis to operational quality findings to identify root causes and recurring patterns.',
        ],
        tags: ['ETL', 'Statistical Analysis', 'FOQA'],
      },
      {
        name: 'SQL — SQL Server · MySQL',
        bullets: [
          'Managed databases at Red Comercial using DML/DDL statements for data operations and system maintenance.',
          'Queried operational databases to extract audit evidence and generate performance metrics for reporting.',
        ],
        tags: ['SQL Server', 'MySQL', 'DML/DDL', 'Reporting'],
      },
      {
        name: 'KNIME',
        bullets: [
          'Built analytical pipelines for large-volume flight data with automated anomaly detection and classification.',
          'Designed no-code ETL workflows that standardize data from heterogeneous operational sources.',
        ],
        tags: ['Pipelines', 'ETL', 'Anomaly Detection'],
      },
      {
        name: 'Excel / Power Query',
        bullets: [
          'Engineered audit workbooks with dynamic cross-references and automated calculations for compliance evidence.',
          'Built Power Query transformations to clean and reshape raw operational data before loading into Power BI.',
        ],
        tags: ['Reporting', 'Compliance', 'Data Prep'],
      },
    ],
  },
  {
    id: 'aviation',
    label: 'Aviation & Safety',
    icon: '✈️',
    skills: [
      {
        name: 'Quality Assurance Auditing',
        bullets: [
          'Lead internal and external audits at SATENA aligned with IOSA standards, RAC regulations, and corporate procedures.',
          'Manage the full audit cycle — planning, execution, finding documentation, and corrective action follow-up.',
        ],
        tags: ['IOSA', 'Internal Audit', 'Corrective Actions'],
      },
      {
        name: 'Safety Management System (SMS)',
        bullets: [
          'Applied ICAO Annex 19 SMS framework to support hazard identification, risk assessment, and safety assurance activities.',
          'Contributed to safety promotion and safety culture initiatives within the operational environment.',
        ],
        tags: ['ICAO', 'Hazard Analysis', 'Risk Assessment'],
      },
      {
        name: 'FDM / FOQA',
        bullets: [
          'Analyzed flight data monitoring records at SATENA to identify operational trends and safety-relevant exceedances.',
          'Developed and implemented a FOQA program at Vertical Group, including data collection, analysis, and reporting procedures.',
        ],
        tags: ['Flight Data', 'Trend Analysis', 'Safety'],
      },
      {
        name: 'Aeronautical Regulations — RAC / ICAO',
        bullets: [
          'Applied Colombian aeronautical regulations (RAC) and ICAO standards in audit planning and compliance verification.',
          'Ensured alignment between operational procedures and regulatory requirements during IOSA preparation.',
        ],
        tags: ['RAC', 'ICAO', 'Compliance', 'IOSA'],
      },
      {
        name: 'CAD & CFD — Research Applications',
        bullets: [
          'Contributed to CAD design and CFD simulation projects at the Army Aviation School supporting aerospace research.',
          'Developed software tools for data acquisition and analysis in an applied aeronautical research context.',
        ],
        tags: ['CAD', 'CFD', 'Research', 'Software Dev'],
      },
    ],
  },
  {
    id: 'automation',
    label: 'Automation & Systems',
    icon: '⚙️',
    skills: [
      {
        name: 'Power Automate',
        bullets: [
          'Automated end-to-end operational workflows — from data collection triggers to report delivery — reducing manual intervention.',
          'Built approval chains and cross-system notifications connecting SharePoint, Outlook, and Teams.',
        ],
        tags: ['Workflow Automation', 'Integration', 'Low-code'],
      },
      {
        name: 'Power Apps',
        bullets: [
          'Developed low-code apps that digitize quality and operational data-entry processes for field teams.',
          'Replaced manual, paper-based forms with connected digital solutions feeding directly into analytical systems.',
        ],
        tags: ['Low-code', 'Mobile Apps', 'Digitization'],
      },
      {
        name: 'PowerShell',
        bullets: [
          'Wrote scripts to automate administrative tasks, system monitoring, and batch data operations on Windows environments.',
          'Integrated PowerShell routines into data pipelines to schedule and orchestrate recurring processing jobs.',
        ],
        tags: ['Scripting', 'Windows', 'Automation'],
      },
      {
        name: 'SharePoint',
        bullets: [
          'Structured document control libraries with versioning and metadata tagging for auditable aeronautical record-keeping.',
          'Integrated SharePoint lists as live data sources for Power BI dashboards and Power Automate triggers.',
        ],
        tags: ['Document Control', 'Records Management', 'Integration'],
      },
      {
        name: 'JavaScript / Web Development',
        bullets: [
          'Built interactive front-end interfaces to visualize operational data and support internal tooling.',
          'Applied JavaScript fundamentals (Platzi certification) to automate browser-based workflows and data extraction.',
        ],
        tags: ['JavaScript', 'Front-end', 'Tooling'],
      },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'data-driven-safety-aviation',
    title: 'How Data Analytics Is Reshaping Aviation Safety Management',
    excerpt:
      'Modern SMS programs generate massive datasets. Here is how to turn that noise into actionable safety intelligence using Power BI and Python.',
    date: '2026-04-10',
    readTime: '6 min read',
    tags: ['Aviation', 'Safety', 'Power BI'],
    category: 'Aviation',
  },
  {
    slug: 'power-automate-audit-workflows',
    title: 'Automating Quality Audit Workflows with Power Automate',
    excerpt:
      'A practical walkthrough of the automation pipeline I built to cut audit cycle time from 3 days to 4 hours — without a single line of custom code in production.',
    date: '2026-03-22',
    readTime: '8 min read',
    tags: ['Power Automate', 'Automation', 'Quality'],
    category: 'Automation',
  },
  {
    slug: 'strategic-kpi-design',
    title: 'Designing KPIs That Actually Drive Decisions',
    excerpt:
      'Most KPI dashboards answer "what happened?" A well-designed one answers "what should we do?" Here is the framework I use to bridge that gap.',
    date: '2026-02-15',
    readTime: '5 min read',
    tags: ['Strategy', 'KPI', 'Data'],
    category: 'Strategy',
  },
  {
    slug: 'python-for-engineers',
    title: 'Python for Aerospace Engineers: Where to Start',
    excerpt:
      'You already think analytically. Here is how to leverage that mindset to pick up Python fast and apply it to real engineering problems from day one.',
    date: '2026-01-30',
    readTime: '7 min read',
    tags: ['Python', 'Engineering', 'Tutorial'],
    category: 'Tutorial',
  },
  {
    slug: 'predictive-maintenance-ml',
    title: 'Predictive Maintenance with Machine Learning: A Practical Primer',
    excerpt:
      'From raw sensor data to a working classifier in KNIME — a no-hype guide to getting started with predictive maintenance models in an MRO context.',
    date: '2026-01-05',
    readTime: '10 min read',
    tags: ['KNIME', 'ML', 'MRO', 'Aviation'],
    category: 'Data Science',
  },
  {
    slug: 'easa-data-compliance',
    title: 'Data Governance Under EASA Part-M: Lessons from the Field',
    excerpt:
      'Regulatory compliance and modern data practices do not have to conflict. Here is how I aligned our analytics stack with EASA requirements.',
    date: '2025-12-18',
    readTime: '9 min read',
    tags: ['EASA', 'Compliance', 'Data Governance'],
    category: 'Aviation',
  },
];

export type Education = {
  institution: string;
  degree: string;
  period: string;
  current?: boolean;
};

export const education: Education[] = [
  {
    institution: 'Universidad Nacional Abierta y a Distancia — UNAD',
    degree: 'B.Eng. Systems Engineering',
    period: 'Apr 2025 – Apr 2027',
    current: true,
  },
  {
    institution: 'SENA',
    degree: 'Technologist in Software Analysis & Development',
    period: 'Nov 2021 – Nov 2024',
  },
  {
    institution: 'Escuela de Aviación del Ejército',
    degree: 'Aeronautical Engineer',
    period: '2018 – 2022',
  },
  {
    institution: 'SENA',
    degree: 'Internal Quality Auditor — NTC ISO 9001',
    period: 'Feb 2022 – Mar 2022',
  },
];

export const certifications = [
  'Safety Management System (SMS)',
  'Internal HSEQ Auditor',
  'Professional Python — Platzi',
  'MySQL Introduction — Platzi',
  'JavaScript Fundamentals — Platzi',
];

export const aboutValues = [
  {
    icon: '🎯',
    title: 'Impact-First Thinking',
    description:
      'Every analysis I deliver is tied to an operational outcome. I do not just report data — I connect it to decisions that improve safety and efficiency.',
  },
  {
    icon: '🛡️',
    title: 'Safety-Critical Mindset',
    description:
      'Aviation taught me that data errors have real consequences. I bring that same rigor to every analytical system and audit process I design.',
  },
  {
    icon: '🔗',
    title: 'Engineering + Data',
    description:
      'My aeronautical background gives me the domain fluency to ask the right questions — and my data skills give me the tools to answer them.',
  },
  {
    icon: '⚡',
    title: 'Automation-Oriented',
    description:
      'If a process runs more than twice, I automate it. Manual workflows are inefficiencies waiting to be solved.',
  },
];
