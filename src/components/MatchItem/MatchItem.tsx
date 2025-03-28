import { Match } from '../../types/countryMatchesTypes';
// import { LastMatch } from '../LastMatch';
import style from './MatchItem.module.scss';

type Props = {
  match: Match;
};

export const MatchItem: React.FC<Props> = ({ match }) => {
  const { match_info } = match;
  return (
    <>
      <table className={style.match}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>W</th>
            <th>Last 5 matches</th>
            <th>Mid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.match__time}>
              {new Date(match_info.date_time).toLocaleTimeString('pl-PL', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </td>
            <td>
              <div className={style.match__container}>
                <img
                  className={style.match__container__logo}
                  alt="team logo"
                  src={match_info.home_team_logo}
                />
                <p className={style.match__container__name}>{match_info.home_team}</p>
              </div>
            </td>
            <td>{match_info.home_wins_probability}</td>
            <td>
              {/* <span>
                {match_info.home_team_last_five_results.map((match) => (
                  <LastMatch key={match} match={match} />
                ))}
              </span> */}
            </td>
            <td>{match_info.home_score}</td>
          </tr>

          <tr>
            <td>{'\u2014'}</td>
            <td>
              <div className={style.match__container}>
                <img
                  className={style.match__container__logo}
                  alt="team logo"
                  src={match_info.away_team_logo}
                />
                <p className={style.match__container__name}>{match_info.away_team}</p>
              </div>
            </td>
            <td>{match_info.away_wins_probability}</td>
            <td>
              {/* <span>
                {match_info.away_team_last_five_results.map((match) => (
                  <LastMatch key={match} match={match} />
                ))}
              </span> */}
            </td>
            <td>{match_info.away_score}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
