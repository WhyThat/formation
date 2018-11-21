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

export const Board = ({ className }) => (
  <BoardBlock className={className}>
    <PlayerTurn />
    <GameGrid />
  </BoardBlock>
)

Board.propTypes = {
  className: PropTypes.string,
}

Board.defaultProps = {
  className: '',
}
