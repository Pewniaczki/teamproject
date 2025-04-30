import { Match } from '../../types/countryMatchesTypes';
import { CurrentMatchCard } from '../CurrentMatchCard/CurrentMatchCard';
import { CurrentMatchCardSkeleton } from '../CurrentMatchCardSkeleton/CurrentMatchCardSkeleton';

type Props = {
  matches: Match[];
  isLoading?: boolean;
};

export const CurrentMatches: React.FC<Props> = ({ matches, isLoading }) => {
  const containerClass =
    'no-scrollbar flex w-full max-w-175 flex-wrap justify-center gap-2 overflow-x-auto lg:flex-col';
  if (isLoading) {
    return (
      <div className={containerClass}>
        {[...Array(10)].map((_, index) => (
          <CurrentMatchCardSkeleton key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className={containerClass}>
      {matches.map((match) => (
        <CurrentMatchCard match={match} key={match.match_info.match_id} />
      ))}
    </div>
  );
};
