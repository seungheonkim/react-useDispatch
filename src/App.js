import React from 'react';
import './style.css';
// 1
import { useDispatch } from 'react-redux';
// 2
import { increase, decrease } from './index.js';

export default function App() {
  // 3
  const dispatch = useDispatch();
  console.log(dispatch);

  const plusNum = () => {
    // 4
    dispatch(increase());
  };

  const minusNum = () => {
    // 5
    dispatch(decrease());
  };

  return (
    <div className="container">
      <h1>{`Count: ${1}`}</h1>
      <div>
        <button className="plusBtn" onClick={plusNum}>
          +
        </button>
        <button className="minusBtn" onClick={minusNum}>
          -
        </button>
      </div>
    </div>
  );
}
