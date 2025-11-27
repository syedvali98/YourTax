import type { Service } from '@/lib/types';

// Individual Services
export const individualServices: Service[] = [
  {
    id: '1',
    slug: 'tax-planning',
    category: 'individual',
    title: 'Tax Planning & Advisory',
    shortDescription: 'Strategic tax planning to minimize your tax liability and maximize savings',
    longDescription: 'Our comprehensive tax planning services help you make informed financial decisions throughout the year. We provide strategic guidance to minimize your tax liability while ensuring full compliance with all regulations.',
    icon: 'calculator',
    features: [
      'Year-round tax strategy consultation',
      'Income tax optimization',
      'Deduction maximization strategies',
      'Investment tax planning',
      'Retirement planning guidance',
      'Estate and gift tax planning',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We review your financial situation, income sources, and tax goals to understand your unique needs.',
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Our experts create a customized tax plan tailored to your specific circumstances and objectives.',
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'We guide you through implementing the tax strategies and provide ongoing support.',
      },
      {
        step: 4,
        title: 'Monitoring & Adjustment',
        description: 'Regular reviews ensure your tax plan remains optimized as your situation evolves.',
      },
    ],
  },
  {
    id: '2',
    slug: 'tax-returns',
    category: 'individual',
    title: 'Tax Return Services',
    shortDescription: 'Professional evaluation and processing of individual tax returns',
    longDescription: 'Expert tax return preparation ensuring accuracy, compliance, and maximum refunds. Our certified professionals handle complex tax situations with precision and care.',
    icon: 'file-text',
    features: [
      'Complete tax return preparation',
      'Federal and state tax filing',
      'Accuracy guarantee',
      'E-filing for faster refunds',
      'Form 1040 and all schedules',
      'Prior year amendments',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Document Collection',
        description: 'Securely upload your W-2s, 1099s, and other tax documents through our portal.',
      },
      {
        step: 2,
        title: 'Return Preparation',
        description: 'Our tax professionals prepare your return with meticulous attention to detail.',
      },
      {
        step: 3,
        title: 'Review & Approval',
        description: 'Review your completed return and ask questions before final submission.',
      },
      {
        step: 4,
        title: 'E-Filing',
        description: 'We electronically file your return and track your refund status.',
      },
    ],
  },
  {
    id: '3',
    slug: 'itin-application',
    category: 'individual',
    title: 'ITIN Application Processing',
    shortDescription: 'Individual Tax Identification Number processing for qualified applicants',
    longDescription: 'We are IRS-approved Certifying Acceptance Agents specializing in obtaining US Individual Taxpayer Identification Numbers (ITINs) for all qualifying applicants.',
    icon: 'user-check',
    features: [
      'ITIN application preparation',
      'Document certification',
      'Form W-7 assistance',
      'Renewal services',
      'Family ITIN processing',
      'Fast-track options available',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Eligibility Review',
        description: 'We determine your eligibility and gather required documentation.',
      },
      {
        step: 2,
        title: 'Application Preparation',
        description: 'Complete Form W-7 preparation with supporting documents.',
      },
      {
        step: 3,
        title: 'Document Certification',
        description: 'As CAAs, we certify your documents without needing to send originals to IRS.',
      },
      {
        step: 4,
        title: 'Submission & Follow-up',
        description: 'We submit your application and track it until you receive your ITIN.',
      },
    ],
  },
  {
    id: '4',
    slug: 'fbar-fatca',
    category: 'individual',
    title: 'FBAR & FATCA Compliance',
    shortDescription: 'Foreign account reporting compliance and filing assistance',
    longDescription: 'Expert guidance on Foreign Bank Account Report (FBAR) and Foreign Account Tax Compliance Act (FATCA) requirements for international accounts.',
    icon: 'globe',
    features: [
      'FBAR filing (FinCEN 114)',
      'FATCA Form 8938 preparation',
      'Multi-country account reporting',
      'Penalty abatement assistance',
      'Streamlined filing procedures',
      'Ongoing compliance monitoring',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Account Assessment',
        description: 'Review all foreign financial accounts and determine reporting requirements.',
      },
      {
        step: 2,
        title: 'Data Collection',
        description: 'Gather account statements and maximum balance information.',
      },
      {
        step: 3,
        title: 'Form Preparation',
        description: 'Complete FinCEN 114 and Form 8938 with accurate account details.',
      },
      {
        step: 4,
        title: 'Filing & Confirmation',
        description: 'Submit reports electronically and provide confirmation receipts.',
      },
    ],
  },
  {
    id: '5',
    slug: 'tax-extensions',
    category: 'individual',
    title: 'Tax Extension Filing',
    shortDescription: 'Tax deadline extension assistance and planning',
    longDescription: 'Need more time to file? We handle Form 4868 extensions giving you up to six additional months while ensuring compliance.',
    icon: 'clock',
    features: [
      'Form 4868 preparation',
      'Federal extension filing',
      'State extension coordination',
      'Extension payment calculation',
      'Deadline tracking',
      'Penalty avoidance guidance',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Extension Request',
        description: 'Determine extension needs and estimate tax liability.',
      },
      {
        step: 2,
        title: 'Form Filing',
        description: 'Prepare and electronically file Form 4868 before the deadline.',
      },
      {
        step: 3,
        title: 'Payment Processing',
        description: 'Calculate and submit any required tax payments to avoid penalties.',
      },
    ],
  },
  {
    id: '6',
    slug: 'tax-preparation',
    category: 'individual',
    title: 'Full Tax Preparation',
    shortDescription: 'Comprehensive tax preparation and filing support',
    longDescription: 'Complete tax preparation services from document collection to final filing, with expert support at every step.',
    icon: 'briefcase',
    features: [
      'All income types accepted',
      'Itemized deductions',
      'Self-employment income',
      'Rental property reporting',
      'Investment income',
      'Credits and deductions maximization',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Information Gathering',
        description: 'Collect all tax documents including income statements and receipts.',
      },
      {
        step: 2,
        title: 'Tax Interview',
        description: 'Discuss life changes, new income sources, and deduction opportunities.',
      },
      {
        step: 3,
        title: 'Preparation & Review',
        description: 'Prepare your return and review it together to ensure accuracy.',
      },
      {
        step: 4,
        title: 'Filing & Support',
        description: 'File electronically and provide post-filing support for any questions.',
      },
    ],
  },
];

