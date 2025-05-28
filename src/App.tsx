import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MatchesPage } from './pages/MatchesPage/MatchesPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { Layout } from './components/Layout/Layout';
import { CurrentMatch } from './pages/MatchDetails/CurrentMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Open, StartPage } from './pages/StartPage/StartPage';
import { Page404 } from './pages/Page404/Page404';
import { FavouriteMatches } from './pages/FavouriteMatches/FavouriteMatches';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LeaguesPage } from './pages/LeaguesPage/LeaguesPage';

import axios from 'axios';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

const queryClient = new QueryClient();
const BACKEND = import.meta.env.VITE_BACKEND_LOGIN_URL;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    // !!sessionStorage.getItem('logged')
    true
  );
  const [isOpen, setIsOpen] = useState<Open>('start');

  useEffect(() => {
    console.log('weszło');
    console.log('backend', BACKEND);
    const auth = async () => {
      try {
        const res = await axios.get(`${BACKEND}/isUserLogged`, {
          withCredentials: true,
        });
        if (res.data.user) {
          setIsAuthenticated(res.data.user);
          sessionStorage.setItem('logged', 'true');
        }
      } catch (error) {
        setIsAuthenticated(false);
        sessionStorage.removeItem('logged');
      }
    };
    auth();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/start"
          element={
            <StartPage
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/register"
          element={<RegistrationPage setIsOpen={setIsOpen} />}
        />
        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route index element={<Navigate to="/matches" />} />
            <Route path="matches" element={<MatchesPage />} />

            <Route path="league" element={<LeaguesPage />} />

            <Route path="current_match" element={<CurrentMatch />} />
            <Route path="favourite" element={<FavouriteMatches />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
