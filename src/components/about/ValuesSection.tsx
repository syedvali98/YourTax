import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ShieldCheck, Star, Users, Lightbulb } from 'lucide-react';
import { COMPANY_VALUES } from '@/lib/constants';

const iconMap = {
  'shield-check': ShieldCheck,
  star: Star,
  users: Users,
  lightbulb: Lightbulb,
};

export function ValuesSection() {
  return (
    <Section background="gray" id="values">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Our Values
        </h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          The principles that guide everything we do
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {COMPANY_VALUES.map((value, index) => {
          const Icon = iconMap[value.icon as keyof typeof iconMap];
          return (
            <Card key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-50 rounded-full">
                  <Icon className="text-primary-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-display mb-2">
                {value.title}
              </h3>
              <p className="text-neutral-600 text-sm">
                {value.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
