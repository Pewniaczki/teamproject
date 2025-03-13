import { useEffect, useState } from 'react';
import { CountryMatches } from '../../components/CountryMatches';
import { CurrentMatches } from '../../components/CurrentMatches/CurrentMatches';
import { countryMatches } from '../../data/CountryMatches';
import style from './MatchesPage.module.scss';
import { apiLogin, apiPewniaczki } from '../../axiosConfig';
import { TopMenu } from '../../components/TopMenu/TopMenu';

const BACKEND = import.meta.env.VITE_BACKEND_URL;

export const MatchesPage: React.FC = () => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    const getMatches = async () => {
      const response = await apiPewniaczki('/matches');
      if (response.data) {
        setMatches(response.data)
      }
    };

    getMatches()
      .then((r) => console.log(r))
      .catch((e) => console.error(e));

      console.log('matches', matches)
  }, []);
  return (
    <>
    <TopMenu />
    
      <div className={style.match}>
        <div className={style.match__list}>
          <CurrentMatches />

          <div>
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
