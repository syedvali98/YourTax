'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();

    // Clear success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold font-display mb-6">Send Us a Message</h2>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name *"
            {...register('name', { required: 'Name is required' })}
            error={errors.name?.message}
            placeholder="John Doe"
          />

          <Input
            label="Email *"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            error={errors.email?.message}
            placeholder="john@example.com"
          />

          <Input
            label="Phone *"
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            error={errors.phone?.message}
            placeholder="+1 (555) 123-4567"
          />

          <Input
            label="Subject *"
            {...register('subject', { required: 'Subject is required' })}
            error={errors.subject?.message}
            placeholder="How can we help you?"
          />

          <Textarea
            label="Message *"
            rows={5}
            {...register('message', { required: 'Message is required' })}
            error={errors.message?.message}
            placeholder="Tell us more about your tax needs..."
          />

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      )}
    </Card>
  );
}
