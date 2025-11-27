import { Section } from '@/components/ui/Section';
import { STATS } from '@/lib/constants';

export function StatsSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {STATS.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl md:text-6xl font-bold font-display text-primary-600 mb-2">
              {stat.number}
            </div>
            <div className="text-lg text-neutral-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
