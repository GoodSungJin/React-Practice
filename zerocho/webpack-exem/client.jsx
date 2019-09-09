const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordsRelay');

ReactDom.render(<WordRelay/>, document.querySelector('#root'));