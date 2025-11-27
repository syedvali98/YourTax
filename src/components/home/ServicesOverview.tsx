import { Section } from '@/components/ui/Section';
import { ServiceCard } from '@/components/services/ServiceCard';
import { individualServices, businessServices } from '@/data/services';

export function ServicesOverview() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
          Our Services
        </h2>
        <p className="text-xl text-neutral-600">
          Comprehensive tax solutions for individuals and businesses
        </p>
      </div>

      {/* Individual Services */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center">
          Individual Tax Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {individualServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services/individual/${service.slug}`}
            />
          ))}
        </div>
      </div>

      {/* Business Services */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center">
          Business Tax Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {businessServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services/business/${service.slug}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
