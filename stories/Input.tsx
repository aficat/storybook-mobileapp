import React from 'react';

export interface InputProps {
  /**
   * Input label
   */
  label?: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input value
   */
  value?: string;
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /**
   * Is the input disabled?
   */
  disabled?: boolean;
  /**
   * Is the input required?
   */
  required?: boolean;
  /**
   * Error message
   */
  error?: string;
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Input size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Change handler
   */
  onChange?: (value: string) => void;
  /**
   * Blur handler
   */
  onBlur?: () => void;
  /**
   * Focus handler
   */
  onFocus?: () => void;
}

/**
 * Mobile-first input component for forms
 */
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  type = 'text',
  disabled = false,
  required = false,
  error,
  helperText,
  size = 'medium',
  className = '',
  onChange,
  onBlur,
  onFocus,
}) => {
  const sizeClasses = {
    small: 'px-3 py-2 text-sm min-h-[36px]',
    medium: 'px-4 py-3 text-base min-h-[44px]',
    large: 'px-5 py-4 text-lg min-h-[52px]',
  };
  
  const baseClasses = 'input-mobile w-full transition-colors duration-200';
  const errorClasses = error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : '';
  const disabledClasses = disabled ? 'bg-gray-50 cursor-not-allowed' : '';
  
  const inputClasses = [
    baseClasses,
    sizeClasses[size],
    errorClasses,
    disabledClasses,
    className,
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        required={required}
        className={inputClasses}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {error && (
        <p className="mt-1 text-sm text-error-600">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};
