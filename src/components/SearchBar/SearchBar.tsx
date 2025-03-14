import styles from './SearchBar.module.scss';

export const SearchBar: React.FC = () => {
    return (
        <div className={styles.searchBar}>
            <p className={styles.searchBar__text}>Matches</p>
        </div>
    )
};