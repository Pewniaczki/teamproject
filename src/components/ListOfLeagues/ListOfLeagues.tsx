import { League } from "../../types/countryMatchesTypes";
import { LeagueItem } from "../LeagueItem";
import style from './ListOfLeagues.module.scss';


type Props ={
  leagues: League[];
}

export const ListOfLeagues: React.FC<Props> = ({ leagues }) => {
    
  return (
    <div className={style.list_of_leagues}>
      {leagues.map(league => (
        <LeagueItem key={league.leagueLogo} league={league} />
      ))}
    </div>
  );
};
