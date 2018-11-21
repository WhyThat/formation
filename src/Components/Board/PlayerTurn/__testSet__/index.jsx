// @flow
import React from 'react';
import { PlayerTurn } from '..';


export default {
  componentName: 'Board/PlayerTurn',
  mutations: [
    {
      name: 'With name=player1',
      component: <PlayerTurn name="Player1" />,
    },
  ],
};
