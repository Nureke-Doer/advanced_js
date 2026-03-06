import React from 'react';
import { UserProvider } from './UserProvider';
import { Dashboard } from './Dashboard';

function App() {
  return (
    // Оборачиваем все приложение в провайдер, чтобы любой вложенный компонент получил доступ к данным
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}

export default App;