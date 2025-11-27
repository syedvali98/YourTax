import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CTASection } from '@/components/home/CTASection';
import { businessServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Business Tax Services - YourTax Services',
  description: 'Professional tax solutions for businesses. S-Corp, LLC tax planning, bookkeeping, payroll, and incorporation services.',
};

export default function BusinessServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Business Tax Services
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            Professional tax solutions for businesses of all sizes
          </p>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-neutral-700">
            From business formation to tax planning and compliance, we provide comprehensive
            services to help your business thrive. Our experienced team specializes in
            S-Corporations, LLCs, partnerships, and small to medium-sized businesses.
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
