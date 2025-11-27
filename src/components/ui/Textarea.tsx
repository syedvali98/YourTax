import { cn } from '@/lib/utils';
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
        </label>
        <textarea
          ref={ref}
          className={cn(
            'w-full border border-neutral-300 rounded-lg px-4 py-2.5',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            'transition-all duration-200 resize-none',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
