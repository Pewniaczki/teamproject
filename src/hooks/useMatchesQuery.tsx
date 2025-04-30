import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Match } from '../types/countryMatchesTypes';

const BACKEND_URL = import.meta.env.VITE_BACKEND_PEWNIACZKI;

const fetchMatches = async (date: string) => {
  const url =
    date !== ''
      ? `${BACKEND_URL}/api/matches?date=${date}`
      : `${BACKEND_URL}/api/matches`;

  const { data } = await axios.get(url);
  return data as Record<string, Match[]>;
};

export const useMatchesQuery = (date: string) => {
  return useQuery({
    queryKey: ['matches', date],
    queryFn: () => fetchMatches(date),
    staleTime: 1000 * 60 * 5,
  });
};
