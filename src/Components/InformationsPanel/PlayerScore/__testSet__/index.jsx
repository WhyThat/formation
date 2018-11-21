// @flow
import React from 'react';
import { PlayerScore } from '..';


export default {
  componentName: 'InformationsPanel/PlayerScore',
  mutations: [
    {
      name: 'Without props',
      component: <PlayerScore />,
    },
    {
      name: 'With name and symbol',
      component: <PlayerScore name='Player 1' symbol='❌' />,
    },
    {
      name: 'With all props',
      component: <PlayerScore name='Player 2' symbol='💚' score={5} />,
    },
  ],
};
