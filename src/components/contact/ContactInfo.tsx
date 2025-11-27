import { Phone, Mail, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { contactInfo } from '@/data/contact';

export function ContactInfo() {
  return (
    <Card>
      <h2 className="text-2xl font-bold font-display mb-6">Contact Information</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <Phone className="text-primary-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-neutral-900">Phone</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <Mail className="text-primary-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-neutral-900">Email</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <MapPin className="text-primary-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-neutral-900">Address</p>
            <p className="text-neutral-600">
              {contactInfo.address.street}<br />
              {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
