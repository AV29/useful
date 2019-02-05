import guid from '../utilities/guid';

export default {
  root: {
    id: guid(),
    name: 'Useful Apps',
    path: '/'
  },
  calc: {
    id: guid(),
    name: 'Money Calculator',
    path: '/calculator',
    icon: 'budget'
  },
  hooks: {
    id: guid(),
    name: 'Hooks Example',
    path: '/hooks',
    icon: 'hook'
  },
  about: {
    id: guid(),
    name: 'About',
    path: '/about',
    icon: 'about'
  }
};
