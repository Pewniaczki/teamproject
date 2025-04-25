import SoccerBall from '../../assets/icons/soccer-ball.svg';
import { useNavigate } from 'react-router-dom';
import { Match } from '../../types/countryMatchesTypes';

type Props = {
  matches: Match[];
};

export const CurrentMatches: React.FC<Props> = ({ matches }) => {
  const navigate = useNavigate();

  return (
    <div className="no-scrollbar flex w-full max-w-175 flex-wrap justify-center gap-2 overflow-x-auto lg:flex-col">
      {matches.map((match, index) => (
        <div
          onClick={() =>
            navigate('/current_match', {
              state: { match },
            })
          }
          key={index}
          className="flex shrink-0 flex-col items-center justify-center gap-2 rounded-sm bg-[var(--color-grey-70)] px-4 py-2 text-center text-[var(--color-grey-20)] lg:flex-row lg:justify-between"
        >
          <div className="flex items-start justify-center lg:gap-1">
            {
              <img
                src={match.match_info.home_team_logo}
                alt={match.match_info.home_team}
                className="h-4 w-4 lg:h-7 lg:w-7 lg:translate-y-[50%]"
              />
            }

            <img
              src={SoccerBall}
              alt="soccer ball"
              className="h-8 w-8 lg:h-14 lg:w-14"
            />
            {
              <img
                src={match.match_info.away_team_logo}
                alt={match.match_info.away_team}
                className="h-4 w-4 lg:h-7 lg:w-7 lg:translate-y-[50%]"
              />
            }
          </div>

          <div className="flex flex-col text-sm leading-3.5 font-medium lg:flex-row lg:gap-4">
            <span>
              {match.match_info.date_time
                .split('T')[1]
                .split(':')
                .slice(0, 2)
                .join(':')}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
