import { NavbarItemType } from '../types/navbarItemType';

import MatchesIcon from '../assets/icons/time.svg?react';
import LeaguesIcon from '../assets/icons/cup.svg?react';
import FavouritesIcon from '../assets/icons/star.svg?react';
import RatesIcon from '../assets/icons/rates.svg?react';
import ProfileIcon from '../assets/icons/profile.svg?react';
import SettingsIcon from '../assets/icons/settings.svg?react';
import Log_outIcon from '../assets/icons/log_out.svg?react';

export const navbarItems: NavbarItemType[] = [
  {
    text: 'Matches',
    icon: MatchesIcon,
    link: '#',
  },
  {
    text: 'Leagues',
    icon: LeaguesIcon,
    link: '#',
  },
  {
    text: 'Favourites',
    icon: FavouritesIcon,
    link: '#',
  },
  {
    text: 'Rates',
    icon: RatesIcon,
    link: '#',
  },
  {
    text: 'Profile',
    icon: ProfileIcon,
    link: '#',
  },
  {
    text: 'Settings',
    icon: SettingsIcon,
    link: '#',
  },
  {
    text: 'Log out',
    icon: Log_outIcon,
    link: '#',
  },
];
