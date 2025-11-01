import React from 'react';
import './App.css';
import { useAuth } from './Context/AuthContext.js';

function App() {
  const { isLoggedIn, login } = useAuth();

  return (
    <div className="App">
      <h1>Мое приложение</h1>
      
      {isLoggedIn ? (
        <div>
          <h2>Вы авторизованы! ✅</h2>
          <p>Добро пожаловать в приложение!</p>
        </div>
      ) : (
        <div>
          <h2>Вы не авторизованы</h2>
          <button onClick={login} style={{padding: '10px 20px', fontSize: '16px'}}>
            Войти
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
