import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../../data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-surface dark:bg-dark-card border-t border-light-border dark:border-dark-border">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              <span className="text-primary-600 dark:text-primary-400">{profile.name.split(' ')[0]}</span>
              <span className="text-gray-600 dark:text-gray-300"> {profile.name.split(' ')[1]}</span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{profile.title}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-light-bg dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 transition-all duration-200 border border-light-border/50 dark:border-transparent"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-light-bg dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 transition-all duration-200 border border-light-border/50 dark:border-transparent"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-lg bg-light-bg dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 transition-all duration-200 border border-light-border/50 dark:border-transparent"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-all duration-200 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-light-border dark:border-dark-border text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
