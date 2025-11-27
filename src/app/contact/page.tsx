import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { BusinessHours } from '@/components/contact/BusinessHours';

export const metadata: Metadata = {
  title: 'Contact Us - YourTax Services',
  description: 'Get in touch with our tax professionals. Contact us for expert tax services and consultation.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700">
            We're here to help with your tax needs
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right Column - Contact Info & Hours */}
          <div className="space-y-6">
            <ContactInfo />
            <BusinessHours />
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gray">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Our Location
          </h2>
          <p className="text-lg text-neutral-600">
            Visit us at our Sterling, VA office
          </p>
        </div>

        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.42!2d-77.4286!3d38.9956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e9b98e9ba63%3A0x1f6d70f76ff9ad49!2sSterling%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sterling, VA location"
          />
        </div>
      </Section>

      {/* Additional Contact Methods */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
            Additional Ways to Reach Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-semibold font-display mb-2">Call Us</h3>
              <p className="text-sm text-neutral-600">Available during business hours for immediate assistance</p>
            </div>

            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="font-semibold font-display mb-2">Email Us</h3>
              <p className="text-sm text-neutral-600">Send us your questions anytime, we'll respond within 24 hours</p>
            </div>

            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold font-display mb-2">Schedule a Consultation</h3>
              <p className="text-sm text-neutral-600">Book a free consultation to discuss your tax needs</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
