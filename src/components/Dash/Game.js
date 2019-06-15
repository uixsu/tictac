import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSquareActions} from "../../actions";
import './Game.scss'

class Game extends Component {

  renderSquare = val => {
    const {squares} = this.props;
    return (
      <button id={val} className="square" onClick={() => this.setSquare(val)}>
        {squares[val]}
      </button>
    );
  };

  setSquare = id => {
    //console.log("set square " + id);
    const {char, setSquareActions} = this.props;
    setSquareActions(id,char)
  };

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({
    squares:state.game_data,
    char:state.user_char

  }),
  {setSquareActions}
)(Game);
