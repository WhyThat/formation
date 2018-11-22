import { connect } from 'react-redux';
import { Board } from '../../../Components/Board';
import { boardActions } from './reducer';

const mapStateToProps = (state) => ({
  grid: state.sceneState.board.grid,
  playerTurnName: state.sceneState.board.playerTurnName,
})

const mapDispatchToProps = dispacth => ({
  onUserClick: (clickedIndex) => () => dispacth(boardActions.onUserClick(clickedIndex))
})

export const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)
