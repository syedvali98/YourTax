import { Section } from '@/components/ui/Section';
import { TeamMember } from './TeamMember';
import { teamMembers } from '@/data/team';

export function TeamSection() {
  return (
    <Section id="team">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Meet Our Team
        </h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Our experienced professionals are dedicated to providing you with exceptional tax services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </Section>
  );
}
