import React, { useState } from 'react';
import { UserContext } from './UserContext';

// Провайдер оборачивает компоненты и передает им общее состояние
export const UserProvider = ({ children }) => {
  // Храним данные пользователя, настройки прав и темы в одном месте
  const [userData, setUserData] = useState({
    user: { name: "Nureke", email: "nureke@example.com", role: "Student" },
    permissions: { canEdit: true, canDelete: false, canView: true },
    theme: { darkMode: true, fontSize: "medium" }
  });

  return (
    // Передаем userData всем вложенным компонентам через value
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};