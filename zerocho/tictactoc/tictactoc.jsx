const React = require('react');
const { useState, useReducer, useCallback } = require('react');
const Table = require('./table');

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [['', '', ''],['', '', ''],['', '', '']],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
      };

    case CLICK_CELL: {
      const tableData = [...state.tableData];

      tableData[action.row] = [...tableData[action.row]]; // immer 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;

      return {
        ...state,
        tableData
      }
    }

    case SET_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O'
      }
    }
  }
};

const TicTacToc = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] = useState([['', '', ''],['', '', ''],['', '', '']]);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: 'O'});  // dispatch 내부는 객체(action이라 부른다.)
  }, [])

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch} />
      { state.winner && <div>{state.winner}님의 승리</div>}
    </>
  )
}

module.exports = TicTacToc;