const React = require('react');
const { useState, useRef } = React;
const Try = require('./Try');


const NumberBaseball = () => {
  const [ value, setValue ] = useState('');
  const [ result, setResult ] = useState('');
  const [ tries, setTries ] = useState(['가', '나', '다', '라', '마']);

  const [count, setCount] = useState(0);

  const shouldComponentUpdate = (nextProps, nextState, nextContext) => {
     if (value !== nextState.value) return true;
     return false;
  };

  const onSubmitForm = () => {

  };

  const onChangeInput = (e) => {
    setValue();
  };

  const increase = () => {
    setCount(1);
  };


  return (
    <>
    {console.log('렌더링됨')}
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value}
        onChange={onChangeInput}/>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        <Try arr={tries} />
      </ul>
      <button onClick={increase}>클릭</button>
    </>
  )
};

module.exports = NumberBaseball;