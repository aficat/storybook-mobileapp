import React from 'react';

export interface CardProps {
  /**
   * Card title
   */
  title?: string;
  /**
   * Card subtitle
   */
  subtitle?: string;
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Card elevation style
   */
  elevation?: 'flat' | 'elevated' | 'high';
  /**
   * Show border
   */
  bordered?: boolean;
  /**
   * Card padding size
   */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
}

/**
 * Mobile-first card component for content organization
 */
export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  elevation = 'flat',
  bordered = true,
  padding = 'medium',
  className = '',
  onClick,
}) => {
  const baseClasses = 'card-mobile';
  
  const elevationClasses = {
    flat: 'shadow-none',
    elevated: 'card-elevated',
    high: 'shadow-strong',
  };
  
  const paddingClasses = {
    none: '',
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6',
  };
  
  const borderClasses = bordered ? 'border' : 'border-0';
  const clickableClasses = onClick ? 'cursor-pointer hover:shadow-medium transition-shadow duration-200' : '';
  
  const cardClasses = [
    baseClasses,
    elevationClasses[elevation],
    paddingClasses[padding],
    borderClasses,
    clickableClasses,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick}>
      {(title || subtitle) && (
        <div className="mb-3">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};
