import React from 'react';
import styled from 'react-emotion';
import { Provider } from 'react-redux';
import { InformationsPanel } from './Components/InformationsPanel';
import { Title } from './Components/Title';
import { store } from './Redux/createStore';
import { BoardContainer } from './Redux/sceneStates/Board';

const AppGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridTemplateRows: '70px 1fr',
})

const TitleStyled = styled(Title)({
  gridRow: '1',
  gridColumn: '1 / span 2'
})

const BoardStyled = styled(BoardContainer)({
  gridRow: '2',
  gridColumn: '1'
})
const InformationsPanelStyled = styled(InformationsPanel)({
  gridRow: '2',
  gridColumn: '2'
})

const App = () => (
  <Provider store={store}>
    <AppGrid>
      <TitleStyled />
      <BoardStyled />
      <InformationsPanelStyled />
    </AppGrid>
  </Provider>
);

export default App;
