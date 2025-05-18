export type League = {
    competition_id: number;
    name: string;
    logo: string;
    country: string;
  };
  
  export type CountryType = {
    countryName: string;
    country_flag: string;
    leagues: League[];
  };