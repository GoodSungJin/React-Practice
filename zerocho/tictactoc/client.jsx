const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const TicTacToc = require('./tictactoc');

const Hot = hot(TicTacToc);

ReactDom.render(<Hot />, document.querySelector('#root'));