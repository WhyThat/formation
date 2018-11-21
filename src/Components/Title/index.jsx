import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

const TitleStyled = styled('div')({
  alignItems: 'center',
  display: 'flex',
  fontSize: '4em',
  justifyContent: 'center',
  height: '100%',
})

export const Title = ({ className }) => <TitleStyled className={className}>TIC TAC TOE</TitleStyled>

Title.propTypes = {
  className: PropTypes.string,
}

Title.defaultProps = {
  className: '',
}
