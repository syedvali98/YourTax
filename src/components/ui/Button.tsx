import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading,
  asChild = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    outline: 'border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = cn(
    'inline-block rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-center',
    variants[variant],
    sizes[size],
    className
  );

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: buttonClasses,
    });
  }

  return (
    <button
      className={buttonClasses}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
