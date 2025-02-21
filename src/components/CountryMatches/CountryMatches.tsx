import { useState } from 'react';
import { CountryMatchesType } from '../../types/countryMatchesTypes';
import { ListOfLeagues } from '../ListOfLeagues';
import style from './CountryMatches.module.scss';
import cn from 'classnames';

export const CountryMatches: React.FC<CountryMatchesType> = ({
  countryFlag,
  countryName,
  leagues,
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
            src={countryFlag}
            alt="country flag"
          />
          <p className={style.country__container__paragraph}>{countryName}</p>
        </div>

        <div
          className={`${style.country__container} ${style.country__containerRight}`}
        >
          <p className={style.country__container__paragraph}>
            {leagues.length}
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
          <ListOfLeagues leagues={leagues} />
        </div>
      )}
    </div>
  );
};
