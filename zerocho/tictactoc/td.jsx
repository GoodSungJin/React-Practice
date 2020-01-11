const React = require('react');
const { useCallback } = require('react');

import { CLICK_CELL, CHANGE_TURN } from './tictactoc';

const Td = ({ rowIndex, cellIndex, dispatch }) => {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell, cellIndex});
    dispatch({ type: CHANGE_TURN, })
  }, []);

  return (
    <td onClick={onClickTd}>
      {''}
    </td>
  )
};

module.exports = Td;