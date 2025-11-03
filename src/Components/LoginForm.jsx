import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    password: ''
  });

  // Функция для обработки изменений в полях ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Функция валидации
  const validateForm = () => {
    const newErrors = {};
    
    // Валидация имени
    if (!formData.name.trim()) {
      newErrors.name = 'Имя не должно быть пустым';
    }
    
    // Валидация пароля
    if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Функция отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    
    if (validateForm()) {
      // Если валидация пройдена, выводим данные в консоль
      console.log('Данные формы:');
      console.log('Имя:', formData.name);
      console.log('Пароль:', formData.password);
      
      // Можно очистить форму после успешной отправки
      setFormData({
        name: '',
        password: ''
      });
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>Форма входа</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Имя:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: errors.name ? '2px solid red' : '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          {errors.name && (
            <span style={{ color: 'red', fontSize: '14px' }}>{errors.name}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Пароль:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: errors.password ? '2px solid red' : '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          {errors.password && (
            <span style={{ color: 'red', fontSize: '14px' }}>{errors.password}</span>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;