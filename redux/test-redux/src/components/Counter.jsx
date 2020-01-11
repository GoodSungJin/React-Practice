import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Value from './Value'
import Control from './Control'
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';

import * as actions from '../actions';
import useCounter from '../hooks/useCounter.ts';

const propTypes = {
  prop: PropTypes
}

const Counter = () => {


  return (
    <div>
      {console.log(useCounter())}
      <input/>
    </div>
  )
}

Control.propTypes = propTypes;

// const mapStateToProps = (state) => {
//   return {
//     number: state.counter.number,
//     color: state.ui.color
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   // return bindActionCreators(action, dispatch);
//   return {
//     handleIncrement: () => { dispatch(actions.increment())},
//     handleDecrement: () => { dispatch(actions.decrement())},
//     handleSetColor: (color) => { dispatch(actions.setColor(color))}
//   }
// };

export default Counter;