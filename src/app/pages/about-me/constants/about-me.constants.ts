import { Institute, Knowledge, Skill } from '../models/about-me.interface';

export const PROFICIENCIES: Knowledge[] = [
  {
    name: 'Gitlab',
  },
  {
    name: 'Github',
  },
  {
    name: 'Atlassian Confluence',
  },
  {
    name: 'Atlassian Jira',
  },
  {
    name: 'Miro',
  },
];

export const LANGUAGES: Skill[] = [
  {
    name: 'Java',
    expertise: 2.5,
  },
  {
    name: 'Typescript',
    expertise: 4.5,
  },
  {
    name: 'Javascript',
    expertise: 4.5,
  },
  {
    name: 'Python',
    expertise: 4,
  },
  {
    name: 'CSS',
    expertise: 4,
  },
  {
    name: 'HTML',
    expertise: 4,
  },
];

export const FRAMEWORKS: Skill[] = [
  {
    name: 'Angular',
    expertise: 4.5,
  },
  {
    name: 'Angular Material',
    expertise: 4,
  },
  {
    name: 'Springboot',
    expertise: 2,
  },
  {
    name: 'React',
    expertise: 3,
  },
  {
    name: 'SCSS',
    expertise: 3.5,
  },
  {
    name: 'MongoDb',
    expertise: 2.5,
  },
  {
    name: 'SQL',
    expertise: 2,
  },
  {
    name: 'Git',
    expertise: 3.5,
  },
];

export const EDUCATION: Institute[] = [
  {
    name: 'General Assembly',
    notes: 'Coding bootcamp',
  },
  {
    name: 'Oregon State University',
    notes: 'In progress: 2/3 years',
  },
  {
    name: 'Codepath',
    notes: 'Interview prep & data structures/algorithms review',
  },
];
