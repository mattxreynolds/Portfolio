import { Code2, ExternalLink, GraduationCap, Heart, Rocket } from 'lucide-react';
import AboutCard from './AboutCard';
import { profile } from '../../data/profile';
import { Link } from 'react-router';

function AboutCardsGrid() {
  return (
    <section className='grid auto-rows-fr gap-6 md:grid-cols-2'>
      <AboutCard icon={<Code2 size={22} />} title='Software development interests'>
        <p>
          I enjoy building practical full stack applications where I can work across the frontend,
          backend, database, and deployment process. I am especially focused on React, TypeScript,
          Node.js, Express and PostgreSQL.
        </p>
      </AboutCard>

      <AboutCard icon={<GraduationCap size={22} />} title='Education'>
        <div className='space-y-2'>
          <p>
            <span className='font-medium text-text-primary'>Degree:</span>{' '}
            {profile.education.degree}
          </p>

          <p>
            <span className='font-medium text-text-primary'>Specialisation:</span>{' '}
            {profile.education.specialisation}
          </p>

          <p>
            <span className='font-medium text-text-primary'>Institution:</span>{' '}
            {profile.education.institution}
          </p>

          <p>
            <span className='font-medium text-text-primary'>Expected graduation:</span>{' '}
            {profile.education.graduation}
          </p>
        </div>
      </AboutCard>

      <AboutCard icon={<Heart size={22} />} title='Hobbies'>
        <p>TODO</p>
      </AboutCard>

      <AboutCard icon={<Rocket size={22} />} title='Career direction'>
        <p>
          I am working towards junior developer, graduate developer, and internship opportunities
          where I can keep improving as a general software developer while building useful full
          stack applications.
        </p>

        <Link
          to='/contact'
          className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover'
        >
          Contact me
          <ExternalLink size={15} />
        </Link>
      </AboutCard>
    </section>
  );
}

export default AboutCardsGrid;
