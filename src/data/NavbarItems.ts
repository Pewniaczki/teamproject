import { NavbarItemType } from '../types/navbarItemType';

import MatchesIcon from '../assets/icons/time.svg?react';
import LeaguesIcon from '../assets/icons/cup.svg?react';
import FavouritesIcon from '../assets/icons/star.svg?react';
import RatesIcon from '../assets/icons/rates.svg?react';
import ProfileIcon from '../assets/icons/profile.svg?react';
import SettingsIcon from '../assets/icons/settings.svg?react';
import Log_outIcon from '../assets/icons/log_out.svg?react';
import Log_inIcon from '../assets/icons/log_in.svg?react';

export const navbarItems: NavbarItemType[] = [
  {
    text: 'Matches',
    icon: MatchesIcon,
    link: '#/matches',
  },
  {
    text: 'Leagues',
    icon: LeaguesIcon,
    link: '#/league',
  },
  {
    text: 'Favourites',
    icon: FavouritesIcon,
    link: '#/favourite',
  },
  {
    text: 'Rates',
    icon: RatesIcon,
    link: '#',
  },
  {
    text: 'Profile',
    icon: ProfileIcon,
    link: '#/profile',
  },
  {
    text: 'Settings',
    icon: SettingsIcon,
    link: '#/settings',
  },
  {
    text: 'Log out',
    icon: Log_outIcon,
  },
  {
    text: 'Log in',
    icon: Log_inIcon,
    link: '#/login',
  },
];
