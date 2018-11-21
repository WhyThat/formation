// @flow
import React from 'react';
import { InformationsPanel } from '..';
import { player1, player2 } from './fixture';

export default {
  componentName: 'InformationsPanel',
  mutations: [
    {
      name: 'Default',
      component: <InformationsPanel player1={player1} player2={player2} />,
    },
  ],
};
