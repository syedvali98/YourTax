import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { USPSection } from '@/components/home/USPSection';
import { StatsSection } from '@/components/home/StatsSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <USPSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
