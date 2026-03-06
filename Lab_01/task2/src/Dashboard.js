import React from 'react';
import { useUser } from './UserContext';
import { Header } from './Header';
import { UserMenu } from './UserMenu';

export const Dashboard = () => {
  // Используем контекст для приветствия конкретного пользователя на главной странице
  const { user } = useUser();

  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>Добро пожаловать, {user.name}!</h1>
        {/* UserMenu вложен внутрь Dashboard, демонстрируя иерархию компонентов */}
        <UserMenu />
      </div>
    </div>
  );
};