import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

interface ServiceHeroProps {
  title: string;
  description: string;
  features: string[];
}

export function ServiceHero({ title, description, features }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 mb-8">
            {description}
          </p>

          {/* Key Benefits */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold font-display mb-4">Key Benefits:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.slice(0, 6).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button asChild size="lg">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
