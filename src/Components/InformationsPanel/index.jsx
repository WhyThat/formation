import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import { PlayerScore } from './PlayerScore';

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

export const InformationsPanel = ({ className }) => (
  <InformationsPanelBlock className={className}>
    <TitleBlock>SCORES</TitleBlock>
    <PlayerScore />
    <PlayerScore />
  </InformationsPanelBlock>
)

InformationsPanel.propTypes = {
  className: PropTypes.string,
}

InformationsPanel.defaultProps = {
  className: '',
}
