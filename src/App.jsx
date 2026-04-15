import { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';

function App() {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const isError = display === 'Error';

  const handleDigit = (digit) => {
    if (isError) {
      setDisplay(digit);
      return;
    }
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const handleOperator = (op) => {
    if (isError) return;
    
    const inputValue = parseFloat(display);
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator && !waitingForSecondOperand) {
      const result = calculate(firstOperand, inputValue, operator);
      if (result === 'Error') {
        setDisplay('Error');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
        return;
      }
      setDisplay(String(result));
      setFirstOperand(result);
    }
    setOperator(op);
    setWaitingForSecondOperand(true);
  };

  const handleDecimal = () => {
    if (isError) {
      setDisplay('0.');
      return;
    }
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleEquals = () => {
    if (operator === null || firstOperand === null || isError) return;
    
    const secondOperand = parseFloat(display);
    const result = calculate(firstOperand, secondOperand, operator);
    
    if (result === 'Error') {
      setDisplay('Error');
    } else {
      const formattedResult = Number.isInteger(result) 
        ? String(result) 
        : result.toFixed(8).replace(/\.?0+$/, '');
      setDisplay(formattedResult);
    }
    
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b === 0 ? 'Error' : a / b;
      default: return b;
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleBackspace = () => {
    if (isError) {
      setDisplay('0');
      return;
    }
    if (display.length === 1 || (display.length === 2 && display.startsWith('-'))) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const handleToggleSign = () => {
    if (isError || display === '0') return;
    if (display.startsWith('-')) {
      setDisplay(display.slice(1));
    } else {
      setDisplay('-' + display);
    }
  };

  const handlePercent = () => {
    if (isError) return;
    const value = parseFloat(display) / 100;
    const formattedValue = Number.isInteger(value) 
      ? String(value) 
      : value.toFixed(8).replace(/\.?0+$/, '');
    setDisplay(formattedValue);
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad
        onDigit={handleDigit}
        onOperator={handleOperator}
        onDecimal={handleDecimal}
        onEquals={handleEquals}
        onClear={handleClear}
        onBackspace={handleBackspace}
        onToggleSign={handleToggleSign}
        onPercent={handlePercent}
      />
    </div>
  );
}

export default App;
