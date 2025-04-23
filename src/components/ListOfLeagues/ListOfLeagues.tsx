import { Match } from "../../types/countryMatchesTypes";
import style from './ListOfLeagues.module.scss';
import { MatchesList } from "../MatchesList";


type Props ={
  details: Match[];
}

export const ListOfLeagues: React.FC<Props> = ({ details }) => {
    
  return (
    <div className={style.league}>
      <div className={style.league__container}>
        <div className={style.league__containerLeft}>
          <img className={style.league__logo} src={details[0].competition_logo} />
          <p className={style.league__name}>{details[0].competition}</p>
        </div>
      </div>

      <div className={style.league__matches_list}>
        <MatchesList details={details} />
      </div>
    </div>
  );
};
