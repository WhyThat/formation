import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';


const GameBoard = styled('div')({
	display: 'grid',
	gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
	height: '600px',
	width: '600px',
  backgroundColor: '#34495e',
  border: '6px solid #2c3e50',
  borderRadius: '10px',
  color: '#fff',

})

const BoardCell = styled('button')( {
  alignItems: 'center',
  backgroundColor: '#34495e',
  border: '6px solid #2c3e50',
  borderRadius: '2px',
  color: '#fff',
  display: 'flex',
  fontSize: '4em',
  fontWeight: 'bold',
  justifyContent: 'center',
})

export const GameGrid = ({ grid }) => {
  // eslint-disable-next-line react/no-array-index-key
  const borderCells = grid.map((symbol, index) => <BoardCell key={`${symbol}${index}`}>{symbol}</BoardCell>)
  return <GameBoard>{borderCells}</GameBoard>
}

GameGrid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.string),
}

GameGrid.defaultProps = {
  grid: [
    '', '', '',
    '', '', '',
    '', '', '',
  ]
}
