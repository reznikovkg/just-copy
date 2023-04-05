import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgressBar from './pages/ProgressBarPage';
import RatingPage from './pages/RatingPage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/progress">Прогресс бар</Link>
            </li>
            <li>
              <Link to="/rating">Рейтинг</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/progress" element={<ProgressBar />} />
          <Route path="/rating" element={<RatingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
} 
