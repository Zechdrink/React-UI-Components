import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className ="App">
      <div className = "firstRow">
        <NumberButton number = "7"/>
        <NumberButton number = "8"/>
        <NumberButton number = "9"/>
        <NumberButton number = "X"/>
      </div>
      <div className = "secondRow">
        <NumberButton number = "4"/>
        <NumberButton number = "5"/>
        <NumberButton number = "6"/>
        <NumberButton number = "-"/>
      </div>
      <div className = "thirdRow">
        <NumberButton number = "1"/>
        <NumberButton number = "2"/>
        <NumberButton number = "3"/>
        <NumberButton number = "+"/>
      </div>
    </div>
  );
};

export default App;
