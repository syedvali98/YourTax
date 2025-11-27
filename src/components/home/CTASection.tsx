import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export function CTASection() {
  return (
    <Section className="bg-gradient-to-r from-primary-600 to-accent-500">
      <div className="text-center text-white py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Ready to Simplify Your Taxes?
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Get started today and experience hassle-free tax services
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">Get Your Free Consultation</Link>
        </Button>
      </div>
    </Section>
  );
}
