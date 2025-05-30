import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-full lg:flex-row">
      <header className="sticky top-0 bottom-0 left-0 w-0 lg:w-[17%]">
        <Header />
      </header>

      <main className="mb-2.5 flex min-h-dvh w-full flex-col text-[var(--color-grey-0)]">
        <Outlet />
      </main>

      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};
