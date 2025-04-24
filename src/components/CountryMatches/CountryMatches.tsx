import { useState } from 'react';
import { Match } from '../../types/countryMatchesTypes';
import { ListOfLeagues } from '../ListOfLeagues';

type Props = {
  countryName: string;
  details: Match[];
};

export const CountryMatches: React.FC<Props> = ({ countryName, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-1 w-full place-items-center">
      <div
        className={`flex w-full max-w-[var(--country-list-MaxWidth)] min-w-[var(--country-list-MinWidth)] items-center justify-between rounded-sm bg-[var(--color-grey-70)] px-2 py-4 text-[var(--color-grey-70)] ${isOpen && 'mb-0 rounded-b-none'}`}
      >
        <div className="flex items-center gap-6">
          <img
            className="aspect-square w-6 rounded-full object-cover"
            src={details[0].country_flag}
            alt="country flag"
          />
          <p className="text-2xl leading-7 font-normal text-[var(--color-grey-20)]">
            {countryName}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-2xl leading-7 font-normal text-[var(--color-grey-20)]">
            {details.length}
          </p>

          <img
            className={`h-5 w-5 transition-transform duration-200 ease-in-out ${isOpen && 'rotate-180'}`}
            src="./UI_Elements/arrow_down.svg"
            alt="arrow up"
            onClick={handleClick}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className={`w-full max-w-[var(--country-list-MaxWidth)] min-w-[var(--country-list-MinWidth)] bg-[var(--color-grey-70)] ${isOpen && 'mb-0'}`}
        >
          <ListOfLeagues details={details} />
        </div>
      )}
    </div>
  );
};
