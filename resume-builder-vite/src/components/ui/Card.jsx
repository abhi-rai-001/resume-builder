import React from 'react';

const Card = ({ 
  children, 
  title = '',
  className = ''
}) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {title && (
        <div className="border-b border-secondary-200 px-4 py-3">
          <h3 className="text-lg font-medium text-secondary-800">{title}</h3>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;