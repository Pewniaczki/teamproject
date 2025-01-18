import { Match } from '../../types/countryMatchesTypes';
import { LastMatch } from '../LastMatch';
import style from './MatchItem.module.scss'

type Props = {
  match: Match;
};

export const MatchItem: React.FC<Props> = ({ match }) => {
  const { time, teamA, teamB } = match;
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
            <td>{new Date(time).toLocaleTimeString().split(':').splice(0,2).join(':')}</td>
            <td>
              <div className={style.match__container}>
                <img className={style.match__container__logo} alt="team logo" src={teamA.teamLogo} />
                <p className={style.match__container__name}>{teamA.teamName}</p>
              </div>
            </td>
            <td>{teamA.winTime}</td>
            <td>
              <span>
                {teamA.last5Matches.map((match) => (
                  <LastMatch key={match.id} match={match} />
                ))}
              </span>
            </td>
            <td>{teamA.mid}</td>
          </tr>

          <tr>
            <td>{'\u2014'}</td>
            <td>
            <div className={style.match__container}>
                <img className={style.match__container__logo} alt="team logo" src={teamB.teamLogo} />
                <p className={style.match__container__name}>{teamB.teamName}</p>
              </div>
            </td>
            <td>{teamB.winTime}</td>
            <td>
              <span>
                {teamB.last5Matches.map((match) => (
                  <LastMatch key={match.id} match={match} />
                ))}
              </span>
            </td>
            <td>{teamB.mid}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
