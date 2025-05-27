export const CountrySkeleton = () => {
  return (
    <div className="w-full animate-pulse place-items-center p-4">
      <div className="flex w-full max-w-[var(--country-list-MaxWidth)] min-w-[var(--country-list-MinWidth)] items-center justify-between rounded-sm bg-[var(--color-grey-60)] px-2 py-4">
        <div className="flex items-center gap-6">
          <div className="h-6 w-6 rounded-full bg-[var(--color-grey-40)]" />
          <div className="h-7 w-40 rounded bg-[var(--color-grey-40)]" />
        </div>
        <div className="flex items-center gap-4">
          <div className="h-7 w-6 rounded bg-[var(--color-grey-40)]" />
          <div className="h-6 w-5 bg-[var(--color-grey-40)]" />
        </div>
      </div>
    </div>
  );
};
