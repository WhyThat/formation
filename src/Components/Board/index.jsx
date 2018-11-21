import React from 'react';
import { GameGrid } from './GameGrid';
import { PlayerTurn } from './PlayerTurn';

export const Board = () => (
  <div>
    <PlayerTurn />
    <GameGrid />
  </div>
)
