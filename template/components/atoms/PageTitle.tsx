import { cn } from '@/lib/utils';

export const PageTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'relative z-20 bg-gradient-to-b from-neutral-500 to-neutral-900 bg-clip-text py-4 text-3xl font-bold text-transparent dark:from-gray-200 dark:to-gray-400 lg:text-4xl',
        className,
      )}
    >
      {children}
    </p>
  );
};

export const PageSubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="relative z-20 bg-gradient-to-b from-neutral-500 to-neutral-900 bg-clip-text py-4 text-xl font-bold text-transparent dark:from-gray-200 dark:to-gray-400 lg:text-2xl">
      {children}
    </p>
  );
};
