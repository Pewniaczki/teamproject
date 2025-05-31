import axios from 'axios';
import Select from 'react-select';
import { StylesConfig } from 'react-select';
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { useDateStore } from '../../zustand/useDate';
import { Match } from '../../types/countryMatchesTypes';
import { useNavigate } from 'react-router-dom';
// import { TeamTypes } from '../../types/teamTypes';

// type CompetitionType = {
//   competition_id: number;
//   name: string;
//   logo: string;
//   country: null | string;
// };

type MatchInfo = Match['match_info'];

type OptionType = {
  logoAway: string;
  logoHome: string;
  nameHome: string;
  nameAway: string;
  match_info: MatchInfo;
};

const styleSelect: StylesConfig<OptionType, false> = {
  control: (base) => ({
    ...base,
    boxShadow: '',
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
    cursor: 'pointer',
  }),
};

const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;

export const Options: React.FC = () => {
  // const [options, setOptions] = useState<OptionType[]>([]);
  // const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const { date, setDate } = useDateStore();
  const [recommended, setRecommended] = useState<{ match: Match }[]>();
  const navigate = useNavigate();

  const options =
    recommended?.map((item) => ({
      logoAway: item.match.match_info.away_team_logo,
      logoHome: item.match.match_info.home_team_logo,
      nameHome: item.match.match_info.home_team,
      nameAway: item.match.match_info.away_team,
      match_info: item.match.match_info,
    })) || [];

  // useEffect(() => {
  //   const getOptions = async () => {
  //     try {
  //       const response = await axios(`${BACKEND}/api/teams`);
  //       if (response.data) {
  //         console.log('dada', response.data);
  //         const mapped = response.data.map((item: TeamTypes) => ({
  //           value: item.team_id,
  //           label: item.name,
  //           logo: item.logo,
  //         }));
  //         setOptions(mapped);
  //       }
  //     } catch (error) {
  //       console.error({ message: 'Error in fetching options', error });
  //     }
  //   };

  //   getOptions();
  // }, []);

  useEffect(() => {
    const getRecommended = async () => {
      const res = await axios(`${BACKEND}/api/recommended`);

      if (res.data) {
        setRecommended(res.data);
      }

      console.log('recommended', recommended);
    };
    getRecommended();
  }, []);
  return (
    <div className="mb-8 flex w-full flex-col justify-between gap-6 px-2.5 py-0 lg:flex-row">
      <div className="flex w-full justify-between">
        {/* <Select
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
          styles={styleSelect}
        /> */}

        <p>Select date 📅</p>

        <p>{'=>'}</p>

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
        <Select
          classNamePrefix="react-select"
          className="w-full rounded-md border-none bg-[var(--color-grey-70)] p-2 text-base font-normal text-[var(--color-grey-20)]"
          options={options}
          formatOptionLabel={(option: OptionType) => (
            <div
              onClick={() =>
                navigate('/league_matches', { state: option.match_info })
              }
              className="flex justify-center items-center gap-1"
            >
              <img
                src={option.logoHome}
                alt="logo"
                className="h-5 w-5 rounded-full"
              />
              <span>{option.nameHome}</span>

              <img
                src={option.logoAway}
                alt="logo"
                className="h-5 w-5 rounded-full"
              />
              <span>{option.nameAway}</span>
            </div>
          )}
          placeholder="Recommended for you"
          isClearable
          styles={styleSelect}
        />
      </div>
    </div>
  );
};
