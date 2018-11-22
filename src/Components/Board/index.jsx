import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import { GameGrid } from './GameGrid';
import { PlayerTurn } from './PlayerTurn';

const BoardBlock = styled('div')({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  height: '100%',
})

export const Board = ({ className, playerTurnName, grid, onUserClick }) => (
  <BoardBlock className={className}>
    <PlayerTurn name={playerTurnName} />
    <GameGrid grid={grid} onUserClick={onUserClick} />
  </BoardBlock>
)

Board.propTypes = {
  className: PropTypes.string,
  playerTurnName: PropTypes.string,
  grid: PropTypes.arrayOf(PropTypes.string),
  onUserClick: PropTypes.func,
}

Board.defaultProps = {
  className: '',
  playerTurnName: PropTypes.string,
  grid: [
    '', '', '',
    '', '', '',
    '', '', '',
  ],
  onUserClick: Function.prototype,
}
