const React = require('react');

const Try = () => {
  return (
    this.props.value.map((item, idx) => {
      return (
        <li key={idx}>{item}</li>
      );
    })
  )
};

module.exports = Try;