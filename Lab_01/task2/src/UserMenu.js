import React from 'react';
import { useUser } from './UserContext';

export const UserMenu = () => {
  // Извлекаем почту и права доступа напрямую из провайдера для безопасного отображения меню
  const { user, permissions } = useUser();

  return (
    <div style={{ border: '2px solid gray', margin: '20px', padding: '15px', borderRadius: '8px' }}>
      <h3>Меню пользователя</h3>
      <p>Email: {user.email}</p>
      <ul>
        <li>Чтение: {permissions.canView ? 'Да' : 'Нет'}</li>
        <li>Редактирование: {permissions.canEdit ? 'Да' : 'Нет'}</li>
        <li>Удаление: {permissions.canDelete ? 'Да' : 'Нет'}</li>
      </ul>
    </div>
  );
};