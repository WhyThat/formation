import { connect } from 'react-redux';
import { InformationsPanel } from '../../../Components/InformationsPanel';

const mapStateToProps = (state) => ({
  player1: state.sceneState.informationPanel[0],
  player2: state.sceneState.informationPanel[1],
})

export const InformationsPanelContainer = connect(mapStateToProps)(InformationsPanel)
