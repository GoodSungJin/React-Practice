const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (+value === first * second) {
      setValue('');
      setResult(`${value} 정답!!`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      inputRef.current.focus();
    } else {
      setValue('');
      setResult('땡!!');
      inputRef.current.focus();
    }
  };

  const onChangeValue = (value) => {
    setValue(value);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div>{first} 곱하기 {second} 는?</div>
        <input type="number" value={value} ref={inputRef}
        onChange={(e) => { onChangeValue(e.target.value) }} />
        <button>제출</button>
        <div>{result}</div>
      </form>
    </>
  )
}

module.exports = GuGuDan;