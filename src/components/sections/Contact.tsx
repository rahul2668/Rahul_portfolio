import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';
import { profile } from '../../data';
import { SectionTitle, AnimatedSection } from '../common';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: profile.location,
      href: undefined,
      color: 'from-violet-500 to-violet-600',
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: profile.linkedin },
    { icon: <Github size={18} />, label: 'GitHub', href: profile.github },
  ];

  return (
    <section id="contact" className="section bg-light-surface/80 dark:bg-gray-900/20">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            label="07 — SAY HELLO"
            title="Get In Touch"
            subtitle="Feel free to reach out for collaborations or just a friendly hello"
          />
        </AnimatedSection>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
          {/* Contact Info */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider text-xs mb-4">
                Contact Information
              </h3>
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 bg-light-card dark:bg-dark-card rounded-xl border border-light-border/80 dark:border-dark-border/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/30 dark:hover:shadow-black/20 hover:border-primary-200/50 dark:hover:border-primary-800/40"
                >
                  <div className={`p-2.5 rounded-lg bg-linear-to-br ${info.color} text-white shadow-sm`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white font-medium text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Connect CTA */}
          <AnimatedSection direction="left" delay={0.35}>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider text-xs mb-0">
                Connect
              </h3>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map(
                  (social) =>
                    social.href && (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 bg-light-card dark:bg-dark-card text-gray-700 dark:text-gray-300 rounded-xl border border-light-border/80 dark:border-dark-border/80 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 dark:hover:border-primary-800/40 transition-all duration-200 text-sm font-medium"
                        aria-label={social.label}
                      >
                        {social.icon}
                        <span>{social.label}</span>
                      </a>
                    )
                )}
              </div>

              {/* CTA card */}
              <div className="flex-1 p-5 bg-linear-to-br from-primary-500 to-purple-600 rounded-2xl text-white flex flex-col justify-between min-h-40 shadow-lg shadow-primary-400/25">
                <MessageSquare size={28} className="opacity-80 mb-3" />
                <div>
                  <p className="font-semibold text-base mb-1">Open to opportunities</p>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    Full-time roles, freelance projects, or collaborations — let's build something great.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
