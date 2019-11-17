import guid from '../utilities/guid';
import Controls from '../components/pages/controls/_container';
import Hooks from '../components/pages/hooks/container';
import About from '../components/pages/about/container';
import RenderProps from '../components/pages/render-props/container';
import Hoc from '../components/pages/hoc/container';
import This from '../components/pages/this/container';
import WebComponents from '../components/pages/web-components/container';
import Lifecycle from '../components/pages/lifecycle/container';
import Playground from '../components/pages/playground/Playground';

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
