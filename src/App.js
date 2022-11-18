import React, { useRef, useState } from "react";
import "./App.css";
import "./ImperialSys.css";

let heightValue;
let weightValue;
let resultValue;

function App() {
  const inputRef = useRef([]);
  const [value, setValue] = useState();
  const [isMetric, setIsMetric] = useState(true);
  function onHandleChange() {
    heightValue = inputRef.current[0].value;
    weightValue = inputRef.current[1].value;
  }

  const toggleIsMetric = () => {
    setIsMetric((current) => !current);
    setValue();
  };

  function calculator() {
    resultValue = isMetric
      ? parseFloat(weightValue / heightValue ** 2).toFixed(2)
      : (resultValue = parseFloat(
          (weightValue / heightValue ** 2) * 703
        ).toFixed(2));
    let bmiCategory;
    if (resultValue <= 18.5) {
      bmiCategory = "-UNDERWEIGHT";
    } else if (resultValue < 24.9) {
      bmiCategory = "-NORMAL WEIGHT";
    } else if (resultValue < 29.9) {
      bmiCategory = "-OVERWEIGHT";
    } else if (resultValue > 30) {
      bmiCategory = "-OBESE";
    }
    setValue(resultValue + bmiCategory);
  }

  let height = isMetric ? "m" : "in";
  let weight = isMetric ? "kg" : "lb";
  let system = isMetric ? "Switch to English" : "Switch to Metric";

  const InputField = () => (
    <>
      <input
        type="text"
        className={
          isMetric ? "inputFieldHeightMetric" : "inputFieldHeightEnglish"
        }
        ref={(ref) => (inputRef.current[0] = ref)}
        onChange={onHandleChange}
      ></input>
      <input
        type="text"
        className={
          isMetric ? "inputFieldWeightMetric" : "inputFieldWeightEnglish"
        }
        ref={(ref) => (inputRef.current[1] = ref)}
        onChange={onHandleChange}
      ></input>
    </>
  );

  return (
    <div className={isMetric ? "appMetric" : "appEnglish"}>
      <div className={isMetric ? "mainBoxMetric" : "mainBoxEnglish"}>
        <h1 className={isMetric ? "titleMetric" : "titleEnglish"}>
          BMI Calculator
        </h1>
        <div className={isMetric ? "innerBoxMetric" : "innerBoxEnglish"}>
          <InputField />
          <button
            className={isMetric ? "mainButtonMetric" : "mainButtonEnglish"}
            onClick={calculator}
          >
            Compute BMI
          </button>
          <button
            className={isMetric ? "heightButtonMetric" : "heightButtonEnglish"}
          >
            {height}
          </button>
          <button
            className={isMetric ? "weightButtonMetric" : "weightButtonEnglish"}
          >
            {weight}
          </button>
          <div className={isMetric ? "resultMetric" : "resultEnglish"}>
            Your BMI is:
          </div>
          <div className={isMetric ? "resultOneMetric" : "resultOneEnglish"}>
            {value}
          </div>
        </div>
        <button
          className={isMetric ? "metric" : "english"}
          onClick={toggleIsMetric}
        >
          {system}
        </button>
      </div>
    </div>
  );
}

export default App;
