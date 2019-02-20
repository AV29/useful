import guid from '../utilities/guid';
import Controls from '../components/pages/contols/Controls';
import Hooks from '../components/pages/hooks/Hooks';
import About from '../components/pages/about/About';
import RenderProps from '../components/pages/render-props/RenderProps';
import Hoc from '../components/pages/hoc/Hoc';
import This from '../components/pages/this/This';
import Lifecycle from '../components/pages/lifecycle/Lifecycle';

export default [
  {
    id: guid(),
    name: 'Controls',
    path: '/controls',
    icon: 'controls',
    component: Controls
  },
  {
    id: guid(),
    name: 'Hooks',
    path: '/hooks',
    icon: 'hook',
    component: Hooks
  },
  {
    id: guid(),
    name: 'Render Props',
    path: '/render-props',
    icon: 'renderProp',
    component: RenderProps
  },
  {
    id: guid(),
    name: 'Lifecycle',
    path: '/lifecycle',
    icon: 'lifecycle',
    component: Lifecycle
  },
  {
    id: guid(),
    name: 'High Order Components',
    path: '/hoc',
    icon: 'hoc',
    component: Hoc
  },
  {
    id: guid(),
    name: 'This issues',
    path: '/this',
    icon: 'javascript',
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
