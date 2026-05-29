import { GraduationCap, Calendar, MapPin, BookOpen, School } from 'lucide-react';
import { education } from '../../data';
import { SectionTitle, AnimatedSection } from '../common';

const degreeIcons = [
  <GraduationCap size={24} />,
  <BookOpen size={24} />,
  <School size={24} />,
];

const degreeColors = [
  'from-primary-500 to-primary-600',
  'from-violet-500 to-violet-600',
  'from-emerald-500 to-emerald-600',
];

const topBorders = [
  'border-t-primary-500',
  'border-t-violet-500',
  'border-t-emerald-500',
];

export function Education() {
  return (
    <section id="education" className="section bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            label="06 — ACADEMICS"
            title="Education"
            subtitle="My academic background and qualifications"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <AnimatedSection key={edu.id} delay={index * 0.15}>
              <div className={`h-full bg-light-card dark:bg-dark-card rounded-2xl p-6 border-t-2 ${topBorders[index] || 'border-t-primary-500'} border border-light-border/80 dark:border-dark-border/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary-200/30 dark:hover:shadow-black/30 hover:-translate-y-1`}>
                <div className={`inline-flex p-3 bg-linear-to-br ${degreeColors[index] || 'from-primary-500 to-primary-600'} text-white rounded-xl mb-4 shadow-md`}>
                  {degreeIcons[index] || <GraduationCap size={24} />}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>

                <p className={`font-semibold text-sm mb-3 ${index === 0 ? 'text-primary-600 dark:text-primary-400' : index === 1 ? 'text-violet-600 dark:text-violet-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                  {edu.field}
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {edu.institution}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-light-border/50 dark:border-dark-border/50">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-light-surface dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 text-xs rounded-lg border border-light-border/50 dark:border-gray-700/40">
                    <Calendar size={11} />
                    {edu.year}
                  </span>
                  {edu.location && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-light-surface dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 text-xs rounded-lg border border-light-border/50 dark:border-gray-700/40">
                      <MapPin size={11} />
                      {edu.location}
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
