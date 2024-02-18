import Calculator from "./code/Calculator"
import './App.css';
import './code/Calculator.css'

function App() {
  let calc = new Calculator();

  return (
      <div className="Main">
        {calc.renderCalculator()}
      </div>
  );
}

export default App;
