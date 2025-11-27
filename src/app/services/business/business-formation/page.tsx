import type { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ProcessSteps } from '@/components/services/ProcessSteps';
import { CTASection } from '@/components/home/CTASection';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Business Formation Consulting - YourTax Services',
  description: 'Expert business incorporation and entity formation services. LLC, S-Corp setup and consulting.',
};

export default function BusinessFormationPage() {
  const service = getServiceBySlug('business-formation');

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero
        title={service.title}
        description={service.longDescription}
        features={service.features}
      />
      <ProcessSteps steps={service.processSteps} />
      <CTASection />
    </>
  );
}
