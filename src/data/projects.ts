import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'pii-masking',
    title: 'PII Masking Tool',
    client: 'Trigyn (Equitable)',
    role: 'Senior Programmer Analyst',
    duration: 'Aug 2025 - Present',
    description:
      'Secure data management platform for converting sensitive production data into non-production datasets by applying PII detection, masking, and conversion techniques.',
    longDescription: `Designed and developed a full-stack application using React.js (UI) and FastAPI (Backend).
      Implemented PII detection and masking pipelines using hash functions, Faker, and Microsoft Presidio.
      Built interactive dashboards for PII visualization and admin configurations.
      Ensured role-based authentication and comprehensive audit logging for compliance.`,
    technologies: ['React.js', 'FastAPI', 'Python', 'Microsoft Presidio', 'Azure SQL', 'Docker'],
    featured: true,
  },
  {
    id: 'neoai-vscode',
    title: 'NeoAI VS Code Extension',
    client: 'LTM (HSBC)',
    role: 'Senior Programmer Analyst',
    duration: 'Nov 2024 - Present',
    description:
      'AI-powered VS Code extension for intelligent code review, explanation, and developer assistance with React-based Webview UI.',
    longDescription: `Developed VS Code Extension packaged as .vsix with React.js Webviews for assistant responses.
      Integrated FastAPI backend for dynamic code analysis and file processing.
      Implemented secure communication between extension, backend APIs, and webviews.
      Supported file uploads and automated unit test generation for multiple languages.`,
    technologies: ['VS Code API', 'React.js', 'TypeScript', 'FastAPI', 'Python', 'Docker'],
    featured: true,
  },
  {
    id: 'mes-portal',
    title: 'MES Portal (Manufacturing Execution System)',
    client: 'Virtues',
    role: 'Senior Programmer Analyst',
    duration: 'Jan 2024 - Oct 2024',
    description:
      'Real-time manufacturing management platform with SSO integration for production planning, quality control, and reporting.',
    longDescription: `Designed scalable APIs using Python and FastAPI for seamless frontend and third-party integration.
      Implemented WebSocket-based real-time services for dynamic MES functionalities.
      Built custom UI components and dashboards tailored to manufacturing workflows.
      Containerized applications using Docker for streamlined deployment.`,
    technologies: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'Docker', 'WebSockets'],
    featured: true,
  },
  {
    id: 'global-payments',
    title: 'Global Payments Migration',
    client: 'Global Payments',
    role: 'Data Engineer',
    duration: 'Jul 2023 - Dec 2023',
    description:
      'Large-scale migration of on-prem relational databases to AWS cloud data platform with zero downtime.',
    longDescription: `Migrated on-prem SQL Server databases to AWS RDS.
      Created SQL scripts for merging, partitioning, and validations.
      Re-defined access model and redesigned data maintenance activities.
      Performed data validation across Dev, QA, and Production environments.`,
    technologies: ['AWS RDS', 'AWS S3', 'MS SQL Server', 'Python', 'Jenkins', 'Git'],
    featured: false,
  },
  {
    id: 'bfl-merchant',
    title: 'BFL Merchant Portal',
    client: 'Worldline',
    role: 'Associate Engineer',
    duration: 'Aug 2022 - Jun 2023',
    description:
      'Frontend interface for banking APIs with dynamic UI screens for report viewing and encrypted data handling.',
    longDescription: `Developed modular Vue.js components for API consumption and banking data display.
      Integrated with Django (Phase-1) and FastAPI (Phase-2) backends using Axios.
      Handled encrypted request/response payloads with AES decryption.
      Implemented responsive design for cross-device compatibility.`,
    technologies: ['Vue.js', 'FastAPI', 'Django', 'PostgreSQL', 'AES Encryption'],
    featured: true,
  },
  {
    id: 'worldline-merchant',
    title: 'Worldline Merchant Portal',
    client: 'Worldline',
    role: 'UI Developer',
    duration: 'Sep 2021 - Aug 2022',
    description:
      'Dynamic, role-based full-stack web application for data aggregation, Excel report generation, and user management.',
    longDescription: `Developed responsive user interfaces using Vue.js, JavaScript, Bootstrap.
      Built components for aggregated monthly data and duration-based filtering.
      Designed dynamic dashboards and Excel download functionality.
      Implemented role-based UI rendering for permission-based access.`,
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Bootstrap', 'Pandas'],
    featured: false,
  },
  {
    id: 'datahub',
    title: 'DataHub Worldline Portal',
    client: 'Worldline',
    role: 'Python Developer',
    duration: 'Aug 2020 - Sep 2021',
    description:
      'Comprehensive web portal for merchants, acquiring banks, and OEMs to log tickets, raise requests, and manage transactions.',
    longDescription: `Utilized Python, Django, Vue.js to design server applications and client interfaces.
      Managed development and troubleshooting of Python Django projects.
      Designed and configured database and backend applications.
      Collaborated with developers to handle complex deployment issues.`,
    technologies: ['Vue.js', 'Django', 'Python', 'PostgreSQL'],
    featured: false,
  },
];
