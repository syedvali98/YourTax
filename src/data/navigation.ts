import type { NavLink } from '@/lib/types';

export const mainNavigation: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { label: 'All Services', href: '/services' },
      { label: 'Individual Services', href: '/services/individual' },
      { label: 'Business Services', href: '/services/business' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  about: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Our Values', href: '/about#values' },
  ],
  services: [
    { label: 'Individual Services', href: '/services/individual' },
    { label: 'Business Services', href: '/services/business' },
    { label: 'All Services', href: '/services' },
  ],
  company: [
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/contact#faqs' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};
