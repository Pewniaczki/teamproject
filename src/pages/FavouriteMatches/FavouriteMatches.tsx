import { CurrentMatches } from '../../components/CurrentMatches/CurrentMatches';
import { useFavouriteMatches } from '../../zustand/useFavouritesMatches';
import styles from './FavouriteMatches.module.scss';

export const FavouriteMatches: React.FC = () => {
  const { favourite } = useFavouriteMatches();

  return (
    <div className="mx-auto my-4">
      <h1 className='text-[var(--color-grey-0)] font-normal mb-4'>Your Favourite matches</h1>
      {!!favourite.length ? (
        <CurrentMatches matches={favourite} />
      ) : (
        <p className={styles.favourite_paragraph}> No matches added to favourites...</p>
      )}
    </div>
  );
};
