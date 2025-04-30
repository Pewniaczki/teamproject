export const CurrentMatchCardSkeleton = () => {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-2 rounded-sm bg-[var(--color-grey-70)] px-4 py-2 text-center text-[var(--color-grey-20)] lg:flex-row lg:justify-between">
      <div className="flex items-start justify-center lg:gap-1">
        <div className="h-4 w-4 animate-pulse rounded-full bg-[var(--color-grey-40)] lg:h-7 lg:w-7 lg:translate-y-[50%]" />
        <div className="h-8 w-8 animate-pulse rounded-full bg-[var(--color-grey-50)] lg:h-14 lg:w-14" />
        <div className="h-4 w-4 animate-pulse rounded-full bg-[var(--color-grey-40)] lg:h-7 lg:w-7 lg:translate-y-[50%]" />
      </div>

      <div className="flex animate-pulse flex-col text-sm leading-3.5 font-medium lg:flex-row lg:gap-4">
        <div className="h-4 w-[4ch] rounded bg-[var(--color-grey-40)]" />
      </div>
    </div>
  );
};
