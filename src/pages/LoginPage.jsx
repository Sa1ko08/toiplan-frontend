import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/app');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950">
      
      {/* Аккуратная, компактная карточка */}
      <div className="max-w-sm w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-amber-500/20 p-6 sm:p-8">
        
        {/* Логотип / Заголовок */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: '#722F37' }}>
            ToiPlan
          </h1>
          <p className="text-xs text-gray-500 mt-1">Организация идеальных праздников</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white text-gray-800 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Пароль
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white text-gray-800 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 text-sm text-white font-medium rounded-xl shadow-md transition-all duration-200 cursor-pointer hover:opacity-95 mt-2"
            style={{ backgroundColor: '#722F37' }}
          >
            Войти в систему
          </button>
        </form>

        {/* Аккуратный блок регистрации внизу */}
        <div className="text-center mt-5 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Нет аккаунта?{' '}
            <Link to="/register" className="font-semibold hover:underline" style={{ color: '#D4AF37' }}>
              Зарегистрироваться
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}