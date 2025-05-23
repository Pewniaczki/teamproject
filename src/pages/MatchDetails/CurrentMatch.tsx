import { useLocation, useNavigate } from 'react-router-dom';
import { Match } from '../../types/countryMatchesTypes';
import { useState } from 'react';
import { CurrentDetails } from '../../components/CurrentDetails/CurrentDetails';
import { useFavouriteMatches } from '../../zustand/useFavouritesMatches';

export const CurrentMatch: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentMatch: Match = location.state.match;

  const menuItems = ['Details', 'Team composition', 'Grid', 'Matches'] as const;
  const [activeElement, setActiveElement] =
    useState<(typeof menuItems)[number]>('Details');

  const { setFavourite, favourite } = useFavouriteMatches();

  const includedInFavourite = favourite.some(
    (item) => currentMatch.match_info.match_id === item.match_info.match_id
  );

  const [animateStar, setAnimateStar] = useState(false);

  const handleStarClick = () => {
    setFavourite(currentMatch);

    requestAnimationFrame(() => {
      setAnimateStar(true);

      setTimeout(() => {
        setAnimateStar(false);
      }, 300);
    });
  };

  return (
    <>
      <div className="p-3.5 lg:px-5 lg:py-0">
        <div className="mx-auto mt-0 mb-3.5 flex w-[90%] justify-between">
          <button
            className="border-none bg-inherit"
            onClick={() => navigate(-1)}
          >
            <img src=".\UI_Elements\arrow_back.svg"></img>
          </button>

          <div className="flex w-17.5 justify-between">
            <img src=".\UI_Elements\bell.svg" alt="bell image" />

            <img
              onClick={handleStarClick}
              className={`cursor-pointer transition-transform duration-500 ${animateStar ? 'animate-pop' : ''}`}
              src={
                includedInFavourite
                  ? './UI_Elements/filled_star.svg'
                  : './UI_Elements/star.svg'
              }
              alt="star image"
            />
          </div>
        </div>

        <div className="mb-5 flex scale-[0.8] justify-between lg:scale-[1]">
          <div className="flex flex-col items-center">
            <img
              className="mb-2.5 w-10"
              src={currentMatch.match_info.home_team_logo}
              alt="team icon"
            />
            <p className="text-3xl font-bold text-[var(--color-grey-0)]">
              {currentMatch.match_info.home_team}
            </p>
          </div>

          <div className="flex flex-col justify-center px-6 py-0 lg:px-12 lg:py-0">
            <p className="text-[var(--color-grey-30)]">
              {currentMatch.match_info.date_time
                .split('T')[1]
                .split(':')
                .slice(0, 2)
                .join(':')}
            </p>
            <p className="text-[var(--color-grey-30)]">Today</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="mb-2.5 w-10"
              src={currentMatch.match_info.away_team_logo}
              alt="team icon"
            />
            <p className="text-3xl font-bold text-[var(--color-grey-0)]">
              {currentMatch.match_info.away_team}
            </p>
          </div>
        </div>

        <div className="mx-auto my-0 mb-5 flex w-[80%] justify-between overflow-auto lg:w-full">
          {menuItems.map((item) => (
            <p
              onClick={() => setActiveElement(item)}
              className={`px-2.5 py-0 text-2xl leading-8 font-normal whitespace-nowrap text-[var(--color-grey-0)] ${activeElement === item && 'border-b-2 border-b-[var(--color-grey-0)]'}`}
              key={item}
            >
              {item}
            </p>
          ))}
        </div>

        {activeElement === 'Details' && <CurrentDetails currentMatch={currentMatch}  />}
      </div>
    </>
  );
};
