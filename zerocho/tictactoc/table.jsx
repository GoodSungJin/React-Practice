const React = require('react');
const Tr = require('./tr');

const Table = ({ onClick, tableData, dispatch }) => {
  return (
    <table onClick={onClick}>
      <tbody>
        {Array(tableData.length).fill().map((tr, i) => <Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch}/>)}
      </tbody>
    </table>
  )
};

module.exports = Table;