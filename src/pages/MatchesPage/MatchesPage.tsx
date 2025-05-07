import { useEffect, useMemo, useState } from 'react';
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
import { CountryMatchesList } from '../../components/CountryMatchesList/CountryMatchesList';
import { debounce } from 'lodash';
import axios from 'axios';

const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;

type SearchStateType = 'fetch' | 'pending' | 'error';
type SearchDataType = {
  team_id: number;
  code: string;
  name: string;
  logo: string;
  league: number;
  country: string;
};

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

  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState<SearchDataType[]>([]);
  const [searchState, setSearchState] = useState<SearchStateType>('pending');

  useEffect(() => {
    console.log('wchodzi');

    const getSearchData = async () => {
      setSearchState('pending');
      try {
        const response =
          searchQuery !== '' &&
          (await axios(`${BACKEND}/api/search/?query=${searchQuery}`));

        if (response !== false && response.data) {
          setSearchData(response.data);
          setSearchState('fetch');
        }
      } catch (error) {
        setSearchState('error');
        console.error({ message: 'Error in fetching searchData', error });
      }
    };

    const debouncedData = debounce(() => {
      getSearchData();
    }, 700);

    debouncedData();

    return () => debouncedData.cancel();
  }, [searchQuery]);

  return (
    <>
      {isDesktop && (
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      )}
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

          {searchState === 'pending' && searchQuery !== '' && <p>loading...</p>}

          {searchState === 'fetch' && searchQuery !== '' && (
            <div className="flex w-full flex-col">
              {searchData.map((item) => (
                <div className="m-auto mb-1.5 flex w-75 lg:w-100 cursor-pointer hover:border-1 hover:border-[var(--color-grey-30)] shrink-0 flex-col items-center justify-center gap-2 rounded-sm bg-[var(--color-grey-70)] px-4 py-2 text-center text-[var(--color-grey-20)] lg:flex-row lg:justify-between">
                  <p className="p-1.5 text-2xl leading-20 lg:text-3xl">{`${item.name}`}</p>
                  <img
                    className="my-auto h-7 w-7 lg:h-20 lg:w-20"
                    src={`${item.logo}`}
                  />
                </div>
              ))}
            </div>
          )}

          {!isError && !searchQuery && (
            <>
              <CurrentMatches matches={matches} isLoading={isPending} />
              <CountryMatchesList data={data} isLoading={isPending} />
            </>
          )}
        </div>
      </div>
    </>
  );
};
