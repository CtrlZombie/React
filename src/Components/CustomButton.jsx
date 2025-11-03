import React, { forwardRef, useEffect } from 'react';

const CustomButton = forwardRef((props, ref) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <button 
      ref={ref} 
      {...props}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ...props.style
      }}
    >
      {props.children || 'Автофокус кнопка'}
    </button>
  );
});

export default CustomButton;