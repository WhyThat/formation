/* eslint-disable jsx-a11y/accessible-emoji */
import propTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

const Block = styled('div')({
  fontSize: '1.2em',
  paddingBottom: '10px',
  paddingLeft: '5px',
  paddingRight: '5px',
  paddingTop: '10px',
  textAlign: 'center',
  width: '100%',
})

const PlayerName = styled('span')({
  fontWeight: 800,
  paddingLeft: '10px',
})

const Score = styled('span')({})
const PlayerSymbol = styled('span')({})

export const PlayerScore = ({ name, symbol, score }) => (
  <Block>
    <PlayerSymbol aria-label="Player's symbol" role="img" alt="PlayerSymbol">{symbol}</PlayerSymbol>
    <PlayerName>
      {name}
      {' '}
      :
      {' '}
    </PlayerName>
    <Score>{score}</Score>
  </Block>
)

export const playerShape = {
  name: propTypes.string,
  symbol: propTypes.string,
  score:  propTypes.number,
}

PlayerScore.propTypes = playerShape

PlayerScore.defaultProps = {
  score: 0,
  name: '',
  symbol: '',
}

