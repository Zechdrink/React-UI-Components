import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className ="App">
    <CalculatorDisplay/>
    <div className = "allRows">
      <div className = "firstRow">
        <ActionButton name = "clear" color = "white"/>
        <NumberButton number = "%" color ="red"/>
      </div>
      <div className = "secondRow">
        <NumberButton number = "7" color = "white"/>
        <NumberButton number = "8" color = "white"/>
        <NumberButton number = "9" color = "white"/>
        <NumberButton number = "X" color ="red"/>
      </div>
      <div className = "thirdRow">
        <NumberButton number = "4" color = "white"/>
        <NumberButton number = "5" color = "white"/>
        <NumberButton number = "6" color = "white"/>
        <NumberButton number = "-" color ="red"/>
      </div>
      <div className = "fourthRow">
        <NumberButton number = "1" color = "white"/>
        <NumberButton number = "2" color = "white"/>
        <NumberButton number = "3" color = "white"/>
        <NumberButton number = "+" color ="red"/>
      </div>
      <div className = "fifthRow">
        <ActionButton name = "0" color = "white"/>
        <NumberButton number = "=" color ="red"/>
      </div>
      </div>
    </div>
  );
};

export default App;
