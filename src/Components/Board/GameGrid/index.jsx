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

export const GameGrid = () => (
  <GameBoard>
    <BoardCell>1</BoardCell>
    <BoardCell>1</BoardCell>
    <BoardCell>1</BoardCell>
    <BoardCell>1</BoardCell>
    <BoardCell>1</BoardCell>
    <BoardCell>1</BoardCell>
    <BoardCell>1</BoardCell>
    <BoardCell>1</BoardCell>
    <BoardCell>1</BoardCell>
  </GameBoard>
)
