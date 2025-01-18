import { useState } from 'react';
import { League } from '../../types/countryMatchesTypes';
import { MatchesList } from '../MatchesList/MatchesList';
import style from './LeagueItem.module.scss';

type Props = {
  league: League;
};

export const LeagueItem: React.FC<Props> = ({ league }) => {
  const { leagueLogo, leagueName, matches } = league;
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className={style.league}>
      <div className={style.league__container}>
        <div className={style.league__containerLeft}>
          <img className={style.league__logo} src={leagueLogo} />
          <p className={style.league__name}>{leagueName}</p>
        </div>
        <img
          className={style.league__favoriteIcon}
          onClick={() => setIsFavorite((prev) => !prev)}
          src={
            isFavorite
              ? './UI_Elements/star_fill.svg'
              : './UI_Elements/star.svg'
          }
        />
      </div>

      <div className={style.league__matches_list}>
        <MatchesList matches={matches} />
      </div>
    </div>
  );
};
