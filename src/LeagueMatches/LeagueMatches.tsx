import { useLocation, useNavigate } from 'react-router-dom';
import { Match } from '../types/countryMatchesTypes';
import { MatchItem } from '../components/MatchItem';

type MatchInfo = Match['match_info'];

export const LeagueMatches: React.FC = () => {
  const location = useLocation();

  const match_info = location.state as MatchInfo;
  const navigate = useNavigate();

  return (
    <div className='p-13'>
      <button className="rounded-md border-1 border-[var(--color-grey-30)] bg-[var(--color-grey-70)] px-4 py-2 text-sm font-medium text-[var(--color-grey-20)] transition-colors hover:bg-[var(--color-secondary)] active:scale-95" onClick={() => navigate(-1)}>Go back</button>
      <MatchItem match_info={match_info} />
    </div>
  );
};
