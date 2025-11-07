import React, { useRef, useEffect } from 'react';

const RenderCounter = ({ componentName = "Component" }) => {
  const renderCount = useRef(0);

  useEffect(() => {
    // Увеличиваем счетчик после каждого рендера
    renderCount.current += 1;
  });

  return (
    <div style={{
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Render Counter: {componentName}</h3>
      <p>Количество ререндеров: <strong>{renderCount.current}</strong></p>
    </div>
  );
};

export default RenderCounter;