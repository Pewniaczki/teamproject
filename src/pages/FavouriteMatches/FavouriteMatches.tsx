import { CurrentMatches } from '../../components/CurrentMatches/CurrentMatches';
import { useFavouriteMatches } from '../../zustand/useFavouritesMatches';

export const FavouriteMatches: React.FC = () => {
  const { favourite } = useFavouriteMatches();

  return (
    <div className="mx-auto my-4">
      <h1 className="mb-4 font-normal text-[var(--color-grey-0)]">
        Your Favourite matches
      </h1>
      {!!favourite.length ? (
        <CurrentMatches matches={favourite} />
      ) : (
        <p className="font-normal text-[var(--color-grey-0)]">
          {' '}
          No matches added to favourites...
        </p>
      )}
    </div>
  );
};
