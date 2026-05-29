import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data';
import { SectionTitle, AnimatedSection } from '../common';

const avatarColors = [
  'from-primary-500 to-primary-600',
  'from-violet-500 to-violet-600',
  'from-emerald-500 to-emerald-600',
];

const cardAccents = [
  'border-l-primary-500',
  'border-l-violet-500',
  'border-l-emerald-500',
];

const dotRings = [
  'ring-primary-100 dark:ring-primary-900/40',
  'ring-violet-100 dark:ring-violet-900/40',
  'ring-emerald-100 dark:ring-emerald-900/40',
];

export function Experience() {
  return (
    <section id="experience" className="section bg-light-surface/80 dark:bg-gray-900/20">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            label="04 — MY JOURNEY"
            title="Work Experience"
            subtitle="My professional journey and key accomplishments"
          />
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[22px] md:left-[26px] top-8 bottom-8 w-0.5 bg-linear-to-b from-primary-400 via-violet-400 to-violet-200/30 dark:from-primary-600 dark:via-violet-600 dark:to-violet-900/20" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isActive = exp.endDate === 'Present';
              const initial = exp.company.charAt(0).toUpperCase();
              const avatarGradient = avatarColors[index % avatarColors.length];
              const cardAccent = cardAccents[index % cardAccents.length];
              const dotRing = dotRings[index % dotRings.length];

              return (
                <AnimatedSection key={exp.id} direction="up" delay={index * 0.15}>
                  <div className="relative pl-16 md:pl-20">
                    {/* Company avatar circle */}
                    <div
                      className={`absolute left-0 top-5 w-11 h-11 rounded-xl bg-linear-to-br ${avatarGradient} flex items-center justify-center shadow-lg ring-4 ${dotRing} z-10`}
                    >
                      <span className="text-white font-bold text-lg leading-none">{initial}</span>
                    </div>

                    {/* Card */}
                    <div
                      className={`bg-light-card dark:bg-dark-card rounded-2xl border-l-4 ${cardAccent} border border-light-border/80 dark:border-dark-border/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary-200/30 dark:hover:shadow-black/40 hover:-translate-y-0.5 overflow-hidden`}
                    >
                      {/* Card header */}
                      <div className="px-6 pt-5 pb-4 border-b border-light-border/60 dark:border-dark-border/60">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {exp.role}
                              </h3>
                              {isActive && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200/60 dark:border-emerald-800/40">
                                  <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                                  </span>
                                  Active
                                </span>
                              )}
                            </div>
                            <p className={`font-semibold text-sm ${index === 0 ? 'text-primary-600 dark:text-primary-400' : 'text-violet-600 dark:text-violet-400'}`}>
                              {exp.company}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2 shrink-0">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-light-surface dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 text-xs font-medium border border-light-border/60 dark:border-gray-700/50">
                              <Calendar size={12} />
                              {exp.startDate} – {exp.endDate}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-light-surface dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 text-xs font-medium border border-light-border/60 dark:border-gray-700/50">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="px-6 py-5">
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <ul className="space-y-2.5 mb-5">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                              <CheckCircle2
                                size={16}
                                className={`mt-0.5 shrink-0 ${index === 0 ? 'text-primary-500' : 'text-violet-500'}`}
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-light-border/50 dark:border-dark-border/50">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-light-surface dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium border border-light-border/70 dark:border-gray-700/60 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 dark:hover:border-primary-700 dark:hover:text-primary-300 dark:hover:bg-primary-900/20 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
