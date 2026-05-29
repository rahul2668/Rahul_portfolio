import { useState } from 'react';
import { Building, Clock, ArrowRight } from 'lucide-react';
import { projects } from '../../data';
import { SectionTitle, Card, AnimatedSection } from '../common';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../../types';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            label="05 — WHAT I BUILT"
            title="Projects"
            subtitle="Showcasing my work across various domains and technologies"
          />
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Card
                className="h-full group cursor-pointer border-t-2 border-t-primary-400/70"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 mb-2 font-medium">
                      <Building size={15} />
                      <span>{project.client}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 bg-linear-to-r from-primary-500 to-purple-500 text-white text-xs font-semibold rounded-lg shadow-sm shrink-0">
                    Featured
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{project.role}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {project.duration}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-light-surface dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium border border-light-border/50 dark:border-transparent"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 text-gray-400 dark:text-gray-500 text-xs">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-2 transition-all">
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <AnimatedSection>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Other Notable Projects
              </h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <Card
                    className="h-full cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Building size={14} />
                      <span>{project.client}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-light-surface dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs border border-light-border/50 dark:border-transparent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
