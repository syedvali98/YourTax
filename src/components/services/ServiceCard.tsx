import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import {
  Calculator,
  FileText,
  UserCheck,
  Globe,
  Clock,
  Briefcase,
  Building,
  Rocket,
  BookOpen,
  DollarSign,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  calculator: Calculator,
  'file-text': FileText,
  'user-check': UserCheck,
  globe: Globe,
  clock: Clock,
  briefcase: Briefcase,
  building: Building,
  rocket: Rocket,
  'book-open': BookOpen,
  'dollar-sign': DollarSign,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Briefcase;

  return (
    <Link href={href} className="block h-full">
      <Card hover className="h-full flex flex-col">
        <div className="text-primary-600 mb-4">
          <IconComponent size={40} />
        </div>
        <h3 className="text-xl font-semibold font-display mb-2 text-neutral-900">
          {title}
        </h3>
        <p className="text-neutral-600 mb-4 flex-grow">
          {description}
        </p>
        <span className="text-primary-600 font-medium hover:underline inline-flex items-center">
          Learn More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </Card>
    </Link>
  );
}
