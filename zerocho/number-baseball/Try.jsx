const React = require('react');

const Try = (props) => {
  return (
    <>
      {
        props.arr.map((item, idx) => {
          return (
            <li key={item + idx}>{item}</li>
          );
        })
      }
    </>
  )
};

module.exports = Try;