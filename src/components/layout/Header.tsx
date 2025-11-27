'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-primary-600">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNavigation.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    'text-neutral-700 hover:text-primary-600 font-medium transition-colors',
                    pathname === link.href && 'text-primary-600'
                  )}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button asChild size="md">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="px-4 py-4 space-y-2">
            {mainNavigation.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors',
                    pathname === link.href && 'text-primary-600'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block py-1.5 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild size="md" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
