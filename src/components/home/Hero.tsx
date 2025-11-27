import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-600 to-accent-500">
      <Container>
        <div className="max-w-3xl text-white py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
            Expert Tax Services for Indian-Americans
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            22 Years of Experience | 100% Online | Free Draft in 24 Hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white"
            >
              <Link href="/services">Learn More</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>IRS-Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Secure & Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
