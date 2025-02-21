import { NavbarItem } from '../types/navbarItemType';

import MatchesIcon from '../assets/icons/time.svg?react';
import LeaguesIcon from '../assets/icons/cup.svg?react';
import FavouritesIcon from '../assets/icons/star.svg?react';
import RatesIcon from '../assets/icons/rates.svg?react';
import ProfileIcon from '../assets/icons/profile.svg?react';

export const navbarItems: NavbarItem[] = [
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
];
