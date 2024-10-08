// src/Calculator.js
import React, { useState } from 'react';
import './App.css'; // For styling

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };


  const handleCalculate = () => {

    if(input==='')
    {
      setResult('Error');
      return;
    }
  
    try {
      
      const code =`return ${input}`;
      const func = new Function(code);
      const FuncObj=func();
      setResult(FuncObj);
     // Note: eval can be dangerous; use a proper parser for production
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <div className="display">
        
        <input type="text" className="input" value={input}></input>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
       
      </div>
    </div>
  );
};

export default Calculator;