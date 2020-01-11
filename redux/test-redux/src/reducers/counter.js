import * as types from '../actions/ActionTypes';
import { useSelector } from 'react-redux';

const initialState = {
  number: 0,
  value: 123
};

const counter = (state = initialState, action) => {
  switch(action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      }
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }
    default:
      return state
  }
};


// const useCounter = () => {
//   const count = useSelector(state => state.counter.)
// }


export default counter;