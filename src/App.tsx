import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './styles.scss';
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

const queryClient = new QueryClient();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem('logged')
  );
  const [isOpen, setIsOpen] = useState<Open>('start');

  useEffect(() => {
    const token = localStorage.getItem('logged');
    if (token === 'true') {
      setIsAuthenticated(true);
    }
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
            <Route path="current_match" element={<CurrentMatch />} />
            <Route path="favourite" element={<FavouriteMatches />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
