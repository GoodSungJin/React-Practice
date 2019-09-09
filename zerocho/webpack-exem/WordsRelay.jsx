const React = require('react');

class WordRelay extends React.Component {
  state = {
    text: 'Hello, WebPack'
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.text}</h1>
      </React.Fragment>
    )
  }
}

module.exports = WordRelay;