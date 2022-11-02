import { Project } from '../models/projects.models';

export const PROJECTS: Project[] = [
  {
    name: 'DoggoDex',
    link: 'https://intense-meadow-15815.herokuapp.com/',
    githubLink: 'https://github.com/jaaguil2/DoggoDex',
    image: './assets/images/doggo-dex.png',
    notes:
      'One of my first big projects I made with the React framework. Hosted on Heroku, so the server might need time to "wake up".',
  },
  {
    name: 'MyMind',
    link: 'https://mymind-fe.herokuapp.com/signin',
    githubLink: 'https://github.com/jaaguil2/MyMind',
    image: './assets/images/my-mind.png',
    notes: 'My first Angular project. Hosted on Heroku, so the server might need time to "wake up".',
  },
];
