// @flow
import React from 'react';
import { GameGrid } from '..';

  const grid = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
  ]

export default {
  componentName: 'Board/GameGrid',
  mutations: [
    {
      name: 'default',
      component: <GameGrid />,
    },
    {
      name: 'With grid',
      component: <GameGrid grid={grid} />,
    },
  ],
};
