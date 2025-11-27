import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CTASection } from '@/components/home/CTASection';
import { individualServices, businessServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Tax Services - YourTax Services',
  description: 'Comprehensive tax solutions for individuals and businesses. Expert tax planning, preparation, and filing services.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Tax Services
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            Comprehensive tax solutions tailored to your needs
          </p>
        </div>
      </Section>

      {/* Individual Services */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Individual Tax Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Expert tax services designed for individuals and families
          </p>
        </div>

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
      </Section>

      {/* Business Services */}
      <Section background="gray">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Business Tax Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Professional tax solutions for businesses of all sizes
          </p>
        </div>

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
      </Section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
