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

export const MatchesPage: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [data, setData] = useState<Record<string, Match[]> | null>(null);
  const { isDesktop } = useBreakPointStore();
  const { date } = useDateStore();

  useBreakPointListener();

  useEffect(() => {
    const getMatches = async () => {
      const response =
        date !== ''
          ? await axios.get(`/api/matches?date=${date}`)
          : await axios.get(`/api/matches`);

      if (response.data) {
        const matches = Object.values(response.data).flatMap(
          (countryMatches) => countryMatches
        ) as Match[];

        setMatches(matches);
        setData(response.data);
      }
    };
    getMatches();
  }, [date]);
  return (
    <>
      {isDesktop && <SearchBar />}
      <TopMenu />
      <Options />

      <div className={style.match}>
        <div className={style.match__list}>
          <CurrentMatches matches={matches} />

          <div className={style.match__countries}>
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
