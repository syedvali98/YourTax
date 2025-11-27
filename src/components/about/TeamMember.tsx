import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { TeamMember as TeamMemberType } from '@/lib/types';

export function TeamMember({ name, role, bio, image, linkedin }: TeamMemberType) {
  return (
    <Card className="text-center h-full">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold font-display mb-1 text-neutral-900">
        {name}
      </h3>
      <p className="text-primary-600 font-medium mb-3">{role}</p>
      <p className="text-neutral-600 text-sm mb-4">{bio}</p>
      {linkedin && (
        <a
          href={linkedin}
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <Linkedin size={18} />
          <span className="text-sm font-medium">Connect</span>
        </a>
      )}
    </Card>
  );
}
