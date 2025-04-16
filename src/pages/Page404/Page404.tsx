import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.scss';

export const Page404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className={styles.page404_title}>Are you lost?</h1>
      <p onClick={() => navigate(-1)} className={styles.page404_paragraph}>{`-> Go back <-`}</p>
    </>
  );
};
