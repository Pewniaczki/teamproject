import styles from './CurrentMatches.module.scss';
import SoccerBall from '../../assets/icons/soccer-ball.svg';
import BarcelonaIcon from '../../assets/icons/barselonaSpain.svg'; 
import ManchesterIcon from '../../assets/icons/ManchesterLondon.svg';

export const CurrentMatches = () => {
  const matches = [
    {
      teams: [
        { name: 'Barcelona', icon: BarcelonaIcon },
        { name: 'Manchester', icon: ManchesterIcon },
      ],
      time: '20:45',
      day: 'Today',
    },
    {
      teams: [
        { name: 'Barcelona', icon: BarcelonaIcon },
        { name: 'Manchester', icon: ManchesterIcon },
      ],
      time: '22:30',
      day: 'Today',
    },
    {
      teams: [
        { name: 'Barcelona', icon: BarcelonaIcon },
        { name: 'Manchester', icon: ManchesterIcon },
      ],
      time: '19:45',
      day: 'Tomorrow',
    },
    {
      teams: [
        { name: 'Barcelona', icon: BarcelonaIcon },
        { name: 'Manchester', icon: ManchesterIcon },
      ],
      time: '21:15',
      day: 'Tomorrow',
    },
  ];

  return (
    <div className={styles.container}>
      {matches.map((match, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.teams}>
            {match.teams[0].icon ? (
              <img
                src={match.teams[0].icon}
                alt={match.teams[0].name}
                className={styles.icon}
              />
            ) : (
              <span>{match.teams[0].name}</span>
            )}
            <img src={SoccerBall} alt="soccer ball" className={styles.icon__soccer} />
            {match.teams[1].icon ? (
              <img
                src={match.teams[1].icon}
                alt={match.teams[1].name}
                className={styles.icon}
              />
            ) : (
              <span>{match.teams[1].name}</span>
            )}
          </div>
          <div className={styles.info}>
            <span>{match.day}</span>
            <span>{match.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
