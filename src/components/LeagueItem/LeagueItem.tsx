import { League } from '../../types/countryMatchesTypes';
import { MatchesList } from '../MatchesList/MatchesList';
import style from './LeagueItem.module.scss'

type Props = {
  league: League;
};

export const LeagueItem: React.FC<Props> = ({league}) => {
    const {leagueLogo, leagueName, matches} = league;
  return (
    <div className={style.league}>
      <div className={style.league__container}>
        <img className={style.league__logo} src={leagueLogo} />
        <p className={style.league__name}>{leagueName}</p>
      </div>

      <div className={style.league__matches_list}>
        <MatchesList matches={matches} />
      </div>
    </div>
  );
};
