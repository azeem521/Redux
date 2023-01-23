import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state=>state.counter.counter);
  const toggle=useSelector(state=>state.counter.showToggle);
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };

  const increamentHandler=()=>{
    dispatch(counterAction.increament())
  }

  const decreamentHandler=()=>{
    dispatch(counterAction.decreament())
  }

  const increamentHandler5=()=>{
    dispatch(counterAction.increase(5));
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={increamentHandler}>increament</button>
      <button onClick={decreamentHandler}>decreament</button>
      <button onClick={increamentHandler5}>increamentBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
