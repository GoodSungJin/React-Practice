const React = require('react');
const Td = require('./td');

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
   <tr>
     {Array(rowData.length).fill().map((tr, i) => <Td key={i} rowIndex={rowIndex} cellIndex={i} dispatch={dispatch} />)}
   </tr> 
  )
};

module.exports = Tr;