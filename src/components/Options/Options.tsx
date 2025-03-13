import styles from './Options.module.scss';

import { useEffect, useState } from 'react';
import { apiPewniaczki } from '../../axiosConfig';

type CompetitionType = {
  competition_id: number;
  name: string;
  logo: string;
  country: null | string;
};

export const Options: React.FC = () => {
  const [options, setOptions] = useState<CompetitionType[] | null>(null);
  useEffect(() => {
    const getOptions = async () => {
      try {
        const response = await apiPewniaczki('/competitions');
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

        <input className={styles.options_container_input} type='date' defaultValue={new Date().toISOString().split("T")[0]} />
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
