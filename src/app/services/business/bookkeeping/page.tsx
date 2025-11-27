import type { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ProcessSteps } from '@/components/services/ProcessSteps';
import { CTASection } from '@/components/home/CTASection';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Accounting & Bookkeeping Services - YourTax Services',
  description: 'Professional bookkeeping and financial record maintenance. QuickBooks support and monthly accounting.',
};

export default function BookkeepingPage() {
  const service = getServiceBySlug('bookkeeping');

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
