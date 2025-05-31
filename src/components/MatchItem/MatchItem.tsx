import { Match } from '../../types/countryMatchesTypes';
import { LastMatch } from '../LastMatch';

type MatchInfo = Match['match_info'];

type Props = {
  match_info: MatchInfo;
};

export const MatchItem: React.FC<Props> = ({ match_info }) => {
  return (
    <>
      <table className="mb-1.5 w-full border-collapse p-1.5 text-center text-sm font-extralight text-[var(--color-grey-20)] not-italic">
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
            <td className="font-medium">
              {new Date(match_info.date_time).toLocaleTimeString('pl-PL', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </td>
            <td>
              <div className="flex w-20 gap-1">
                <img
                  className="h-3.5 w-3.5 rounded-[50%]"
                  alt="team logo"
                  src={match_info.home_team_logo}
                />
                <p className="leading-3.5 font-medium whitespace-nowrap">
                  {match_info.home_team}
                </p>
              </div>
            </td>
            <td>{match_info.home_wins_probability}</td>
            <td>
              <span>
                {match_info.home_team_last_five_results.map((match, index) => (
                  <LastMatch key={index} match={match} />
                ))}
              </span>
            </td>
            <td>{match_info.home_score}</td>
          </tr>

          <tr>
            <td>{'\u2014'}</td>
            <td>
              <div className="flex w-20 gap-1">
                <img
                  className="h-3.5 w-3.5 rounded-[50%]"
                  alt="team logo"
                  src={match_info.away_team_logo}
                />
                <p className="leading-3.5 font-medium whitespace-nowrap">
                  {match_info.away_team}
                </p>
              </div>
            </td>
            <td>{match_info.away_wins_probability}</td>
            <td>
              <span>
                {match_info.away_team_last_five_results.map((match, index) => (
                  <LastMatch key={index} match={match} />
                ))}
              </span>
            </td>
            <td>{match_info.away_score}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
