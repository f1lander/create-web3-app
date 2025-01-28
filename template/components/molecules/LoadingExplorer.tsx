import CardSkeleton from '@/components/molecules/CardSkeleton';
import { cn } from '@/lib/utils';
export default function LoadingExplorer({
  className = 'mt-16',
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        'grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
        className,
      )}
    >
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
}
