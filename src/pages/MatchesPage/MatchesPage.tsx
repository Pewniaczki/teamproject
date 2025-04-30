import { useMemo } from 'react';
import { CountryMatches } from '../../components/CountryMatches';
import { CurrentMatches } from '../../components/CurrentMatches/CurrentMatches';
import { TopMenu } from '../../components/TopMenu/TopMenu';
import { Options } from '../../components/Options/Options';
import {
  useBreakPointListener,
  useBreakPointStore,
} from '../../zustand/useBreakPoint';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDateStore } from '../../zustand/useDate';
import { Error } from '../../components/Error/Error';
import { useMatchesQuery } from '../../hooks/useMatchesQuery';

export const MatchesPage: React.FC = () => {
  const { isDesktop } = useBreakPointStore();
  const { date } = useDateStore();
  useBreakPointListener();

  const { data, isPending, isError } = useMatchesQuery(date);

  const matches = useMemo(() => {
    return data
      ? Object.values(data).flatMap((countryMatches) => countryMatches)
      : [];
  }, [data]);

  return (
    <>
      {isDesktop && <SearchBar />}
      <TopMenu />
      <Options />

      <div className="flex flex-col p-2 lg:w-full lg:p-2.5">
        <div className="flex h-[calc(100vh-13px)] w-full flex-col justify-start gap-2 lg:h-auto lg:flex-row lg:gap-6">
          {isError && <Error />}

          {!matches.length && !isPending && !isError && (
            <p className="text-2xl font-normal text-[var(--color-grey-0)]">
              There is no matches today
            </p>
          )}

          {!isError && (
            <CurrentMatches matches={matches} isLoading={isPending} />
          )}

          <div className="mb-3.5 lg:w-full">
            {Object.entries(data || {}).map(([cuntryName, details]) => {
              return (
                <CountryMatches
                  key={cuntryName}
                  countryName={cuntryName}
                  details={details}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
