import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className ="App">
      <div className = "firstRow">
        <ActionButton name = "clear"/>
        <NumberButton number = "%"/>
      </div>
      <div className = "secondRow">
        <NumberButton number = "7"/>
        <NumberButton number = "8"/>
        <NumberButton number = "9"/>
        <NumberButton number = "X"/>
      </div>
      <div className = "thirdRow">
        <NumberButton number = "4"/>
        <NumberButton number = "5"/>
        <NumberButton number = "6"/>
        <NumberButton number = "-"/>
      </div>
      <div className = "fourthRow">
        <NumberButton number = "1"/>
        <NumberButton number = "2"/>
        <NumberButton number = "3"/>
        <NumberButton number = "+"/>
      </div>
      <div className = "fifthRow">
        <ActionButton name = "0"/>
        <NumberButton number = "="/>
      </div>
    </div>
  );
};

export default App;
