import { Match } from '../../types/countryMatchesTypes';
import { MatchItem } from '../MatchItem';

type Props = {
  details: Match[];
};

export const MatchesList: React.FC<Props> = ({ details }) => {
  return (
    <div className='pb-1'>
      {details.map((detail) => (
        <MatchItem key={detail.match_info.match_id} match={detail} />
      ))}
    </div>
  );
};
