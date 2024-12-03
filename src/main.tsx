import { createRoot } from 'react-dom/client';
import './scss/custom.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>
);
