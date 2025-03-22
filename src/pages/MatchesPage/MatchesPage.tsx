import { useEffect, useState } from 'react';
import { CountryMatches } from '../../components/CountryMatches';
import { CurrentMatches } from '../../components/CurrentMatches/CurrentMatches';
import { countryMatches } from '../../data/CountryMatches';
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

export const MatchesPage: React.FC = () => {
  const [matches, setMatches] = useState();
  const { isDesktop } = useBreakPointStore();

  useBreakPointListener();

  useEffect(() => {
    const getMatches = async () => {
      const response =await axios.get("/api/matches");
      
      if (response.data) {
        setMatches(response.data);
      }
    };

    getMatches()
      .then((r) => console.log(r))
      .catch((e) => console.error(e));

    console.log('matches', matches);
  }, []);
  return (
    <>
      {isDesktop && <SearchBar />}
      <TopMenu />
      {isDesktop && <Options />}

      <div className={style.match}>
        <div className={style.match__list}>
          <CurrentMatches />

          <div className={style.match__countries}>
            {countryMatches.map((countryMatch) => {
              const { countryFlag, countryName, leagues } = countryMatch;
              return (
                <CountryMatches
                  key={countryFlag}
                  countryFlag={countryFlag}
                  countryName={countryName}
                  leagues={leagues}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
