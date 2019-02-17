import guid from '../utilities/guid';

export default {
  root: {
    id: guid(),
    name: 'Useful Things with React',
    path: '/'
  },
  controls: {
    id: guid(),
    name: 'Controls',
    path: '/controls',
    icon: 'controls'
  },
  hooks: {
    id: guid(),
    name: 'Hooks',
    path: '/hooks',
    icon: 'hook'
  },
  renderProps: {
    id: guid(),
    name: 'Render Props',
    path: '/render-props',
    icon: 'renderProp'
  },
  lifecycle: {
    id: guid(),
    name: 'Lifecycle',
    path: '/lifecycle',
    icon: 'lifecycle'
  },
  about: {
    id: guid(),
    name: 'About',
    path: '/about',
    icon: 'about'
  }
};
