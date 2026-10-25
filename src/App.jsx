import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

// Заглушка для остальных страниц, которые верстает Улукбек
function StubPage({ name }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-primary mb-2">{name}</h1>
        <p className="text-sm text-gray-500">Раздел в разработке</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Авторизация */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<StubPage name="Регистрация" />} />

        {/* Личный кабинет и события (Твоя зона ответственности) */}
        <Route path="/app" element={<DashboardPage />} />
        <Route path="/app/events/new" element={<StubPage name="Создание тоя" />} />
        <Route path="/app/events/:id/guests" element={<StubPage name="Таблица гостей" />} />

        {/* Публичная страница приглашения */}
        <Route path="/i/:code" element={<StubPage name="Приглашение" />} />

        {/* Перенаправление по умолчанию */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}