import React, { useState, useCallback } from 'react';
import User from './User';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John', email: 'john@example.com', age: 25 },
    { id: 2, name: 'Jane', email: 'jane@example.com', age: 30 },
    { id: 3, name: 'Bob', email: 'bob@example.com', age: 35 }
  ]);

  const [newUserName, setNewUserName] = useState('');

  const handleEdit = useCallback((userId) => {
    console.log('Edit user:', userId);
  }, []);

  const handleDelete = useCallback((userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }, []);

  const addUser = () => {
    if (newUserName.trim()) {
      const newUser = {
        id: Date.now(),
        name: newUserName,
        email: `${newUserName.toLowerCase()}@example.com`,
        age: Math.floor(Math.random() * 50) + 18
      };
      setUsers(prevUsers => [...prevUsers, newUser]);
      setNewUserName('');
    }
  };

  return (
    <div>
      <h2>User List</h2>
      
      <div>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Enter user name"
        />
        <button onClick={addUser}>Add User</button>
      </div>

      <div className="user-list">
        {users.map(user => (
          <User
            key={user.id}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;