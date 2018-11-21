import React from 'react';
import { Board } from './Components/Board';
import { InformationsPanel } from './Components/InformationsPanel';
import { Title } from './Components/Title';

const App = () => (
  <div>
    <Title />
    <Board />
    <InformationsPanel />
  </div>
);

export default App;
