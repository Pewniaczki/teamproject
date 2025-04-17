import styles from './CurrentMatches.module.scss';
import SoccerBall from '../../assets/icons/soccer-ball.svg';
// import BarcelonaIcon from '../../assets/icons/barselonaSpain.svg';
// import ManchesterIcon from '../../assets/icons/ManchesterLondon.svg';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Match } from '../../types/countryMatchesTypes';

type Props = {
  matches: Match[];
};

export const CurrentMatches: React.FC<Props> = ({ matches }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {matches.map((match, index) => (
        <div
          onClick={() =>
            navigate('/current_match', {
              state: { match },
            })
          }
          key={index}
          className={styles.card}
        >
          <div className={styles.teams}>
            {
              <img
                src={match.match_info.home_team_logo}
                alt={match.match_info.home_team}
                className={styles.icon}
              />
            }

            <img
              src={SoccerBall}
              alt="soccer ball"
              className={styles.icon__soccer}
            />
            {
              <img
                src={match.match_info.away_team_logo}
                alt={match.match_info.away_team}
                className={styles.icon}
              />
            }
          </div>

          <div className={styles.info}>
            <span>{match.match_info.date_time.split('T')[1].split(':').slice(0,2).join(':')}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
