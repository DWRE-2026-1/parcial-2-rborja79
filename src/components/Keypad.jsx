import CalculatorButton from './CalculatorButton';

function Keypad({ 
  onDigit, 
  onOperator, 
  onDecimal, 
  onEquals, 
  onClear, 
  onBackspace, 
  onToggleSign, 
  onPercent 
}) {
  return (
    <div className="keypad">
      <div className="row">
        <CalculatorButton label="⌫" onClick={onBackspace} className="btn-function" />
        <CalculatorButton label="C" onClick={onClear} className="btn-clear" />
        <CalculatorButton label="%" onClick={onPercent} className="btn-function" />
        <CalculatorButton label="÷" onClick={() => onOperator('/')} className="btn-operator" />
      </div>
      <div className="row">
        <CalculatorButton label="7" onClick={() => onDigit('7')} />
        <CalculatorButton label="8" onClick={() => onDigit('8')} />
        <CalculatorButton label="9" onClick={() => onDigit('9')} />
        <CalculatorButton label="×" onClick={() => onOperator('*')} className="btn-operator" />
      </div>
      <div className="row">
        <CalculatorButton label="4" onClick={() => onDigit('4')} />
        <CalculatorButton label="5" onClick={() => onDigit('5')} />
        <CalculatorButton label="6" onClick={() => onDigit('6')} />
        <CalculatorButton label="−" onClick={() => onOperator('-')} className="btn-operator" />
      </div>
      <div className="row">
        <CalculatorButton label="1" onClick={() => onDigit('1')} />
        <CalculatorButton label="2" onClick={() => onDigit('2')} />
        <CalculatorButton label="3" onClick={() => onDigit('3')} />
        <CalculatorButton label="+" onClick={() => onOperator('+')} className="btn-operator" />
      </div>
      <div className="row">
        <CalculatorButton label="±" onClick={onToggleSign} className="btn-function" />
        <CalculatorButton label="0" onClick={() => onDigit('0')} className="btn-zero" />
        <CalculatorButton label="." onClick={onDecimal} />
        <CalculatorButton label="=" onClick={onEquals} className="btn-equals" />
      </div>
    </div>
  );
}

export default Keypad;
