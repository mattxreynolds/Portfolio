import MainStack from '../components/skills/MainStack';
import SkillsGrid from '../components/skills/SkillsGrid';

function Skills() {
  return (
    <div className='space-y-12'>
      <section>
        <p className='text-sm font-medium text-accent'>Skills</p>

        <h1 className='mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl'>
          Skills & Tools
        </h1>

        <p className='mt-6 max-w-3xl text-lg leading-8 text-text-secondary'>
          Technologies I have worked with and learned. The list is always evolving.
        </p>
      </section>

      <MainStack />

      <SkillsGrid />
    </div>
  );
}

export default Skills;
