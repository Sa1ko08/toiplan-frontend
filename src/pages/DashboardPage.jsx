import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  // Временный список тоев для наглядности дизайна
  const events = [
    {
      id: '1',
      title: 'Свадьба Асана и Гульназ',
      type: 'Свадьба',
      date: '15.11.2026',
      guestsCount: 150,
      confirmedCount: 92,
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Шапка сайта */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">ToiPlan</h1>
          <Link
            to="/login"
            className="text-sm font-medium text-gray-500 hover:text-primary transition"
          >
            Выйти
          </Link>
        </div>
      </header>

      {/* Основной контент */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Мои события</h2>
            <p className="text-sm text-gray-500">Управляйте своими тоями и списками гостей</p>
          </div>
          <Link
            to="/app/events/new"
            className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl shadow transition"
          >
            + Создать событие
          </Link>
        </div>

        {/* Список карточек событий */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent-dark text-xs font-semibold rounded-full">
                  {event.type}
                </span>
                <span className="text-xs text-gray-400">{event.date}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>

              <div className="text-sm text-gray-600 mb-6">
                Подтвердили: <span className="font-semibold text-primary">{event.confirmedCount}</span> из {event.guestsCount} гостей
              </div>

              <div className="flex gap-2">
                <Link
                  to={`/app/events/${event.id}/guests`}
                  className="flex-1 text-center py-2 bg-surface hover:bg-gray-100 text-gray-700 font-medium rounded-lg text-sm transition"
                >
                  Таблица гостей
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}