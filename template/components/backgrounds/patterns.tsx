export function DotBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="dots-bg relative min-h-screen w-full bg-white bg-dot-black/[0.1] dark:bg-black dark:bg-dot-white/[0.2]">
      {children}
    </div>
  );
}

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[100dvh] w-full bg-white bg-grid-black/[0.1] dark:bg-black dark:bg-grid-white/[0.2]">
      {children}
    </div>
  );
}
