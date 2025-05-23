import { useState } from 'react';
import { CountryLeague } from './CountryLeague';
import { CountryType } from '../../types/countyLeaguesTypes';

type Props = {
  country: CountryType;
};

export const Country: React.FC<Props> = ({ country }) => {
  const { country_flag, countryName, leagues } = country;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full place-items-center p-4">
      <div
        onClick={handleClick}
        className={`flex w-full max-w-[var(--country-list-MaxWidth)] min-w-[var(--country-list-MinWidth)] items-center justify-between rounded-sm bg-[var(--color-grey-60)] px-2 py-4 text-[var(--color-grey-70)] ${isOpen && 'mb-0 rounded-b-none'}`}
      >
        <div className="flex items-center gap-6">
          <img
            className="aspect-square w-6 rounded-full object-cover"
            src={country_flag || 'https://media.api-sports.io/flags/gb-eng.svg'}
            alt="country flag"
          />
          <p className="text-2xl leading-7 font-normal text-[var(--color-grey-20)]">
            {countryName || 'bejrut'}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-2xl leading-7 font-normal text-[var(--color-grey-20)]">
            {leagues.length || 13}
          </p>

          <img
            className={`h-5 w-5 transition-transform duration-200 ease-in-out ${isOpen && 'rotate-180'}`}
            src="./UI_Elements/arrow_down.svg"
            alt="arrow up"
          />
        </div>
      </div>

      {isOpen && (
        <div

          className={`w-full pl-8 max-w-[var(--country-list-MaxWidth)] min-w-[var(--country-list-MinWidth)] bg-[var(--color-grey-80)] ${isOpen && 'mb-0'}`}

        >
          {leagues.map((league) => (
            <CountryLeague key={league.competition_id} league={league} />
          ))}
        </div>
      )}
    </div>
  );
};
