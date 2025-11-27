import type { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ProcessSteps } from '@/components/services/ProcessSteps';
import { CTASection } from '@/components/home/CTASection';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'ITIN Application Processing - YourTax Services',
  description: 'Expert ITIN application services. IRS-approved Certifying Acceptance Agents for Individual Tax Identification Numbers.',
};

export default function ITINApplicationPage() {
  const service = getServiceBySlug('itin-application');

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
