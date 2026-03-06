import React from 'react';
import { useUser } from './UserContext';

export const Header = () => {
  // Получаем нужные данные из контекста, чтобы отобразить статус и тему без передачи через пропсы
  const { user, theme } = useUser();

  return (
    <header style={{ background: theme.darkMode ? '#333' : '#eee', color: theme.darkMode ? '#fff' : '#000', padding: '15px' }}>
      <h2>Панель управления</h2>
      <p>Роль: {user.role}</p>
      <p>Тема: {theme.darkMode ? 'Темная' : 'Светлая'}</p>
    </header>
  );
};