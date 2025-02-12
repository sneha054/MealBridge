import React from 'react';

export const Button = ({ onClick, children, className = '', style = {} }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        ...style
      }}
    >
      {children}
    </button>
  );
};
