import axios from 'axios';
import Select from 'react-select';

import { useEffect, useState } from 'react';
import { useDateStore } from '../../zustand/useDate';
import { TeamTypes } from '../../types/teamTypes';

// type CompetitionType = {
//   competition_id: number;
//   name: string;
//   logo: string;
//   country: null | string;
// };

type OptionType = {
  value: number;
  label: string;
  logo: string;
};

const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;

export const Options: React.FC = () => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const { date, setDate } = useDateStore();

  useEffect(() => {
    const getOptions = async () => {
      try {
        const response = await axios(`${BACKEND}/api/teams`);
        if (response.data) {
          console.log('dada', response.data);
          const mapped = response.data.map((item: TeamTypes) => ({
            value: item.team_id,
            label: item.name,
            logo: item.logo,
          }));
          setOptions(mapped);
        }
      } catch (error) {
        console.error({ message: 'Error in fetching options', error });
      }
    };

    getOptions();
  }, []);

  return (
    <div className="mb-8 flex w-full flex-col justify-between gap-6 px-2.5 py-0 lg:flex-row">
      <div className="flex w-full justify-between">
        <Select
          classNamePrefix="react-select"
          className="w-32.5 rounded-md border-none bg-[var(--color-grey-70)] p-2 text-base font-normal text-[var(--color-grey-20)] lg:w-fit"
          options={options}
          formatOptionLabel={(option: OptionType) => (
            <div className="flex items-center gap-2">
              <img
                src={option.logo}
                alt={option.label}
                className="h-6 w-6 rounded-full"
              />
              <span>{option.label}</span>
            </div>
          )}
          value={selectedOption}
          onChange={(selected) => setSelectedOption(selected)}
          placeholder="Choose option"
          isClearable
          styles={{
            container: (base) => ({
              ...base,
              width: '40%',
            }),
            control: (base) => ({
              ...base,
              backgroundColor: '#1f1f1f',
              borderColor: '#333',
              color: 'white',
            }),
            singleValue: (base) => ({
              ...base,
              color: 'white',
            }),
            input: (base) => ({
              ...base,
              color: 'white',
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: '#1f1f1f',
              color: 'white',
            }),
            option: (base, { isFocused, isSelected }) => ({
              ...base,
              backgroundColor: isSelected
                ? 'var(--color-primary)'
                : isFocused
                  ? '#333'
                  : '#1f1f1f',
              color: 'white',
            }),
          }}
        />

        <input
          className="w-32.5 rounded-md border-none bg-[var(--color-grey-70)] p-2 text-base font-normal text-[var(--color-grey-20)] lg:w-fit"
          type="date"
          onChange={(e) => {
            const [year, month, day] = e.target.value.split('-');
            setDate(`${day}.${month}.${year}`);
          }}
          defaultValue={date.split('.').reverse().join('-')}
        />

        <div className="flex w-[10%] rounded-md border-none bg-[var(--color-grey-70)] p-1.5 text-[var(--color-grey-20)] lg:hidden lg:text-[var(--color-grey-20)]">
          <img src=".\UI_Elements\search.svg" alt="" />
        </div>
      </div>

      <div className="flex w-full justify-between">
        <select
          className="w-full rounded-md border-none bg-[var(--color-grey-70)] p-1 text-base font-normal text-[var(--color-grey-20)]"
          defaultValue=""
        >
          <option value="" disabled>
            Recommended for you
          </option>
        </select>
      </div>
    </div>
  );
};
