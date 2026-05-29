import {
  Server,
  Layout,
  Database,
  Wrench,
  Cloud,
  TestTube,
} from 'lucide-react';
import { skills } from '../../data';
import { SectionTitle, Card, AnimatedSection } from '../common';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server size={18} />,
  Layout: <Layout size={18} />,
  Database: <Database size={18} />,
  Wrench: <Wrench size={18} />,
  Cloud: <Cloud size={18} />,
  TestTube: <TestTube size={18} />,
};

const colorMap: Record<string, string> = {
  Backend: 'from-emerald-500 to-emerald-600',
  Frontend: 'from-blue-500 to-blue-600',
  Databases: 'from-violet-500 to-violet-600',
  'DevOps & Tools': 'from-orange-500 to-orange-600',
  'Cloud Platforms': 'from-cyan-500 to-cyan-600',
  'Testing & QA': 'from-rose-500 to-rose-600',
};

const topBorderMap: Record<string, string> = {
  Backend: 'border-t-emerald-500',
  Frontend: 'border-t-blue-500',
  Databases: 'border-t-violet-500',
  'DevOps & Tools': 'border-t-orange-500',
  'Cloud Platforms': 'border-t-cyan-500',
  'Testing & QA': 'border-t-rose-500',
};

const barColorMap: Record<string, string> = {
  Backend: 'from-emerald-400 to-emerald-600',
  Frontend: 'from-blue-400 to-blue-600',
  Databases: 'from-violet-400 to-violet-600',
  'DevOps & Tools': 'from-orange-400 to-orange-600',
  'Cloud Platforms': 'from-cyan-400 to-cyan-600',
  'Testing & QA': 'from-rose-400 to-rose-600',
};

export function Skills() {
  return (
    <section id="skills" className="section bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            label="03 — WHAT I KNOW"
            title="Technical Skills"
            subtitle="Technologies and tools I work with on a daily basis"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, index) => (
            <AnimatedSection key={category.category} delay={index * 0.1}>
              <Card className={`h-full border-t-2 ${topBorderMap[category.category] || 'border-t-primary-500'}`}>
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg bg-linear-to-br ${colorMap[category.category] || 'from-primary-500 to-primary-600'} text-white shadow-sm`}>
                    {iconMap[category.icon] || <Server size={18} />}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                    {category.category}
                  </h3>
                </div>

                {/* Skill chips grid */}
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => {
                    const dotOpacity =
                      (skill.level ?? 0) >= 90 ? 'opacity-100' :
                      (skill.level ?? 0) >= 80 ? 'opacity-60' : 'opacity-35';
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between px-3 py-2 bg-light-surface dark:bg-gray-800/60 rounded-lg border border-light-border/60 dark:border-gray-700/50 hover:border-primary-300/50 dark:hover:border-primary-700/40 transition-colors duration-150"
                      >
                        <span className="text-xs text-gray-700 dark:text-gray-300 font-medium truncate pr-1">{skill.name}</span>
                        <span className={`w-2 h-2 rounded-full shrink-0 bg-linear-to-br ${barColorMap[category.category] || 'from-primary-400 to-primary-600'} ${dotOpacity}`} />
                      </div>
                    );
                  })}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
