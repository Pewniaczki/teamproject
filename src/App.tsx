// import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './styles.scss';
import { MatchesPage } from './pages/MatchesPage/MatchesPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import {
  useBreakPointListener,
} from './zustand/useBreakPoint';
import { Layout } from './components/Layout/Layout';

function App() {
  // const [user, setUser] = useState(false);
  useBreakPointListener();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/matches" />} />
        <Route path="matches" element={<MatchesPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
