import { Match } from '../../types/countryMatchesTypes';
import { CountryMatches } from '../CountryMatches/CountryMatches';
import { CountryMatchesSkeleton } from '../CountryMatchesSkeleton/CountryMatchesSkeleton';

type CountryMatchesListProps = {
  data?: Record<string, Match[]>;
  isLoading?: boolean;
};
export const CountryMatchesList = ({
  data,
  isLoading,
}: CountryMatchesListProps) => {
  if (isLoading) {
    return (
      <div className="mb-3.5 lg:w-full">
        {[...Array(3)].map((_, index) => (
          <CountryMatchesSkeleton key={index} />
        ))}
      </div>
    );
  }
  return (
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
  );
};
