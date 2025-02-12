import React from 'react';

export const Card = ({ children, className = '', style = {} }) => {
  return (
    <div
      className={className}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '10px 0',
        padding: '20px',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, style = {} }) => {
  return (
    <div style={{ ...style }}>
      {children}
    </div>
  );
};
