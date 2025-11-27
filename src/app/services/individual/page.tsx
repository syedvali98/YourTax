import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CTASection } from '@/components/home/CTASection';
import { individualServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Individual Tax Services - YourTax Services',
  description: 'Expert tax services for individuals including tax planning, preparation, ITIN application, FBAR/FATCA filing, and more.',
};

export default function IndividualServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Individual Tax Services
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            Comprehensive tax solutions designed for individuals and families
          </p>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-neutral-700">
            Whether you're filing a simple return or dealing with complex tax situations
            involving foreign accounts, investments, or multi-state income, our experienced
            professionals are here to help. We specialize in serving the unique needs of
            Indian-Americans navigating the US tax system.
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

      {/* CTA */}
      <CTASection />
    </>
  );
}
