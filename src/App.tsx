// import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import './styles.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { Navbar } from './components/Navbar';
import {
  useBreakPointListener,
  useBreakPointStore,
} from './zustand/useBreakPoint';
import { TopMenu } from './components/TopMenu/TopMenu';

function App() {
  // const [user, setUser] = useState(false);
  const { isDesktop } = useBreakPointStore();
  useBreakPointListener();

  return (
    <div className={isDesktop ? 'app__desktop' : 'app'}>
      {/* <nav className="nav">
        <div className="nav__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav__item nav__item--active' : 'nav__item'
            }
          >
            Home
          </NavLink>
        </div>

        <div className="nav__data">
          <div className="nav__data-button">
            {user ? (
              <button className="nav__logout" onClick={() => setUser(false)}>
                Log out
              </button>
            ) : (
              <>
                <Link to="/register" className="nav__data-links">
                  Sign up
                </Link>

                <Link to="/login" className="nav__data-links">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </nav> */}

      <Routes>
        <Route path="/" element={
          // <HomePage />
          <RegistrationPage />
          // <LoginPage />
          } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
      
      <Navbar />
      {/* <TopMenu /> */}
      <Outlet />
      
    </div>
  );
}

export default App;
