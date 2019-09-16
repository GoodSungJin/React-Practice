const React = require('react');
const { useState, useRef } = React;
const Try = require('./Try');


const NumberBaseball = () => {
  const [ value, setValue ] = useState('');
  const [ result, setResult ] = useState('');
  const [ tries, setTries ] = useState([]);

  const onSubmitForm = () => {

  };

  const onChangeInput = () => {

  };


  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value}
        onChange={onChangeInput}/>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        <Try value={tries}/>
      </ul>
    </>
  )
};

module.exports = NumberBaseball;