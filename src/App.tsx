import { Routes, Route } from 'react-router-dom';

import './App.css';
import ProfilePage from './pages/ProfilePage';
import MainPage from './pages/MainPage';
import StatisticPage from './pages/StatisticPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <div className="bg-gray-200 min-h-screen overflow-hidden">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/statistic" element={<StatisticPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
