import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CountryType } from '../types/countyLeaguesTypes';

const BACKEND_URL = import.meta.env.VITE_BACKEND_PEWNIACZKI;

const getCountries = async () => {
  const url = `${BACKEND_URL}/api/competitions/`;
  const response = await axios(url);
  if (!response.data) throw new Error('Brak danych z API');

  const mappedData = Object.entries(response.data).map(([key, value]) => {
    const typedValue = value as { country_flag: string; leagues: any };
    return {
      countryName: key,
      country_flag: typedValue.country_flag,
      leagues: typedValue.leagues,
    };
  });

  return mappedData.sort((a, b) => a.countryName.localeCompare(b.countryName));
};

export const useCountriesQuery = () => {
  return useQuery<CountryType[]>({
    queryKey: ['countries'],
    queryFn: getCountries,
    staleTime: 1000 * 60 * 5,
  });
};
