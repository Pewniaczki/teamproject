import axios from 'axios';
import styles from './Options.module.scss';
import Select from 'react-select';

import { useEffect, useState } from 'react';
import { useDateStore } from '../../zustand/useDate';

type CompetitionType = {
  competition_id: number;
  name: string;
  logo: string;
  country: null | string;
};

type OptionType = {
  value: number;
  label: string;
};

const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;

export const Options: React.FC = () => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const { date, setDate } = useDateStore();

  useEffect(() => {
    const getOptions = async () => {
      try {
        const response = await axios(`${BACKEND}/api/competitions`);
        if (response.data) {
          const mapped = response.data.map((item: CompetitionType) => ({
            value: item.competition_id,
            label: item.name,
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
    <div className={styles.options}>
      <div className={styles.options_container}>
        {/* <select className={styles.options_container_input} defaultValue="">
          <option value="" disabled>
            Choose option
          </option>
          {options !== null &&
            options.map((option) => (
              <option key={option.competition_id} value={option.name}>
                {option.name}
              </option>
            ))}
        </select> */}

        <Select
          classNamePrefix="react-select"
          className={styles.options_container_input}
          options={options}
          value={selectedOption}
          onChange={(selected) => setSelectedOption(selected)}
          placeholder="Choose option"
          isClearable
          styles={{
            container: (base) => ({
              ...base,
              width:'40%'
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
          className={styles.options_container_input}
          type="date"
          onChange={(e) => {
            const [year, month, day] = e.target.value.split('-');
            setDate(`${day}.${month}.${year}`);
          }}
          defaultValue={date.split('.').reverse().join('-')}
        />

        <div className={styles.options_container_search}>
          <img src=".\UI_Elements\search.svg" alt="" />
        </div>
      </div>

      <div className={styles.options_container}>
        <select
          className={styles.options_container_recommended}
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
