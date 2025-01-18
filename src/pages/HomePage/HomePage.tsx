import { CountryMatches } from '../../components/CountryMatches';
import { countryMatches } from '../../data/CountryMatches';
import style from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={style.home}>
      <div className={style.home__list}>
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
  );
};
