import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'bilvantis',
    company: 'Bilvantis Technologies LLP',
    role: 'Senior Programmer Analyst',
    location: 'Hyderabad, India',
    startDate: 'Jan 2024',
    endDate: 'Present',
    description:
      'Leading development of enterprise applications for banking and financial clients, focusing on data privacy, security, and AI-powered developer tools.',
    achievements: [
      'Designed and developed full-stack PII Masking Tool using React.js and FastAPI for Trigyn (Equitable)',
      'Implemented PII detection and masking pipelines using Microsoft Presidio, hash functions, and Faker library',
      'Built NeoAI VS Code Extension with React.js Webviews for AI-powered code assistance',
      'Architected MES Portal for real-time manufacturing management with SSO integration',
      'Containerized backend services using Docker for consistent deployments across environments',
    ],
    technologies: ['React.js', 'FastAPI', 'Python', 'TypeScript', 'Microsoft Presidio', 'Docker', 'Azure'],
  },
  {
    id: 'itcrats',
    company: 'ITCrats Info Solutions Pvt Ltd',
    role: 'Python Developer (Associate)',
    location: 'Hyderabad, India',
    startDate: 'Aug 2020',
    endDate: 'Jan 2024',
    description:
      'Full-stack development for payment processing and merchant portal solutions for major financial clients.',
    achievements: [
      'Led Global Payments migration from on-prem SQL Server to AWS RDS with zero downtime',
      'Developed BFL Merchant Portal with Vue.js frontend and FastAPI/Django backend for Worldline',
      'Built comprehensive Worldline Merchant Portal serving thousands of merchants',
      'Created DataHub Portal with responsive UI for merchants, acquiring banks, and OEMs',
      'Implemented role-based UI rendering and dynamic Excel report generation',
      'Handled encrypted request/response payloads using AES encryption',
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'Vue.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
];
