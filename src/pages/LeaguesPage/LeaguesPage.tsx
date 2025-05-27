import { Country } from '../../components/CountryLeagues/Country';
import { CountrySkeleton } from '../../components/CountryLeagues/CountrySkeleton';
import { useCountriesQuery } from '../../hooks/useCountriesQuery';

export const LeaguesPage: React.FC = () => {
  const { data: countries, isLoading } = useCountriesQuery();

  if (isLoading) {
    return (
      <div>
        {[...Array(10)].map((_, index) => (
          <CountrySkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      {countries &&
        countries.map((country) => (
          <Country key={country.countryName} country={country} />
        ))}
    </div>
  );
};
