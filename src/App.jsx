import React from 'react';
import styled from 'react-emotion';
import { Board } from './Components/Board';
import { InformationsPanel } from './Components/InformationsPanel';
import { Title } from './Components/Title';

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridTemplateRows: '70px 1fr',
})

const TitleStyled = styled(Title)({
  gridRow: '1',
  gridColumn: '1 / span 2'
})

const BoardStyled = styled(Board)({
  gridRow: '2',
  gridColumn: '1'
})
const InformationsPanelStyled = styled(InformationsPanel)({
  gridRow: '2',
  gridColumn: '2'
})

const App = () => (
  <Grid>
    <TitleStyled />
    <BoardStyled />
    <InformationsPanelStyled />
  </Grid>
);

export default App;
