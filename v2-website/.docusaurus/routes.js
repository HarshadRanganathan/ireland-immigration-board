import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '237'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '048'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'bf8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '412'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '52a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '27a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'fe1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'bd9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '408'),
    routes: [
      {
        path: '/docs/citizenship',
        component: ComponentCreator('/docs/citizenship', '5b9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/cost-of-living',
        component: ComponentCreator('/docs/cost-of-living', '034'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/covid-19-test',
        component: ComponentCreator('/docs/covid-19-test', 'e1c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/critical-skills',
        component: ComponentCreator('/docs/critical-skills', '6e1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/irp',
        component: ComponentCreator('/docs/irp', '22f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/pros-cons-of-living-in-ireland',
        component: ComponentCreator('/docs/pros-cons-of-living-in-ireland', '6f6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/stamps',
        component: ComponentCreator('/docs/stamps', '545'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/transit-visa',
        component: ComponentCreator('/docs/transit-visa', '380'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/visas',
        component: ComponentCreator('/docs/visas', 'aee'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '59e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
