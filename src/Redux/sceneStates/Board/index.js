import { connect } from 'react-redux';
import { Board } from '../../../Components/Board';

const mapStateToProps = (state) => ({
  grid: state.sceneState.board.grid,
  playerTurnName: state.sceneState.board.playerTurnName,
})

export const BoardContainer = connect(mapStateToProps)(Board)
