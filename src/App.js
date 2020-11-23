import React, { useState } from "react";
import Block from "./Components/Block";
import Main from "./Components/Main";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [currentExpression, setCurrentExpression] = useState("0");
  const [result, setResult] = useState(false);
  const operations = "+-x/%.";

  console.log(currentExpression);
  const evaluateExpression = () => {
    setResult(true);
    setCurrentExpression(
      String(evaluate(currentExpression.replaceAll("x", "*")))
    );
  };

  const handleExpression = (value) => {
    console.log(result);

    const last = currentExpression[currentExpression.length - 1];
    if (operations.includes(last) && operations.includes(value)) {
      return;
    }
    if (value === "c") {
      setCurrentExpression("0");
    } else if (value === "del") {
      if (result) {
        console.log("in the result");
        setCurrentExpression("0");
      }
      if (currentExpression.length === 1) {
        setCurrentExpression("0");
      } else {
        setCurrentExpression(currentExpression.slice(0, -1));
      }
    } else {
      if (currentExpression === "0") {
        setCurrentExpression(value);
      } else {
        setCurrentExpression(currentExpression + value);
      }
    }
    setResult(false);
  };
  const style = {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#eb4034",
  };

  const contianerStyle = {
    position: "relative",
    borderRadius: "10px 10px 10px 10px",
    top: "15%",
    left: "42%",
    height: "370px",
    width: "300px",
    boxShadow: "8px 0px 40px black",
  };
  return (
    <div style={style}>
      <div style={contianerStyle}>
        <Main>{currentExpression}</Main>
        <Block
          evaluate={evaluateExpression}
          handleExpression={handleExpression}
        />
      </div>
    </div>
  );
}

export default App;
