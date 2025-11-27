import type { ContactInfo } from '@/lib/types';

export const contactInfo: ContactInfo = {
  phone: '+1-888-TAX-HELP',
  email: 'info@yourtaxservices.com',
  address: {
    street: '123 Business Plaza',
    city: 'Sterling',
    state: 'VA',
    zip: '20164',
  },
  businessHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  socialMedia: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  },
};
