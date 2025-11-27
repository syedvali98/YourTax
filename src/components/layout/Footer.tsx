import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { footerNavigation } from '@/data/navigation';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">
              About
            </h3>
            <ul className="space-y-2">
              {footerNavigation.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerNavigation.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
