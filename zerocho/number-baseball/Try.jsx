import React, { memo } from 'react';

const Try = memo((props) => {
  return (
    <>
      {props.arr.map((item, idx) => {
        return (
          <li key={item + idx}>{item}</li>
        );
      })}
    </>
  )
});

module.exports = Try;