const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('최성진');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);


  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
    } else {
      setResult('땡');
      setValue('');
    }
    inputRef.current.focus();
  };

  // 함수 실행문으로 안만들어도 e.target을 받을 수 있음
  const onChangeInput = (e) => {
    setValue(e.target.value)
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} 
        onChange={onChangeInput}/>
        <button>입력!!!</button>
      </form>
      <div>{result}</div>
    </>
  )
};

// class WordRelay extends React.Component {
//   state = {
//     word: '제로초',
//     value: '',
//     result: ''
//   };

//   // Dom 요소를 담을 것
//   input;

//   onSubmitForm = (e) => {
//     e.preventDefault();
//     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       this.setState({
//         result: '딩동댕',
//         word: this.state.value,
//         value: ''
//       });
//     } else {
//       this.setState({
//         result: '땡',
//         value: ''
//       })
//     }
//     this.input.focus();
//   };

//   onChangeInput = (e) => {
//     this.setState({ value: e.target.value });
//   };

//   onRefInput = (c) => {
//     this.input = c
//   };

//   render() {
//     return (
//       <>
//         <div>{this.state.word}</div>
//         <form onSubmit={this.onSubmitForm}>
//           <input ref={this.onRefInput} value={this.state.value} 
//           onChange={this.onChangeInput}/>
//           <button>입력!!!</button>
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     )
//   }
// }

module.exports = WordRelay;