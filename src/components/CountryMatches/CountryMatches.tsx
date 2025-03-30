import { useState } from 'react';
import { Match } from '../../types/countryMatchesTypes';
import { ListOfLeagues } from '../ListOfLeagues';
import style from './CountryMatches.module.scss';
import cn from 'classnames';
// import { LeagueItem } from '../LeagueItem';

type Props = {
  countryName: string,
  details: Match[]

}

export const CountryMatches: React.FC<Props> = ({
  countryName,
  details,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.wrapper}>
      <div
        className={cn(style.country, {
          [style.country__open]: isOpen,
        })}
      >
        <div
          className={`${style.country__container} ${style.country__containerLeft}`}
        >
          <img
            className={style.country__container__img}
            src={details[0].country_flag}
            alt="country flag"
          />
          <p className={style.country__container__paragraph}>{countryName}</p>
        </div>

        <div
          className={`${style.country__container} ${style.country__containerRight}`}
        >
          <p className={style.country__container__paragraph}>
            {details.length}
          </p>
          <img
            className={cn(style.country__container__arrow, {
              [style.country__container__arrow__open]: isOpen,
            })}
            src="./UI_Elements/arrow_down.svg"
            alt="arrow up"
            onClick={handleClick}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className={cn(style.country__list, {
            [style.country__list__open]: isOpen,
          })}
        >
          <ListOfLeagues details={details} />
          {/* <LeagueItem key={details.} details={details} /> */}
        </div>
      )}
    </div>
  );
};
