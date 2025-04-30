import { Match } from '../../types/countryMatchesTypes';
import { CurrentMatchCard } from '../CurrentMatchCard/CurrentMatchCard';
import { CurrentMatchCardSkeleton } from '../CurrentMatchCardSkeleton/CurrentMatchCardSkeleton';

type Props = {
  matches: Match[];
};

export const CurrentMatches: React.FC<Props> = ({ matches }) => {
  return (
    <div className="no-scrollbar flex w-full max-w-175 flex-wrap justify-center gap-2 overflow-x-auto lg:flex-col">
      <CurrentMatchCardSkeleton />
      {matches.map((match) => (
        <CurrentMatchCard match={match} key={match.match_info.match_id} />
      ))}
    </div>
  );
};
