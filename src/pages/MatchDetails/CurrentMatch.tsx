import { useLocation, useNavigate } from 'react-router-dom';
import { CurrentMatchType } from '../../types/countryMatchesTypes';
import styles from './CurrentMatch.module.scss';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
import { CurrentDetails } from '../../components/CurrentDetails/CurrentDetails';

export const CurrentMatch: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const current: CurrentMatchType = location.state.match;
  const menuItems = ['Details', 'Team composition', 'Grid', 'Matches'] as const;
  const [activeElement, setActiveElement] =
    useState<(typeof menuItems)[number]>('Details');
  return (
    <>
      <SearchBar />

      <div className={styles.current}>
        <button className={styles.current__back} onClick={() => navigate(-1)}>
          <img src=".\UI_Elements\arrow_back.svg"></img>
        </button>

        <div className={styles.current__icons}>
          <img src=".\UI_Elements\bell.svg" alt="bell image" />

          <img src=".\UI_Elements\star.svg" alt="star image" />
        </div>

        <div className={styles.current__teams}>
          <div className={styles.current__teams_item}>
            <img
              className={styles.current__teams_item_logo}
              src={current.teams[0].icon}
              alt="team icon"
            />
            <p className={styles.current__teams_item_name}>
              {current.teams[0].name}
            </p>
          </div>

          <div className={styles.current__time}>
            <p className={styles.current__time_item}>{current.time}</p>
            <p className={styles.current__time_item}>{current.day}</p>
          </div>

          <div className={styles.current__teams_item}>
            <img
              className={styles.current__teams_item_logo}
              src={current.teams[1].icon}
              alt="team icon"
            />
            <p className={styles.current__teams_item_name}>
              {current.teams[1].name}
            </p>
          </div>
        </div>

        <div className={styles.current__menu}>
          {menuItems.map((item) => (
            <p
              onClick={() => setActiveElement(item)}
              className={`${styles.current__menu_item} ${activeElement === item && styles.active}`}
              key={item}
            >
              {item}
            </p>
          ))}
        </div>

        {activeElement === 'Details' && <CurrentDetails />}
      </div>
    </>
  );
};
