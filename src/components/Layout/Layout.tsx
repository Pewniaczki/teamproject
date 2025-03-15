import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss'

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.layout_header}>
        <Header />
      </header>

      <main className={styles.layout_main}>
        <Outlet />
      </main>

      <footer className={styles.layout_footer}>{/* <Footer /> */}</footer>
    </div>
  );
};
