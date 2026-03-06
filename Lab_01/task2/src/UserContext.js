import React, { createContext, useContext } from 'react';

// Создаем контекст для хранения данных пользователя, чтобы избежать prop drilling
export const UserContext = createContext();

// Создаем пользовательский хук для удобного доступа к данным в других компонентах
export const useUser = () => {
  const context = useContext(UserContext);
  
  // Добавляем проверку на ошибку, чтобы код не ломался при неправильном использовании
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};