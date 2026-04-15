function CalculatorButton({ label, onClick, className = '' }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default CalculatorButton;
