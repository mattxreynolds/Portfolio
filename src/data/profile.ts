import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socials = [
  {
    icon: FaGithub,
    href: 'https://github.com/mattxreynolds',
    label: 'GitHub'
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/matt-reynolds-8787453b0/',
    label: 'LinkedIn'
  },
  {
    icon: MdEmail,
    href: 'mailto:matt.j.reynolds@iinet.net.au',
    label: 'Email'
  }
];

export const profile = {
  name: 'Matt Reynolds',
  role: 'Computer Science Student & Aspiring Full Stack Developer',
  location: 'Canberra, Australia',
  email: 'matt.j.reynolds@iinet.net.au',
  socials: socials,
  resumeUrl: '#',
  isResumeAvailable: true,
  openToWork: 'Open to junior developer, graduate developer, and internship opportunities.',
  shortIntro:
    'I enjoy building practical full stack applications and improving my ability to work across the frontend, backend, database, and deployment process.',
  education: {
    degree: 'Computer Science',
    institution: 'Australian National University',
    graduation: 'End of 2026'
  },
  hobbies: ['TBD']
};
