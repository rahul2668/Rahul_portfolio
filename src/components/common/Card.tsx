import { cn } from '../../utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = true, glass = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-2xl p-5',
        glass
          ? 'glass'
          : 'bg-light-card dark:bg-dark-card border border-light-border/80 dark:border-dark-border/80',
        hover && 'transition-all duration-300 hover:shadow-xl hover:shadow-primary-200/40 dark:hover:shadow-black/30 hover:-translate-y-1 hover:border-primary-200/60 dark:hover:border-primary-800/40 hover:ring-1 hover:ring-primary-200/40 dark:hover:ring-primary-800/30',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
