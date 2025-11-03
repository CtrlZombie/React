import React, { useState, useCallback, useMemo, memo } from 'react';

// Оптимизируем TodoItem с помощью memo
const TodoItem = memo(({ id, text, onDelete }) => {
  console.log(`Рендер задачи: ${text}`);
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
});

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Изучить React' },
    { id: 2, text: 'Написать проект' },
  ]);

  // Оптимизируем функцию добавления с useCallback
  const addTodo = useCallback(() => {
    const newTodo = { 
      id: Date.now(), 
      text: 'Новая задача' 
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, []);

  // Оптимизируем функцию удаления с useCallback
  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  // Оптимизируем список todos с useMemo (если нужны вычисления)
  const todoStats = useMemo(() => {
    return {
      total: todos.length,
      completed: todos.filter(todo => todo.completed).length,
    };
  }, [todos]);

  // Оптимизируем мэппинг todos с useMemo
  const todoItems = useMemo(() => {
    return todos.map((todo) => (
      <TodoItem 
        key={todo.id} 
        id={todo.id} 
        text={todo.text} 
        onDelete={deleteTodo} 
      />
    ));
  }, [todos, deleteTodo]);

  return (
    <div>
      <div>
        <p>Всего задач: {todoStats.total}</p>
      </div>
      <button onClick={addTodo}>Добавить задачу</button>
      {todoItems}
    </div>
  );
};

export default TodoList;