import type { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ProcessSteps } from '@/components/services/ProcessSteps';
import { CTASection } from '@/components/home/CTASection';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Tax Extension Filing - YourTax Services',
  description: 'Tax deadline extension assistance. Expert Form 4868 filing and extension planning services.',
};

export default function TaxExtensionsPage() {
  const service = getServiceBySlug('tax-extensions');

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
