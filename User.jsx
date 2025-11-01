import React, { memo } from 'react';

const User = memo(({ user, onEdit, onDelete }) => {
  console.log(`Rendering User: ${user.name}`); 
  
  return (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => onEdit(user.id)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
});

export default User;