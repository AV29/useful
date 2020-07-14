import React from 'react';
import Icon from '../../reusable/icon/Icon';

export default [
  {
    id: '1',
    title: () => 'Europe',
    items: [
      {
        id: '1_1',
        title: () => 'Eastern',
        path: '/observables',
        items: [
          {
            id: '1_1_1',
            title: () => 'Russia',
            path: '/observables'
          },
          {
            id: '1_1_2',
            title: () => 'Belarus',
            path: '/observables'
          },
          {
            id: '1_1_3',
            title: () => 'Bulgaria',
            path: '/observables'
          },
          {
            id: '1_1_4',
            title: () => 'Hungary',
            path: '/observables'
          }
        ]
      },
      {
        id: '1_2',
        title: () => 'Western',
        path: '/observables',
        items: [
          {
            id: '1_1_1',
            title: () => 'Austria',
            path: '/observables'
          },
          {
            id: '1_1_2',
            title: () => 'Switzerland',
            path: '/observables'
          },
          {
            id: '1_1_3',
            title: () => 'Netherlands',
            path: '/observables'
          },
          {
            id: '1_1_4',
            title: () => 'Germany',
            path: '/observables'
          },
          {
            id: '1_1_5',
            title: () => 'UK',
            path: '/observables'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: () => 'Asia',
    items: [
      {
        id: '2_1',
        title: () => 'Russia',
        path: '/observables'
      },
      {
        id: '2_2',
        title: () => 'Turkey',
        path: '/observables'
      },
      {
        id: '2_3',
        title: () => 'Japan',
        path: '/observables'
      },
      {
        id: '2_4',
        title: () => 'China',
        path: '/observables'
      },
      {
        id: '2_5',
        title: () => 'India',
        path: '/observables'
      }
    ]
  },
  {
    id: '3',
    title: () => 'America',
    items: [
      {
        id: '3_1',
        title: () => 'Northern',
        items: [
          {
            id: '3_1_1',
            title: () => 'USA',
            path: '/observables'
          },
          {
            id: '3_1_2',
            title: () => 'Canada',
            path: '/observables'
          },

        ]
      },
      {
        id: '3_2',
        title: () => 'Central',
        items: [
          {
            id: '3_2_1',
            title: () => 'Mexico',
            path: '/observables'
          },
          {
            id: '3_2_2',
            title: () => 'Guatemala',
            path: '/observables'
          },
          {
            id: '3_2_3',
            title: () => 'Cuba',
            path: '/observables'
          },
          {
            id: '3_2_4',
            title: () => 'Panama',
            path: '/observables'
          }
        ]
      },
      {
        id: '3_3',
        title: () => 'Southern',
        items: [
          {
            id: '3_3_1',
            title: () => 'Brazil',
            path: '/observables'
          },
          {
            id: '3_3_2',
            title: () => 'Argentina',
            path: '/observables'
          },
          {
            id: '3_3_3',
            title: () => 'Equador',
            path: '/observables'
          },
          {
            id: '3_3_4',
            title: () => 'Peru',
            path: '/observables'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Antarctica',
    path: '/observables',
    disabled: true
  },
  {
    id: '5',
    title: 'Australia',
    path: '/observables'
  }
];
