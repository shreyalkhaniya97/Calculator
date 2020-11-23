import React from "react";
import "./block.scss";

const Block = (props) => {
  const { handleExpression, evaluate } = props;
  const handleClick = (e) => {
    const { value } = e.target;
    switch (value) {
      case "=":
        evaluate();
        break;
      default:
        handleExpression(value);
        break;
    }
  };
  return (
    <div className="function-container">
      <button onClick={handleClick} className="calFunction" value="c" name="">
        {"c"}
      </button>
      <button onClick={handleClick} className="calFunction" value="+/-" name="">
        {"+/-"}
      </button>
      <button onClick={handleClick} className="calFunction" value="%" name="">
        {"%"}
      </button>
      <button onClick={handleClick} className="calFunction" value="/" name="">
        {"/"}
      </button>
      <button onClick={handleClick} className="calFunction" value="7" name="">
        {"7"}
      </button>
      <button onClick={handleClick} className="calFunction" value="8" name="">
        {"8"}
      </button>
      <button onClick={handleClick} className="calFunction" value="9" name="">
        {"9"}
      </button>
      <button onClick={handleClick} className="calFunction" value="x" name="">
        {"x"}
      </button>
      <button onClick={handleClick} className="calFunction" value="4" name="">
        {"4"}
      </button>
      <button onClick={handleClick} className="calFunction" value="5" name="">
        {"5"}
      </button>
      <button onClick={handleClick} className="calFunction" value="6" name="">
        {"6"}
      </button>
      <button onClick={handleClick} className="calFunction" value="-" name="">
        {"-"}
      </button>
      <button onClick={handleClick} className="calFunction" value="3" name="">
        {"3"}
      </button>
      <button onClick={handleClick} className="calFunction" value="2" name="">
        {"2"}
      </button>
      <button onClick={handleClick} className="calFunction" value="1" name="">
        {"1"}
      </button>
      <button onClick={handleClick} className="calFunction" value="+" name="">
        {"+"}
      </button>
      <button onClick={handleClick} className="calFunction" value="0" name="">
        {"0"}
      </button>
      <button onClick={handleClick} className="calFunction" value="." name="">
        {"."}
      </button>
      <button onClick={handleClick} className="calFunction" value="del" name="">
        &larr;
      </button>
      <button onClick={handleClick} className="calFunction" value="=" name="">
        {"="}
      </button>
    </div>
  );
};

export default Block;
