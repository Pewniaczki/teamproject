import { CountryMatches } from '../../components/CountryMatches';
import { countryMatches } from '../../data/CountryMatches';

export const HomePage = () => {
  return (
    <div>
      <p>Welcome to the Home Page</p>
      <div className='home'>
        {countryMatches.map((countryMatch) => {
          const { countryFlag, countryName, leagues } = countryMatch;
          return <CountryMatches key={countryFlag} countryFlag={countryFlag} countryName={countryName} leagues={leagues} />;
        })}
      </div>
    </div>
  );
};
