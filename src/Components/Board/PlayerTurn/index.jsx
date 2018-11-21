import propTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

const PlayerTurnBlock = styled('div')({
  fontSize: '2.5em',
})

const PlayerName = styled('span')({
  fontWeight: 800
})

export const PlayerTurn = ({ name }) => (
  <PlayerTurnBlock>
    Come on
    {' '}
    <PlayerName>{name}</PlayerName>
    , it
    {"'"}
    s your turn
  </PlayerTurnBlock>
)

PlayerTurn.propTypes = {
  name: propTypes.string,
}

PlayerTurn.defaultProps = {
  name: 'Player pas défini',
}
