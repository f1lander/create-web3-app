export default function CardSkeleton({ className = '' }) {
  return (
    <div
      className={`h-[330px] w-full animate-pulse rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      <div className="mb-4 h-4 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2 h-4 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2 h-4 w-2/3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-4 w-1/3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
}

export function TrapDetailSkeletonCardLayout() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full">
        <CardSkeleton />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <CardSkeleton />
        </div>
        <div className="w-1/2">
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
}
