import { useLocation, useNavigate } from 'react-router-dom';
import { Match } from '../../types/countryMatchesTypes';
import styles from './CurrentMatch.module.scss';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
import { CurrentDetails } from '../../components/CurrentDetails/CurrentDetails';
import {
  useBreakPointListener,
  useBreakPointStore,
} from '../../zustand/useBreakPoint';
import { useFavouriteMatches } from '../../zustand/useFavouritesMatches';

export const CurrentMatch: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useBreakPointListener();
  const { isDesktop } = useBreakPointStore();
  const current: Match = location.state.match;
  const menuItems = ['Details', 'Team composition', 'Grid', 'Matches'] as const;
  const [activeElement, setActiveElement] =
    useState<(typeof menuItems)[number]>('Details');

  const { setFavourite, favourite } = useFavouriteMatches();

  const includedInFavourite = favourite.includes(current);

  return (
    <>
      {isDesktop && <SearchBar />}

      <div className={styles.current}>
        <div className={styles.current__icons}>
          <button className={styles.current__back} onClick={() => navigate(-1)}>
            <img src=".\UI_Elements\arrow_back.svg"></img>
          </button>

          <div className={styles.current__icons__group}>
            <img src=".\UI_Elements\bell.svg" alt="bell image" />

            <div className={styles.current__icons__fav}>
              <img
                onClick={() => setFavourite(current)}
                src=".\UI_Elements\star.svg"
                alt="star image"
              />

              {includedInFavourite && <p className={styles.current__icons__fav_text}>included</p>}
            </div>
          </div>
        </div>

        <div className={styles.current__teams}>
          <div className={styles.current__teams_item}>
            <img
              className={styles.current__teams_item_logo}
              src={current.match_info.home_team_logo}
              alt="team icon"
            />
            <p className={styles.current__teams_item_name}>
              {current.match_info.home_team}
            </p>
          </div>

          <div className={styles.current__time}>
            <p className={styles.current__time_item}>
              {current.match_info.date_time
                .split('T')[1]
                .split(':')
                .slice(0, 2)
                .join(':')}
            </p>
            <p className={styles.current__time_item}>Today</p>
          </div>

          <div className={styles.current__teams_item}>
            <img
              className={styles.current__teams_item_logo}
              src={current.match_info.away_team_logo}
              alt="team icon"
            />
            <p className={styles.current__teams_item_name}>
              {current.match_info.away_team}
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
