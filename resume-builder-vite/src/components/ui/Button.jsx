import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'btn px-4 py-2 inline-flex items-center justify-center';
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;