import { useEffect, useState } from 'react';
import { CountryMatches } from '../../components/CountryMatches';
import { CurrentMatches } from '../../components/CurrentMatches/CurrentMatches';
// import { countryMatches } from '../../data/CountryMatches';
import style from './MatchesPage.module.scss';
// import { apiPewniaczki } from '../../axiosConfig';
import { TopMenu } from '../../components/TopMenu/TopMenu';
import { Options } from '../../components/Options/Options';
import {
  useBreakPointListener,
  useBreakPointStore,
} from '../../zustand/useBreakPoint';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import axios from 'axios';
import { Match } from '../../types/countryMatchesTypes';
import { useDateStore } from '../../zustand/useDate';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';

export const MatchesPage: React.FC = () => {
  type LoadingState = 'pending' | 'fetched' | 'error' | '';
  const [matches, setMatches] = useState<Match[]>([]);
  const [data, setData] = useState<Record<string, Match[]> | null>(null);
  const { isDesktop } = useBreakPointStore();
  const { date } = useDateStore();
  const [loadingStatus, setLoadingStatus] = useState<LoadingState>('');
  const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;

  useBreakPointListener();

  useEffect(() => {
    setLoadingStatus('pending');
    try {
      const getMatches = async () => {
        const response =
          date !== ''
            ? await axios.get(`${BACKEND}/api/matches?date=${date}`)
            : await axios.get(`${BACKEND}/api/matches`);

        if (response.data) {
          const matches = Object.values(response.data).flatMap(
            (countryMatches) => countryMatches
          ) as Match[];

          setMatches(matches);
          setData(response.data);
        }
      };
      getMatches().then(() => setLoadingStatus('fetched'));
    } catch (error) {
      console.error('error in fetching matches', error);
      setLoadingStatus('error');
    }
  }, [date]);
  return (
    <>
      {isDesktop && <SearchBar />}
      <TopMenu />
      <Options />

      <div className="flex flex-col p-2 lg:w-full lg:p-2.5">
        <div className="flex h-[calc(100vh-13px)] w-full flex-col justify-start gap-2 lg:h-auto lg:flex-row lg:gap-6">
          {loadingStatus === 'error' && <Error />}

          {loadingStatus === 'pending' && <Loading size={200} />}

          {!matches.length && loadingStatus === 'fetched' && (
            <p className="text-2xl font-normal text-[var(--color-grey-0)]">
              There is no matches today
            </p>
          )}

          {!!matches.length && loadingStatus === 'fetched' && (
            <CurrentMatches matches={matches} />
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
