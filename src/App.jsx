import React from 'react';
function UserCard({name, age}) {
  return (
    <div className = 'user-card'>
      <h2>{name}</h2>
      <h2>{age} Лет</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard name = 'Иван' age = {30}/>
      <UserCard name = 'Екатерина' age = {29}/>
      <UserCard name = 'Михаил' age = {5}/>
    </div>
  )
};

export default App;