import { Match } from '../../types/countryMatchesTypes';
import { LastMatch } from '../LastMatch';

type Props = {
  match: Match;
};

export const MatchItem: React.FC<Props> = ({ match }) => {
  const { match_info } = match;
  return (
    <>
      <table className='text-sm text-[var(--color-grey-20)] p-1.5 text-center w-full font-extralight mb-1.5 not-italic border-collapse'>
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
            <td className='font-medium'>
              {new Date(match_info.date_time).toLocaleTimeString('pl-PL', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </td>
            <td>
              <div className='flex gap-1 w-20'>
                <img
                  className='w-3.5 h-3.5 rounded-[50%]'
                  alt="team logo"
                  src={match_info.home_team_logo}
                />
                <p className='whitespace-nowrap leading-3.5 font-medium'>
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
              <div className='flex gap-1 w-20'>
                <img
                  className='w-3.5 h-3.5 rounded-[50%]'
                  alt="team logo"
                  src={match_info.away_team_logo}
                />
                <p className='whitespace-nowrap leading-3.5 font-medium'>
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
