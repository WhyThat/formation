import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import { PlayerScore, playerShape } from './PlayerScore';
import { player1 as defaultPlayer1, player2 as defaultPlayer2 } from './__testSet__/fixture';

const InformationsPanelBlock = styled('div')({
  border: '1px solid black',
  maxWidth: '250px',
})

const TitleBlock = styled('div')({
  borderBottom: '1px solid black',
  paddingBottom: '10px',
  paddingTop: '10px',
  textAlign: 'center',
  width: '100%',
})

export const InformationsPanel = ({ className, player1, player2 }) => (
  <InformationsPanelBlock className={className}>
    <TitleBlock>SCORES</TitleBlock>
    <PlayerScore name={player1.name} score={player1.score} symbol="❌" />
    <PlayerScore name={player2.name} score={player2.score} symbol="💚" />
  </InformationsPanelBlock>
)



InformationsPanel.propTypes = {
  className: PropTypes.string,
  player1: PropTypes.shape(playerShape),
  player2: PropTypes.shape(playerShape),
}

InformationsPanel.defaultProps = {
  className: '',
  player1: defaultPlayer1,
  player2: defaultPlayer2,
}
