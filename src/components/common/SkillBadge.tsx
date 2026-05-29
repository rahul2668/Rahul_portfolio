import { cn } from '../../utils';

interface SkillBadgeProps {
  name: string;
  level?: number;
  className?: string;
}

export function SkillBadge({ name, level, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        'group relative px-3 py-1.5 bg-light-surface dark:bg-gray-800/60 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300',
        'border border-light-border/70 dark:border-gray-700/60 hover:border-primary-300 dark:hover:border-primary-700',
        'transition-all duration-200 hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-900/20 dark:hover:text-primary-300 hover:shadow-sm hover:shadow-primary-100 dark:hover:shadow-transparent',
        className
      )}
    >
      <span>{name}</span>
      {level && (
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-primary-500/60 rounded-full"
          style={{ width: `${level}%` }}
        />
      )}
    </div>
  );
}
