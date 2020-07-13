import React from 'react';
import Icon from '../../reusable/icon/Icon';

export default [
  {
    id: '1',
    icon: <Icon size={10} icon='refresh' />,
    component: () => 'Test 1',
    items: [
      {
        id: '1_1',
        component: () => 'Test 1 1',
        path: '/observables'
      },
      {
        id: '1_2',
        component: () => 'Test 1 2',
        path: '/observables'
      }
    ]
  },
  {
    id: '2',
    icon: <Icon size={10} icon='refresh' />,
    component: () => 'Test 2',
    items: [
      {
        id: '2_1',
        component: () => 'Test 2 1',
        path: '/observables'
      },
      {
        id: '2_2',
        component: () => 'Test 2 2',
        path: '/observables'
      },
      {
        id: '2_3',
        component: () => 'Test 2 3',
        path: '/observables'
      },
      {
        id: '2_4',
        component: () => 'Test 2 4',
        path: '/observables'
      },
      {
        id: '2_5',
        component: () => 'Test 2 5',
        path: '/observables'
      }
    ]
  },
  {
    id: '3',
    icon: <Icon size={10} icon='refresh' />,
    component: () => 'Test 3',
    items: [
      {
        id: '3_1',
        component: () => 'Test 3 1',
        items: [{
          id: '3_1_1',
          component: () => 'Test 3 1 1',
          path: '/observables'
        }]
      },
      {
        id: '3_2',
        component: () => 'Test 3 2',
        items: [
          {
            id: '3_2_1',
            component: () => 'Test 3 2 1',
            path: '/observables'
          },
          {
            id: '3_2_2',
            component: () => 'Test 3 2 2',
            path: '/observables',
            items: [
              {
                id: '3_2_2_1',
                component: () => 'Test 3 2 2 1',
                path: '/observables'
              },
              {
                id: '3_2_2_2',
                component: () => 'Test 3 2 2 2',
                path: '/observables'
              }
            ]
          }]
      }]
  }
];
