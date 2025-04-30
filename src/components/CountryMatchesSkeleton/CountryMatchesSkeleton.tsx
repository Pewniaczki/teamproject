export const CountryMatchesSkeleton = () => {
  return (
    <div className="mb-1 w-full">
      <div className="flex w-full max-w-[var(--country-list-MaxWidth)] min-w-[var(--country-list-MinWidth)] items-center justify-between rounded-sm bg-[var(--color-grey-60)] px-2 py-4">
        <div className="flex items-center gap-6">
          <div className="h-7 w-7 animate-pulse rounded-full bg-[var(--color-grey-50)]" />
          <div className="h-7 w-32 animate-pulse rounded-md bg-[var(--color-grey-50)]" />
        </div>
        <div className="flex items-center gap-4">
          <div className="h-7 w-[2ch] animate-pulse rounded-md bg-[var(--color-grey-50)]" />
          <div className="h-5 w-5 animate-pulse rounded-sm bg-[var(--color-grey-50)]" />
        </div>
      </div>
    </div>
  );
};
