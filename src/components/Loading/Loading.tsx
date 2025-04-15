import styles from './Loading.module.scss';

type Props = {
  size: number;
};

export const Loading: React.FC<Props> = ({ size }) => {
  return (
    <div className={styles.loading}>
      <p>It is free server sorry for long waiting 😥</p>
      <div className={styles.spinner} style={{ width: `${size}px`, height: `${size}px` }}></div>
    </div>
  );
};
