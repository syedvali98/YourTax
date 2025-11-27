import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { TeamSection } from '@/components/about/TeamSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About Us - YourTax Services',
  description: 'Learn about our experienced team and the values that drive our commitment to exceptional tax services.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            Your trusted tax partner for over two decades
          </p>
        </div>
      </Section>

      {/* Company Story */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-lg text-neutral-700">
            <p>
              Since 2003, we've been dedicated to providing exceptional tax services to
              individuals and businesses across the United States. Our journey began with
              a simple mission: to make tax compliance easier and more accessible for
              Indian-Americans navigating the complex US tax system.
            </p>
            <p>
              Over the years, we've grown from a small practice to a comprehensive tax
              consulting firm, serving thousands of clients and filing tens of thousands
              of tax returns. Our success is built on trust, expertise, and an unwavering
              commitment to our clients' financial well-being.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-neutral-700">
              To provide professional, accurate, and timely tax services while building
              lasting relationships with our clients through integrity, expertise, and
              exceptional service.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-neutral-700">
              To be the most trusted tax consulting partner for Indian-Americans,
              leveraging technology and expertise to deliver seamless, stress-free tax
              solutions.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <ValuesSection />

      {/* Team */}
      <TeamSection />

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg mb-2">IRS-Certified Professionals</h3>
                <p className="text-neutral-600">Our team includes Enrolled Agents and registered tax preparers</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg mb-2">22+ Years Experience</h3>
                <p className="text-neutral-600">Proven track record with thousands of successful filings</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg mb-2">100% Online Service</h3>
                <p className="text-neutral-600">Secure portal access from anywhere in the world</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg mb-2">Audit Support</h3>
                <p className="text-neutral-600">Complimentary audit defense for all filed returns</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
