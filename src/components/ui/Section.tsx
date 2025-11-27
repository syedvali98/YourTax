import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'primary';
  className?: string;
}

export function Section({ children, background = 'white', className }: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-primary-50',
  };

  return (
    <section className={cn('py-16 md:py-24', bgColors[background], className)}>
      <Container>{children}</Container>
    </section>
  );
}
