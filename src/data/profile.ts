import type { Profile, NavItem } from '../types';

export const profile: Profile = {
  name: 'Rahul Ramagiri',
  title: 'Senior Programmer Analyst',
  tagline: '5.10+ Years Full-Stack Developer | Python | Django | React | FastAPI',
  email: 'rahulramagiri27@gmail.com',
  phone: '+91 8555819530',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/in/rahul-ramagiri-782a85189/',
  github: 'https://github.com/rahulramagiri',
  summary: `Full-stack developer with 5.10+ years of experience building secure, scalable web applications.
  Specialized in Python (Django, FastAPI) for backend development and React.js/TypeScript for frontend.
  Expert in building privacy-compliant applications with PII detection and masking using Microsoft Presidio.
  Experienced with PostgreSQL, Azure SQL, Docker, and cloud platforms (Azure, AWS).
  Passionate about creating efficient, maintainable solutions and staying current with modern technologies.`,
  resumeUrl: '/Rahul_Ramagiri_Resume_5Y_10M_Python (1).pdf',
  avatarUrl: '/profile.jpg',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Years Experience', value: '5.10+' },
  { label: 'Projects Completed', value: '7+' },
  { label: 'Companies Worked', value: '2' },
  { label: 'Technologies', value: '15+' },
];
