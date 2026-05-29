import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Briefcase, FolderKanban, Building2, Layers } from 'lucide-react';
import { profile, stats } from '../../data';
import { Button } from '../common';

const statIcons: Record<string, React.ReactNode> = {
  'Years Experience': <Briefcase size={14} />,
  'Projects Completed': <FolderKanban size={14} />,
  'Companies Worked': <Building2 size={14} />,
  'Technologies': <Layers size={14} />,
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-light-bg via-light-surface to-primary-100/60 dark:from-dark-bg dark:via-dark-bg dark:to-primary-950/30" />

      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-primary-400/15 dark:bg-primary-500/8 rounded-full blur-3xl animate-aurora" />
        <div className="absolute bottom-1/4 left-[5%] w-[500px] h-[500px] bg-purple-400/15 dark:bg-purple-500/8 rounded-full blur-3xl animate-aurora-delay" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f110_1px,transparent_1px),linear-gradient(to_bottom,#6366f110_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_70%_at_50%_50%,#000_50%,transparent_110%)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text content */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/90 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 border border-primary-200/70 dark:border-primary-800/50 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Greeting + Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold mb-4 tracking-tight leading-tight"
            >
              <span className="block text-gray-500 dark:text-gray-400 text-2xl md:text-3xl font-semibold mb-2 tracking-normal">
                Hi, I'm
              </span>
              <span className="bg-linear-to-r from-primary-600 via-primary-500 to-purple-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-semibold mb-3"
            >
              {profile.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<Download size={18} />}
                href={profile.resumeUrl}
                download
                className="shadow-lg shadow-primary-400/30 hover:shadow-xl hover:shadow-primary-400/40 glow-primary"
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Mail size={18} />}
                href="#contact"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — Floating profile card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow behind the card */}
              <div className="absolute -inset-4 bg-linear-to-br from-primary-400/20 to-purple-400/20 dark:from-primary-500/15 dark:to-purple-500/15 rounded-3xl blur-2xl" />

              {/* Card */}
              <div className="relative bg-light-card/90 dark:bg-dark-card/90 backdrop-blur-xl border border-light-border/60 dark:border-dark-border/60 rounded-3xl p-8 shadow-2xl shadow-primary-200/20 dark:shadow-black/40">

                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {profile.avatarUrl ? (
                      <img
                        src={profile.avatarUrl}
                        alt={profile.name}
                        className="w-36 h-36 rounded-2xl object-cover shadow-lg shadow-primary-400/30"
                      />
                    ) : (
                      <div className="w-36 h-36 rounded-2xl bg-linear-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-400/30">
                        <span className="text-white text-3xl font-bold tracking-tight">RR</span>
                      </div>
                    )}
                    {/* Active indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full ring-2 ring-light-card dark:ring-dark-card flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Name + title */}
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{profile.name}</h2>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{profile.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block" />
                    Hyderabad, India
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-light-border/60 dark:border-dark-border/60 mb-5" />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-2 p-2.5 bg-light-surface dark:bg-gray-800/50 rounded-xl border border-light-border/40 dark:border-gray-700/40"
                    >
                      <div className="text-primary-500 dark:text-primary-400 shrink-0">
                        {statIcons[stat.label]}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-gray-900 dark:text-white leading-none">{stat.value}</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 truncate mt-0.5">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-xs font-medium mb-2 uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
