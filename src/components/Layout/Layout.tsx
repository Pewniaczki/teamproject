import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-full lg:flex-row">
      <header className="sticky top-0 bottom-0 left-0 w-0 lg:w-[17%]">
        <Header />
      </header>

      <main className='text-[var(--color-grey-0)] flex mb-2.5 lg:w-full'>
        <Outlet />
      </main>

      <footer className={styles.layout_footer}>{/* <Footer /> */}</footer>
    </div>
  );
};
