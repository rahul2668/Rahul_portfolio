import { Briefcase, FolderKanban, Building2, Layers } from 'lucide-react';
import { profile, stats } from '../../data';
import { SectionTitle, AnimatedSection } from '../common';

const iconMap: Record<string, React.ReactNode> = {
  'Years Experience': <Briefcase size={20} />,
  'Projects Completed': <FolderKanban size={20} />,
  'Companies Worked': <Building2 size={20} />,
  'Technologies': <Layers size={20} />,
};

const colorMap: Record<string, string> = {
  'Years Experience': 'from-blue-500 to-blue-600',
  'Projects Completed': 'from-emerald-500 to-emerald-600',
  'Companies Worked': 'from-violet-500 to-violet-600',
  'Technologies': 'from-orange-500 to-orange-600',
};

const accentBorderMap: Record<string, string> = {
  'Years Experience': 'border-t-blue-500',
  'Projects Completed': 'border-t-emerald-500',
  'Companies Worked': 'border-t-violet-500',
  'Technologies': 'border-t-orange-500',
};

export function About() {
  return (
    <section id="about" className="section bg-light-surface/80 dark:bg-gray-900/20">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            label="01 — WHO I AM"
            title="About Me"
            subtitle="Get to know more about my background and what drives me"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-7xl font-serif leading-none text-primary-400/30 dark:text-primary-500/20 select-none">"</span>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed pt-4 pl-2">
                  {profile.summary}
                </p>
              </div>
              <div className="border-t border-light-border/60 dark:border-dark-border/60 pt-5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-primary-100/80 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-sm font-semibold border border-primary-200/60 dark:border-primary-800/30">
                    Full-Stack Developer
                  </span>
                  <span className="px-4 py-2 bg-emerald-100/80 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-semibold border border-emerald-200/60 dark:border-emerald-800/30">
                    Python Expert
                  </span>
                  <span className="px-4 py-2 bg-violet-100/80 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 rounded-full text-sm font-semibold border border-violet-200/60 dark:border-violet-800/30">
                    React Developer
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`group relative p-6 bg-light-card dark:bg-dark-card rounded-2xl border-t-2 ${accentBorderMap[stat.label]} border border-light-border/80 dark:border-dark-border/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary-200/40 dark:hover:shadow-black/30 hover:-translate-y-1`}
                >
                  <div className={`inline-flex p-2.5 rounded-xl bg-linear-to-br ${colorMap[stat.label] || 'from-primary-500 to-primary-600'} text-white mb-4 shadow-md`}>
                    {iconMap[stat.label] || <Layers size={20} />}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
