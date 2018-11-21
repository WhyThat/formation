// @flow
import React from 'react';
import { PlayerTurn } from '..';


export default {
  componentName: 'Board/PlayerTurn',
  mutations: [
    {
      name: 'Default',
      component: <PlayerTurn />,
    },
  ],
};
