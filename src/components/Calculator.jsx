import React, { useState } from "react";

function Calculator() {
  const [calculateResult, setcalculateResult] = useState("");
  let result = [];

  const handleClick = (value) => {
    setcalculateResult((prevValue) => prevValue + value);
  };

  const calculate = () => {
    try {
      const expression = calculateResult;
      const evaluatedResult = executeExpression(expression);
      setcalculateResult(evaluatedResult);
    } catch (error) {
      setcalculateResult("Error");
    }
  };

  const executeExpression = (expression) => {
    const operations = {
      "/": (a, b) => a / b,
      "*": (a, b) => a * b,
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    };

    const operationOrder = ["/", "*", "+", "-"];

    for (let currentOperator of operationOrder) {
      const [before, after] = expression.split(`${currentOperator}`);
      if (after !== undefined) {
        const operand1 = executeExpression(before);
        const operand2 = executeExpression(after);
        result = [operations[currentOperator](operand1, operand2)];
        expression = result[0].toString();
      }
    }

    return result.length > 0 ? result[0] : parseFloat(expression);
  };

  const clear = () => {
    setcalculateResult("");
  };

  return (
    <div className="container">
      <div>
        <div>
          <h1>Calculator</h1>
          <p>{result}</p>
          <input
            type="text"
            className="  mb-4 d-block "
            value={calculateResult}
            onChange={(e) => setcalculateResult(e.target.value)}
          />
          <button onClick={clear} className="btn btn-danger mb-2 ">
            C
          </button>
          <table>
            <tbody>
              <tr>
                <td>
                  <button
                    onClick={() => handleClick("7")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("8")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("9")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    9
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("/")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    /
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => handleClick("4")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("5")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("6")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    6
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("*")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => handleClick("1")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("2")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("3")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("-")}
                    className="btn btn-light btn-lg mb-2 w-100"
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => handleClick("0")}
                    className="btn btn-light btn-lg w-100"
                  >
                    0
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick(".")}
                    className="btn btn-light btn-lg w-100"
                  >
                    .
                  </button>
                </td>
                <td>
                  <button
                    onClick={calculate}
                    className="btn btn-light btn-lg w-100"
                  >
                    =
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClick("+")}
                    className="btn btn-light btn-lg w-100"
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
