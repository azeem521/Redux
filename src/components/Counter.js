import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state=>state.counter);
  const toggleCounterHandler = () => {};

  const increamentHandler=()=>{
    dispatch({type:'INCREAMENT'})
  }

  const decreamentHandler=()=>{
    dispatch({type:'DECREAMENT'})
  }

  const increamentHandler5=()=>{
    dispatch({type:'INCREAMENT5'})
  }

  const decreamentHandler5=()=>{
    dispatch({type:'DECREAMENT5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={increamentHandler}>increament</button>
      <button onClick={decreamentHandler}>decreament</button>
      <button onClick={increamentHandler5}>increamentBy5</button>
      <button onClick={decreamentHandler5}>decreamentBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
