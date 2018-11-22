import { connect } from 'react-redux';
import { InformationsPanel } from '../../../Components/InformationsPanel';

const mapStateToProps = (state) => ({
  player1: state.sceneState.informationPanel.player1,
  player2: state.sceneState.informationPanel.player2,
})

export const InformationsPanelContainer = connect(mapStateToProps)(InformationsPanel)
