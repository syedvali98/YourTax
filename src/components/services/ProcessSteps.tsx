import { Section } from '@/components/ui/Section';
import type { ProcessStep } from '@/lib/types';

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
          How It Works
        </h2>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.step} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl font-display">
                  {step.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold font-display mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
