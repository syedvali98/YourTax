import type { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ProcessSteps } from '@/components/services/ProcessSteps';
import { CTASection } from '@/components/home/CTASection';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'FBAR & FATCA Compliance - YourTax Services',
  description: 'Foreign account reporting compliance. Expert FBAR and FATCA filing assistance for international accounts.',
};

export default function FBARFATCAPage() {
  const service = getServiceBySlug('fbar-fatca');

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
