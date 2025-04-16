import { CurrentMatches } from '../../components/CurrentMatches/CurrentMatches';
import { useFavouriteMatches } from '../../zustand/useFavouritesMatches';
import styles from './FavouriteMatches.module.scss';

export const FavouriteMatches: React.FC = () => {
  const { favourite } = useFavouriteMatches();

  return (
    <>
      <h1 className={styles.favourite_title}>Your Favourite matches</h1>
      {!!favourite.length ? (
        <CurrentMatches matches={favourite} />
      ) : (
        <p className={styles.favourite_paragraph}> No matches added to favourites...</p>
      )}
    </>
  );
};
