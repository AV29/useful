import guid from '../utilities/guid';

export default {
  root: {
    id: guid(),
    name: 'Useful Things with React',
    path: '/'
  },
  calc: {
    id: guid(),
    name: 'Controls',
    path: '/controls',
    icon: 'controls'
  },
  hooks: {
    id: guid(),
    name: 'Hooks Examples',
    path: '/hooks',
    icon: 'hook'
  },
  renderProps: {
    id: guid(),
    name: 'Render Props Example',
    path: '/render-props',
    icon: 'renderProp'
  },
  about: {
    id: guid(),
    name: 'About',
    path: '/about',
    icon: 'about'
  }
};
