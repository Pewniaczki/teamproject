import styles from './Error.module.scss';

export const Error: React.FC = () => {
    return (
        <p className={styles.error}>We can not fetch your data</p>
    )
};