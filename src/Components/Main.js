import React from "react";

const Main = (props) => {
  const style = {
    width: "300px",
    height: "70px",
    position: "relative",
    backgroundColor: "#150540",
    color: "white",
    borderRadius: "10px 10px 0 0",
    overflow: "auto",
    textAllign: "right",
    border: "0",
    // boxShadow: "8px 0px 40px black",
    fontSize: "25px",
  };
  const contentStyle = {
    position: "absolute",
    bottom: "6px",
    right: "4px",
    fontSize: "30px",
  };
  const { children } = props;
  return (
    <div style={style}>
      <div style={contentStyle}> {children} </div>
    </div>
  );
};

export default Main;
