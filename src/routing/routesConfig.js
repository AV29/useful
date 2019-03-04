import guid from '../utilities/guid';
import Controls from '../components/pages/contols/container';
import Hooks from '../components/pages/hooks/container';
import About from '../components/pages/about/container';
import RenderProps from '../components/pages/render-props/container';
import Hoc from '../components/pages/hoc/container';
import This from '../components/pages/this/container';
import Lifecycle from '../components/pages/lifecycle/container';

export default [
  {
    id: guid(),
    name: 'Controls',
    path: '/controls',
    icon: 'controls',
    description: 'Examples Of Different Controls',
    component: Controls
  },
  {
    id: guid(),
    name: 'Hooks',
    path: '/hooks',
    icon: 'hook',
    description: 'React Hooks (new feature)',
    component: Hooks
  },
  {
    id: guid(),
    name: 'Render Props',
    path: '/render-props',
    icon: 'renderProp',
    description: 'FACC (function as a child component) examples',
    component: RenderProps
  },
  {
    id: guid(),
    name: 'Lifecycle',
    path: '/lifecycle',
    icon: 'lifecycle',
    description: 'Demonstration of lifecycle methods of React Components',
    component: Lifecycle
  },
  {
    id: guid(),
    name: 'High Order Components',
    path: '/hoc',
    icon: 'hoc',
    description: 'Examples for High Order Components',
    component: Hoc
  },
  {
    id: guid(),
    name: 'This issues',
    path: '/this',
    icon: 'javascript',
    description: 'Caveats with "this" and different kinds of loos of information',
    component: This
  },
  {
    id: guid(),
    name: 'About',
    path: '/about',
    icon: 'about',
    component: About
  }
];
