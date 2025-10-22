import React from 'react';

export interface ListItemProps {
  /**
   * List item content
   */
  children: React.ReactNode;
  /**
   * Left side content (icon, avatar, etc.)
   */
  leftContent?: React.ReactNode;
  /**
   * Right side content (badge, arrow, etc.)
   */
  rightContent?: React.ReactNode;
  /**
   * Is the item clickable?
   */
  clickable?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface ListProps {
  /**
   * List items
   */
  children: React.ReactNode;
  /**
   * List title
   */
  title?: string;
  /**
   * List subtitle
   */
  subtitle?: string;
  /**
   * Show dividers between items
   */
  dividers?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Mobile-first list item component
 */
export const ListItem: React.FC<ListItemProps> = ({
  children,
  leftContent,
  rightContent,
  clickable = false,
  onClick,
  className = '',
}) => {
  const baseClasses = 'list-item-mobile flex items-center justify-between';
  const clickableClasses = clickable ? 'cursor-pointer hover:bg-gray-50 active:bg-gray-100' : '';
  
  const itemClasses = [
    baseClasses,
    clickableClasses,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={itemClasses} onClick={onClick}>
      <div className="flex items-center flex-1 min-w-0">
        {leftContent && (
          <div className="flex-shrink-0 mr-3">
            {leftContent}
          </div>
        )}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
      {rightContent && (
        <div className="flex-shrink-0 ml-3">
          {rightContent}
        </div>
      )}
    </div>
  );
};

/**
 * Mobile-first list component
 */
export const List: React.FC<ListProps> = ({
  children,
  title,
  subtitle,
  dividers = true,
  className = '',
}) => {
  const baseClasses = 'list-mobile';
  const dividerClasses = dividers ? 'divide-y divide-gray-100' : '';
  
  const listClasses = [
    baseClasses,
    dividerClasses,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="px-4 py-3 border-b border-gray-100">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={listClasses}>
        {children}
      </div>
    </div>
  );
};
