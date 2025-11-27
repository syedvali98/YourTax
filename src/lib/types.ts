// Service types
export interface Service {
  id: string;
  slug: string;
  category: 'individual' | 'business';
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  processSteps: ProcessStep[];
  pricing?: string;
  faqs?: FAQ[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Team types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

// Navigation types
export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}

// Contact types
export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  businessHours: {
    day: string;
    hours: string;
  }[];
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// USP types
export interface USPPoint {
  title: string;
  description: string;
  icon: string;
}
