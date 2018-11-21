import React from 'react';
import styled from 'react-emotion';

const PlayerTurnBlock = styled('div')({
  fontSize: '2.5em',
})

const PlayerName = styled('span')({
  fontWeight: 800
})

export const PlayerTurn = () => (
  <PlayerTurnBlock>
    Come on
    {' '}
    <PlayerName>Player1</PlayerName>
    , it
    {"'"}
    s your turn
  </PlayerTurnBlock>
)
