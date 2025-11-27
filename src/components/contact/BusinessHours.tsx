import { Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { contactInfo } from '@/data/contact';

export function BusinessHours() {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-primary-600" size={20} />
        <h3 className="text-xl font-semibold font-display">Business Hours</h3>
      </div>

      <div className="space-y-2">
        {contactInfo.businessHours.map((item, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="font-medium text-neutral-900">{item.day}</span>
            <span className="text-neutral-600">{item.hours}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
