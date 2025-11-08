import React from 'react';
import withLoading from './components/withLoading';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

// Оборачиваем компонент в HOC
const UserProfileWithLoading = withLoading(UserProfile);

// Использование в приложении
const App = () => {
  const user = {
    name: 'Иван Иванов',
    email: 'ivan@example.com'
  };

  return (
    <div>
      <UserProfileWithLoading user={user} />
    </div>
  );
};

export default App;