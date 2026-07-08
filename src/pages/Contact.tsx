import { profile } from '../data/profile';
import ContactDetails from '../components/contact/ContactDetails';
import OpenToWork from '../components/contact/OpenToWork';
import Resume from '../components/contact/Resume';

function Contact() {
  return (
    <div className='space-y-12'>
      <section>
        <p className='text-sm font-medium text-accent'>Contact</p>

        <h1 className='mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl'>
          Let’s get in touch
        </h1>

        <p className='mt-6 max-w-3xl text-lg leading-8 text-text-secondary'>
          {profile.openToWork} The best way to contact me is by email or through LinkedIn.
        </p>
      </section>

      <section className='grid gap-6 lg:grid-cols-[1fr_0.85fr]'>
        <ContactDetails />

        <div className='flex flex-col gap-4'>
          <OpenToWork />

          <Resume />
        </div>
      </section>
    </div>
  );
}

export default Contact;
