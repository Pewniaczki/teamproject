import { Match } from '../../types/countryMatchesTypes';
import { MatchItem } from '../MatchItem';
import style from './MatchesList.module.scss';

type Props = {
  details: Match[];
};

export const MatchesList: React.FC<Props> = ({ details }) => {
  return (
    <div className={style.matches__list}>
      {details.map((detail) => (
        <MatchItem key={detail.match_info.match_id} match={detail} />
      ))}
    </div>
  );
};
