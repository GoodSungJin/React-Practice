import { useSelector } from 'react-redux';

const useCounter = () => {
  const count = useSelector(state => state.counter);
  return count;
};

export default useCounter;