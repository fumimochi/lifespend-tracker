import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext.tsx';
import { MonthProvider } from './context/MonthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MonthProvider>
          <App />
        </MonthProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