// Business Services
export const businessServices: Service[] = [
  {
    id: '7',
    slug: 'tax-return-planning',
    category: 'business',
    title: 'Tax Return Planning & Preparation',
    shortDescription: 'Comprehensive business tax planning, preparation, and filing services',
    longDescription: 'Expert business tax services for S-Corporations, LLCs, and partnerships. We handle complex tax situations including AMT, CAT filing, Form 1099 generation, and more.',
    icon: 'building',
    features: [
      'S-Corporation tax returns',
      'LLC and Partnership returns',
      'Corporate tax planning',
      'AMT and CAT filing',
      'Form 1099 preparation',
      'Multi-state filing',
      'Quarterly estimated taxes',
      'Tax projection and planning',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Business Analysis',
        description: 'Review your business structure, income, expenses, and tax situation.',
      },
      {
        step: 2,
        title: 'Strategic Planning',
        description: 'Develop tax-saving strategies specific to your business type and industry.',
      },
      {
        step: 3,
        title: 'Return Preparation',
        description: 'Prepare accurate business tax returns with all required forms and schedules.',
      },
      {
        step: 4,
        title: 'Filing & Compliance',
        description: 'File returns on time and ensure ongoing compliance with tax regulations.',
      },
      {
        step: 5,
        title: 'Year-Round Support',
        description: 'Provide ongoing advisory services and represent you if needed.',
      },
    ],
  },
  {
    id: '8',
    slug: 'business-formation',
    category: 'business',
    title: 'Business Formation Consulting',
    shortDescription: 'Entity formation guidance and incorporation services',
    longDescription: 'Professional guidance on choosing the right business structure and complete incorporation services.',
    icon: 'rocket',
    features: [
      'Entity selection advice',
      'LLC formation',
      'S-Corp elections',
      'EIN registration',
      'Operating agreements',
      'State registration',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Discuss your business goals and recommend optimal entity structure.',
      },
      {
        step: 2,
        title: 'Formation',
        description: 'Handle all paperwork and file with appropriate authorities.',
      },
      {
        step: 3,
        title: 'Setup',
        description: 'Obtain EIN, set up business accounts, and establish compliance.',
      },
    ],
  },
  {
    id: '9',
    slug: 'bookkeeping',
    category: 'business',
    title: 'Accounting & Bookkeeping',
    shortDescription: 'Professional bookkeeping and financial record maintenance',
    longDescription: 'Comprehensive bookkeeping services to keep your financial records accurate and up-to-date.',
    icon: 'book-open',
    features: [
      'Monthly bookkeeping',
      'Financial statement preparation',
      'Accounts payable/receivable',
      'Bank reconciliation',
      'Expense tracking',
      'QuickBooks support',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Setup',
        description: 'Configure your accounting system and chart of accounts.',
      },
      {
        step: 2,
        title: 'Monthly Processing',
        description: 'Record transactions, reconcile accounts, and maintain books.',
      },
      {
        step: 3,
        title: 'Reporting',
        description: 'Provide financial statements and insights for decision-making.',
      },
    ],
  },
  {
    id: '10',
    slug: 'payroll-services',
    category: 'business',
    title: 'Payroll Processing',
    shortDescription: 'Complete payroll management and compliance services',
    longDescription: 'Efficient payroll processing ensuring employees are paid accurately and on time while maintaining compliance.',
    icon: 'dollar-sign',
    features: [
      'Payroll processing',
      'Tax withholding calculation',
      'Direct deposit setup',
      'W-2 and 1099 preparation',
      'Payroll tax filing',
      'Compliance monitoring',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Onboarding',
        description: 'Set up employees, tax information, and payment schedules.',
      },
      {
        step: 2,
        title: 'Processing',
        description: 'Calculate wages, taxes, and deductions for each pay period.',
      },
      {
        step: 3,
        title: 'Filing & Compliance',
        description: 'File payroll taxes and maintain compliance with regulations.',
      },
    ],
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return [...individualServices, ...businessServices].find(
    (service) => service.slug === slug
  );
};

// Helper function to get services by category
export const getServicesByCategory = (category: 'individual' | 'business'): Service[] => {
  return category === 'individual' ? individualServices : businessServices;
};
