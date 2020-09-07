import React from 'react';
import guid from '../utilities/guid';

const Controls = React.lazy(() => import('../components/pages/controls/_container'));
const Hooks = React.lazy(() => import('../components/pages/hooks/_container'));
const About = React.lazy(() => import('../components/pages/about/_container'));
const RenderProps = React.lazy(() => import('../components/pages/render-props/_container'));
const Hoc = React.lazy(() => import('../components/pages/hoc/_container'));
const This = React.lazy(() => import('../components/pages/this/_container'));
const WebComponents = React.lazy(() => import('../components/pages/web-components/_container'));
const Lifecycle = React.lazy(() => import('../components/pages/lifecycle/_container'));
const Observables = React.lazy(() => import('../components/pages/observables/Observables'));
const Playground = React.lazy(() => import('../components/pages/playground/Playground'));

export default [
  {
    id: guid(),
    path: '/controls',
    icon: 'controls',
    nameKey: 'controlsName',
    descriptionKey: 'controlsDescription',
    component: Controls
  },
  {
    id: guid(),
    path: '/hooks',
    icon: 'hook',
    nameKey: 'hooksName',
    descriptionKey: 'hooksDescription',
    component: Hooks
  },
  {
    id: guid(),
    path: '/render-props',
    icon: 'renderProp',
    nameKey: 'renderPropsName',
    descriptionKey: 'renderPropsDescription',
    component: RenderProps
  },
  {
    id: guid(),
    path: '/lifecycle',
    icon: 'lifecycle',
    nameKey: 'lifecycleName',
    descriptionKey: 'lifecycleDescription',
    component: Lifecycle
  },
  {
    id: guid(),
    path: '/hoc',
    icon: 'hoc',
    nameKey: 'hocName',
    descriptionKey: 'hocDescription',
    component: Hoc
  },
  {
    id: guid(),
    path: '/this',
    icon: 'javascript',
    nameKey: 'thisName',
    descriptionKey: 'thisDescription',
    component: This
  },
  {
    id: guid(),
    path: '/web-components',
    icon: 'webComponents',
    nameKey: 'webComponentsName',
    descriptionKey: 'webComponentsDescription',
    component: WebComponents
  },
  {
    id: guid(),
    nameKey: 'observables',
    path: '/observables',
    icon: 'observables',
    component: Observables
  },
  {
    id: guid(),
    nameKey: 'playground',
    path: '/playground',
    icon: 'playground',
    component: Playground
  },
  {
    id: guid(),
    nameKey: 'about',
    path: '/about',
    icon: 'about',
    component: About
  }
];
