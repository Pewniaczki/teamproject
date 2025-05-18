import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CountryType } from '../../types/countyLeaguesTypes';
import { LoadingStateType } from '../../types/LoadingStateTypes';
import { Country } from '../../components/CountryLeagues/Country';
const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;

export const LeaguesPage: React.FC = () => {
  const [countries, setCountries] = useState<CountryType[] | []>([]);
  const [loadingState, setLoadingState] = useState<LoadingStateType>('pending');

  useEffect(() => {
    const getCountries = async () => {
      setLoadingState('pending');
      try {
        const response = await axios(`${BACKEND}/api/competitions/`);

        if (response.data) {
          const mappedData = Object.entries(response.data).map(
            ([key, value]) => {
              const typedValue = value as { country_flag: string; leagues: any };
              return {
                countryName: key,
                country_flag: typedValue.country_flag,
                leagues: typedValue.leagues,
              };
            }
          );
          console.log('mapped', mappedData)
          setCountries(mappedData.sort((a,b) => a.countryName.localeCompare(b.countryName)));
          setLoadingState('fetch');
        }
      } catch (error) {
        console.error(error);
        console.log('Can not fetch country leagues');
        setLoadingState('error');
      }
    };

    getCountries();
  }, []);

  return (
    <div>
      {loadingState !== 'pending' &&
        !!countries.length &&
        countries.map((country) => (
          <Country key={country.countryName} country={country} />
        ))}
    </div>
  );
};
