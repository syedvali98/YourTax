import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Award, Globe, Clock } from 'lucide-react';
import { USP_POINTS } from '@/lib/constants';

const iconMap = {
  award: Award,
  globe: Globe,
  clock: Clock,
};

export function USPSection() {
  return (
    <Section background="gray">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {USP_POINTS.map((usp, index) => {
          const Icon = iconMap[usp.icon as keyof typeof iconMap];
          return (
            <Card key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-50 rounded-full">
                  <Icon className="text-primary-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-display mb-2">
                {usp.title}
              </h3>
              <p className="text-neutral-600">
                {usp.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
