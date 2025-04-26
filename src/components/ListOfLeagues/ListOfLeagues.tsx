import { Match } from '../../types/countryMatchesTypes';
import style from './ListOfLeagues.module.scss';
import { MatchesList } from '../MatchesList';

type Props = {
  details: Match[];
};

export const ListOfLeagues: React.FC<Props> = ({ details }) => {
  return (
    <div className={style.league}>
      <div className="flex items-center justify-between py-2 pr-2 pl-4">
        <div className="flex flex-row items-center gap-4">
          <img
            className="h-4 w-4 rounded-[50%] object-cover"
            src={details[0].competition_logo}
          />
          <p className="text-base leading-5.5 text-[var(--color-grey-20)]">
            {details[0].competition}
          </p>
        </div>
      </div>

      <div className='flex flex-col'>
        <MatchesList details={details} />
      </div>
    </div>
  );
};
