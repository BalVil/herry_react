import { useState } from 'react';
import style from './style.module.scss';

const Counter = () => {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const decrement = () => setValue(prev => prev - step);
  const increment = () => setValue(prev => prev + step);

  const handleStepChange = e => {
    setStep(Number(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div className={style.counter}>
      <CounterBody value={value} decrement={decrement} increment={increment} />

      <select onChange={handleStepChange} value={step}>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

const CounterBody = ({ value, decrement, increment }) => (
  <>
    <button onClick={decrement}>-</button>
    <span>{value}</span>
    <button onClick={increment}>+</button>
  </>
);

export default Counter;
