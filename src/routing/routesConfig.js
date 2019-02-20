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
  hoc: {
    id: guid(),
    name: 'High Order Components',
    path: '/hoc',
    icon: 'hoc'
  },
  context: {
    id: guid(),
    name: 'This issues',
    path: '/this',
    icon: 'javascript'
  },
  about: {
    id: guid(),
    name: 'About',
    path: '/about',
    icon: 'about'
  }
};
