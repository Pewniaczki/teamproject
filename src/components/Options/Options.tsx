import axios from 'axios';
import styles from './Options.module.scss';

import { useEffect, useState } from 'react';
import { useDateStore } from '../../zustand/useDate';

type CompetitionType = {
  competition_id: number;
  name: string;
  logo: string;
  country: null | string;
};

const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;


export const Options: React.FC = () => {
  const [options, setOptions] = useState<CompetitionType[] | null>(null);
  const { date, setDate } = useDateStore();

  useEffect(() => {
    const getOptions = async () => {
      try {
        const response = await axios(`${BACKEND}/api/competitions`);
        if (response.data) {
          setOptions(response.data);
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
        <select className={styles.options_container_input} defaultValue="">
          <option value="" disabled>
            Choose option
          </option>
          {options !== null &&
            options.map((option) => (
              <option key={option.competition_id} value={option.name}>
                {option.name}
              </option>
            ))}
        </select>

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
