import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({ children, hover = false, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-6',
        'shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]',
        hover && 'hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1),0_10px_30px_-5px_rgba(0,0,0,0.04)] transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}
