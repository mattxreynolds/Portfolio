import { profile } from '../data/profile';
import AboutCardsGrid from '../components/about/AboutCardsGrid';
import MyStory from '../components/about/MyStory';

function About() {
  return (
    <div className='space-y-10'>
      <section>
        <p className='text-sm font-medium text-accent'>About</p>

        <h1 className='mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl'>
          A bit more about me
        </h1>

        <p className='mt-6 max-w-3xl text-lg leading-8 text-text-secondary'>{profile.shortIntro}</p>
      </section>

      <MyStory />

      <AboutCardsGrid />
    </div>
  );
}

export default About;
