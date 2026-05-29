import { cn } from '../../utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  label,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      {label && (
        <p className={cn(
          'text-xs font-bold uppercase tracking-[0.2em] text-primary-500 dark:text-primary-400 mb-3',
          align === 'center' && 'text-center'
        )}>
          {label}
        </p>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold mb-3 bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-400 bg-clip-text text-transparent',
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-base text-gray-500 dark:text-gray-400',
          align === 'center' && 'max-w-xl mx-auto'
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        'h-1 rounded-full mt-5 bg-linear-to-r from-primary-500 to-purple-500',
        align === 'center' ? 'w-16 mx-auto' : 'w-16'
      )} />
    </div>
  );
}
