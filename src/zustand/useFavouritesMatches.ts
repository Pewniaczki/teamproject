import { create } from 'zustand';
import { Match } from '../types/countryMatchesTypes';

type FavouriteState = {
  favourite: Match[];
  setFavourite: (match: Match) => void;
};

export const useFavouriteMatches = create<FavouriteState>((set, get) => ({
  favourite: JSON.parse(localStorage.getItem('favouriteMatches') || '[]'),

  setFavourite: (match) => {
    const currentFavourite = get().favourite;
    const existInCurrent = currentFavourite.some(
      (item) => item.match_info.match_id === match.match_info.match_id
    );

    if (existInCurrent) return;

    const newFavourites = [...currentFavourite, match];
    set({ favourite: newFavourites });

    localStorage.setItem('favouriteMatches', JSON.stringify(newFavourites));
  },
}));
