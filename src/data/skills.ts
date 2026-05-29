import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    category: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'FastAPI', level: 90 },
      { name: 'Django', level: 90 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Vue.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'HTML5/CSS3', level: 95 },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Azure SQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MS SQL Server', level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'GitHub Actions', level: 75 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 90 },
    ],
  },
  {
    category: 'Cloud Platforms',
    icon: 'Cloud',
    skills: [
      { name: 'Azure', level: 80 },
      { name: 'AWS (RDS, S3)', level: 75 },
    ],
  },
  {
    category: 'Testing & QA',
    icon: 'TestTube',
    skills: [
      { name: 'Jest', level: 75 },
      { name: 'React Testing Library', level: 75 },
      { name: 'Chrome DevTools', level: 90 },
    ],
  },
];
