import "./App.css";
import { useState } from "react";
import { FaEquals } from "react-icons/fa";

function App() {
  const [equationArr, setEquationArr] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const sign = "-";
  const [calcAnswer, setCalcAnswer] = useState("");
  let equation = equationArr.join("").toString();
  let clickNumBtn = (event) => {
    setEquationArr([...(equationArr.join("") + event.target.innerText)]);
    setDisabled(false);
  };

  let clickOpBtn = (event) => {
    if (
      /[+-/*]/.test(event.target.innerText) &&
      /[+-/*]/.test(equationArr[equationArr.length - 1])
    ) {
      setCalcAnswer("Error");
    } else {
      setEquationArr([...(equationArr.join("") + event.target.innerText)]);
      setCalcAnswer(Math.floor(eval(equation)));
    }
  };

  let invertSign = () => {
    if (equationArr[0].charAt(0) === "-") {
      setEquationArr([equationArr.join("").substring(1)]);
    } else {
      setEquationArr([sign + equationArr.join("")]);
    }
  };

  let percentCalc = () => {
    if (equationArr.length === 0) {
      setCalcAnswer("Error");
    } else {
      setEquationArr([...equationArr]);
      setCalcAnswer(eval(equation) / 100);
    }
  };

  return (
    <div className="background">
      <div className="calc-container">
        <div className="answer-con">
          <FaEquals className="answer-equal" />
          <h2 className="answer">{calcAnswer}</h2>
        </div>
        <div className="equation-con">
          <p className="equation">{equation}</p>
        </div>
        <div className="btn-calc-con">
          <button
            onClick={() => {
              setEquationArr([]);
              setCalcAnswer();
            }}
            className="non-number"
          >
            {" "}
            CE
          </button>
          <button onClick={invertSign} className="non-number">
            +/-
          </button>
          <button onClick={percentCalc} className="non-number">
            %
          </button>
          <button
            disabled={disabled}
            onClick={clickOpBtn}
            className="non-number"
          >
            /
          </button>
          <button onClick={clickNumBtn} className="number">
            7
          </button>
          <button onClick={clickNumBtn} className="number">
            8
          </button>
          <button onClick={clickNumBtn} className="number">
            9
          </button>
          <button
            disabled={disabled}
            onClick={clickOpBtn}
            className="non-number"
          >
            *
          </button>
          <button onClick={clickNumBtn} className="number">
            4
          </button>
          <button onClick={clickNumBtn} className="number">
            5
          </button>
          <button onClick={clickNumBtn} className="number">
            6
          </button>
          <button
            disabled={disabled}
            onClick={clickOpBtn}
            className="non-number"
          >
            -
          </button>
          <button onClick={clickNumBtn} className="number">
            1
          </button>
          <button onClick={clickNumBtn} className="number">
            2
          </button>
          <button onClick={clickNumBtn} className="number">
            3
          </button>
          <button
            disabled={disabled}
            onClick={clickOpBtn}
            className="non-number plus-sign"
          >
            +
          </button>
          <button onClick={clickNumBtn} className="number">
            0
          </button>
          <button onClick={clickNumBtn} className="number">
            .
          </button>
          <button
            onClick={() => {
              setCalcAnswer(eval(equation));
            }}
            className="non-number"
            id="equal-sign"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
