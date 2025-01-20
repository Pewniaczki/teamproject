import styles from './Navbar.module.scss';
import MatchesIcon from '../../assets/icons/time.svg?react';
import LeaguesIcon from '../../assets/icons/cup.svg?react';
import FavouritesIcon from '../../assets/icons/star.svg?react';
import RatesIcon from '../../assets/icons/rates.svg?react';
import ProfileIcon from '../../assets/icons/profile.svg?react';
import { NavbarItem } from '../NavbarItem';
import { useState } from 'react';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('Matches');

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <nav role="menubar" className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <NavbarItem
          text="Matches"
          icon={<MatchesIcon />}
          active={activeItem === 'Matches'}
          link="#"
          onClick={() => handleItemClick('Matches')}
        />
        <NavbarItem
          text="Leagues"
          icon={<LeaguesIcon />}
          active={activeItem === 'Leagues'}
          link="#"
          onClick={() => handleItemClick('Leagues')}
        />
        <NavbarItem
          text="Favourites"
          icon={<FavouritesIcon />}
          active={activeItem === 'Favourites'}
          link="#"
          onClick={() => handleItemClick('Favourites')}
        />
        <NavbarItem
          text="Rates"
          icon={<RatesIcon />}
          active={activeItem === 'Rates'}
          link="#"
          onClick={() => handleItemClick('Rates')}
        />
        <NavbarItem
          text="Profile"
          icon={<ProfileIcon />}
          active={activeItem === 'Profile'}
          link="#"
          onClick={() => handleItemClick('Profile')}
        />
      </div>
    </nav>
  );
};
